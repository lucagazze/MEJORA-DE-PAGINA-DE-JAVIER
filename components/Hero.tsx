import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      {/* Background blobs */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <div className="container hero-content">
        
        <div className="badge animate-fade-in-up">
          <div className="avatars">
             {[1,2,3].map(i => <div key={i} className="avatar-dot"></div>)}
          </div>
          <span>Elegido por <strong>+150 Clínicas</strong></span>
        </div>

        <h1 className="hero-title animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Llenamos tu agenda con <br className="hidden-mobile" />
          <span className="text-gradient">
            Pacientes Reales
          </span>
        </h1>

        <p className="hero-subtitle animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Sistema exclusivo de captación para <strong>Implantes y Ortodoncia</strong>. 
          Sin leads falsos. Solo pacientes sentados en tu sillón.
        </p>

        <div className="hero-actions animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <button onClick={scrollToForm} className="btn btn-primary group">
            Solicitar Sistema
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary"
          >
            <PlayCircle size={20} />
            Ver Resultados
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;