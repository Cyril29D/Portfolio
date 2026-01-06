import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import photoProfile from "../assets/photo_profile2.jpg";

function Profil() {
const [displayText, setDisplayText] = useState('');
  const fullText = 'Cyril Delly';
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === fullText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 6) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 6) {
      const timeout = setTimeout(() => setIsDeleting(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [index, isDeleting]);

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse text-cyan-400">|</span>
          <span className="text-cyan-400">&gt;</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-300 font-light">Développeur Full-Stack</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900 rounded-2xl p-2">
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center">
              <img  src={photoProfile} alt="Photo de profil " className="w-full h-96 object-cover rounded-xl" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl shadow-cyan-500/5">
            <h2 className="text-3xl font-bold mb-4 text-white">À propos</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Étudiant inscrit au <span className="text-cyan-400 font-semibold">Master of Sciences – Epitech</span> (2025-2028), 
              je suis issu d un <span className="text-purple-400 font-semibold">BTS SIO (SLAM)</span>. 
              Rigoureux, impliqué et passionné par le développement full-stack, je recherche une 
              <span className="text-pink-400 font-semibold"> alternance</span> pour mettre en pratique mes acquis, 
              renforcer mes compétences techniques et contribuer activement à des projets innovants.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
              <div className="text-gray-400">Années d études</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-400">Projets réalisés</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;