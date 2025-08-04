import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';

const About: React.FC = () => {
  const navigate = useNavigate();

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
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to my painting and drawing portfolio. I'm passionate about capturing moments and telling stories through the paint and the pencil.
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
                <LazyImage src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              My Journey
            </h2>
            <p className="text-gray-600 mb-4">
              I've been passionate about painting and drawing for over a decade, specializing in portrait, landscape, and street painting. 
              My work has been featured in various exhibitions and publications.
            </p>
            <p className="text-gray-600 mb-4">
              I believe that every painting tells a story, and I strive to capture the essence of moments that might otherwise go unnoticed. 
              Through my paint, I aim to share perspectives that inspire and connect with viewers on a deeper level.
            </p>
            <p className="text-gray-600">
              When I'm not behind the paint, you can find me exploring new places, experimenting with different techniques, 
              or sharing my knowledge with fellow painting and drawing enthusiasts.
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
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Painting</h4>
              <p className="text-gray-600 text-sm">
                Painting and drawing from my own imagination and from the nature.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔪</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Engraving</h4>
              <p className="text-gray-600 text-sm">
                Engraving on metal and wood and copper.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Portrait Photography</h4>
              <p className="text-gray-600 text-sm">
                Capturing the essence and personality of individuals through thoughtful composition and lighting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏞️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Landscape Photography</h4>
              <p className="text-gray-600 text-sm">
                Exploring the beauty of nature and urban environments through wide-angle perspectives.
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
            Let's Connect
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in new collaborations and opportunities. Whether you're looking for a painter or a photographer
            for your next project or just want to discuss photography, I'd love to hear from you.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get in Touch
            </button>
            <button onClick={HandleGoToResume} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 