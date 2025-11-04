import { useState, useEffect } from 'react';

function Profil() {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Cyril Delly';
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      if (!isDeleting && index < fullText.length) {
        // Phase d'écriture
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + fullText[index]);
          setIndex(index + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && index === fullText.length) {
        // Attendre 2 secondes avant de commencer à effacer
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      } else if (isDeleting && index > 12) {
        // Phase d'effacement (s'arrête au "y" de Cyril, index 6 = "Cyril ")
        const timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, index - 1));
          setIndex(index - 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else if (isDeleting && index === 6) {
        // Attendre 10 secondes puis recommencer
        const timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, [index, isDeleting]);

    return(
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <header className="w-full text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold">
            <span className="text-cyan-400">&lt;</span>
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
            <span className="text-cyan-400">&gt;</span>
          </h1>
        </header>
        <section className="flex flex-col items-center gap-8">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            <img 
              className="h-auto max-w-xs rounded-2xl shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-2" 
              src="/img/photo_profile2.jpg" 
              alt="image_1" 
            />
            <img 
              className="h-auto max-w-xs" 
              src="/img/personnage1.png" 
              alt="personnage1" 
            />
          </div>
          <p className="italic text-xl max-w-2xl text-center px-4">
            Étudiant inscrit au Master of Sciences – Epitech (2025-2028), je suis issu
            d'un BTS SIO (SLAM). Rigoureux, impliqué et passionné par le
            développement full-stack, je recherche une alternance pour mettre en
            pratique mes acquis, renforcer mes compétences techniques et contribuer
            activement à des projets innovants.
          </p>
        </section>
      </div>
    )
}

export default Profil