import React from 'react';
import { User } from 'lucide-react';
import { useState, useEffect } from 'react';


function Formation() {

 const formations = [
    {
      title: 'Master of Sciences',
      school: 'Epitech',
      description: 'Formation excellence en informatique et technologies',
      period: '2025 - 2028',
      color: 'from-cyan-500 to-blue-500',
      skills: ['Intelligence Artificielle', 'Cloud Computing', 'Architecture Logicielle', 'Management de projet']
    },
    {
      title: 'BTS SIO (SLAM)',
      school: 'Services Informatiques aux Organisations',
      description: 'Option Solutions Logicielles et Applications Métiers',
      period: '2022 - 2024',
      color: 'from-purple-500 to-pink-500',
      skills: ['Développement Web', 'Base de données', 'PHP/JavaScript', 'Laravel']
    },
    {
      title: 'Bac Pro MELEC',
      school: 'Métiers de Électricité',
      description: 'et de ses Environnements Connectés',
      period: '2019 - 2022',
      color: 'from-orange-500 to-red-500',
      skills: ['Systèmes électriques', 'Domotique', 'Équipements connectés', 'Maintenance']
    }
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Formations
      </h1>
      <p className="text-center text-gray-500 mb-16 text-lg">Mon parcours scolaire</p>

      <div className="space-y-8">
        {formations.map((formation, idx) => (
          <div
            key={idx}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{formation.title}</h3>
                <p className="text-xl text-gray-300">{formation.school}</p>
                <p className="text-gray-500">{formation.description}</p>
              </div>
              <div className={`mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r ${formation.color} rounded-full text-white font-semibold shadow-lg`}>
                {formation.period}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {formation.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-400 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Formation;