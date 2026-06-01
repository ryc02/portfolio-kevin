import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Blur effect when scrolled past 50px
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide header on scroll down, show on scroll up (or at top)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: scrolled ? 'rgba(252, 248, 243, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
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
            color: scrolled ? 'var(--text-primary)' : '#ffffff',
            textDecoration: 'none',
            fontWeight: 600,
            letterSpacing: '1px'
          }}
        >
          KN.
        </a>
      </div>

      <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {[
          { name: t('nav.about'), id: 'about' },
          { name: t('nav.projects'), id: 'project-index' },
          { name: t('nav.contact'), id: 'footer' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: scrolled ? 'var(--text-primary)' : '#ffffff',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
            onMouseOut={(e) => e.target.style.color = scrolled ? 'var(--text-primary)' : '#ffffff'}
          >
            {item.name}
          </a>
        ))}
        
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          style={{
            background: 'none',
            border: scrolled ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.3)',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: scrolled ? 'var(--text-primary)' : '#ffffff',
            transition: 'all 0.3s ease',
            marginLeft: '1rem',
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = 'var(--accent-color)';
            e.target.style.color = 'var(--accent-color)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.3)';
            e.target.style.color = scrolled ? 'var(--text-primary)' : '#ffffff';
          }}
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
