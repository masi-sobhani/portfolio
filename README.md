# Masi Gallery - Artistic Image Gallery

A beautiful, responsive React TypeScript gallery application featuring high-quality image display with optimal aspect ratio calculations and smooth animations.

## Features

### 🎨 Artistic Design
- Beautiful gradient backgrounds with glassmorphism effects
- Smooth animations using Framer Motion
- Responsive design for both desktop and mobile
- Artistic typography and modern UI elements

### 🖼️ Image Gallery
- **Swiper Integration**: Smooth image carousel with navigation
- **Aspect Ratio Calculation**: Automatic image resizing based on original dimensions
- **High-Quality Display**: Optimized for best image quality
- **Fullscreen Mode**: Immersive viewing experience
- **Keyboard Navigation**: Support for arrow keys and ESC

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized performance across devices

### 🚀 Performance Features
- Lazy loading for images
- Optimized image dimensions
- Smooth transitions and animations
- Efficient state management

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd masi-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Collections.tsx      # Main collections grid
│   └── CollectionDetail.tsx # Individual collection view
├── data/
│   └── sampleData.ts        # Sample gallery data
├── types/
│   └── index.ts            # TypeScript interfaces
├── utils/
│   └── imageUtils.ts       # Image calculation utilities
├── App.tsx                 # Main app component
├── App.css                 # Main styles
└── index.tsx              # App entry point
```

## Key Technologies

- **React 18** with TypeScript
- **React Router** for navigation
- **Swiper** for image carousel
- **Framer Motion** for animations
- **Lucide React** for icons
- **CSS3** with modern features (backdrop-filter, gradients)

## Features in Detail

### Collections View
- Grid layout of art collections
- Hover animations and smooth transitions
- Responsive design with auto-fit grid
- Beautiful card design with glassmorphism

### Collection Detail View
- Swiper carousel for paintings
- Fullscreen mode with ESC key support
- Back navigation button
- Painting information overlay
- Keyboard navigation support

### Image Optimization
- Automatic aspect ratio calculation
- Responsive image sizing
- High-quality image display
- Lazy loading for performance

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## Customization

### Adding New Collections
Edit `src/data/sampleData.ts` to add new collections:

```typescript
{
  id: 'your-collection-id',
  name: 'Collection Name',
  description: 'Collection description',
  coverImageUrl: 'path/to/cover-image.jpg',
  originalWidth: 800,
  originalHeight: 600,
  paintings: [
    // Add paintings here
  ]
}
```

### Styling
- Main styles are in `src/App.css`
- Global styles in `src/index.css`
- Uses CSS custom properties for easy theming

## Performance Optimizations

- Lazy loading for images
- Optimized image dimensions
- Efficient state management
- Smooth animations with hardware acceleration
- Responsive image loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Clean and maintainable code structure

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

Built with ❤️ for artists and art lovers
