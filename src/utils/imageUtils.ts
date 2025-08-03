import { ImageDimensions } from '../types';

export const calculateAspectRatio = (width: number, height: number): number => {
  return width / height;
};

export const calculateOptimalDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight: number
): ImageDimensions => {
  const aspectRatio = calculateAspectRatio(originalWidth, originalHeight);
  
  let width = originalWidth;
  let height = originalHeight;
  
  // If image is wider than container
  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }
  
  // If image is taller than container
  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }
  
  return {
    width: Math.round(width),
    height: Math.round(height),
    aspectRatio
  };
};

export const getImageDimensions = (imageUrl: string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: calculateAspectRatio(img.naturalWidth, img.naturalHeight)
      });
    };
    img.onerror = reject;
    img.src = imageUrl;
  });
};

export const calculateOptimalDimensionsFromLoadedImage = (
  imageElement: HTMLImageElement,
  maxWidth: number,
  maxHeight: number
): ImageDimensions => {
  const originalWidth = imageElement.naturalWidth;
  const originalHeight = imageElement.naturalHeight;
  
  return calculateOptimalDimensions(originalWidth, originalHeight, maxWidth, maxHeight);
}; 