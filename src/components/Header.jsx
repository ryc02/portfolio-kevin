import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: scrolled ? 'rgba(252, 248, 243, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%'
      }}
    >
      <div style={{ flex: 1 }}>
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: 600,
            letterSpacing: '1px'
          }}
        >
          KN.
        </a>
      </div>

      <nav style={{ display: 'flex', gap: '2.5rem' }}>
        {[
          { name: 'Sobre', id: 'about' },
          { name: 'Projetos', id: 'project-index' },
          { name: 'Contato', id: 'footer' }
        ].map((item) => (
          <a
            key={item.name}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
