import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="hero" ref={ref} style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', 
      overflow: 'hidden',
      padding: '0'
    }}>
      
      {/* Parallax Background */}
      <motion.div style={{
        position: 'absolute',
        top: '-10%',
        left: 0,
        right: 0,
        bottom: '-10%',
        y,
        zIndex: 0
      }}>
        <img 
          src="/assets/image27.webp" 
          alt="Vitta Studio Render" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark overlay to ensure text readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.35)' }} />
      </motion.div>

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
            color: '#ffffff',
            textTransform: 'uppercase',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            {t('hero.title')}
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
            color: '#ffffff',
            marginBottom: '0.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            {t('hero.lastName')}
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent-light)',
            fontWeight: 500,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            {t('hero.subtitle')}
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
          gap: '10px',
          zIndex: 1
        }}
      >
        <span style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: '0.75rem', 
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          {t('hero.scroll')}
        </span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: '#ffffff',
            opacity: 0.7
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
