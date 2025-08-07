import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useRTL } from '../hooks/useRTL';
import { collections } from '../data/paintingCollections';
import { calculateOptimalDimensionsFromLoadedImage } from '../utils/imageUtils';
import LazyImage from './LazyImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ [key: string]: { width: number; height: number } | null }>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageRefs = useRef<{ [key: string]: HTMLImageElement | null }>({});
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { rtlValue } = useRTL();

  const collection = collections.find(c => c.id === id);

  useEffect(() => {
    if (collection) {
      setLoading(false);
    }
  }, [collection]);

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPaintingIndex(swiper.activeIndex);
  };

  const handlePrevious = () => {
    if (swiperInstance) {
      // In RTL, "previous" should go to the next slide
      if (isRTL) {
        swiperInstance.slideNext();
      } else {
      swiperInstance.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      // In RTL, "next" should go to the previous slide
      if (isRTL) {
        swiperInstance.slidePrev();
      } else {
      swiperInstance.slideNext();
      }
    }
  };

  const calculateImageDimensions = useCallback((imageElement: HTMLImageElement) => {
    const maxWidth = window.innerWidth * 0.8;
    const maxHeight = window.innerHeight * 0.6;
    
    return calculateOptimalDimensionsFromLoadedImage(imageElement, maxWidth, maxHeight);
  }, []);

  const handleImageLoad = (paintingId: string, imageElement: HTMLImageElement) => {
    const dimensions = calculateImageDimensions(imageElement);
    
    setImageDimensions(prev => ({
      ...prev,
      [paintingId]: {
        width: dimensions.width,
        height: dimensions.height
      }
    }));
  };

  const handleResize = useCallback(() => {
    // Recalculate dimensions for all loaded images when viewport changes
    Object.keys(imageRefs.current).forEach(paintingId => {
      const imageElement = imageRefs.current[paintingId];
      if (imageElement && imageElement.complete) {
        const dimensions = calculateImageDimensions(imageElement);
        setImageDimensions(prev => ({
          ...prev,
          [paintingId]: {
            width: dimensions.width,
            height: dimensions.height
          }
        }));
      }
    });
  }, [calculateImageDimensions]);

  // Debounced resize handler to prevent excessive recalculations
  const debouncedResizeHandler = useMemo(() => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };
  }, [handleResize]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isFullscreen) {
      setIsFullscreen(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, [debouncedResizeHandler]);

  // Reset swiper instance when language/direction changes
  useEffect(() => {
    setIsTransitioning(true);
    
    if (swiperInstance) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        try {
          swiperInstance.update();
          swiperInstance.slideTo(0); // Reset to first slide
          setIsTransitioning(false);
        } catch (error) {
          console.warn('Swiper update failed:', error);
          // Force re-initialization if update fails
          setSwiperInstance(null);
          setIsTransitioning(false);
        }
      }, 150);
      
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(false);
    }
  }, [isRTL, swiperInstance]);

  if (loading) {
    return (
      <div className="loading" style={{ paddingTop: '80px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t('common.loading')}
        </motion.div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="loading" style={{ paddingTop: '80px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t('collections.noCollections')}
        </motion.div>
      </div>
    );
  }

  const currentPainting = collection.paintings[currentPaintingIndex];

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="collection-detail">
        <motion.div
          className="collection-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t(collection.nameKey)}</h1>
          <p>{t(collection.descriptionKey)}</p>
        </motion.div>

        <motion.div
          className="swiper-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: isTransitioning ? 0.5 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isTransitioning && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
              <div className="text-gray-600">{t('common.loading')}</div>
            </div>
          )}
          <Swiper
            key={isRTL ? 'rtl' : 'ltr'} // Force re-render when direction changes
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              type: 'bullets'
            }}
            keyboard={{ enabled: true }}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
            loop={true}
            effect="fade"
            speed={800}
            dir={isRTL ? 'rtl' : 'ltr'} // Set direction for Swiper
          >
            {collection.paintings.map((painting, index) => {
              const dimensions = imageDimensions[painting.id];

              return (
                <SwiperSlide key={painting.id}>
                  <div className="painting-container">
                    <LazyImage
                      src={painting.imageUrl}
                      alt={t(painting.titleKey)}
                      className="painting-image"
                      style={{
                        width: dimensions ? `${dimensions.width}px` : 'auto',
                        height: dimensions ? `${dimensions.height}px` : 'auto'
                      }}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        handleImageLoad(painting.id, img);
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          
          {/* Custom Pagination - Outside and Below Slider */}
          <div className="custom-pagination"></div>
        </motion.div>

        <motion.div
          className="control-bar"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="nav-button" onClick={handlePrevious}>
            {rtlValue(<ChevronLeft size={24} />, <ChevronRight size={24} />)}
          </button>
          
          <button className="fullscreen-button" onClick={handleFullscreenToggle}>
            <Maximize2 size={24} />
          </button>
          
          <button className="nav-button" onClick={handleNext}>
            {rtlValue(<ChevronRight size={24} />, <ChevronLeft size={24} />)}
          </button>
        </motion.div>

        <motion.div
          className="painting-info"
          key={currentPainting.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
                          <h3 className="painting-title">{t(currentPainting.titleKey)}</h3>
          <p className="painting-artist">{currentPainting.artist}, {currentPainting.year}</p>
          <p className="painting-description">{t(currentPainting.descriptionKey)}</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fullscreen-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentPainting.imageUrl}
              alt={t(currentPainting.titleKey)}
              className="fullscreen-image"
            />
            <motion.button
              className="close-fullscreen"
              onClick={handleFullscreenToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollectionDetail; 