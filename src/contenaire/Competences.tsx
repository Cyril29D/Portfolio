import { Code, Briefcase } from 'lucide-react';

function compétences() {
    const competences = [
    {
      name: 'HTML',
      level: 90,
      color: 'from-orange-500 to-red-500',
      icon: '🌐'
    },
    {
      name: 'CSS',
      level: 70,
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨'
    },
    {
      name: 'JavaScript',
      level: 60,
      color: 'from-yellow-500 to-orange-500',
      icon: '⚡'
    },
    {
      name: 'React',
      level: 50,
      color: 'from-cyan-400 to-blue-500',
      icon: '⚛️'
    },
    {
      name: 'PHP',
      level: 50,
      color: 'from-purple-500 to-indigo-500',
      icon: '🐘'
    },
    {
      name: 'Python',
      level: 70,
      color: 'from-blue-400 to-yellow-500',
      icon: '🐍'
    },
    {
      name: 'Java',
      level: 70,
      color: 'from-red-500 to-orange-600',
      icon: '☕'
    },
    {
      name: 'MySQL',
      level: 60,
      color: 'from-blue-600 to-cyan-500',
      icon: '🗄️'
    },
    {
      name: 'pgAdmin',
      level: 70,
      color: 'from-indigo-500 to-blue-600',
      icon: '🐘'
    }
  ];

  const outils = [
    {
      name: 'VS Code',
      description: 'Éditeur principal pour le développement web',
      color: 'from-blue-500 to-cyan-500',
      icon: '💻'
    },
    {
      name: 'IntelliJ IDEA',
      description: 'IDE pour Java et développement avancé',
      color: 'from-purple-500 to-pink-500',
      icon: '🧠'
    }
  ];

  return (
    <div className="animate-fade-in">
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
          <div className="grid md:grid-cols-2 gap-6">
            {competences.map((comp, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{comp.icon}</span>
                    <h3 className="text-xl font-bold text-white">{comp.name}</h3>
                  </div>
                  <span className="text-cyan-400 font-semibold">{comp.level}%</span>
                </div>
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${comp.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${comp.level}%` }}
                  ></div>
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
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-gradient-to-r ${outil.color} rounded-xl shadow-lg`}>
                    <span className="text-4xl">{outil.icon}</span>
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
  );
}

export default compétences;