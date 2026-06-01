import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
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
      <div style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span style={{ display: 'block', fontWeight: 300 }}>{t('hero.title')}</span>
            <span style={{ display: 'block', fontWeight: 600, fontStyle: 'italic' }}>{t('hero.lastName')}</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginTop: '2rem' }}
        >
          <p style={{ 
            fontFamily: 'var(--font-sans)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            {t('hero.subtitle')}
          </p>
        </motion.div>
      </div>
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
          fontFamily: 'var(--font-sans)', 
          fontSize: '0.7rem', 
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>Scroll</span>
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
