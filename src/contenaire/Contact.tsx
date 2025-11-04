import React from 'react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import {Mail} from 'lucide-react';
import {Phone, Github, Linkedin} from 'lucide-react';

function Contact() {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    const mailtoLink = `mailto:cyril.delly@epitech.eu?subject=Contact de ${formData.firstName} ${formData.lastName}&body=Prénom: ${formData.firstName}%0D%0ANom: ${formData.lastName}%0D%0AEntreprise: ${formData.company}%0D%0ATéléphone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Contact
      </h1>
      <p className="text-center text-gray-500 mb-16 text-lg">Restons en contact</p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl shadow-cyan-500/5">
          <h2 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Prénom</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Entreprise</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Votre entreprise"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Téléphone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="+33 6 00 00 00 00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Envoyer le message
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl shadow-cyan-500/5">
            <h2 className="text-2xl font-bold text-white mb-6">Informations</h2>
            <div className="space-y-4">
              <a
                href="mailto:cyril.delly@epitech.eu"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/30">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white group-hover:text-cyan-400 transition-colors">cyril.delly@epitech.eu</div>
                </div>
              </a>

              <a
                href="tel:0763956323"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-lg shadow-green-500/30">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Téléphone</div>
                  <div className="text-white group-hover:text-green-400 transition-colors">07 63 95 63 23</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl shadow-purple-500/5">
            <h2 className="text-2xl font-bold text-white mb-6">Réseaux sociaux</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/cyril-delly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-lg hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={32} />
                <span className="text-gray-400 text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/cyril29D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-lg hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all group"
              >
                <Github className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                <span className="text-gray-400 text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;