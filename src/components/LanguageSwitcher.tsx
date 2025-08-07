import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRTL } from '../hooks/useRTL';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const { rtlMargin } = useRTL();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`
        flex items-center justify-center w-10 h-10 rounded-full
        bg-gray-100 hover:bg-gray-200 transition-colors duration-200
        text-sm font-medium text-gray-700 hover:text-gray-900
        border border-gray-200 hover:border-gray-300
        ${rtlMargin.right('2')}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={currentLanguage === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
    >
      <motion.div
        key={currentLanguage}
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.3 }}
        className="font-bold"
      >
        {currentLanguage === 'en' ? 'فا' : 'EN'}
      </motion.div>
    </motion.button>
  );
};

export default LanguageSwitcher; 