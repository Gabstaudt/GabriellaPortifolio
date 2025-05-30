import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';




const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Gabriella Staudt
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-teal-500 dark:text-teal-400 mb-6">
              Estudante de Engenharia de Software
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Desenvolvendo soluções inovadoras e funcionais que combinam tecnologia e design para criar experiências impactantes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors shadow-md"
              >
                Ver Projetos
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg transition-colors"
              >
                Contato
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/gabstaudt" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2 text-gray-700 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/gabstaudt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2 text-gray-700 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="gabimstaudt@gmail.com" aria-label="Email"
                className="p-2 text-gray-700 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="../public/perfil.png" 
                alt="Gabriella Staudt" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;