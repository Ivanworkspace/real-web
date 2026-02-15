import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Zap, 
  Instagram,
  TrendingUp,
  Camera,
  Megaphone
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Sviluppo Web & App',
    description: 'Applicazioni web e mobile su misura con tecnologie moderne e scalabili',
    gradient: 'from-cyan-400 to-teal-400',
    features: ['React & Next.js', 'API REST', 'Database Design', 'Cloud Hosting']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Design moderni e interfacce intuitive che convertono visitatori in clienti',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['Figma/Adobe XD', 'Prototipazione', 'Design System', 'User Research']
  },
  {
    icon: Instagram,
    title: 'Social Media Marketing',
    description: 'Strategie social vincenti per far crescere il tuo brand e aumentare le vendite',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Content Strategy', 'Instagram Growth', 'Community Management', 'Analytics']
  },
  {
    icon: Camera,
    title: 'Fotografia & Video',
    description: 'Servizi fotografici professionali per valorizzare il tuo brand',
    gradient: 'from-orange-500 to-red-500',
    features: ['Product Photography', 'Brand Shooting', 'Video Marketing', 'Content Creation']
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Strategie data-driven per aumentare traffico, conversioni e revenue',
    gradient: 'from-green-500 to-emerald-500',
    features: ['SEO/SEM', 'A/B Testing', 'Conversion Rate', 'Analytics']
  },
  {
    icon: Megaphone,
    title: 'Brand Identity',
    description: 'Costruiamo identità di brand forti e memorabili che si distinguono',
    gradient: 'from-yellow-500 to-orange-500',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
  }
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.75 : 0 }}
      />

      {/* Card */}
      <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full shadow-2xl overflow-hidden">
        {/* Sfondo decorativo */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} blur-3xl opacity-20`} />
        
        {/* Icona */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0 
          }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 relative z-10`}
        >
          <service.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Titolo */}
        <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 transition-all duration-300">
          {service.title}
        </h3>

        {/* Descrizione */}
        <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
          {service.description}
        </p>

        {/* Features - mostra al hover */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0 
          }}
          className="overflow-hidden relative z-10"
        >
          <div className="space-y-2 pt-4 border-t border-white/10">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isHovered ? 0 : -20,
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorazione angolo */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.3 : 0.1
          }}
          className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-full blur-2xl`}
        />
      </div>
    </motion.div>
  );
}

export function ServicesNew() {
  return (
    <section className="relative py-32 overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-cyan-900/10 to-gray-900" />
      
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">I Nostri Servizi</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
              Soluzioni Complete
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
              Per Il Tuo Successo
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Offriamo servizi completi per portare il tuo business al livello successivo,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold"> dallo sviluppo al marketing</span>
          </p>
        </motion.div>

        {/* Griglia Servizi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 text-lg mb-6">
            Non trovi il servizio che cerchi?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300"
          >
            Parliamone Insieme
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
