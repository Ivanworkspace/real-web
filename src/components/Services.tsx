import React from 'react';
import { Code, Palette, Zap, Globe, Shield, Users } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';

const services = [
  {
    icon: Code,
    title: 'Sviluppo Web',
    description: 'Applicazioni web personalizzate costruite con tecnologie moderne e best practices'
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Interfacce belle e intuitive che migliorano l\'esperienza utente'
  },
  {
    icon: Globe,
    title: 'Marketing Digitale',
    description: 'Soluzioni di marketing strategico per far crescere la tua presenza online'
  },
  {
    icon: Shield,
    title: 'Sicurezza Informatica',
    description: 'Proteggi i tuoi asset digitali con le nostre soluzioni di sicurezza'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Ottimizza le tue applicazioni per la massima velocità ed efficienza'
  },
  {
    icon: Users,
    title: 'Consulenza',
    description: 'Consulenza esperta per guidare il tuo percorso di trasformazione digitale'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="I Nostri Servizi" 
          subtitle="Offriamo una gamma completa di soluzioni digitali per aiutare la tua azienda a prosperare nell'era digitale"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}