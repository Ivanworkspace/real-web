import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './common/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Trasformiamo le tue idee in
            <span className="block">progetti realizzati</span>
            <span className="text-yellow-400">con creatività e innovazione</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Uniamo creatività e tecnologia per dare vita a soluzioni web innovative. 
            Scopri come possiamo aiutarti a distinguerti nel mondo digitale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <Button variant="primary" icon={ArrowRight}>
                Esplora i Nostri Progetti
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">
                Contattaci Oggi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}