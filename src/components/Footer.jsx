import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="footer"
      role="contentinfo"
      style={{ 
        backgroundColor: 'var(--text-primary)', 
        color: 'var(--bg-color)', 
        padding: '6rem 0', 
        textAlign: 'center' 
      }}
    >
      <div className="container">
        <h2 style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
          color: 'var(--accent-color)', 
          marginBottom: '1rem' 
        }}>
          obrigado!
        </h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          fontWeight: 600, 
          letterSpacing: '2px', 
          marginBottom: '2rem',
          color: 'var(--bg-color)'
        }}>
          KEVIN NERY
        </p>
        
        <nav 
          aria-label="Links de contato" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center', 
            gap: '1rem',
            alignItems: 'center'
          }}
        >
          <a 
            href="tel:+5511997069737" 
            style={{ 
              color: 'var(--bg-color)', 
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            aria-label="Ligar para Kevin Nery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            (11) 99706-9737
          </a>
          
          <span style={{ color: 'var(--bg-color)', opacity: 0.4 }} aria-hidden="true">|</span>
          
          <a 
            href="mailto:kevineryarq@gmail.com" 
            style={{ 
              color: 'var(--bg-color)', 
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            aria-label="Enviar email para Kevin Nery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            kevineryarq@gmail.com
          </a>
          
          <span style={{ color: 'var(--bg-color)', opacity: 0.4 }} aria-hidden="true">|</span>
          
          <a 
            href="https://instagram.com/neryy_arq" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--bg-color)', 
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            aria-label="Visitar perfil do Instagram de Kevin Nery (abre em nova aba)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            @neryy_arq
          </a>
        </nav>
        
        <p style={{ 
          marginTop: '3rem', 
          fontSize: '0.875rem', 
          opacity: 0.6,
          color: 'var(--bg-color)'
        }}>
          {new Date().getFullYear()} Kevin Nery Rodrigues. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
