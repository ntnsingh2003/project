import React from 'react';
import { Code, Server, Brain, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Bash/Shell', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      title: 'DevOps',
      icon: Server,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'CI/CD', level: 88 }
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Scikit-learn', level: 80 },
        { name: 'LangChain', level: 75 },
        { name: 'Gemini API', level: 85 },
        { name: 'REPL Agents', level: 70 }
      ]
    },
    {
      title: 'Tools & OS',
      icon: Settings,
      skills: [
        { name: 'Linux', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'Streamlit', level: 80 },
        { name: 'FastAPI', level: 75 }
      ]
    }
  ];

  const getSkillLevelText = (level: number) => {
    if (level >= 80) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'from-green-400 to-emerald-500';
    if (level >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Comprehensive expertise across DevOps, Machine Learning, and Full-Stack Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {getSkillLevelText(skill.level)}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillBar 2s ease-out ${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                    
                    <div className="text-right">
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar {
          from { width: 0%; }
          to { width: var(--skill-level); }
        }
      `}</style>
    </section>
  );
};

export default Skills;