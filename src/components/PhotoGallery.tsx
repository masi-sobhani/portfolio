import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useRTL } from '../hooks/useRTL';
import { photographyCollections, PhotographyImage } from '../data/photographyCollections';
import LazyImage from './LazyImage';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PhotographyImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { rtlValue } = useRTL();

  // Memoize images for better performance
  const allImages = useMemo(() => photographyCollections, []);

  const handleImageClick = useCallback((image: PhotographyImage) => {
    const index = allImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  }, [allImages]);

  const handleCloseFullscreen = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setSelectedImage(allImages[currentImageIndex - 1]);
    }
  }, [currentImageIndex, allImages]);

  const handleNext = useCallback(() => {
    if (currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setSelectedImage(allImages[currentImageIndex + 1]);
    }
  }, [currentImageIndex, allImages]);

  // RTL-aware navigation handlers
  const handleRTLPrevious = useCallback(() => {
    // In RTL, "previous" should go to the next item
    if (isRTL) {
      handleNext();
    } else {
      handlePrevious();
    }
  }, [isRTL, handleNext, handlePrevious]);

  const handleRTLNext = useCallback(() => {
    // In RTL, "next" should go to the previous item
    if (isRTL) {
      handlePrevious();
    } else {
      handleNext();
    }
  }, [isRTL, handleNext, handlePrevious]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseFullscreen();
    } else if (e.key === 'ArrowLeft') {
      // In RTL, left arrow should go to next item
      if (isRTL) {
        handleNext();
      } else {
      handlePrevious();
      }
    } else if (e.key === 'ArrowRight') {
      // In RTL, right arrow should go to previous item
      if (isRTL) {
        handlePrevious();
      } else {
      handleNext();
      }
    }
  }, [handleCloseFullscreen, handlePrevious, handleNext, isRTL]);

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedImage, handleKeyPress]);

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
            {t('photos.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('photos.description')}
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4"
        >
                {allImages.map((image, index) => (
                  <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleImageClick(image)}
          >
          <LazyImage
            src={image.imageUrl}
            alt={t(image.titleKey)}
            className="w-full h-full group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
        </motion.div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={handleCloseFullscreen}
            >
              {/* Close Button - Outside Image Area */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 z-10 p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all duration-200"
                onClick={handleCloseFullscreen}
              >
                <X size={24} />
              </motion.button>

              <div className="relative max-w-7xl max-h-full flex flex-col items-center">
                {/* Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.imageUrl}
                    alt={t(selectedImage.titleKey)}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                </motion.div>

                {/* Navigation Controls - Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center space-x-4 mb-4"
                >
                  {/* Previous button - Show when not at first image in LTR, or not at last image in RTL */}
                  {((!isRTL && currentImageIndex > 0) || (isRTL && currentImageIndex < allImages.length - 1)) && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRTLPrevious();
                      }}
                    >
                      {rtlValue(<ChevronLeft size={24} />, <ChevronRight size={24} />)}
                    </motion.button>
                  )}

                  <span className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                    {rtlValue(`${currentImageIndex + 1} of ${allImages.length}`,`${currentImageIndex + 1} از ${allImages.length}`)}
                  </span>

                  {/* Next button - Show when not at last image in LTR, or not at first image in RTL */}
                  {((!isRTL && currentImageIndex < allImages.length - 1) || (isRTL && currentImageIndex > 0)) && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRTLNext();
                      }}
                    >
                      {rtlValue(<ChevronRight size={24} />, <ChevronLeft size={24} />)}
                    </motion.button>
                  )}
                </motion.div>

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-md text-center"
                >
                  <h3 className="text-lg font-semibold mb-1">{t(selectedImage.titleKey)}</h3>
                  {selectedImage.descriptionKey && (
                    <p className="text-sm opacity-90 mb-1">{t(selectedImage.descriptionKey)}</p>
                  )}
                  {selectedImage.date && (
                    <p className="text-xs opacity-75">{selectedImage.date}</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotoGallery; 