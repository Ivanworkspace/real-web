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
            subtitle="Dove la passione per il codice incontra l'arte del marketing: la storia di Future Craft"
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
              <p className="text-gray-600 text-lg leading-relaxed">
                Ciao, sono Ivan Santantonio. Il mondo digitale mi ha affascinato fin da subito. La possibilità di trasformare idee in codice funzionante e l'evoluzione costante delle tecnologie mi hanno spinto a studiare e sperimentare senza sosta. Oltre allo sviluppo, ho scoperto una forte passione per il <strong className="font-semibold">marketing digitale</strong> e la <strong className="font-semibold">creazione di contenuti</strong> che comunicano e coinvolgono. Da questo mix di competenze è nata <strong className="text-indigo-600">Future Craft</strong>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Future Craft non è solo un nome, è una promessa: quella di <strong className="font-semibold">costruire</strong> il futuro digitale dei nostri clienti. È nata dalla convinzione che unire <strong className="font-semibold">sviluppo web all'avanguardia</strong> e <strong className="font-semibold">strategie di marketing digitale intelligenti</strong> non fosse solo possibile, ma necessario per emergere davvero.
              </p>
               <p className="text-gray-600 text-lg leading-relaxed">
                Il mio approccio? Non mi accontento della sufficienza. Ogni progetto è un'opportunità per spingersi oltre, per imparare qualcosa di nuovo e per tradurre la visione del cliente in una realtà digitale tangibile e performante. Credo nella collaborazione, nella trasparenza e nei risultati misurabili.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
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
                  description: 'Dalle fondamenta solide di React e Next.js alla creazione di interfacce utente fluide e responsive che catturano l\'attenzione.'
                },
                {
                  title: 'Marketing Digitale',
                  description: 'Non solo codice, ma crescita. Potenziamo la tua presenza online con SEO mirata, social media strategy efficaci e campagne che convertono.'
                },
                {
                  title: 'Innovazione Tecnologica',
                  description: 'Il mondo digitale corre veloce. Io corro con lui, sempre aggiornato sulle ultime tendenze per offrirti soluzioni all\'avanguardia.'
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
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hai un'idea che aspetta di diventare digitale? Una sfida da vincere online? Parliamone. 
              <br className="hidden sm:block" />
              Contattami e costruiamo insieme il tuo futuro.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}