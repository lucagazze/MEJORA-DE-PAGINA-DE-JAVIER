import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Omnidental</h3>
        <p>Expertos en Marketing Dental para Clínicas que quieren crecer.</p>
        
        <div className="footer-links">
          <a href="#">Aviso Legal</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Política de Cookies</a>
        </div>

        <div style={{fontSize: '0.75rem', color: 'var(--slate-600)', maxWidth: '600px', margin: '0 auto'}}>
          <p>© {new Date().getFullYear()} Omni Online. All Rights Reserved.</p>
          <p style={{marginTop: '0.5rem'}}>Este sitio web no es parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio web NO está respaldado por Facebook de ninguna manera.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;