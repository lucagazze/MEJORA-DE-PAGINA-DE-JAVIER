import React from 'react';
import { PAIN_POINTS, GAIN_POINTS, SERVICES } from '../constants';
import { X, Check, Zap, ArrowRight } from 'lucide-react';

const BenefitsSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24 max-w-6xl mx-auto">
          {/* Pain Points - Modern Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <X className="w-6 h-6" />
              </span>
              {PAIN_POINTS.title}
            </h3>
            <ul className="space-y-4">
              {PAIN_POINTS.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-600 group">
                  <span className="mt-1 w-5 h-5 rounded-full border border-red-200 flex items-center justify-center text-red-500 text-xs shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">✕</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gain Points - Highlighted Card */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border-l-4 border-green-500 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                <Check className="w-6 h-6" />
              </span>
              {GAIN_POINTS.title}
            </h3>
            <ul className="space-y-4 relative z-10">
              {GAIN_POINTS.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300 group">
                  <span className="mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-slate-900 text-xs shrink-0 font-bold">✓</span>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Todo Incluido
             </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{SERVICES.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {SERVICES.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-blue-200 group">
                <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.02] inline-flex items-center gap-2"
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