import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import { projectsData } from '../data/projects';
import { Button } from './common/Button';

export function PortfolioPreview() {
  const previewProjects = projectsData.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Featured Work" 
          subtitle="Take a look at some of our recent projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="relative w-full h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Error loading image: ${project.image}`);
                      e.currentTarget.src = '/images/placeholder.png'; // Immagine di fallback
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="primary" icon={ArrowRight} className="bg-indigo-600 text-white hover:bg-indigo-700">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}