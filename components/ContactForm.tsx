import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FORM_ENDPOINT } from '../constants';

const ContactForm = () => {
  const formKey = FORM_ENDPOINT.split('/').pop() || "";
  const [state, handleSubmit] = useForm(formKey);

  if (state.succeeded) {
    return (
      <div id="contact-form" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center border border-green-100 transform transition-all animate-fade-in-up">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
               <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">¡Solicitud Recibida!</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Muchas gracias por tu interés. <br/>
              Nuestro equipo de especialistas revisará tu solicitud y te contactará en las próximas 24 horas laborables.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/30 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-card overflow-hidden border border-slate-100">
          <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl"></div>
            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Aplica para Trabajar con Nosotros</h2>
               <p className="text-blue-200 text-lg">Completa el formulario para ver si tu clínica califica para nuestro sistema de alto rendimiento.</p>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-bold text-slate-700">Nombre <span className="text-red-500">*</span></label>
                  <input
                    id="nombre"
                    type="text" 
                    name="nombre"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                    placeholder="Tu nombre"
                  />
                  <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="apellido" className="block text-sm font-bold text-slate-700">Apellido <span className="text-red-500">*</span></label>
                  <input
                    id="apellido"
                    type="text" 
                    name="apellido"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                    placeholder="Tu apellido"
                  />
                  <ValidationError prefix="Apellido" field="apellido" errors={state.errors} />
                </div>
              </div>

              {/* Row 2: Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="telefono" className="block text-sm font-bold text-slate-700">Teléfono <span className="text-red-500">*</span></label>
                  <input
                    id="telefono"
                    type="tel" 
                    name="telefono"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                    placeholder="+34 600 000 000"
                  />
                  <ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700">Correo Electrónico <span className="text-red-500">*</span></label>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                    placeholder="doctor@clinica.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              {/* Row 3: City */}
              <div className="space-y-2">
                  <label htmlFor="ciudad" className="block text-sm font-bold text-slate-700">Ciudad <span className="text-red-500">*</span></label>
                  <input
                    id="ciudad"
                    type="text" 
                    name="ciudad"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                    placeholder="Ej. Madrid"
                  />
                  <ValidationError prefix="Ciudad" field="ciudad" errors={state.errors} />
              </div>

              {/* Row 4: Clinic Name */}
              <div className="space-y-2">
                <label htmlFor="clinic_name" className="block text-sm font-bold text-slate-700">Nombre de la Clínica Dental <span className="text-red-500">*</span></label>
                <p className="text-xs text-slate-500 mb-2">¿Cómo se llama la clínica dental de la cual eres propietario/a o gerente?</p>
                <input
                  id="clinic_name"
                  type="text" 
                  name="clinic_name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                  placeholder="Clínica Dental..."
                />
                <ValidationError prefix="Clinic" field="clinic_name" errors={state.errors} />
              </div>

              {/* Row 5: Owner Question */}
              <div className="space-y-3 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <label className="block text-sm font-bold text-slate-900">
                  ¿Eres dentista o propietario/a de una clínica dental? <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-slate-600 font-medium">Si la respuesta es No, por favor no envíes el formulario.</p>
                
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="radio" name="is_owner" value="Si" required className="peer sr-only" />
                      <div className="w-6 h-6 border-2 border-slate-300 rounded-full peer-checked:border-primary peer-checked:bg-primary transition-all"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900">Sí</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="radio" name="is_owner" value="No" className="peer sr-only" />
                       <div className="w-6 h-6 border-2 border-slate-300 rounded-full peer-checked:border-red-500 peer-checked:bg-red-500 transition-all"></div>
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900">No</span>
                  </label>
                </div>
                <ValidationError prefix="Owner" field="is_owner" errors={state.errors} />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <div className="relative flex items-start mt-1">
                  <input type="checkbox" id="terms" name="terms" required className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center cursor-pointer">
                    <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer select-none">
                  Acepto los términos y condiciones y la política de privacidad.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-primary hover:bg-primaryDark text-white text-xl font-bold py-5 rounded-xl shadow-lg shadow-blue-500/30 transform transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {state.submitting ? 'Enviando...' : 'Enviar'}
                {!state.submitting && <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                <AlertCircle className="w-4 h-4" />
                <p>Tus datos están 100% seguros y encriptados.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;