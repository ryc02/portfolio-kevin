import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
          obrigado!
        </h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '2rem' }}>
          KEVIN NERY
        </p>
        <p style={{ opacity: 0.8 }}>
          (11) 99706-9737 &nbsp;|&nbsp; kevineryarq@gmail.com &nbsp;|&nbsp; neryy_arq
        </p>
      </div>
    </footer>
  );
};

export default Footer;
