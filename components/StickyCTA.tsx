import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Optimization: Use IntersectionObserver on the Hero section instead of scroll listener
    // When Hero is OUT of view, show the Sticky CTA.
    const heroElement = document.querySelector('.hero');
    
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If hero is NOT intersecting (user scrolled past it), show CTA
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="sticky-cta-wrapper">
      <div className="sticky-cta-container">
        <button
          onClick={scrollToForm}
          className="sticky-cta-btn"
        >
          Sí, Necesito Nuevos Pacientes
          <ArrowUpRight size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;