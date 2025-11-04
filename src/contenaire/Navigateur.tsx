import React from 'react';
import { Menu, X, Mail, Code, Briefcase, GraduationCap, User } from 'lucide-react';

function Navigateur({ onPageChange, currentPage, isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'formation', label: 'Formation', icon: GraduationCap },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'projet', label: 'Projets', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (id) => {
    onPageChange(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex space-x-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-lg border-t border-white/5">
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
    </>
  );
}

export default Navigateur;