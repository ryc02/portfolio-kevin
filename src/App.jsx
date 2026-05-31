import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectIndex from './components/ProjectIndex';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <ProjectIndex />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
