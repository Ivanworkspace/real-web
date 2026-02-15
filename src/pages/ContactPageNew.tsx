import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Facebook
} from 'lucide-react';

// Background 3D
function Background3D() {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
        <Sphere args={[1, 64, 64]} position={[-2, 1, -4]}>
          <MeshDistortMaterial
            color="#4fe2e8"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.3}
            opacity={0.6}
            transparent
          />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.7, 64, 64]} position={[2, -1, -3]}>
          <MeshDistortMaterial
            color="#06B6D4"
            attach="material"
            distort={0.3}
            speed={2.5}
            roughness={0.3}
            opacity={0.6}
            transparent
          />
        </Sphere>
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
}

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/future_.craft',
    gradient: 'from-cyan-400 via-teal-400 to-blue-400',
    description: 'Seguici per contenuti esclusivi'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://it.linkedin.com/in/ivan-santantonio-aa7416233',
    gradient: 'from-blue-600 to-cyan-600',
    description: 'Connettiti con noi professionalmente'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/1BGLoWPcDp/',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Seguici sulla nostra pagina'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/393791408773',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Scrivici direttamente'
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@futurecraft.com',
    link: 'mailto:info@futurecraft.com',
    gradient: 'from-cyan-400 to-teal-400'
  },
  {
    icon: Phone,
    title: 'Telefono',
    value: '+39 379 140 8773',
    link: 'https://wa.me/393791408773',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: MapPin,
    title: 'Posizione',
    value: 'Italia',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Clock,
    title: 'Orari',
    value: 'Lun-Ven 9:00-18:00',
    gradient: 'from-orange-500 to-red-500'
  }
];

export function ContactPageNew() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative overflow-hidden">
      {/* Background 3D */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Background3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
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
              <Send className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Contattaci</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
                Parliamo del
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                Tuo Progetto
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Siamo pronti ad ascoltare le tue idee e trasformarle in realtà digitale
            </p>
          </motion.div>

          {/* Info Contatti */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.gradient} mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-400 text-sm mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-white font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 transition-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white font-semibold">{info.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                Seguici sui Social
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Resta aggiornato sui nostri progetti e contenuti esclusivi
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300`} />
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center justify-between overflow-hidden">
                    {/* Decorazione sfondo */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${social.gradient} blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${social.gradient}`}>
                        <social.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{social.name}</h3>
                        <p className="text-gray-400 text-sm">{social.description}</p>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <Send className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="relative inline-block max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-r from-cyan-400/10 to-teal-400/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <h2 className="text-4xl font-bold text-white">Iniziamo Subito!</h2>
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Che tu abbia bisogno di un sito web, una strategia social o una completa trasformazione digitale, 
                  siamo qui per aiutarti a raggiungere i tuoi obiettivi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/393791408773"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Scrivici su WhatsApp
                  </motion.a>

                  <motion.a
                    href="mailto:info@futurecraft.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Inviaci una Email
                  </motion.a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    💬 Risposta garantita entro 24 ore • 🚀 Consulenza gratuita • 🎯 Zero impegno
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Orari Extra */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Orari di Disponibilità</h3>
              </div>
              <div className="text-gray-300">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato - Domenica: Su appuntamento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
