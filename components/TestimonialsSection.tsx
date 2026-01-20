import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from './TestimonialCard';
import { ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Resultados Comprobados
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Lo que dicen nuestros doctores
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Hemos ayudado a más de 150 clínicas a duplicar su facturación de implantes. Aquí tienes algunos ejemplos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>

        <div className="text-center">
           <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-slate-900/50 transition-all transform hover:-translate-y-1"
           >
             Quiero Resultados Como Estos
             <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;