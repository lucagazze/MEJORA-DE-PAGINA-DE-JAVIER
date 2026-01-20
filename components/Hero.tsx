import React from 'react';
import { ArrowRight, Star, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration - Subtle and Professional */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] bg-blue-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full text-sm font-medium mb-8 shadow-sm animate-fade-in text-blue-900">
            <div className="flex -space-x-1">
               {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-yellow-400 border border-white"></div>)}
            </div>
            <span className="ml-2 font-semibold">Elegido por +150 Clínicas Dentales</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
            Llenamos tu agenda con <br className="hidden md:block" />
            <span className="text-primary relative whitespace-nowrap">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-100/50" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C46.169 16.243 21.45 22.122 13.916 26.648c-3.15 1.892-7.854 5.922-10.871 10.932-3.017 5.01-4.086 9.536-2.096 14.24 1.99 4.704 6.88 7.394 11.233 8.356 4.353.962 10.59 1.492 19.332 1.492 8.742 0 19.272-1.396 29.562-4.14 10.29-2.744 20.342-6.42 27.818-10.298C96.39 43.36 103.7 40.23 113.1 36.63c9.4-3.6 21.7-8.2 36.3-12.7 14.6-4.5 31.5-8.4 48.7-11.2 17.2-2.8 34.7-4.2 50.5-4.2 15.8 0 29.8 1.4 42.1 4.2 12.3 2.8 22.8 6.7 31.6 11.2 8.8 4.5 15.9 9.1 21.3 12.7 5.4 3.6 8.9 6.7 10.7 8.3.9.8 2.3 1.7 4 2.5 1.7.8 4.2 1.7 7.2 2.5 3 .8 6.5 1.7 10.2 2.5 3.7.8 7.9 1.7 12.3 2.5 4.4.8 9.3 1.7 14.3 2.5 5 .8 10.5 1.7 16.2 2.5 5.7.8 11.8 1.7 18 2.5 6.2.8 12.8 1.7 19.5 2.5 6.7.8 13.8 1.7 21 2.5 7.2.8 14.8 1.7 22.5 2.5 7.7.8 15.8 1.7 24 2.5 8.2.8 16.8 1.7 25.5 2.5 8.7.8 17.8 1.7 27 2.5 9.2.8 18.8 1.7 28.5 2.5 9.7.8 19.8 1.7 30 2.5 10.2.8 20.8 1.7 31.5 2.5 10.7.8 21.8 1.7 33 2.5 11.2.8 22.8 1.7 34.5 2.5 11.7.8 23.8 1.7 36 2.5 12.2.8 24.8 1.7 37.5 2.5 12.7.8 25.8 1.7 39 2.5 13.2.8 26.8 1.7 40.5 2.5 13.7.8 27.8 1.7 42 2.5 14.2.8 28.8 1.7 43.5 2.5 14.7.8 29.8 1.7 45 2.5 15.2.8 30.8 1.7 46.5 2.5 15.7.8 31.8 1.7 48 2.5 16.2.8 32.8 1.7 49.5 2.5 16.7.8 33.8 1.7 51 2.5"></path></svg>
              Primeras Visitas
            </span>
            <br />de Implantes y Ortodoncia
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Sistema garantizado para clínicas dentales. Sin leads falsos. Sin excusas. <br className="hidden sm:block"/>
            <span className="text-slate-900 font-semibold">Solo pacientes cualificados sentados en tu sillón.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primaryDark text-white text-xl font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-3 group"
            >
              Enviar Solicitud
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-slate-700 text-xl font-semibold rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center"
            >
              Ver Casos de Éxito
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="flex flex-col items-center gap-3 group">
                <div className="p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <span className="text-slate-600 font-medium">Resultados Garantizados</span>
             </div>
             <div className="flex flex-col items-center gap-3 group">
                <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <span className="text-slate-600 font-medium">Exclusividad de Zona</span>
             </div>
             <div className="flex flex-col items-center gap-3 group">
                <div className="p-3 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <span className="text-slate-600 font-medium">Sin Permanencia</span>
             </div>
             <div className="flex flex-col items-center gap-3 group">
                <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <span className="text-slate-600 font-medium">Soporte 24/7</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;