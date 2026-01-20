import React from 'react';
import { PAIN_POINTS, GAIN_POINTS, SERVICES } from '../constants';
import { X, Check, Zap, ArrowRight } from 'lucide-react';

const BenefitsSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section benefits">
      <div className="container">
        
        <div className="benefits-compare">
          {/* Pain Points */}
          <div className="card-pain">
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span className="icon-box" style={{background: 'var(--red-50)', width: '40px', height: '40px', borderRadius: '50%'}}>
                <X size={20} />
              </span>
              {PAIN_POINTS.title}
            </h3>
            <ul>
              {PAIN_POINTS.items.map((item, idx) => (
                <li key={idx} className="list-item" style={{color: 'var(--slate-600)'}}>
                  <span className="icon-box">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gain Points */}
          <div className="card-gain">
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 10}}>
              <span className="icon-box" style={{background: 'rgba(255,255,255,0.2)', width: '40px', height: '40px', borderRadius: '50%', color: 'var(--green-500)'}}>
                <Check size={20} />
              </span>
              {GAIN_POINTS.title}
            </h3>
            <ul style={{position: 'relative', zIndex: 10}}>
              {GAIN_POINTS.items.map((item, idx) => (
                <li key={idx} className="list-item" style={{color: 'var(--slate-200)'}}>
                  <span className="icon-box">✓</span>
                  <span style={{fontWeight: 500}}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div className="text-center mb-8">
             <div className="label" style={{background: 'var(--primary-light)', color: 'white'}}>
                Todo Incluido
             </div>
            <h2 className="section-title">{SERVICES.title}</h2>
          </div>

          <div className="services-grid">
            {SERVICES.items.map((item, idx) => (
              <div key={idx} className="service-item">
                <div className="service-icon">
                  <Zap size={20} />
                </div>
                <span style={{fontWeight: 600, color: 'var(--slate-700)', fontSize: '1.1rem'}}>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="btn btn-primary"
            >
              Empezar Ahora
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;