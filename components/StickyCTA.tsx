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
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-fade-in-up">
      <button
        onClick={scrollToForm}
        className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-2xl flex items-center justify-center gap-2"
      >
        Sí, Necesito Nuevos Pacientes
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default StickyCTA;