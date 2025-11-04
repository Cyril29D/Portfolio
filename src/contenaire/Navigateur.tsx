import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavigateurProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Navigateur: React.FC<NavigateurProps> = ({ onPageChange, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'profil', label: 'Profil' },
    { id: 'formation', label: 'Formation' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projet', label: 'Projet' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsMenuOpen(false);
  };

  return (
    <>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-800 text-white md:hidden hover:bg-gray-700 transition-colors"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`
        fixed md:static
        top-0 ${isMenuOpen ? 'left-0' : '-left-64'} md:left-0
        w-64 md:w-48
        h-screen
        bg-gray-900
        p-4
        transition-all duration-300 ease-in-out
        z-40
        overflow-y-auto
      `}>
        <ul className="flex flex-col gap-4 mt-16 md:mt-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`
                  italic block w-full text-left rounded-lg px-4 py-2
                  text-sm font-medium 
                  ${currentPage === item.id
                    ? 'bg-gray-100 text-gray-700'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }
                  transition duration-300 transform hover:scale-105
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigateur;