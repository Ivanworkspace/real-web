import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Sparkles,
  Target,
  Zap,
  Heart,
  Lightbulb,
  Rocket
} from 'lucide-react';

// Background 3D semplice
function Background3D() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere args={[0.8, 64, 64]} position={[2, 0, -3]}>
          <MeshDistortMaterial
            color="#4fe2e8"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.3}
            opacity={0.6}
            transparent
          />
        </Sphere>
      </Float>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
    </group>
  );
}

export function AboutNew() {
  const stats = [
    { icon: Users, value: '50+', label: 'Clienti Felici', gradient: 'from-cyan-400 to-teal-400' },
    { icon: Award, value: '100+', label: 'Progetti', gradient: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: '+250%', label: 'Crescita Media', gradient: 'from-green-500 to-emerald-500' },
    { icon: Rocket, value: '5+', label: 'Anni Esperienza', gradient: 'from-orange-500 to-red-500' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passione',
      description: 'Ogni progetto è una sfida che affrontiamo con entusiasmo e dedizione',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovazione',
      description: 'Sempre aggiornati sulle ultime tecnologie e trend del settore',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Risultati',
      description: 'Focus su metriche concrete e ROI per il successo del tuo business',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Velocità',
      description: 'Delivery rapido senza compromettere la qualità del lavoro',
      gradient: 'from-cyan-400 to-teal-400'
    }
  ];

  const expertise = [
    {
      title: 'Sviluppo Web & App',
      description: 'React, Next.js, Node.js e le migliori tecnologie per applicazioni scalabili e performanti',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS']
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategie data-driven per far crescere la tua presenza social e aumentare engagement e conversioni',
      skills: ['Instagram Growth', 'Content Strategy', 'Analytics', 'Community Management']
    },
    {
      title: 'Brand & Design',
      description: 'Creiamo identità visive memorabili e design che comunicano i valori del tuo brand',
      skills: ['UI/UX Design', 'Brand Identity', 'Fotografia', 'Video Production']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative overflow-hidden">
      {/* Background 3D */}
      <div className="fixed inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Background3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-900/90 z-0" />

      {/* Contenuto */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Chi Siamo</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
                La Storia di
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                Future Craft
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dove la passione per il codice incontra l'arte del marketing
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Immagine */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img 
                src="/images/fotoivan.jpeg"
                alt="Ivan Santantonio - Founder"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ivan Santantonio</h3>
                <p className="text-cyan-400 font-semibold">Founder & Developer</p>
              </div>
            </motion.div>

            {/* Testo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-6">
                  La Nostra Missione
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Ciao, sono <span className="text-white font-semibold">Ivan Santantonio</span>. Il mondo digitale mi ha affascinato fin da subito. 
                  La possibilità di trasformare idee in codice funzionante e l'evoluzione costante delle tecnologie mi hanno spinto a 
                  studiare e sperimentare senza sosta.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Oltre allo sviluppo, ho scoperto una forte passione per il <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold">marketing digitale</span> e 
                  la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">creazione di contenuti</span> che 
                  comunicano e coinvolgono. Da questo mix di competenze è nata <span className="text-white font-bold">Future Craft</span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Future Craft non è solo un nome, è una promessa: quella di <span className="text-white font-semibold">costruire il futuro digitale</span> dei 
                  nostri clienti, unendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-semibold">sviluppo web 
                  all'avanguardia</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">strategie 
                  di marketing intelligenti</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Valori */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                I Nostri Valori
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              I principi che guidano ogni nostro progetto
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.gradient} mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                Le Nostre Competenze
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Tecnologie e strategie per il tuo successo
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {expertise.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-r from-cyan-400/10 to-teal-400/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Pronto a Iniziare?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Hai un'idea che aspetta di diventare digitale? Una sfida da vincere online? 
                  Parliamone e costruiamo insieme il tuo futuro.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300"
                >
                  Contattaci Ora
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
