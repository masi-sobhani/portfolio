const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputDirs = [
  'public/paintings', 
  'public/photos'
];

const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png'];

// Recursively find all image files
const findImageFiles = (dir) => {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    console.log(`Directory does not exist: ${dir}`);
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      const subFiles = findImageFiles(fullPath);
      files.push(...subFiles);
    } else {
      // Check if it's a supported image file
      const ext = path.extname(item).toLowerCase();
      if (SUPPORTED_EXT.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
};

// Process a single file with FFmpeg
const processFile = (filePath, baseDir) => {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).toLowerCase();
  
  // Create relative path from base directory
  const relativePath = path.relative(baseDir, filePath);
  const relativeDir = path.dirname(relativePath);
  
  // Create output directory structure
  const outputSubDir = path.join(baseDir, 'optimized', relativeDir);
  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }
  
  const outputFileName = path.basename(fileName, ext) + '.webp';
  const outputPath = path.join(outputSubDir, outputFileName);

  try {
    // FFmpeg command for optimization
    const ffmpegCmd = [
      'ffmpeg',
      '-i', `"${filePath}"`,
      '-vf', 'scale=1600:-1:flags=lanczos',
      '-c:v', 'libwebp',
      '-quality', '85',
      '-preset', 'photo',
      `"${outputPath}"`,
      '-y'
    ].join(' ');
    
    console.log(`Processing: ${relativePath} -> ${path.join(relativeDir, outputFileName)}`);
    
    execSync(ffmpegCmd, { stdio: 'pipe' });
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(filePath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = Math.round((originalSize - optimizedSize) * 100 / originalSize);
    
    console.log(`✅ Optimized: ${relativePath} -> ${path.join(relativeDir, outputFileName)}`);
    console.log(`   Original: ${originalSize} bytes, Optimized: ${optimizedSize} bytes`);
    console.log(`   Reduction: ${reduction}%`);
    
    return { success: true, originalSize, optimizedSize, reduction };
  } catch (err) {
    console.error(`❌ Error optimizing ${relativePath}:`, err.message);
    return { success: false, error: err.message };
  }
};

// Main optimization function
const optimizeImages = async () => {
  console.log('🚀 Starting FFmpeg Image Optimization...\n');
  
  let totalProcessed = 0;
  let totalSuccess = 0;
  let totalErrors = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const inputDir of inputDirs) {
    console.log(`📁 Processing directory: ${inputDir}`);
    
    const imageFiles = findImageFiles(inputDir);
    console.log(`Found ${imageFiles.length} image files in ${inputDir}`);
    
    if (imageFiles.length === 0) {
      console.log(`No images found in ${inputDir}\n`);
      continue;
    }
    
    for (const filePath of imageFiles) {
      const result = processFile(filePath, inputDir);
      totalProcessed++;
      
      if (result.success) {
        totalSuccess++;
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.optimizedSize;
      } else {
        totalErrors++;
      }
    }
    
    console.log('');
  }
  
  // Generate summary
  console.log('📊 Optimization Summary');
  console.log('======================');
  console.log(`Total files processed: ${totalProcessed}`);
  console.log(`Successfully optimized: ${totalSuccess}`);
  console.log(`Errors: ${totalErrors}`);
  
  if (totalSuccess > 0) {
    const totalReduction = Math.round((totalOriginalSize - totalOptimizedSize) * 100 / totalOriginalSize);
    console.log(`\n📈 Size Reduction Summary:`);
    console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized total size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total reduction: ${totalReduction}%`);
    console.log(`Space saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
  }
  
  console.log('\n🎉 Optimization complete!');
  console.log('\nOptimization Settings:');
  console.log('- Format: WebP');
  console.log('- Quality: 85%');
  console.log('- Max Width: 1600px');
  console.log('- Resize Method: Lanczos');
  console.log('- Preset: Photo');
};

// Check if FFmpeg is available
const checkFFmpeg = () => {
  try {
    execSync('ffmpeg -version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error('❌ FFmpeg is not installed or not available in PATH');
    console.error('Please install FFmpeg to use this script');
    console.error('Ubuntu/Debian: sudo apt install ffmpeg');
    console.error('macOS: brew install ffmpeg');
    console.error('Windows: Download from https://ffmpeg.org/download.html');
    return false;
  }
};

// Run the optimization
if (checkFFmpeg()) {
  optimizeImages().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
} else {
  process.exit(1);
}