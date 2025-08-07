import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRTL } from '../hooks/useRTL';
import LazyImage from './LazyImage';

const About: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { rtlSpace } = useRTL();

  const HandleGoToResume = () => {
    navigate('/resume');
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-200 rounded-lg aspect-square mb-6">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <LazyImage src={`${process.env.PUBLIC_URL}/profile.webp`} alt="Profile" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('about.artisticJourney')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('about.journeyDescription')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('about.techniquesDescription')}
            </p>
            <p className="text-gray-600">
              {t('about.inspirationDescription')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            {t('about.whatIDo')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('about.painting')}</h4>
              <p className="text-gray-600 text-sm">
                {t('about.paintingDescription')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔪</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('about.engraving')}</h4>
              <p className="text-gray-600 text-sm">
                {t('about.engravingDescription')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('about.portraitPhotography')}</h4>
              <p className="text-gray-600 text-sm">
                {t('about.portraitPhotographyDescription')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏞️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('about.landscapePhotography')}</h4>
              <p className="text-gray-600 text-sm">
                {t('about.landscapePhotographyDescription')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('about.letsConnect')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('about.connectDescription')}
          </p>
          <div className={`flex justify-center ${rtlSpace.x('4')}`}>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
              {t('about.getInTouch')}
            </button>
            <button onClick={HandleGoToResume} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              {t('about.viewResume')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 