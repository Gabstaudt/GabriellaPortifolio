import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/skillsData';
import { Code, Server, Database, Palette, Cpu, Brain } from 'lucide-react';

const Skills: React.FC = () => {
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code size={24} />;
      case 'server': return <Server size={24} />;
      case 'database': return <Database size={24} />;
      case 'palette': return <Palette size={24} />;
      case 'cpu': return <Cpu size={24} />;
      case 'brain': return <Brain size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Habilidades
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="text-teal-500 mr-4">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {skill.level}/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="bg-teal-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(skill.level / 5) * 100}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;