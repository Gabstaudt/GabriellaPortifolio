import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projectData';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const galleryImages = project
    ? project.galleryImages?.length
      ? project.galleryImages
      : [{ src: project.imageUrl, alt: project.title }]
    : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [slug]);

  if (!project) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Projeto nÃƒÂ£o encontrado</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            O projeto que vocÃƒÂª tentou acessar nÃƒÂ£o existe ou foi removido.
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

  const relatedProjects = (project.relatedSlugs ?? [])
    .map((relatedSlug) => projects.find((item) => item.slug === relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const hasMultipleImages = galleryImages.length > 1;
  const currentImage = galleryImages[currentImageIndex];

  const showPreviousImage = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

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
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
              <img
                src={currentImage.src}
                alt={currentImage.alt ?? project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors"
                    aria-label="PrÃ³xima imagem"
                  >
                    <ChevronRight size={22} />
                  </button>
                  <div className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </>
              )}
            </div>

            {currentImage.caption && (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {currentImage.caption}
              </p>
            )}

            {hasMultipleImages && (
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
                {galleryImages.map((image, index) => {
                  const isActive = index === currentImageIndex;

                  return (
                    <button
                      key={`${project.slug}-gallery-${index}`}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`overflow-hidden rounded-xl border-2 transition-all ${
                        isActive
                          ? 'border-teal-500 shadow-md'
                          : 'border-transparent hover:border-teal-300'
                      }`}
                      aria-label={`Abrir imagem ${index + 1} do projeto ${project.title}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt ?? `${project.title} ${index + 1}`}
                        className="h-20 w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            )}
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

        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Projetos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  to={`/projetos/${related.slug}`}
                  className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={related.imageUrl}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{related.title}</h3>
                      {related.inProgress && (
                        <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          Em andamento
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
