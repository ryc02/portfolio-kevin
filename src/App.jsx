import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectIndex from './components/ProjectIndex';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Anti-right-click protection for images
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
      }
    };
    
    // Also prevent dragging entire document to save assets in some browsers
    const handleDragStart = (e) => {
      if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);
    
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="app">
      
      <AnimatePresence>
        {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Header />
      <Hero />
      <About />
      <ProjectIndex />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
