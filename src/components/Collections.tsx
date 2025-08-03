import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { collections } from '../data/collections';

const Collections: React.FC = () => {
  const navigate = useNavigate();

  const handleCollectionClick = (collectionId: string) => {
    navigate(`/collection/${collectionId}`);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="collections-container">
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Masi Gallery</h1>
      </motion.header>

      <motion.div 
        className="collections-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            className="collection-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCollectionClick(collection.id)}
          >
            <div className="collection-image-container">
              <img
                src={collection.coverImageUrl}
                alt={collection.name}
                className="collection-image"
                loading="lazy"
              />
            </div>
            <div className="collection-info">
              <h2 className="collection-title">{collection.name}</h2>
              <p className="collection-description">{collection.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Collections; 