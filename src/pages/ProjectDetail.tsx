import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code, Users, Calendar, X } from 'lucide-react';
import { projectsData } from '../data/projects';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <Link 
            to="/projects"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">{project.technology}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-600 mb-6">{project.challenge}</p>
                
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-gray-600 mb-6">{project.solution}</p>
                
                <h2 className="text-2xl font-bold mb-4">The Result</h2>
                <p className="text-gray-600">{project.result}</p>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-contain rounded-lg shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(project.image)}
              />
              {project.gallery?.map((image, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.article>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
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
                className="block max-w-[90vw] max-h-[90vh] object-contain" 
              />
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}