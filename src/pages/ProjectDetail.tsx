import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Users, Calendar } from 'lucide-react';
import { projectsData } from '../data/projects';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

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
                className="w-full rounded-lg shadow-xl"
              />
              {project.gallery?.map((image, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full rounded-lg shadow-xl"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}