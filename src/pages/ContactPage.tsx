import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/future_.craft',
    color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
    hoverEffect: 'hover:scale-105 hover:rotate-6'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://it.linkedin.com/in/ivan-santantonio-aa7416233',
    color: 'bg-blue-600',
    hoverEffect: 'hover:scale-105 hover:-rotate-6'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/ivan.santantonio',
    color: 'bg-blue-500',
    hoverEffect: 'hover:scale-105 hover:rotate-6'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/393791408773',
    color: 'bg-green-500',
    hoverEffect: 'hover:scale-105 hover:-rotate-6'
  }
];

export function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Restiamo in Contatto" 
            subtitle="Seguici sui social media per rimanere aggiornato sui nostri ultimi progetti e novità"
          />

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    ${social.color} ${social.hoverEffect}
                    p-6 rounded-xl shadow-lg 
                    transform transition-all duration-300
                    flex items-center justify-between
                    text-white
                  `}
                >
                  <div className="flex items-center space-x-4">
                    <social.icon className="w-8 h-8" />
                    <span className="text-lg font-semibold">{social.name}</span>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-white"
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Orari di Disponibilità
              </h3>
              <p className="text-gray-600">
                Lun - Ven: 9:00 - 18:00
              </p>
              <p className="text-gray-600">
                Sab - Dom: Su appuntamento
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8 p-6 bg-white rounded-xl shadow-lg"
            >
              <p className="text-gray-600">
                Preferisci una comunicazione diretta?
                <br />
                Scrivici su WhatsApp o inviaci un messaggio sui social!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 