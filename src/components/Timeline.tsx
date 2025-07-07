import React from 'react';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: '2021',
      title: 'Started B.Tech Journey',
      description: 'Began Electronics & Communication Engineering at Arya College of Engineering & IT',
      icon: GraduationCap,
      type: 'education'
    },
    {
      year: '2023',
      title: 'DevOps Discovery',
      description: 'Started exploring DevOps practices and automation technologies',
      icon: Code,
      type: 'skill'
    },
    {
      year: '2024',
      title: 'First Major Project',
      description: 'Developed Smart Job Portal with AI-powered resume parsing',
      icon: Award,
      type: 'project'
    },
    {
      year: '2025',
      title: 'Professional Internship',
      description: 'DevOps & ML Intern at LinuxWorld Informatics Pvt. Ltd.',
      icon: Briefcase,
      type: 'experience'
    },
    {
      year: '2025',
      title: 'AI Innovation',
      description: 'Built Agentic AI systems with Gemini 2.0 Flash and advanced automation',
      icon: Award,
      type: 'project'
    },
    {
      year: '2025',
      title: 'Graduation',
      description: 'Expected graduation with specialized focus on DevOps and ML',
      icon: GraduationCap,
      type: 'education'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-400 to-blue-600';
      case 'experience':
        return 'from-green-400 to-green-600';
      case 'project':
        return 'from-purple-400 to-purple-600';
      case 'skill':
        return 'from-yellow-400 to-yellow-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A timeline of my educational and professional milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-400 to-blue-500"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(event.type)} text-white text-sm font-medium rounded-full`}>
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="w-2/12 flex justify-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}>
                  <event.icon size={24} className="text-white" />
                </div>
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
            <p className="text-gray-300 mb-6">
              Continuing to push the boundaries of DevOps automation and AI integration, 
              with plans to contribute to open-source projects and pursue advanced certifications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg">
                AWS Solutions Architect
              </span>
              <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg">
                Kubernetes Administrator
              </span>
              <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg">
                Open Source Contributions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;