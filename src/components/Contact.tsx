import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactEndpoint) {
      setStatus({
        type: 'error',
        message:
          'Configure VITE_CONTACT_FORM_ENDPOINT para que o formulÃ¡rio envie mensagens.'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: 'idle', message: '' });

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso. Vou receber no email configurado.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'NÃ£o foi possÃ­vel enviar a mensagem agora. Verifique a configuraÃ§Ã£o do endpoint.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Contato
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div variants={itemVariants} className="lg:w-1/3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                InformaÃ§Ãµes de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-teal-500 dark:text-teal-300" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      gabimstaudt@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-teal-500 dark:text-teal-300" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      Telefone
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      +55 (91) 9805-4058
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-teal-500 dark:text-teal-300" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      LocalizaÃ§Ã£o
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      Ananindeua, ParÃ¡ - Brasil
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                {status.message && (
                  <div
                    className={`mb-6 rounded-lg px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-lg transition-colors shadow-md"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
