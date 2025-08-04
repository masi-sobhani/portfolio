import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Collections from './components/PaintingCollections';
import CollectionDetail from './components/PaintCollectionDetail';
import About from './components/About';
import Resume from './components/Resume';
import './App.css';

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
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;
