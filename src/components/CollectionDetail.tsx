import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { collections } from '../data/collections';
import { calculateOptimalDimensionsFromLoadedImage } from '../utils/imageUtils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ [key: string]: { width: number; height: number } | null }>({});
  const imageRefs = useRef<{ [key: string]: HTMLImageElement | null }>({});

  const collection = collections.find(c => c.id === id);

  useEffect(() => {
    if (collection) {
      setLoading(false);
    }
  }, [collection]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPaintingIndex(swiper.activeIndex);
  };

  const handlePrevious = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleImageLoad = (paintingId: string, imageElement: HTMLImageElement) => {
    const maxWidth = window.innerWidth * 0.8;
    const maxHeight = window.innerHeight * 0.6;
    
    const dimensions = calculateOptimalDimensionsFromLoadedImage(imageElement, maxWidth, maxHeight);
    
    setImageDimensions(prev => ({
      ...prev,
      [paintingId]: {
        width: dimensions.width,
        height: dimensions.height
      }
    }));
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isFullscreen) {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  if (loading) {
    return (
      <div className="loading">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading collection...
        </motion.div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="loading">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Collection not found
        </motion.div>
      </div>
    );
  }

  const currentPainting = collection.paintings[currentPaintingIndex];

  return (
    <>
      <motion.button
        className="back-button"
        onClick={handleBackClick}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={16} />
        Back to Collections
      </motion.button>

      <div className="collection-detail">
        <motion.div
          className="collection-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{collection.name}</h1>
          <p>{collection.description}</p>
        </motion.div>

        <motion.div
          className="swiper-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
            loop={true}
            effect="fade"
            speed={800}
          >
            {collection.paintings.map((painting, index) => {
              const dimensions = imageDimensions[painting.id];

              return (
                <SwiperSlide key={painting.id}>
                  <div className="painting-container">
                    <img
                      ref={(el) => {
                        imageRefs.current[painting.id] = el;
                      }}
                      src={painting.imageUrl}
                      alt={painting.title}
                      className="painting-image"
                      style={{
                        width: dimensions ? `${dimensions.width}px` : 'auto',
                        height: dimensions ? `${dimensions.height}px` : 'auto'
                      }}
                      loading="lazy"
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
        </motion.div>

        <motion.div
          className="control-bar"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="nav-button" onClick={handlePrevious}>
            <ChevronLeft size={24} />
          </button>
          
          <button className="fullscreen-button" onClick={handleFullscreenToggle}>
            <Maximize2 size={24} />
          </button>
          
          <button className="nav-button" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </motion.div>

        <motion.div
          className="painting-info"
          key={currentPainting.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="painting-title">{currentPainting.title}</h3>
          <p className="painting-artist">{currentPainting.artist}, {currentPainting.year}</p>
          <p className="painting-description">{currentPainting.description}</p>
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
              alt={currentPainting.title}
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
    </>
  );
};

export default CollectionDetail; 