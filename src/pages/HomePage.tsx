import React from 'react';
import { HeroNew } from '../components/HeroNew';
import { ServicesNew } from '../components/ServicesNew';
import { SocialMediaSection } from '../components/SocialMediaSection';

export function HomePage() {
  return (
    <>
      <HeroNew />
      <ServicesNew />
      <SocialMediaSection />
    </>
  );
}