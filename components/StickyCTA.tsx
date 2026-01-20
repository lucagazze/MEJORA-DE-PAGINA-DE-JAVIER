import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      left: '1rem',
      right: '1rem',
      zIndex: 100,
      animation: 'fadeInUp 0.5s ease-out'
    }}>
      <button
        onClick={scrollToForm}
        className="btn-primary"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '1rem',
          borderRadius: '1rem',
          fontSize: '1rem',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
        }}
      >
        Sí, Necesito Nuevos Pacientes
        <ArrowUpRight size={20} />
      </button>
    </div>
  );
};

export default StickyCTA;