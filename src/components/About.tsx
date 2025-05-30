import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Palette, Cpu, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Sobre Mim
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sou estudante de Engenharia de Software na UEPA, apaixonada por criar soluções 
              inovadoras e funcionais que combinam tecnologia e design para resolver problemas reais.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Minha experiência abrange desenvolvimento front-end e back-end, design de interfaces, 
              prototipagem de sistemas e projetos envolvendo automação e IoT. Busco constantemente novos
              desafios que me permitam aplicar meus conhecimentos de forma criativa e impactante.
            </p>
          </motion.div>
          
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            Áreas de Atuação
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="text-teal-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Front-end</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Desenvolvimento de interfaces responsivas com Angular, React, HTML, CSS e JavaScript.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Server className="text-teal-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Back-end</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Criação de APIs e serviços com Node.js, Express, Python (Flask/Django).
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Database className="text-teal-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Banco de Dados</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Modelagem e otimização de bancos de dados relacionais (MySQL, PostgreSQL) e NoSQL (MongoDB).
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Palette className="text-teal-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">UI/UX Design</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Prototipagem e design de interfaces com foco em experiência do usuário usando Figma.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Cpu className="text-teal-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">IoT & Automação</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Desenvolvimento de sistemas com ESP32, Arduino e sensores para automação e monitoramento.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Brain className="text-teal-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">IA & Visão Computacional</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Exploração de tecnologias de visão computacional e aprendizado de máquina com TensorFlow.js e OpenCV.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;