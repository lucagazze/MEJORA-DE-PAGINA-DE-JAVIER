import React from 'react';
import { ArrowRight, Star, ShieldCheck, PlayCircle } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-slate-50 pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <div className="flex -space-x-1">
               {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-yellow-400 border-2 border-white"></div>)}
            </div>
            <span className="ml-2 text-slate-700">Elegido por <span className="font-bold text-slate-900">+150 Clínicas</span></span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Llenamos tu agenda con <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative">
              Pacientes Reales
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Sistema exclusivo de captación para <strong className="text-slate-900">Implantes y Ortodoncia</strong>. 
            Sin leads falsos. Solo pacientes sentados en tu sillón.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              Solicitar Sistema
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 text-lg font-bold rounded-2xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-slate-400" />
              Ver Resultados
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             {[
               { icon: ShieldCheck, text: "Garantía por Contrato", color: "text-green-600" },
               { icon: Star, text: "Exclusividad de Zona", color: "text-yellow-500" },
               { icon: ShieldCheck, text: "Sin Permanencia", color: "text-blue-600" },
               { icon: Star, text: "Soporte 24/7", color: "text-purple-600" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center gap-2">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-sm font-semibold text-slate-600">{item.text}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;