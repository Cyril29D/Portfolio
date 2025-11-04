import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, Code, Briefcase, GraduationCap, User, Send } from 'lucide-react';

import Profil from './contenaire/Profil';
import Formation from './contenaire/Formation';
import Experience from './contenaire/Experience';
import Contact from './contenaire/Contact';
import Project from "./contenaire/Project";
import Competences from './contenaire/Competences';

function App() {
 const [currentPage, setCurrentPage] = useState('profil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'formation', label: 'Formation', icon: GraduationCap },
    { id: 'competences', label: 'Compétences', icon: Code },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'projet', label: 'Projets', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex">
      <aside className="hidden md:flex md:flex-col w-64 bg-gray-950/50 backdrop-blur-lg border-r border-white/10 fixed left-0 top-0 h-screen p-6">
        <div className="mb-12">
          <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CD
          </span>
          <p className="text-gray-500 text-sm mt-2">Portfolio</p>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-white/10">
          <p className="text-xs text-gray-600 text-center">© 2024 Cyril Delly</p>
        </div>
      </aside>

      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-950/98 backdrop-blur-lg border-b border-white/5">
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CD
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="bg-gray-950/98 backdrop-blur-lg border-t border-white/5">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 md:ml-64 pt-20 md:pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {currentPage === 'profil' && <Profil />}
          {currentPage === 'formation' && <Formation />}
          {currentPage === 'competences' && <Competences />}
          {currentPage === 'experience' && <Experience />}
          {currentPage === 'projet' && <Project />}
          {currentPage === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default App;