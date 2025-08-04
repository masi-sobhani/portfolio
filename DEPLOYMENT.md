# Deployment Guide - GitHub Pages

This guide will help you deploy your Masi Gallery to GitHub Pages.

## 🚀 Quick Deployment

### Step 1: Prepare Your Repository

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/masi-sobhani/portfolio.git
   git push -u origin main
   ```

### Step 2: Configure GitHub Pages

1. **Go to your repository settings**
   - Navigate to `Settings` → `Pages`

2. **Configure deployment source**
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`

3. **Save the settings**

### Step 3: Deploy

1. **Install gh-pages (if not already installed)**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Wait for deployment**
   - GitHub will build and deploy your site
   - Check the Actions tab for deployment status

## 🔧 Manual Deployment

### Build the Project

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📋 Configuration Files

### package.json
```json
{
  "homepage": "https://masi-sobhani.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### GitHub Actions (.github/workflows/deploy.yml)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, develop ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
        publish_branch: gh-pages
```

## 🌐 Custom Domain (Optional)

1. **Add a CNAME file**
   ```bash
   echo "your-domain.com" > public/CNAME
   ```

2. **Configure DNS**
   - Add CNAME record pointing to `username.github.io`

3. **Update homepage in package.json**
   ```json
   {
     "homepage": "https://your-domain.com"
   }
   ```

## 🔍 Troubleshooting

### Common Issues

1. **404 Errors**
   - Ensure `homepage` field is correct in package.json
   - Check that the repository name matches the URL

2. **Build Failures**
   - Check GitHub Actions logs
   - Ensure all dependencies are installed
   - Verify TypeScript compilation

3. **Images Not Loading**
   - Ensure image paths are relative to public folder
   - Check that images are committed to the repository

4. **Routing Issues**
   - GitHub Pages doesn't support client-side routing by default
   - Consider using HashRouter instead of BrowserRouter

### Debugging Steps

1. **Check build output**
   ```bash
   npm run build
   ```

2. **Test locally**
   ```bash
   npx serve -s build
   ```

3. **Check GitHub Actions**
   - Go to Actions tab in your repository
   - Check for build/deployment errors

4. **Verify deployment**
   - Check the gh-pages branch
   - Ensure all files are present

## 📱 Performance Optimization

### Before Deployment

1. **Optimize images**
   ```bash
   # Use tools like ImageOptim or TinyPNG
   # Compress images without losing quality
   ```

2. **Minimize bundle size**
   ```bash
   npm run build
   # Check build size in terminal output
   ```

3. **Enable compression**
   - GitHub Pages automatically serves gzipped files
   - Ensure your build includes compression

### Post-Deployment

1. **Test on different devices**
   - Mobile, tablet, desktop
   - Different browsers

2. **Check Core Web Vitals**
   - Use Lighthouse in Chrome DevTools
   - Optimize based on recommendations

3. **Monitor performance**
   - Use Google PageSpeed Insights
   - Monitor real user metrics

## 🔄 Continuous Deployment

### Automatic Deployment

The GitHub Actions workflow will automatically deploy when you push to main or develop branches.

### Manual Deployment

```bash
# Make changes
git add .
git commit -m "Update gallery"
git push origin main

# Deploy manually (if needed)
npm run deploy
```

## 📊 Monitoring

### GitHub Pages Analytics

1. **Enable GitHub Pages analytics**
   - Go to repository settings
   - Navigate to Pages section
   - Enable analytics

### Custom Analytics

1. **Google Analytics**
   ```html
   <!-- Add to public/index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Custom tracking**
   - Track page views
   - Monitor user interactions
   - Analyze performance

## 🛡️ Security

### Best Practices

1. **Environment variables**
   - Don't commit sensitive data
   - Use GitHub Secrets for API keys

2. **Content Security Policy**
   - Add CSP headers
   - Restrict resource loading

3. **HTTPS only**
   - GitHub Pages serves over HTTPS
   - Ensure all resources use HTTPS

## 📞 Support

If you encounter issues:

1. **Check GitHub Pages documentation**
2. **Review GitHub Actions logs**
3. **Test locally first**
4. **Check browser console for errors**

---

**Your Masi Gallery will be live at: https://masi-sobhani.github.io/portfolio** 