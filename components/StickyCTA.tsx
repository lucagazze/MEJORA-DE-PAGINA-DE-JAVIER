import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const form = document.getElementById('contact-form');
    
    // We need to track visibility of both sections
    let isHeroVisible = true;
    let isFormVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) {
            isHeroVisible = entry.isIntersecting;
          }
          if (entry.target === form) {
            isFormVisible = entry.isIntersecting;
          }
        });

        // Show CTA only if we are NOT in Hero AND NOT in Form
        if (!isHeroVisible && !isFormVisible) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { 
        threshold: 0,
        rootMargin: "0px 0px -100px 0px" // Adjust margin to trigger slightly before/after
      }
    );

    if (hero) observer.observe(hero);
    if (form) observer.observe(form);

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`sticky-cta-wrapper ${show ? 'visible' : ''}`}>
      <button
        onClick={scrollToForm}
        className="sticky-cta-btn"
      >
        Sí, Necesito Nuevos Pacientes
        <ArrowUpRight size={22} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default StickyCTA;