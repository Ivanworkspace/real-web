import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarNew } from './components/NavbarNew';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
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
            <Route path="/servizi" element={<ServicesPage />} />
            {/* Vecchi link alla pagina progetti */}
            <Route path="/projects/*" element={<Navigate to="/servizi" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<ContactPageNew />} />
          </Routes>
        </div>
        <FooterNew />
      </div>
    </BrowserRouter>
  );
}

export default App;