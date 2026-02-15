import React, { useState, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { 
  ArrowLeft, 
  Code, 
  Users, 
  Calendar, 
  X, 
  TrendingUp, 
  Target,
  Award,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projects';

// Background 3D minimale
function Background3D() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere args={[0.8, 64, 64]} position={[-2, 0, -4]}>
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

export function ProjectDetailNew() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Progetto non trovato</div>
      </div>
    );
  }

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Estrai metriche dai risultati se presenti
  const extractMetrics = (result: string): Array<{ value: string; type: string }> => {
    const metrics: Array<{ value: string; type: string }> = [];
    const percentageMatch = result.match(/(\d+)%/g);
    if (percentageMatch) {
      percentageMatch.forEach(match => {
        metrics.push({ value: match, type: 'percentage' });
      });
    }
    return metrics;
  };

  const metrics = extractMetrics(project.result || '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative overflow-hidden">
      {/* Background 3D */}
      <div className="fixed inset-0 z-0 opacity-30">
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
      <div className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12 group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Torna ai Progetti</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                {project.category}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-semibold">Case Study</span>
              </motion.div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-teal-200">
              {project.title}
            </h1>

            {/* Info rapide */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-400 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Cliente</div>
                  <div className="text-white font-semibold">{project.client}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Anno</div>
                  <div className="text-white font-semibold">{project.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Tecnologie</div>
                  <div className="text-white font-semibold">{project.technology}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metriche di Successo */}
          {metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-gray-300 text-sm">Crescita Ottenuta</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Colonna Sinistra - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* La Sfida */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                    La Sfida
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* La Soluzione */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    La Soluzione
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>

              {/* I Risultati */}
              <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-teal-400 blur-3xl opacity-20" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-cyan-400 to-teal-400 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                      I Risultati
                    </h2>
                  </div>
                  <p className="text-white leading-relaxed text-lg font-medium">
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Colonna Destra - Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Immagine principale */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-end p-6">
                  <div className="flex items-center gap-2 text-white">
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-semibold">Visualizza full screen</span>
                  </div>
                </div>
              </motion.div>

              {/* Gallery */}
              {project.gallery?.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="relative w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-end p-6">
                    <div className="flex items-center gap-2 text-white">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">Visualizza full screen</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
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
                  Vuoi Risultati Come Questi?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Inizia il tuo progetto oggi e trasforma la tua visione in realtà
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300"
                  >
                    Contattaci Ora
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Fullscreen Immagine */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Fullscreen" 
                className="block max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl" 
              />
              <motion.button 
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-4 -right-4 text-white bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full p-3 shadow-2xl"
                aria-label="Close image"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
