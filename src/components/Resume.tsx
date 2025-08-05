import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

const Resume: React.FC = () => {
  const skills = [
    'Painting', 'Drawing', 'Digital Painting',
    'Oil Painting', 'Acrylic Painting', 'Watercolor Painting',
    'Pastel Painting', 'Gouache Painting', 'Mixed Media',
    'Photography', 'Digital Photography',
    'Engraving',
  ];

  const experiences = [
    {
      title: 'Painter',
      company: 'Self-Employed',
      period: '2015 - 2025',
      description: 'Painting and drawing and sending paintings to galleries and selling them.'
    },
    {
      title: 'Painting Instructor',
      company: 'Self-Employed',
      period: '2024 - 2025',
      description: 'Taught painting fundamentals to beginners and intermediate students. Conducted workshops on composition and lighting.'
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Painting',
      school: 'Soore University',
      year: '2020-2024',
      description: 'Focused on painting techniques, art history, and visual storytelling.'
    },
    {
      degree: 'Painting',
      school: 'Alghadir High School',
      year: '2017-2020',
      description: 'Intensive program covering advanced painting techniques, art history, and visual storytelling.'
    }
  ];


  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional Painter with over 5 years of experience in painting and drawing.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-xl p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-gray-600" />
                  <a href="mailto:masi.sobhani.art@gmail.com" className="text-blue-500">masi.sobhani.art@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-gray-600" />
                  <a className="text-blue-500" href='tel:+989027923058'>+989027923058</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram size={20} className="text-gray-600" />
                  <a className="text-blue-500" target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/masi_sobhanii'>Instagram</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Twitter size={20} className="text-gray-600" />
                  <a className="text-blue-500" target='_blank' rel='noopener noreferrer' href='https://x.com/masiisobhanii'>X (Twitter)</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-gray-600" />
                  <span className="text-gray-700">Tehran, Iran</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                <Download size={20} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-700">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">{edu.year}</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 