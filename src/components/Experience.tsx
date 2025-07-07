import React from 'react';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    company: 'LinuxWorld Informatics Pvt. Ltd.',
    position: 'DevOps & ML Intern',
    duration: 'June 2025 - August 2025',
    location: 'Remote',
    description: 'Intensive internship program focusing on DevOps practices, CI/CD automation, and machine learning integration.',
    achievements: [
      'Implemented automated CI/CD pipelines reducing deployment time by 60%',
      'Developed Docker containerization strategies for microservices architecture',
      'Built Python-based automation tools for infrastructure management',
      'Integrated ML models into production environments using Jenkins',
      'Collaborated on agentic AI systems for automated testing and monitoring'
    ],
    skills: [
      'Jenkins CI/CD',
      'Docker & Kubernetes',
      'Python Automation',
      'Linux Administration',
      'Git & GitHub Actions',
      'ML Model Deployment',
      'Infrastructure as Code'
    ]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional <span className="text-green-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Hands-on experience in DevOps automation and machine learning integration
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          {/* Company Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                <Building size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                <p className="text-green-400 font-semibold">{experience.position}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="text-sm">{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed">{experience.description}</p>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award size={20} className="text-green-400" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-green-400/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Looking for opportunities to apply DevOps expertise and ML knowledge in challenging projects
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;