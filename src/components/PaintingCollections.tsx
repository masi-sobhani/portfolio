import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { collections } from '../data/paintingCollections';
import LazyImage from './LazyImage';

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
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Paintings Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my curated collections of paintings and artworks
          </p>
        </motion.div>

        {/* Collections Grid */}
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
                <LazyImage
                  src={collection.coverImageUrl}
                  alt={collection.name}
                  className="collection-image"
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
    </div>
  );
};

export default Collections; 