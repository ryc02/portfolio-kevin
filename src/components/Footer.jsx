import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
          obrigado!
        </h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '2rem' }}>
          KEVIN NERY
        </p>
        <div style={{ opacity: 0.8, display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="tel:+5511997069737" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={e => e.target.style.textDecoration='underline'} onMouseOut={e => e.target.style.textDecoration='none'} aria-label="Telefone">
            (11) 99706-9737
          </a>
          <span>|</span>
          <a href="mailto:kevineryarq@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={e => e.target.style.textDecoration='underline'} onMouseOut={e => e.target.style.textDecoration='none'} aria-label="E-mail">
            kevineryarq@gmail.com
          </a>
          <span>|</span>
          <a href="https://instagram.com/neryy_arq" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={e => e.target.style.textDecoration='underline'} onMouseOut={e => e.target.style.textDecoration='none'} aria-label="Instagram">
            @neryy_arq
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
