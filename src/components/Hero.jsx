import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', 
      overflow: 'hidden',
      padding: '0'
    }}>
      <div className="container" style={{ 
        textAlign: 'center',
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="title-huge" style={{ 
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            textTransform: 'uppercase'
          }}>
            Portfólio
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ 
            fontFamily: 'var(--font-sans)', 
            fontWeight: 300, 
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '0.5rem'
          }}>
            Kevin Nery
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent-color)',
            fontWeight: 600
          }}>
            Arquitetura & Urbanismo
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span style={{ 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '2px',
          color: 'var(--text-secondary)'
        }}>
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: 'var(--text-secondary)',
            opacity: 0.5
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
