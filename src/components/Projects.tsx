import React, { useState } from 'react';
import { ExternalLink, Github, X, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Job Portal',
      description: 'Intelligent job matching platform with AI-powered resume parsing and automated notifications.',
      technologies: ['Python', 'Streamlit', 'SQLite', 'AI/ML'],
      features: [
        'User authentication and profile management',
        'AI-powered resume parsing and analysis',
        'Voice input for job applications',
        'WhatsApp and email alert system',
        'Real-time job matching algorithm'
      ],
      status: 'Completed',
      githubUrl: 'https://github.com/ntnsingh2003/smart-job-portal',
      demoUrl: 'https://smart-job-portal-demo.streamlit.app',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Python Code Solver AI',
      description: 'AI-powered code analysis and debugging tool using Google Gemini API.',
      technologies: ['Python', 'Gradio', 'Gemini API', 'AI/ML'],
      features: [
        'Real-time code analysis and explanation',
        'Bug detection and fixing suggestions',
        'Interactive web interface with Gradio',
        'Support for multiple programming languages',
        'Code optimization recommendations'
      ],
      status: 'Completed',
      githubUrl: 'https://github.com/ntnsingh2003/python-code-solver',
      demoUrl: 'https://huggingface.co/spaces/ntnsingh/code-solver',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Agentic AI with Gemini-Flash',
      description: 'Advanced AI agent system with live code execution and tool-forcing capabilities.',
      technologies: ['Python', 'Gemini 2.0 Flash', 'REPL', 'LangChain'],
      features: [
        'REACT agent with dynamic reasoning',
        'Live Python code execution environment',
        'Tool-forcing for enhanced functionality',
        'Multi-step problem solving',
        'Real-time feedback and adaptation'
      ],
      status: 'Completed',
      githubUrl: 'https://github.com/ntnsingh2003/agentic-ai-gemini',
      demoUrl: 'https://agentic-ai-demo.streamlit.app',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'CI/CD DevOps Pipeline',
      description: 'Complete CI/CD automation pipeline with Docker containerization and Jenkins.',
      technologies: ['Flask', 'Jenkins', 'Docker', 'GitHub Actions'],
      features: [
        'Automated testing and deployment',
        'Docker containerization',
        'Multi-stage build pipeline',
        'Automated rollback capabilities',
        'Monitoring and logging integration'
      ],
      status: 'Completed',
      githubUrl: 'https://github.com/ntnsingh2003/cicd-pipeline',
      demoUrl: null,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Kubernetes AI Automation',
      description: 'Automated Kubernetes cluster management with AI-driven scaling and optimization.',
      technologies: ['Kubernetes', 'Python', 'Docker', 'Prometheus'],
      features: [
        'Auto-scaling based on workload patterns',
        'AI-driven resource optimization',
        'Health monitoring and alerting',
        'Multi-cluster management',
        'Cost optimization algorithms'
      ],
      status: 'Ongoing',
      githubUrl: 'https://github.com/ntnsingh2003/k8s-ai-automation',
      demoUrl: null,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Terminal DevOps Dashboard',
      description: 'Command-line dashboard for monitoring and managing DevOps infrastructure.',
      technologies: ['Python', 'Rich', 'API Integration', 'CLI'],
      features: [
        'Real-time infrastructure monitoring',
        'Interactive terminal interface',
        'Multi-cloud support',
        'Custom alert configurations',
        'Export and reporting capabilities'
      ],
      status: 'Ongoing',
      githubUrl: 'https://github.com/ntnsingh2003/terminal-devops-dashboard',
      demoUrl: null,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions in DevOps automation, AI development, and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(project.id)}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
                  >
                    <Play size={16} />
                    View Details
                  </button>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedProjectData.title}</h3>
                <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                  selectedProjectData.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {selectedProjectData.status}
                </span>
              </div>

              <p className="text-gray-300 mb-6">{selectedProjectData.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProjectData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProjectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
                
                {selectedProjectData.demoUrl && (
                  <a
                    href={selectedProjectData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;