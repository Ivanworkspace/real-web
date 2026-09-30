import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarNew } from './components/NavbarNew';
import { HomePage } from './pages/HomePage';
import { ProjectsPageNew } from './pages/ProjectsPageNew';
import { ProjectDetailNew } from './pages/ProjectDetailNew';
import { AboutNew } from './pages/AboutNew';
import { ContactPageNew } from './pages/ContactPageNew';
import { FooterNew } from './components/FooterNew';
import { SmoothScroll } from './components/fx/SmoothScroll';
import { CustomCursor } from './components/fx/CustomCursor';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <CustomCursor />
      <div className="grain-overlay" aria-hidden />
      <div className="relative min-h-screen bg-gray-900 overflow-x-hidden">
        <NavbarNew />
        <div className="no-horizontal-scroll">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutNew />} />
            <Route path="/projects" element={<ProjectsPageNew />} />
            <Route path="/projects/:id" element={<ProjectDetailNew />} />
            <Route path="/contact" element={<ContactPageNew />} />
          </Routes>
        </div>
        <FooterNew />
      </div>
    </BrowserRouter>
  );
}

export default App;