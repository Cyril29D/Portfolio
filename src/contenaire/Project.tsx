import { Code } from 'lucide-react';


function Project(){
const projets = [
    {
      title: 'Application React + Vite',
      description: 'Application de compteur interactive',
      period: '2025',
      tech: ['React', 'Vite', 'JavaScript', 'Hooks'],
      features: [
        'Interface interactive avec React et Vite',
        'Système de compteur avec mise à jour dynamique',
        'Utilisation de composants fonctionnels',
        'Rechargement à chaud (HMR)'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Site WordPress E-commerce',
      description: 'Plateforme de vente en ligne',
      period: '2024',
      tech: ['WordPress', 'DIVI', 'PHP', 'WooCommerce'],
      features: [
        'Design responsive et moderne',
        'Intégration de systèmes de paiement',
        'Gestion de contenu dynamique',
        'Optimisation SEO'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Application Laravel',
      description: 'Système de gestion complet',
      period: '2023',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'API REST'],
      features: [
        'Architecture MVC complète',
        'Authentification et autorisation',
        'CRUD complet avec base de données',
        'Interface admin responsive'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Jeux de rythme à défilement vertical',
      description: 'Un jeu de rythme à défilement vertical développé en Java avec libGDX par Willy Keosouvanh, Cyril Delly et Thibault Feat. Ce projet a été réalisé dans le cadre de la Pre-MSc à Epitech',
      period: '2025',
      tech: ['Java', 'libGDX', 'Gradle'],
      features: [
        'Défilement vertical synchronisé avec la musique',
        'Mécaniques de jeu engageantes',
        'Graphismes et animations fluides',
        'Système de score et de niveaux'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Jeu pendu dans le terminal',
      description: 'Un jeu du pendu simple développé en Python. Ce projet a été réalisé dans le cadre de la Pre-MSc à Epitech',
      period: '2025',
      tech: ['Python'],
      features: [
        'Interface en ligne de commande',
        'Logique de jeu basique',
        'Gestion des entrées utilisateur',
        'Affichage du mot à deviner et des tentatives'
      ],
      color: 'from-yellow-500 to-amber-500'
    }
    ,
    {
      title: 'Job Board — Plateforme d’offres d’emploi',
      description: 'Une plateforme web de publication et de recherche d’offres d’emploi, développée en Ruby on Rails avec une base de données PostgreSQL. Ce projet a été réalisé dans le cadre de la Pre-MSc à Epitech',
      period: '2025',
      tech: ['React', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Interface utilisateur réactive avec React',
        'Système de gestion des offres d’emploi',
        'Recherche et filtrage avancés',
        'Design moderne avec Tailwind CSS'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'MY_MARVIN – Jenkins as Code',
      description: 'un projet DevOps dont l’objectif est de configurer une instance Jenkins entièrement par le code, sans aucune action manuelle.',
      period: '2025',
      tech: ['Jenkins', 'Groovy', 'Docker', 'git'],
      features: [
        'Configuration automatisée de Jenkins via des scripts Groovy',
        'Utilisation de Docker pour l\'isolation des environnements',
        'Gestion du code source avec git',
        'Déploiement continu et intégration continue (CI/CD)'
      ],
      color: 'from-red-500 to-pink-500'
    }

  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Projets
      </h1>
      <p className="text-center text-gray-500 mb-16 text-lg">Mes réalisations techniques</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((projet, idx) => (
          <div
            key={idx}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${projet.color} flex items-center justify-center mb-4`}>
              <Code className="text-white" size={24} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{projet.title}</h3>
            <p className="text-gray-500 mb-4">{projet.description}</p>
            
            <div className={`inline-block px-4 py-1 bg-gradient-to-r ${projet.color} rounded-full text-white text-sm font-semibold mb-4`}>
              {projet.period}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {projet.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <ul className="space-y-2">
              {projet.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
        
    )
}

export default Project