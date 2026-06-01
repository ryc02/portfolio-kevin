import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="footer" style={{ 
      backgroundColor: 'var(--text-primary)', 
      color: 'var(--bg-color)', 
      padding: '10rem 0 4rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(3rem, 6vw, 6rem)', 
            color: 'var(--bg-color)', 
            marginBottom: '1rem',
            lineHeight: 1.1
          }} dangerouslySetInnerHTML={{ __html: t('footer.contact') }}>
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            {t('footer.copyText')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '3rem',
            flexWrap: 'wrap',
            marginBottom: '6rem'
          }}
        >
          <a href="mailto:kevineryarq@gmail.com" 
             style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--bg-color)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease' }}
             onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'}
             onMouseOut={e => e.currentTarget.style.color = 'var(--bg-color)'}
          >
            <Mail size={24} strokeWidth={1.5} />
            <span>kevineryarq@gmail.com</span>
            <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
          </a>
          
          <a href="https://instagram.com/neryy_arq" target="_blank" rel="noopener noreferrer"
             style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--bg-color)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease' }}
             onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'}
             onMouseOut={e => e.currentTarget.style.color = 'var(--bg-color)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@neryy_arq</span>
            <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
          </a>

          <a href="tel:+5511997069737"
             style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--bg-color)', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease' }}
             onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'}
             onMouseOut={e => e.currentTarget.style.color = 'var(--bg-color)'}
          >
            <Phone size={24} strokeWidth={1.5} />
            <span>(11) 99706-9737</span>
            <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
          </a>
        </motion.div>

        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.85rem', 
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            {t('footer.rights')}
          </p>
          <p style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.85rem', 
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Arquitetura & Urbanismo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
