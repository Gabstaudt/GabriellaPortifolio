import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projectData';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Projeto nÃ£o encontrado</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            O projeto que vocÃª tentou acessar nÃ£o existe ou foi removido.
          </p>
          <Link
            to="/#projects"
            className="inline-block px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors"
          >
            Voltar aos projetos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-block px-4 py-2 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg transition-colors"
          >
            Voltar
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              {project.inProgress && (
                <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Em andamento
                </span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {project.longDescription ?? project.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors shadow-md"
              >
                Ver projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
