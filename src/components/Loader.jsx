import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    // Simulate loading progress
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress > 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Wait a tiny bit after reaching 100% before firing the complete callback
        setTimeout(() => {
          onLoadingComplete();
        }, 600);
      } else {
        setProgress(currentProgress);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--bg-color)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--text-primary)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          Kevin Nery
        </motion.h1>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: '1.2rem',
          fontWeight: 300,
          color: 'var(--accent-color)'
        }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
};

export default Loader;
