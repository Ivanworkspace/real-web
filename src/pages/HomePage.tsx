import React from 'react';
import { HeroNew } from '../components/HeroNew';
import { ServicesNew } from '../components/ServicesNew';
import { SocialMediaSection } from '../components/SocialMediaSection';
import { MarqueeBand } from '../components/fx/Marquee';

export function HomePage() {
  return (
    <>
      <HeroNew />
      <MarqueeBand />
      <ServicesNew />
      <SocialMediaSection />
    </>
  );
}