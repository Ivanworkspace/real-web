import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, BookOpen, Rocket } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';

export function About() {
  const stats = [
    { icon: Code, value: '20+', label: 'Progetti Completati' },
    { icon: Award, value: '10+', label: 'Certificazioni' },
    { icon: BookOpen, value: '4+', label: 'Anni di Esperienza' },
    { icon: Rocket, value: '∞', label: 'Passione' },
  ];

  return (
    <div className="pt-20">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Chi Sono" 
            subtitle="Innovazione e creatività al servizio del digitale"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto lg:max-w-none"
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEXDlg6yX-fmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715681926300?e=2147483647&v=beta&t=CQsGxPvYs75vdhRYPFkeIa30ZvEu3kxwxA9NaZc7qdo" 
                alt="Ivan Santantonio"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">La Mia Storia</h3>
              <p className="text-gray-600">
                Ciao, sono Ivan Santantonio, un appassionato di tecnologia e marketing digitale. 
                La mia passione per l'informatica è nata fin da giovane, spingendomi a esplorare 
                continuamente nuove tecnologie e soluzioni innovative.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800">Il Mio Approccio</h3>
              <p className="text-gray-600">
                Credo fermamente che l'innovazione tecnologica e il marketing digitale siano 
                strumenti fondamentali per il successo nel mondo moderno. La mia filosofia 
                si basa sulla continua ricerca dell'eccellenza e sull'apprendimento costante.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Le Mie Competenze</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sviluppo Web',
                  description: 'Specializzato in tecnologie moderne come React, Next.js e sviluppo frontend avanzato.'
                },
                {
                  title: 'Marketing Digitale',
                  description: 'Esperienza in SEO, social media marketing e strategie di crescita digitale.'
                },
                {
                  title: 'Innovazione Tecnologica',
                  description: 'Costantemente aggiornato sulle ultime tendenze e tecnologie del settore digitale.'
                }
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">{expertise.title}</h4>
                  <p className="text-gray-600">
                    {expertise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sono sempre alla ricerca di nuove sfide e opportunità per crescere 
              professionalmente. Se hai un progetto interessante o vuoi collaborare, 
              non esitare a contattarmi.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}