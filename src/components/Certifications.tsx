import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: 'LinuxWorld Informatics Internship',
      issuer: 'LinuxWorld Informatics Pvt. Ltd.',
      date: 'August 2025',
      status: 'Completed',
      description: 'Intensive 3-month internship program covering DevOps practices, CI/CD automation, and machine learning integration.',
      skills: ['DevOps', 'CI/CD', 'Docker', 'Jenkins', 'Python', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'LangChain Workshop Certificate',
      issuer: 'Tech Community',
      date: 'March 2025',
      status: 'Completed',
      description: 'Comprehensive workshop on building AI applications using LangChain framework, covering agents, chains, and tools.',
      skills: ['LangChain', 'AI Development', 'Python', 'Agentic AI', 'OpenAI APIs'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'GitHub Actions Masterclass',
      issuer: 'GitHub Learning Lab',
      date: 'November 2024',
      status: 'Completed',
      description: 'Advanced certification in GitHub Actions for CI/CD automation, including custom workflows and marketplace actions.',
      skills: ['GitHub Actions', 'CI/CD', 'Workflow Automation', 'DevOps', 'YAML'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Kubernetes Fundamentals',
      issuer: 'CNCF',
      date: 'In Progress',
      status: 'In Progress',
      description: 'Comprehensive course covering Kubernetes architecture, deployment, and management of containerized applications.',
      skills: ['Kubernetes', 'Container Orchestration', 'Docker', 'Cloud Native', 'Microservices'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 65
    }
  ];

  const openModal = (certId: number) => {
    setSelectedCert(certId);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const selectedCertData = certifications.find(cert => cert.id === selectedCert);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-green-400">Certifications</span> & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => openModal(cert.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${
                    cert.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {cert.status === 'Completed' ? <CheckCircle size={12} /> : <Calendar size={12} />}
                    {cert.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{cert.description}</p>

                {cert.progress && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs text-gray-400">{cert.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300"
                        style={{ width: `${cert.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6">
              Always exploring new technologies and earning certifications to stay at the forefront of DevOps and AI
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg">
                AWS Solutions Architect (Planned)
              </span>
              <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg">
                Certified Kubernetes Administrator (Planned)
              </span>
              <span className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg">
                Google Cloud Professional (Planned)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      {selectedCert && selectedCertData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedCertData.image}
                alt={selectedCertData.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCertData.title}</h3>
                  <p className="text-gray-400">{selectedCertData.issuer}</p>
                  <p className="text-gray-500 text-sm">{selectedCertData.date}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 w-fit ${
                  selectedCertData.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {selectedCertData.status === 'Completed' ? <CheckCircle size={16} /> : <Calendar size={16} />}
                  {selectedCertData.status}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedCertData.description}</p>

              {selectedCertData.progress && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Completion Progress</span>
                    <span className="text-sm text-gray-400">{selectedCertData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300"
                      style={{ width: `${selectedCertData.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;