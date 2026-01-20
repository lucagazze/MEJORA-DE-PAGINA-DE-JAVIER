import React, { useState } from 'react';
import { Send, CheckCircle2, Lock, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xqeedngz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Hubo un error al enviar el formulario.');
      }
    } catch (err) {
      setError('Error de conexión. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div id="contact-form" className="section" style={{background: 'var(--white)'}}>
        <div className="container" style={{maxWidth: '600px'}}>
          <div className="form-card text-center animate-fade-in-up">
            <div style={{width: '80px', height: '80px', background: 'var(--green-50)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'}}>
               <CheckCircle2 size={40} color="var(--green-500)" />
            </div>
            <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>¡Solicitud Enviada!</h3>
            <p style={{color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '2rem'}}>
              Hemos recibido tus datos correctamente. Nuestro equipo analizará tu zona y te contactará en menos de 24h.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-link"
              style={{fontSize: '1rem'}}
            >
              Volver al formulario
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact-form" className="contact-section">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-white" style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem'}}>¿Tu clínica califica?</h2>
          <p className="text-blue-200" style={{fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.5}}>
            Trabajamos con exclusividad de zona. Completa el formulario para verificar si tu ubicación está disponible.
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input id="nombre" type="text" name="nombre" required className="form-input" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label className="form-label">Apellido</label>
                <input id="apellido" type="text" name="apellido" required className="form-input" placeholder="Tu apellido" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input id="telefono" type="tel" name="telefono" required className="form-input" placeholder="+34 600 000 000" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input id="email" type="email" name="email" required className="form-input" placeholder="doctor@clinica.com" />
              </div>
            </div>

            <div className="form-row">
               <div className="form-group">
                  <label className="form-label">Ciudad</label>
                  <input id="ciudad" type="text" name="ciudad" required className="form-input" placeholder="Ubicación de la clínica" />
              </div>
               <div className="form-group">
                <label className="form-label">Nombre Clínica</label>
                <input id="clinic_name" type="text" name="clinic_name" required className="form-input" placeholder="Ej. Clínica Dental Sonrisas" />
              </div>
            </div>

            <div style={{background: 'var(--slate-50)', padding: '1.25rem', borderRadius: '1rem', marginBottom: '2rem', border: '1px solid var(--slate-100)'}}>
              <label style={{display: 'block', fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem'}}>
                ¿Eres el propietario/a de la clínica?
              </label>
              <div className="radio-group">
                <label className="radio-option">
                  <input type="radio" name="is_owner" value="Si" required />
                  <span>Sí, soy propietario</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="is_owner" value="No" />
                  <span>No, soy empleado</span>
                </label>
              </div>
            </div>

            {error && (
              <div style={{background: 'var(--red-50)', color: 'var(--red-500)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <AlertCircle size={20} />
                <p>{error}</p>
              </div>
            )}

            <div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-submit"
                >
                    {isSubmitting ? 'Verificando...' : 'Verificar Disponibilidad'}
                    {!isSubmitting && <Send size={20} />}
                </button>
                
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--slate-400)'}}>
                    <Lock size={14} />
                    <span>Tus datos están protegidos por SSL.</span>
                </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;