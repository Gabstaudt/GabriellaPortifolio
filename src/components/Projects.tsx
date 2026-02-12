import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projectData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  const categories = [
    { id: null, name: 'Todos' },
    { id: 'frontend', name: 'Front-end' },
    { id: 'backend', name: 'Back-end' },
    { id: 'design', name: 'Design' },
    { id: 'iot', name: 'IoT' },
    {id: 'Artigos', name: 'Artigos'}
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Projetos
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {categories.map(category => (
              <button
                key={category.id || 'all'}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === category.id 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {project.inProgress && (
                    <div className="absolute left-3 top-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Em andamento
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs rounded-full bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/projetos/${project.slug}`}
                      className="inline-block px-4 py-2 bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg transition-colors"
                    >
                      Ver detalhes
                    </Link>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors"
                      >
                        Ver projeto
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
