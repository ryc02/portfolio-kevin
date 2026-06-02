import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const indexData = [
  { id: "01", title: "VITTA STUDIO", image: "/assets/capa-vitta-studio.webp" },
  { id: "02", title: "BAHIRA", image: "/assets/capa-bahira.webp", objectPosition: "bottom", objectFit: "cover" },
  { id: "03", title: "AMBEV", image: "/assets/capa-ambev.webp" },
  { id: "04", title: "WOODORA", image: "/assets/capa-woodora.webp" },
  { id: "05", title: "L.A.N.S", image: "/assets/capa-lans.webp" }
];

const ParallaxThumbnail = ({ src, alt, objectPosition = 'center', objectFit = 'cover' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Moves the image slightly up/down as user scrolls past
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} style={{
      width: '100%',
      height: '550px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <motion.img 
        src={src} 
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '130%', // extra height to allow scrolling
          objectFit: objectFit,
          objectPosition: objectPosition,
          display: 'block',
          y,
          position: 'absolute',
          top: '-15%'
        }}
      />
    </div>
  );
};

const ProjectIndex = () => {
  const { t } = useLanguage();

  return (
    <section id="project-index" style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1400px', padding: '0 2rem' }}>
        
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.2rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '3rem',
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          {t('projectIndex.title')}
        </h2>

        <div className="grid-5-cols">
          
          {indexData.map((item) => (
            <div 
              key={item.id} 
              style={{ display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'pointer', transition: 'transform 0.3s ease' }}
              onClick={() => {
                const el = document.getElementById(`project-${item.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              
              {/* Image Container with Border */}
              <div style={{
                border: '2px solid var(--text-primary)',
                padding: '0.2rem',
                flexGrow: 1,
                display: 'flex',
                position: 'relative'
              }}>
                {/* ID Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '-1px',
                  backgroundColor: 'var(--text-primary)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  padding: '0.5rem 1rem',
                  zIndex: 2
                }}>
                  {item.id}
                </div>

                <ParallaxThumbnail src={item.image} alt={item.title} objectPosition={item.objectPosition} objectFit={item.objectFit} />
              </div>

              {/* Title Block below image */}
              <div style={{
                backgroundColor: 'var(--text-primary)',
                color: '#ffffff',
                textAlign: 'center',
                padding: '1.2rem 0.5rem',
                marginTop: '1rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '1px',
                fontSize: '0.9rem',
                fontWeight: 500
              }}>
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectIndex;
