import React from 'react';
import { PAIN_POINTS, GAIN_POINTS, SERVICES } from '../constants';
import { XCircle, CheckCircle, Zap, ArrowRight } from 'lucide-react';

const BenefitsSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Pain vs Gain Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-24 max-w-6xl mx-auto">
          
          {/* Pain Points */}
          <div className="bg-white p-10 rounded-3xl border border-red-100 shadow-lg shadow-red-100/50 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              {PAIN_POINTS.title}
            </h3>
            <ul className="space-y-6">
              {PAIN_POINTS.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-600">
                  <span className="text-red-500 mt-0.5 text-xl font-bold">✕</span>
                  <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gain Points */}
          <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-xl shadow-green-100/50 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold text-green-600 mb-8 flex items-center gap-3 relative z-10">
              <CheckCircle className="w-8 h-8" />
              {GAIN_POINTS.title}
            </h3>
            <ul className="space-y-6 relative z-10">
              {GAIN_POINTS.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-700">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services / What we offer */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{SERVICES.title}</h2>
            <p className="text-slate-500 text-xl">Todo lo que necesitas para escalar tu clínica en un solo lugar</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {SERVICES.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all hover:border-primary/30 group">
                <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="font-medium text-lg leading-relaxed pt-1.5 text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="px-12 py-5 bg-primary hover:bg-primaryDark text-white text-xl font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Empezar Ahora
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;