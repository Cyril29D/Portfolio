function Experience() {
const experiences = [
    {
      company: 'Placidom',
      role: 'Inventoriste - Étalagiste',
      period: 'Janvier - Juin 2024',
      tasks: [
        'Comptage et rangement de marchandises',
        'Scannage de référence et saisie de quantités',
        'Facing, nettoyage, remplissage de rayon'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'France Service',
      role: 'Création et Gestion de Contenu - Stage',
      period: 'Janvier 2024',
      tasks: [
        'Mise à jour de contenus',
        'Création site sous WordPress avec DIVI',
        'Création du cahier des charges'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'École | AMEP Redoute',
      role: 'Travaux Pratiques en Développement Full Stack',
      period: '2022 - 2024',
      tasks: [
        'Gestion de bases de données via MySQL et PHPmyAdmin',
        'Création de sites web avec PHP, JavaScript, HTML et CSS',
        'Réalisation applications web avec Laravel',
        'Développement applications desktop avec Java'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Expériences
      </h1>
      <p className="text-center text-gray-500 mb-16 text-lg">Mon parcours professionnel</p>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                <p className="text-xl text-purple-300 mb-2">{exp.role}</p>
              </div>
              <div className={`mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r ${exp.color} rounded-full text-white font-semibold shadow-lg whitespace-nowrap`}>
                {exp.period}
              </div>
            </div>
            
            <ul className="space-y-3">
              {exp.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;