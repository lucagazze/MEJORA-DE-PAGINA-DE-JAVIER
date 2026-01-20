import React from 'react';
import { IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Intro = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start">
          
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-2xl mb-8">
              <img src={IMAGES.javier} alt="Javier Riestra" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">Javier Riestra</h3>
            <p className="text-primary font-semibold text-lg mb-4">CEO & Fundador Omni Dental</p>
            <div className="w-24 h-1.5 bg-slate-100 rounded-full"></div>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-lg text-slate-600 leading-relaxed">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 font-sans">Querido Dentista,</h2>
            
            <p>
              Si has intentado, sin éxito, captar pacientes para tu clínica dental... Si quieres atraer más pacientes de alto valor pero no sabes cómo hacerlo...
            </p>
            
            <p>
              Seguro has probado buzoneo, posicionamiento SEO tradicional, gestión de redes sociales y parece que nada impacta realmente en la facturación. O peor aún, has trabajado con agencias "generalistas" que te prometieron la luna y no cumplieron.
            </p>
            
            <div className="border-l-4 border-red-500 pl-6 py-4 my-8 bg-red-50/50 rounded-r-xl">
              <p className="font-bold text-slate-900 text-xl">
                Déjame decirte que NO estás solo.
              </p>
            </div>

            <p>
              Cada semana hablamos con más de 50 clínicas. Escuchamos frases como: <span className="italic text-slate-900 font-medium">"Me enviaban contactos pero nadie cogía el teléfono"</span> o <span className="italic text-slate-900 font-medium">"Sólo conseguí 2 pacientes en 3 meses"</span>.
            </p>
            
            <div className="bg-blue-600 p-8 rounded-2xl shadow-xl relative overflow-hidden group text-white">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
              <p className="font-medium text-lg relative z-10 leading-relaxed">
                Pero después de trabajar con nuestro sistema, las conversaciones cambiaron radicalmente. Hemos descifrado el código para transformar clínicas normales en máquinas de facturación predecible.
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-700 hover:gap-3 transition-all cursor-pointer text-xl"
              >
                Quiero ver si califico para el sistema
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;