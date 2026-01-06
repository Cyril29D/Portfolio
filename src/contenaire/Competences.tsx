import { Code, Briefcase } from 'lucide-react';

function Competences() {
  const competences = [
    {
      name: 'HTML',
      color: 'from-orange-500 to-red-500',
      icon: 'html5'
    },
    {
      name: 'CSS',
      color: 'from-blue-500 to-cyan-500',
      icon: 'css3'
    },
    {
      name: 'JavaScript',
      color: 'from-yellow-500 to-orange-500',
      icon: 'javascript'
    },
    {
      name: 'React',
      color: 'from-cyan-400 to-blue-500',
      icon: 'react'
    },
    {
      name: 'PHP',
      color: 'from-purple-500 to-indigo-500',
      icon: 'php'
    },
    {
      name: 'Python',
      color: 'from-blue-400 to-yellow-500',
      icon: 'python'
    },
    {
      name: 'Java',
      color: 'from-red-500 to-orange-600',
      icon: 'java'
    },
    {
      name: 'MySQL',
      color: 'from-blue-600 to-cyan-500',
      icon: 'mysql'
    }
  ];

  const outils = [
    {
      name: 'VS Code',
      description: 'Éditeur principal pour le développement web',
      color: 'from-blue-500 to-cyan-500',
      icon: 'vscode'
    },
    {
      name: 'IntelliJ IDEA',
      description: 'IDE pour Java et développement avancé',
      color: 'from-purple-500 to-pink-500',
      icon: 'intellij'
    }
  ];

  return (
    <div className="animate-fade-in">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Compétences
        </h1>
        <p className="text-center text-gray-500 mb-16 text-lg">Mes technologies et outils</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Code className="text-cyan-400" size={32} />
              Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competences.map((comp, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`p-4 bg-gradient-to-r ${comp.color} rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <i className={`devicon-${comp.icon}-plain text-5xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center">{comp.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-purple-400" size={32} />
              Outils de développement
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {outils.map((outil, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 bg-gradient-to-r ${outil.color} rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <i className={`devicon-${outil.icon}-plain text-5xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{outil.name}</h3>
                      <p className="text-gray-400">{outil.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;