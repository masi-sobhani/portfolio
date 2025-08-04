import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy load components for better performance
const Collections = lazy(() => import('./components/PaintingCollections'));
const CollectionDetail = lazy(() => import('./components/PaintCollectionDetail'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const About = lazy(() => import('./components/About'));
const Resume = lazy(() => import('./components/Resume'));

const App: React.FC = () => {
  return (
    <Router>
      <motion.div 
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Navigation />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Collections />} />
            <Route path="/collection/:id" element={<CollectionDetail />} />
            <Route path="/photos" element={<PhotoGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </motion.div>
    </Router>
  );
};

export default App;
