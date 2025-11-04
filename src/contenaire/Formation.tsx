import React from 'react';

const Formation: React.FC = () => {
  return (
    <main className="flex-1 p-8">
      <header className="w-full text-center mb-8">
        <h1 className="italic text-5xl font-bold animate-fade-in-down">Mes formations</h1>
      </header>

      <section>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl ml-5 animate-fade-in-up">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hidden-on-load slide-up flex flex-col items-center animate-fade-in-up">
            <h3 className="italic text-gray-700 text-2xl font-semibold mb-3 animate-fade-in-up">Bac Pro MELEC</h3>
            <p className="italic text-gray-700 text-center mb-2 animate-fade-in-up">Métiers de l'Électricité et de ses Environnements Connectés.</p>
            <span className="italic text-sm text-gray-500 mb-4 animate-fade-in-up">2019 - 2022</span>
          </div>
          
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hidden-on-load slide-up delay-300 flex flex-col items-center animate-fade-in-up">
            <h3 className="italic text-gray-700 text-2xl font-semibold mb-3 animate-fade-in-up">BTS SIO (SLAM)</h3>
            <p className="italic text-gray-700 text-center mb-2 animate-fade-in-up">Services Informatiques aux Organisations, option Développement.</p>
            <span className="italic text-sm text-gray-500 mb-4 animate-fade-in-up">2022 - 2024</span>
          </div>
          
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hidden-on-load slide-up flex flex-col items-center animate-fade-in-up">
            <h3 className="italic text-gray-700 text-2xl font-semibold mb-3 animate-fade-in-up">Master of Sciences</h3>
            <p className="italic text-gray-700 text-center mb-2 animate-fade-in-up"></p>
            <span className="italic text-sm text-gray-500 mb-4 animate-fade-in-up">2025 - 2028</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Formation;