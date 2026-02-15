import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavbarNew } from './components/NavbarNew';
import { HomePage } from './pages/HomePage';
import { ProjectsPageNew } from './pages/ProjectsPageNew';
import { ProjectDetailNew } from './pages/ProjectDetailNew';
import { AboutNew } from './pages/AboutNew';
import { ContactPageNew } from './pages/ContactPageNew';
import { FooterNew } from './components/FooterNew';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-gray-900">
        <NavbarNew />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutNew />} />
          <Route path="/projects" element={<ProjectsPageNew />} />
          <Route path="/projects/:id" element={<ProjectDetailNew />} />
          <Route path="/contact" element={<ContactPageNew />} />
        </Routes>
        <FooterNew />
      </div>
    </BrowserRouter>
  );
}

export default App;