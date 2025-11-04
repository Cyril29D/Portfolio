import { useState, useEffect } from 'react';
import './App.css';
import Navigateur from "./contenaire/Navigateur";
import Profil from './contenaire/Profil';
import Formation from './contenaire/Formation';
import Experience from './contenaire/Experience';
import Contact from './contenaire/Contact';
import Project from "./contenaire/Project";

function App() {
  const [currentPage, setCurrentPage] = useState('profil');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'profil':
        return <Profil />;
      case 'formation':
        return <Formation />;
      case 'experience':
        return <Experience />;
      case 'projet':
        return <Project />;
      case 'contact':
        return <Contact />;
      default:
        return <Profil />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigateur onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 overflow-y-auto">
        <div className="container mx-auto max-w-6xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
