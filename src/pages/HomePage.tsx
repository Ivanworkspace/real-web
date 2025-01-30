import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
// Rimuovi l'importazione di PortfolioPreview
// import { PortfolioPreview } from '../components/PortfolioPreview';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      {/* Rimuovi il componente PortfolioPreview */}
      {/* <PortfolioPreview /> */}
    </>
  );
}