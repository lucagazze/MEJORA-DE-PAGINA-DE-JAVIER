import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`sticky-cta-wrapper ${isVisible ? 'visible' : ''}`}>
      <button
        onClick={scrollToForm}
        className="sticky-cta-btn"
      >
        Sí, Necesito Nuevos Pacientes
        <ArrowUpRight size={20} />
      </button>
    </div>
  );
};

export default StickyCTA;