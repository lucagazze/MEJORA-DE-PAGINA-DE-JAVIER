import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Omnidental</h3>
        <p className="mb-8">Expertos en Marketing Dental para Clínicas que quieren crecer.</p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Cookies</a>
        </div>

        <div className="text-xs text-slate-600 max-w-xl mx-auto space-y-2">
          <p>© {new Date().getFullYear()} Omni Online. All Rights Reserved.</p>
          <p>Este sitio web no es parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio web NO está respaldado por Facebook de ninguna manera.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;