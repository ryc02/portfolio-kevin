import React, { useState } from 'react';
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
