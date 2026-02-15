import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Target,
  Instagram,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  DollarSign,
  LineChart,
  Star
} from 'lucide-react';

const clients = [
  { name: 'Masseria Le Cantine', logo: '/images/clients/IMG_2793-a9325dff-0b61-4664-8686-de91173101f1.png' },
  { name: 'Barber Class', logo: '/images/clients/IMG_3390-dca4c09d-76c7-48ee-a8db-a342908b24e5.png' },
  { name: 'Tenuta Terra Tefra', logo: '/images/clients/E1B76A4F-162B-4745-B056-64C8801A6D9A-3c6d01f7-5ec8-4fb3-8c64-29a0f7f524b3.png' },
  { name: 'Beverhouse', logo: '/images/clients/IMG_3907-62035144-bed8-4146-90e2-0b8189b0446a.png' },
  { name: 'Nonna Elena', logo: '/images/clients/e5432cff2f036f642775930da5f16d32-1cdcd8d1-30e7-434c-b4ef-4fa98f334dd4.png' },
  { name: 'Choza', logo: '/images/clients/IMG_3910-4d719762-b988-417d-8d22-1f668d0ba9b0.png' },
  { name: 'La Rambla', logo: '/images/clients/IMG_4294-7e09a872-d2b6-4d44-ad73-d91a59c952a2.png' },
  { name: 'Debicar', logo: '/images/clients/IMG_4468-4bf9b5e5-eda9-46fe-b162-22f159f67453.png' },
  { name: 'Wave Events', logo: '/images/clients/wave-logo.png' },
  { name: 'Bona Events', logo: '/images/clients/bonaevents-logo.png' },
  { name: 'DIM', logo: '/images/clients/dim-logo.svg' },
];

const results = [
  {
    icon: TrendingUp,
    stat: '+350%',
    label: 'Crescita Fatturato Medio',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Users,
    stat: '+280%',
    label: 'Aumento Follower',
    color: 'from-cyan-400 to-teal-400'
  },
  {
    icon: Instagram,
    stat: '+450%',
    label: 'Engagement Rate',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: DollarSign,
    stat: '+200%',
    label: 'ROI Campagne',
    color: 'from-yellow-400 to-amber-500'
  }
];

const services = [
  'Strategia Social Media Personalizzata',
  'Content Creation Professionale',
  'Gestione Community',
  'Advertising Targetizzato',
  'Analisi Performance & Report',
  'Consulenza Brand Identity'
];

const caseStudies = [
  {
    client: 'Masseria Le Cantine',
    increase: '+420%',
    metric: 'Fatturato',
    description: 'Da piccola masseria locale a destinazione ambita dai turisti di tutta la regione'
  },
  {
    client: 'Barber Class',
    increase: '+380%',
    metric: 'Prenotazioni',
    description: 'Fidelizzazione clienti e lista d\'attesa di 2 settimane'
  },
  {
    client: 'Beverhouse',
    increase: '+290%',
    metric: 'Vendite',
    description: 'Crescita esponenziale delle vendite online e foot traffic in store'
  }
];

export function SocialMediaSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-cyan-900/10 to-gray-900">
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-6"
          >
            <Instagram className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Social Media Manager</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
              Risultati Concreti
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
              Sui Social e Sul Fatturato
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Non solo follower, ma <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-bold">risultati misurabili</span> che 
            impattano direttamente sul <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold">tuo business</span>
          </p>
        </motion.div>

        {/* Loghi Clienti - Griglia 3D Animata */}
        <div className="mb-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Hanno Scelto La Nostra Consulenza</h3>
            <p className="text-xl text-gray-300">I brand che hanno trasformato i loro social in opportunità di business</p>
          </motion.div>

          {/* Griglia Loghi 3D Animata */}
          <div className="relative mb-12 p-8 rounded-3xl bg-gradient-to-br from-cyan-900/10 to-teal-900/10 border border-cyan-500/20">
            {/* Effetto glow di sfondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-teal-400/5 blur-3xl" />
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    z: 50
                  }}
                  className="relative group perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-teal-400 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                  
                  {/* Card principale */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-32 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300 shadow-2xl group-hover:shadow-cyan-400/50">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                      style={{ transformStyle: 'preserve-3d' }}
                    />
                    
                    {/* Badge con nome cliente */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scrolling Logos Banner - Versione Semplificata e Garantita */}
          <div className="relative overflow-hidden py-8 rounded-3xl bg-gradient-to-r from-gray-900 via-cyan-900/5 to-gray-900 mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 text-center"
            >
              <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Scorri per vedere tutti i brand</p>
            </motion.div>
            
            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Logos - Con animazione inline */}
            <div 
              className="flex gap-6"
              style={{
                animation: 'scroll-logos 60s linear infinite',
                width: 'max-content'
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center relative group cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-full h-full flex items-center justify-center group-hover:border-cyan-400/50 transition-all group-hover:bg-white/10">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risultati */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            I Nostri Risultati Parlano Chiaro
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${result.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${result.color} mb-4`}>
                    <result.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${result.color} mb-2`}>
                    {result.stat}
                  </div>
                  <div className="text-gray-300 text-sm">{result.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consulenza Gratuita CTA - Migliorata */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 blur-3xl opacity-20" />
          <div className="relative bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-12 overflow-hidden">
            {/* Decorazione angolo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-teal-500 blur-3xl opacity-10" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 font-bold text-lg">OFFERTA ESCLUSIVA</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Consulenza Strategica
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    100% Gratuita
                  </span>
                </h3>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Scopri come possiamo <span className="text-cyan-400 font-bold">aumentare il tuo fatturato</span> attraverso 
                  una strategia social personalizzata, proprio come abbiamo fatto con i nostri clienti che hanno 
                  raggiunto una <span className="text-green-400 font-bold">crescita media del +350%</span>.
                </p>

                <div className="space-y-3 mb-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-200">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300" />
                    <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-white font-bold text-lg">
                      <Target className="w-6 h-6" />
                      <span>Richiedi Consulenza Gratuita</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                </Link>

                <p className="text-gray-400 text-sm mt-4">
                  🎯 Nessun impegno • 💡 Strategie concrete • 📊 Piano d'azione personalizzato
                </p>
              </div>

              {/* Right Side - Case Studies & Highlight */}
              <div className="space-y-6">
                {/* Risultati Concreti per Cliente */}
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-cyan-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <LineChart className="w-8 h-8 text-cyan-400" />
                    <h4 className="text-2xl font-bold text-white">
                      Risultati Reali dei Nostri Clienti
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {caseStudies.map((study, index) => (
                      <motion.div
                        key={study.client}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                        <div className="relative bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/20 rounded-xl p-4 group-hover:border-cyan-400/50 transition-all">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h5 className="text-white font-bold text-lg">{study.client}</h5>
                              <p className="text-gray-400 text-sm">{study.description}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                {study.increase}
                              </div>
                              <div className="text-xs text-gray-400 uppercase">{study.metric}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Focus Fatturato */}
                <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/30 rounded-2xl p-6">
                  <DollarSign className="w-12 h-12 text-green-400 mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Focus Sul Fatturato
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Non ci limitiamo ai "mi piace". Ti aiutiamo a <span className="text-green-400 font-bold">trasformare follower in clienti paganti</span> e 
                    a costruire una strategia che impatti direttamente sulle tue vendite.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                      +350%
                    </div>
                    <div className="text-sm text-gray-400">Crescita Fatturato Media Clienti</div>
                  </div>
                </div>

                {/* Strategia Personalizzata */}
                <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-500/30 rounded-2xl p-6">
                  <Instagram className="w-12 h-12 text-cyan-400 mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Strategia Personalizzata
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ogni business è unico. Creiamo una <span className="text-cyan-400 font-bold">strategia su misura</span> basata 
                    sui tuoi obiettivi, target e settore, proprio come abbiamo fatto con successo per oltre 50 clienti.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-cyan-400">50+</div>
                      <div className="text-xs text-gray-400">Clienti Soddisfatti</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-cyan-400">+280%</div>
                      <div className="text-xs text-gray-400">Crescita Media Follower</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS per lo scroll infinito e prospettiva 3D */}
      <style>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Pausa animazione al hover */
        .overflow-hidden:hover [style*="animation"] {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
