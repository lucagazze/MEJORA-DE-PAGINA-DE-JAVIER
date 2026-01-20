import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from './TestimonialCard';
import { ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="label">
            Resultados Comprobados
          </div>
          <h2 className="section-title">
            Lo que dicen nuestros doctores
          </h2>
          <p className="section-desc">
            Hemos ayudado a más de 150 clínicas a duplicar su facturación de implantes. Aquí tienes algunos ejemplos reales.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>

        <div className="text-center">
           <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-dark"
           >
             Quiero Resultados Como Estos
             <ArrowRight size={20} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;