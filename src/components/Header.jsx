import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
