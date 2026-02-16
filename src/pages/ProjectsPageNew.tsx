import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { TrendingUp, Users, Award, Target, Sparkles, BarChart3, Instagram, Star, DollarSign, CheckCircle2, ArrowRight, LineChart } from 'lucide-react';
import { projectsData } from '../data/projects';

// Loghi clienti per Social Media Manager
const socialMediaClients = [
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

const socialMediaStats = [
  { icon: TrendingUp, stat: '+350%', label: 'Crescita Fatturato Medio', color: 'from-green-400 to-emerald-500' },
  { icon: Users, stat: '+280%', label: 'Aumento Follower', color: 'from-cyan-400 to-teal-400' },
  { icon: Instagram, stat: '+450%', label: 'Engagement Rate', color: 'from-pink-400 to-rose-500' },
  { icon: DollarSign, stat: '+200%', label: 'ROI Campagne', color: 'from-yellow-400 to-amber-500' }
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

// Componente 3D per lo sfondo
function Background3D() {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 64, 64]} position={[-3, 0, -5]}>
          <MeshDistortMaterial
            color="#4fe2e8"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      <Float speed={3} rotationIntensity={0.7} floatIntensity={0.7}>
        <Sphere args={[0.7, 64, 64]} position={[3, 1, -4]}>
          <MeshDistortMaterial
            color="#06B6D4"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.4}>
        <Sphere args={[0.5, 64, 64]} position={[0, -2, -3]}>
          <MeshDistortMaterial
            color="#EC4899"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
}

// Statistiche animate
function StatsSection() {
  const stats = [
    { icon: Users, label: 'Clienti Soddisfatti', value: '50+', color: 'from-cyan-400 to-teal-400' },
    { icon: TrendingUp, label: 'Crescita Media', value: '+250%', color: 'from-cyan-500 to-blue-500' },
    { icon: Award, label: 'Progetti Completati', value: '100+', color: 'from-orange-500 to-red-500' },
    { icon: Target, label: 'ROI Medio', value: '+380%', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20 px-2 md:px-0 max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.03, y: -3 }}
          className="relative group"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 blur-lg md:blur-xl transition-opacity duration-500`} />
          <div className="relative bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl">
            <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${stat.color} mb-2 md:mb-4`}>
              <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
            <div className="text-gray-300 text-xs md:text-sm leading-tight">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Card progetto con animazioni avanzate
interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Link to={`/projects/${project.id}`}>
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"
          animate={{ opacity: isHovered ? 0.75 : 0 }}
        />
        
        {/* Card principale */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Badge categoria */}
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl"
            >
              {project.category}
            </motion.div>
          </div>

          {/* Immagine con overlay */}
          <div className="relative h-72 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            
            {/* Sparkles animati */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 left-4"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contenuto */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 mb-6 line-clamp-2">
              {project.description || project.solution}
            </p>

            {/* Info cliente e risultati */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400">Cliente:</span>
                <span className="text-white font-semibold">{project.client}</span>
              </div>
              
              {project.result && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                  className="flex items-start gap-2 text-sm overflow-hidden"
                >
                  <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{project.result}</span>
                </motion.div>
              )}
            </div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-2 text-cyan-400 font-semibold"
              animate={{ x: isHovered ? 10 : 0 }}
            >
              <span>Vedi Case Study</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsPageNew() {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Sviluppo Software', 'Web Design', 'Social Media Manager', 'Content Creator', 'Brand Identity'];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative overflow-x-hidden">
      {/* Background 3D */}
      <div className="fixed inset-0 z-background overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Background3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 z-background pointer-events-none" />

      {/* Contenuto */}
      <div className="relative z-content pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
            >
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Portfolio & Risultati</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-teal-200">
                Progetti che
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                Trasformano Business
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Scopri come abbiamo aiutato aziende e professionisti a crescere attraverso 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold"> soluzioni digitali innovative</span> e 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold"> strategie social vincenti</span>
            </p>
          </motion.div>

          {/* Stats Section */}
          <StatsSection />

          {/* Filtri */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-4"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-xl border border-white/10'
                }`}
              >
                {cat === 'all' ? 'Tutti i Progetti' : cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Sezione Speciale Social Media Manager */}
          <AnimatePresence>
            {filter === 'Social Media Manager' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                {/* CTA Consulenza Gratuita - IN CIMA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-2 border-cyan-400/30 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center mb-12 md:mb-16 mx-auto max-w-4xl"
                >
                  <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 px-2">
                    Consulenza Strategica Gratuita
                  </h3>
                  <p className="text-base md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto px-4">
                    Scopri come possiamo <span className="text-cyan-400 font-bold">far crescere il tuo business</span> sui social media con 
                    una <span className="text-green-400 font-bold">strategia personalizzata</span>
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative inline-flex items-center gap-2 md:gap-3"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300" />
                      <div className="relative flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-white font-bold text-base md:text-lg">
                        <Target className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="hidden sm:inline">Richiedi Consulenza Gratuita</span>
                        <span className="sm:hidden">Consulenza Gratuita</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.button>
                  </Link>
                  <p className="text-gray-400 text-xs md:text-sm mt-4 px-4">
                    🎯 Nessun impegno • 💡 Strategie concrete • 📊 Piano personalizzato
                  </p>
                </motion.div>

                {/* Header Sezione */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-8 md:mb-12 px-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    <span className="text-cyan-300 font-semibold text-sm md:text-base">Social Media Manager</span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                      Sui Social e Sul Fatturato
                    </span>
                  </h2>

                  <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
                    Non solo follower, ma <span className="text-cyan-400 font-bold">crescita di fatturato</span> e 
                    <span className="text-green-400 font-bold"> risultati misurabili</span>
                  </p>
                </motion.div>

                {/* Loghi Clienti Scorrevoli */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-12 md:mb-16 overflow-hidden"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2 md:mb-3 px-4">
                    Brand che Hanno Scelto La Nostra 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"> Consulenza</span>
                  </h3>
                  <p className="text-center text-gray-400 mb-6 md:mb-8 text-sm md:text-base px-4">Scopri i clienti che hanno trasformato i loro social</p>

                  {/* Banner Scorrevole - PRIMA */}
                  <div className="relative overflow-hidden py-6 md:py-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-gray-900 via-cyan-900/5 to-gray-900 mb-6 md:mb-8 mx-2 md:mx-0">
                    <p className="text-xs md:text-sm text-cyan-400 font-semibold uppercase tracking-wider text-center mb-4 px-4">
                      Scorri per vedere tutti i brand
                    </p>
                    
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
                    
                    <div 
                      className="flex gap-4 md:gap-6"
                      style={{
                        animation: 'scroll-logos 60s linear infinite',
                        width: 'max-content',
                        willChange: 'transform'
                      }}
                    >
                      {[...socialMediaClients, ...socialMediaClients, ...socialMediaClients].map((client, index) => (
                        <div
                          key={`${client.name}-${index}`}
                          className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 flex items-center justify-center relative group cursor-pointer hover:scale-105 md:hover:scale-110 transition-transform duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-lg md:blur-xl opacity-0 group-hover:opacity-40 md:group-hover:opacity-50 transition-opacity duration-300" />
                          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg md:rounded-xl p-3 md:p-4 w-full h-full flex items-center justify-center group-hover:border-cyan-400/50 transition-all group-hover:bg-white/10">
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="max-w-full max-h-full object-contain transition-all duration-300"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Griglia Loghi 3D - DOPO */}
                  <div className="relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-cyan-900/10 to-teal-900/10 border border-cyan-500/20 mx-2 md:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-teal-400/5 blur-3xl" />
                    
                    <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                      {socialMediaClients.map((client, index) => (
                        <motion.div
                          key={client.name}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: index * 0.08,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -5
                          }}
                          className="relative group"
                        >
                          <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-400 to-teal-400 blur-md md:blur-xl opacity-0 group-hover:opacity-50 md:group-hover:opacity-60 transition-all duration-500" />
                          
                          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-24 md:h-32 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300 shadow-xl group-hover:shadow-cyan-400/30">
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="max-w-full max-h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                            />
                            
                            <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                              <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                                {client.name}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Statistiche Risultati */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12 md:mb-16 px-2 md:px-0"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 md:mb-8 px-4">
                    I Nostri Risultati Parlano Chiaro
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
                    {socialMediaStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} blur-lg md:blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                        <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                          <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${stat.color} mb-2 md:mb-4`}>
                            <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                          </div>
                          <div className={`text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1 md:mb-2`}>
                            {stat.stat}
                          </div>
                          <div className="text-gray-300 text-xs md:text-sm leading-tight">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="mt-12 md:mt-16 mb-8 md:mb-12 flex items-center gap-2 md:gap-4 px-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <span className="text-cyan-400 font-semibold text-sm md:text-base whitespace-nowrap">I Nostri Progetti</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Griglia Progetti */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-2 md:px-0"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 text-center px-4"
          >
            <div className="relative inline-block w-full max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-2xl md:blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-r from-cyan-400/10 to-teal-400/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                  Pronto a Far Crescere il Tuo Business?
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                  Trasformiamo la tua visione in risultati concreti con soluzioni digitali su misura
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl md:shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300"
                  >
                    Inizia il Tuo Progetto
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS per animazione scroll loghi */}
      <style>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }
      `}</style>
    </div>
  );
}
