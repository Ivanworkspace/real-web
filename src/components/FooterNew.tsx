import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles,
  Heart
} from 'lucide-react';

export function FooterNew() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Sviluppo Web', path: '/projects' },
      { name: 'UI/UX Design', path: '/projects' },
      { name: 'Social Media', path: '/projects' },
      { name: 'Fotografia', path: '/projects' }
    ],
    company: [
      { name: 'Chi Siamo', path: '/about' },
      { name: 'Progetti', path: '/projects' },
      { name: 'Contatti', path: '/contact' }
    ]
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      url: 'https://instagram.com/yourprofile', 
      label: 'Instagram',
      gradient: 'from-cyan-400 to-teal-400'
    },
    { 
      icon: Linkedin, 
      url: 'https://it.linkedin.com/in/ivan-santantonio-aa7416233', 
      label: 'LinkedIn',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Phone, 
      url: 'https://wa.me/393791408773', 
      label: 'WhatsApp',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-cyan-900/20 to-gray-950 overflow-hidden">
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonna Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img 
                  src="/images/favicon.png" 
                  alt="Future Craft Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </motion.div>
              <div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  Future Craft
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Trasformiamo idee in successi digitali con creatività, tecnologia e strategia.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Digital Innovation Agency</span>
            </div>
          </div>

          {/* Colonna Servizi */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full" />
              Servizi
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna Azienda */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
              Azienda
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna Contatti */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full" />
              Contatti
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@futurecraft.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-teal-400/20 group-hover:from-cyan-400/30 group-hover:to-teal-400/30 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@futurecraft.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393791408773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+39 379 140 8773</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Italia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>© {currentYear} Future Craft. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in Italy</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg`} />
                <div className={`relative p-3 rounded-lg bg-gradient-to-r ${social.gradient} text-white shadow-lg`}>
                  <social.icon className="w-5 h-5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Extra info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            P.IVA: IT123456789 • Privacy Policy • Cookie Policy • Terms of Service
          </p>
        </div>
      </div>

      {/* Glow decorativo bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-3xl" />
    </footer>
  );
}
