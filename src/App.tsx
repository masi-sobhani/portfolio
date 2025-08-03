import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Collections from './components/Collections';
import CollectionDetail from './components/CollectionDetail';
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
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;
