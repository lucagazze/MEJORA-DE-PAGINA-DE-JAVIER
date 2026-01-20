import React from 'react';
import { Testimonial } from '../types';
import VideoPlayer from './VideoPlayer';
import { TrendingUp, Calendar, Quote, Activity } from 'lucide-react';
import { IMAGES } from '../constants';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="testimonial-card">
      
      {/* 1. TOP SECTION: Headline & Quote */}
      <div className="card-top">
         <div className="quote-box">
            <Quote className="quote-icon" />
            <h4 className="headline">
               <span style={{color: 'var(--slate-400)', marginRight: '6px', fontSize: '0.8em'}}>«</span>
               {data.headline}
            </h4>
            <p className="quote-text">
               {data.quote}
               <span style={{color: 'var(--slate-400)', marginLeft: '6px'}}>»</span>
            </p>
         </div>
      </div>

      {/* 2. BODY: Video + Info Grid */}
      <div className="testimonial-body">
         <div className="video-wrapper">
            {/* Removed the 'poster' prop so VideoPlayer handles the thumbnail logic internally */}
            <VideoPlayer url={data.videoUrl} />
         </div>

         <div className="card-info-col">
            <h3 style={{fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)'}}>{data.clinicName}</h3>
            
            <div className="info-list">
               <div className="info-item">
                  <div className="info-icon"><TrendingUp size={14} /></div>
                  <div>
                     <strong>Resultado:</strong> {data.result}
                  </div>
               </div>
               <div className="info-item">
                  <div className="info-icon"><Activity size={14} /></div>
                  <div>
                     <strong>Tratamiento:</strong> {data.treatment}
                  </div>
               </div>
               <div className="info-item">
                  <div className="info-icon"><Calendar size={14} /></div>
                  <div>
                     <strong>Fecha:</strong> {data.date}
                  </div>
               </div>
            </div>

            {data.logoUrl && (
              <div style={{marginTop: 'auto', paddingTop: '1.5rem'}}>
                 <img src={data.logoUrl} alt={data.clinicName} className="clinic-logo" />
              </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default TestimonialCard;