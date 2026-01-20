import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, Lock } from 'lucide-react';
import { FORM_ENDPOINT } from '../constants';

const ContactForm = () => {
  const formKey = FORM_ENDPOINT.split('/').pop() || "";
  const [state, handleSubmit] = useForm(formKey);

  if (state.succeeded) {
    return (
      <div id="contact-form" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-100 transform transition-all animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
               <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">¡Solicitud Enviada!</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Hemos recibido tus datos correctamente. Nuestro equipo analizará tu zona y te contactará en menos de 24h.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Tu clínica califica?</h2>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              Trabajamos con exclusividad de zona. Completa el formulario para verificar si tu ubicación está disponible.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nombre</label>
                    <input
                      id="nombre" type="text" name="nombre" required
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Tu nombre"
                    />
                    <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Apellido</label>
                    <input
                      id="apellido" type="text" name="apellido" required
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Tu apellido"
                    />
                    <ValidationError prefix="Apellido" field="apellido" errors={state.errors} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Teléfono</label>
                    <input
                      id="telefono" type="tel" name="telefono" required
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="+34 600 000 000"
                    />
                    <ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email</label>
                    <input
                      id="email" type="email" name="email" required
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="doctor@clinica.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Ciudad</label>
                      <input
                        id="ciudad" type="text" name="ciudad" required
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="Ubicación de la clínica"
                      />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nombre Clínica</label>
                    <input
                      id="clinic_name" type="text" name="clinic_name" required
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Ej. Clínica Dental Sonrisas"
                    />
                  </div>
                </div>

                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <label className="block text-base font-bold text-slate-900 mb-4">
                    ¿Eres el propietario/a de la clínica?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-colors w-full">
                      <input type="radio" name="is_owner" value="Si" required className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-slate-700">Sí, soy propietario</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-colors w-full">
                      <input type="radio" name="is_owner" value="No" className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-slate-700">No, soy empleado</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit" 
                        disabled={state.submitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 rounded-2xl shadow-lg shadow-blue-600/30 transform transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {state.submitting ? 'Verificando...' : 'Verificar Disponibilidad'}
                        {!state.submitting && <Send className="w-6 h-6" />}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mt-6">
                        <Lock className="w-4 h-4" />
                        <span>Tus datos están protegidos por SSL.</span>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;