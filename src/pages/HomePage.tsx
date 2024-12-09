import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PortfolioPreview } from '../components/PortfolioPreview';


export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioPreview />
    
    </>
  );
}