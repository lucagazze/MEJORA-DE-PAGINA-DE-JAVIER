import React from 'react';
import { Testimonial } from '../types';
import VideoPlayer from './VideoPlayer';
import { TrendingUp, Calendar, Quote } from 'lucide-react';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="testimonial-card">
      <div className="video-wrapper">
         <VideoPlayer url={data.videoUrl} />
      </div>

      <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <div className="card-header">
           <div>
              <h3 style={{fontSize: '1.1rem', fontWeight: 700}}>{data.clinicName}</h3>
              <p style={{fontSize: '0.9rem', color: 'var(--slate-500)'}}>{data.treatment}</p>
           </div>
           {data.logoUrl && (
             <img src={data.logoUrl} alt="logo" className="clinic-logo" />
           )}
        </div>

        <div className="quote-box">
          <Quote className="quote-icon" />
          <h4 className="headline">{data.headline}</h4>
          <p className="quote-text">"{data.quote}"</p>
        </div>

        <div className="card-footer">
           <div className="result-badge">
              <TrendingUp size={16} />
              {data.result}
           </div>
           <div style={{display: 'flex', gap: '5px', alignItems: 'center', color: 'var(--slate-400)'}}>
              <Calendar size={14} />
              <span>{data.date}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;