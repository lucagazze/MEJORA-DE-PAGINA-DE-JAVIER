import React from 'react';
import { IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Intro = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="intro">
      <div className="container">
        <div className="intro-wrapper">
          
          <div className="intro-profile">
            <div className="profile-img-container">
              <img src={IMAGES.javier} alt="Javier Riestra" className="profile-img" />
            </div>
            <h3>Javier Riestra</h3>
            <p style={{color: 'var(--primary)', fontWeight: '600'}}>CEO & Fundador Omni Dental</p>
            <div className="divider-small"></div>
          </div>
          
          <div className="intro-text">
            <h2>Querido Dentista,</h2>
            
            <p>
              Si has intentado, sin éxito, captar pacientes para tu clínica dental... Si quieres atraer más pacientes de alto valor pero no sabes cómo hacerlo...
            </p>
            
            <p>
              Seguro has probado buzoneo, posicionamiento SEO tradicional, gestión de redes sociales y parece que nada impacta realmente en la facturación. O peor aún, has trabajado con agencias "generalistas" que te prometieron la luna y no cumplieron.
            </p>
            
            <div className="pain-box">
              <p style={{fontWeight: 'bold', color: 'var(--slate-900)', margin: 0}}>
                Déjame decirte que NO estás solo.
              </p>
            </div>

            <p>
              Cada semana hablamos con más de 50 clínicas. Escuchamos frases como: <em>"Me enviaban contactos pero nadie cogía el teléfono"</em> o <em>"Sólo conseguí 2 pacientes en 3 meses"</em>.
            </p>
            
            <div className="highlight-box">
              <p>
                Pero después de trabajar con nuestro sistema, las conversaciones cambiaron radicalmente. Hemos descifrado el código para transformar clínicas normales en máquinas de facturación predecible.
              </p>
            </div>

            <div>
              <button onClick={scrollToForm} className="text-link">
                Quiero ver si califico para el sistema
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;