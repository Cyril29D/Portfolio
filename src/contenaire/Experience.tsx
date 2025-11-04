import React from 'react';

const Experience: React.FC = () => {
  return (
    <main className="flex-1">
      <header className="w-full text-center mb-8">
        <h1 className="italic text-5xl font-bold animate-fade-in-down">Mes expériences</h1>
      </header>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-7xl mx-auto">
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="italic p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col h-full">
              <h3 className="text-gray-700 text-xl md:text-2xl font-semibold mb-3">Placidom</h3>
              <p className="text-gray-700 text-center mb-2">INVENTORISTE - ETALAGISTE</p>
              <span className="text-sm text-gray-500 mb-4">Janvier - Juin 2024</span>
              <ul className="text-left text-gray-700 list-inside space-y-2 mt-auto">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comptage et rangement de marchandises scannage de référence et saisie de quantités.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Facing, nettoyage, remplissage de rayon.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="italic p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col h-full">
              <h3 className="text-gray-700 text-xl md:text-2xl font-semibold mb-3">France service</h3>
              <p className="text-gray-700 text-center mb-2">CRÉATION ET GESTION DE CONTENU - STAGE</p>
              <span className="text-sm text-gray-500 mb-4">janvier - 2024</span>
              <ul className="text-left text-gray-700 list-inside space-y-2 mt-auto">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mise à jour de contenus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Création d'un site sous Wordpress avec l'extension DIVI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Création du cahier des charges</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="italic p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col h-full">
              <h3 className="text-gray-700 text-xl md:text-2xl font-semibold mb-3">ECOLE | AMEP REDOUTE</h3>
              <p className="text-gray-700 text-center mb-2">TRAVAUX PRATIQUES EN DÉVELOPPEMENT FULL STACK</p>
              <span className="text-sm text-gray-500 mb-4">2022 - 2024</span>
              <ul className="text-left text-gray-700 list-inside space-y-2 mt-auto">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Stocker, manipuler et gérer les données dans une base de données via MySQL et l'interface PHPmyAdmin.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Création d'un site web avec PHP, JavaScript, HTML et CSS</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Réalisation d'une application web avec Laravel.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Réalisation d'une application de bureau avec Java.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;