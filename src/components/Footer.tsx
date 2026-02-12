import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              Gabriella<span className="text-teal-400">.dev</span>
            </h3>
            <p className="mt-2 text-gray-400">
              Estudante de Engenhara de Software
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/#home" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="/#projects" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="/#skills" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/gabstaudt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/gabstaudt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="gabimstaudt@gmail.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Desenvolvido por Gabriella Staudt © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
