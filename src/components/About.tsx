import React from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Code2 } from 'lucide-react';
import profileImg from '../assets/nitin.jpg';
import { motion } from 'framer-motion';
import resumePdf from '../assets/Nitin Singh.pdf.pdf';

const About: React.FC = () => {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'nitinsinghtanwar1@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7230889989' },
    { icon: MapPin, label: 'Location', value: 'Jaipur, India' },
    { icon: GraduationCap, label: 'College', value: 'Arya College of Engineering & IT' },
    { icon: Code2, label: 'Branch', value: 'Electronics & Communication Engineering' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Quote */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-20"></div>
              <motion.div
                className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px #22d3ee' }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-48 h-48 object-cover rounded-full border-4 border-green-400 shadow-lg"
                />
              </motion.div>
            </div>
            
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <blockquote className="text-lg italic text-gray-300 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border-l-4 border-green-400">
                "Automate Intelligently, Think Systematically, Build for Tomorrow."
              </blockquote>
            </motion.div>
            <div className="mt-4 text-center">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-blue-500 hover:to-green-400 transition-transform duration-200"
              >
                View Resume (PDF)
              </a>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="text-green-400" size={24} />
                Professional Overview
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a passionate DevOps and Machine Learning enthusiast with strong foundations in 
                automation, CI/CD pipelines, and intelligent system development. Currently working 
                with cutting-edge technologies like Agentic AI, containerization, and cloud automation.
              </p>

              <p className="text-gray-300 leading-relaxed">
                With professional internship experience at LinuxWorld Informatics Pvt. Ltd., 
                I specialize in building scalable, automated solutions that bridge the gap between 
                development and operations while leveraging machine learning for intelligent automation.
              </p>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
              
              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                {personalInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;