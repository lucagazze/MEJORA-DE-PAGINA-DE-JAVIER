import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from './TestimonialCard';
import { ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Historias de Éxito</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Resultados <span className="relative inline-block">
              <span className="relative z-10">Reales</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No confíes en nuestra palabra. Mira lo que dicen los propietarios de clínicas que ya han automatizado su captación de pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>

        <div className="text-center">
           <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1"
           >
             Quiero Resultados Similares
             <ArrowRight className="w-5 h-5" />
           </button>
           <p className="mt-4 text-sm text-slate-500">Plazas limitadas por zona geográfica</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;