import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      aria-label="Introdução do portfólio"
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      <div className="container grid-2" style={{ position: 'relative', zIndex: 1 }}>
        <div className="fade-in">
          <h1 className="title-huge" style={{ marginBottom: '1rem' }}>PORTFÓLIO</h1>
          <h2 className="title-section" style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '2px' }}>KEVIN NERY</h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>ARQUITETURA | KEVIN NERY</p>
          <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 'bold', color: 'var(--accent-color)' }}>2026</p>
        </div>
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <img 
            src="/assets/image1.png" 
            alt="Render 3D de projeto arquitetônico de Kevin Nery" 
            loading="eager"
            style={{ 
              width: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              objectFit: 'cover'
            }} 
          />
        </div>
      </div>
      
      {/* Background large text */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(10rem, 25vw, 20rem)',
          fontFamily: 'var(--font-serif)',
          color: 'var(--accent-color)',
          opacity: 0.05,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        portfólio
      </div>
    </section>
  );
};

export default Hero;
