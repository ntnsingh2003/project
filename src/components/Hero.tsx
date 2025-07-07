import React, { useState, useEffect } from 'react';
import { Download, Eye, Github, Linkedin, Mail, Phone } from 'lucide-react';
import resumePdf from '../assets/Nitin Singh.pdf.pdf';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    'DevOps Engineer',
    'Machine Learning Engineer',
    'Agentic AI Developer',
    'Automation Specialist'
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentTextIndex, texts]);

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              <span className="block text-white">Nitin</span>
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Singh
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
                <span className="text-green-400">{displayText}</span>
                <span className="animate-pulse text-blue-500">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Engineering intelligent systems through automation and machine learning.
            Passionate about building scalable CI/CD pipelines and agentic AI solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={resumePdf}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            
            <button
              onClick={handleViewProjects}
              className="group px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-medium transition-all duration-300 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10 flex items-center gap-2"
            >
              <Eye size={20} className="group-hover:animate-pulse" />
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/ntnsingh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nitin-singh-tanwar-133419371"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nitinsinghtanwar1@gmail.com"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917230889989"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-green-400 to-blue-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;