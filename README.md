# Masi Gallery

A modern, responsive photography and painting gallery built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Perfect for mobile and tablet devices
- **Cross-Browser**: Works on all modern browsers

### 🎨 Gallery Features
- **Painting Collections**: Browse curated painting collections
- **Photo Gallery**: Responsive photo grid with fullscreen view
- **Smooth Animations**: Framer Motion powered transitions
- **Lazy Loading**: Optimized performance with lazy loading

### 🚀 Performance Optimizations
- **Code Splitting**: Lazy-loaded components
- **Image Optimization**: Progressive image loading
- **Memory Efficient**: Optimized for smooth performance
- **SEO Friendly**: Proper meta tags and structure

## 🛠️ Technologies Used

- **React 19**: Latest React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **React Router**: Client-side routing
- **Swiper**: Touch slider for paintings
- **Lucide React**: Beautiful icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/masi-sobhani/portfolio.git
   cd masi-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save the settings

3. **Deploy automatically**
   ```bash
   npm run deploy
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
masi-gallery/
├── public/                 # Static assets
│   ├── paintings/         # Painting images
│   └── photos/           # Photography images
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── PaintCollectionDetail.tsx
│   │   ├── About.tsx
│   │   ├── Resume.tsx
│   │   └── LoadingSpinner.tsx
│   ├── data/            # Data files
│   │   ├── paintingCollections.ts
│   │   └── photographyCollections.ts
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript types
├── .github/workflows/   # GitHub Actions
└── docs/               # Documentation
```

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Live Demo

Visit the live application: [Masi Gallery](https://masi-sobhani.github.io/portfolio)

## 📱 Pages

- **Home** (`/`) - Painting collections
- **Photos** (`/photos`) - Photography gallery
- **About** (`/about`) - Personal information
- **Resume** (`/resume`) - Professional experience

## 🔧 Configuration

### Environment Variables
- `PUBLIC_URL` - Base URL for assets (auto-configured for GitHub Pages)

### Build Configuration
- Optimized for production
- Minified and compressed
- Service worker ready
- PWA compatible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
