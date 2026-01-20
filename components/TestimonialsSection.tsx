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
            Casos de Éxito Reales
          </div>
          <h2 className="section-title">
            Resultados que hablan por sí solos
          </h2>
          <p className="section-desc">
            No te fíes de nuestra palabra. Mira lo que dicen los doctores que ya han duplicado su facturación con nuestro sistema de implantes.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
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