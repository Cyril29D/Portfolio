import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col items-center p-8">
      <header className="w-full text-center mb-8">
        <h1 className="italic text-5xl font-bold animate-fade-in-down">Contact</h1>
      </header>

      <section className="w-full max-w-6xl grid md:grid-cols-2 gap-12 px-6">
        <form
          action="https://formspree.io/f/xjkagqgj"
          method="POST"
          className="p-8 glass-panel animate-zoom-in"
        >
          <div className="mb-6">
            <label htmlFor="first-name" className="italic block text-sm font-semibold text-white">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              name="first-name"
              className="mt-3 block w-full rounded-md bg-white/8 px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="last-name" className="italic block text-sm font-semibold text-white">
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              name="last-name"
              className="mt-3 block w-full rounded-md bg-white/8 px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="company" className="italic block text-sm font-semibold text-white">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="mt-3 block w-full rounded-md bg-white/8 px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone-number" className="italic block text-sm font-semibold text-white">
              Phone number
            </label>
            <input
              id="phone-number"
              type="text"
              name="phone-number"
              className="mt-3 block w-full rounded-md bg-white/8 px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="italic block text-sm font-semibold text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-3 block w-full rounded-md bg-white/8 px-4 py-3 text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="italic w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
          >
            Envoyer
          </button>
        </form>

        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="italic text-2xl font-semibold mb-6 animate-fade-in-up">Mes réseaux :</h2>
          
          <a
            href="mailto:cyril.delly@epitech.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-full bg-white/8 hover:bg-indigo-600 transition transform hover:scale-110"
          >
            <FaEnvelope className="w-8 h-8 text-white" />
          </a>
          
          <a
            href="tel:0763956323"
            className="p-5 rounded-full bg-white/8 hover:bg-green-600 transition transform hover:scale-110"
          >
            <FaPhone className="w-8 h-8 text-white" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/cyrildelly"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-full bg-white/8 hover:bg-blue-600 transition transform hover:scale-110"
          >
            <FaLinkedin className="w-8 h-8 text-white" />
          </a>
          
          <a
            href="https://github.com/cyril29D"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-full bg-white/8 hover:bg-gray-800 transition transform hover:scale-110"
          >
            <FaGithub className="w-8 h-8 text-white" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;