import React from 'react';
import { Testimonial } from '../types';
import VideoPlayer from './VideoPlayer';
import { TrendingUp } from 'lucide-react';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="testimonial-card-new">
      <div className="t-card-content">
         
         {/* VIDEO SIDE (Left) */}
         <div className="t-video-wrapper">
            <VideoPlayer url={data.videoUrl} poster={data.photoUrl} />
         </div>

         {/* INFO SIDE (Right) */}
         <div className="t-info-wrapper">
            
            {/* Green Badge (Reference Image Style) */}
            <div className="t-result-badge">
               <TrendingUp size={14} className="mr-1.5" />
               {data.result}
            </div>

            {/* Quote */}
            <blockquote className="t-quote">
               "{data.quote}"
            </blockquote>

            {/* Divider */}
            <div className="t-divider"></div>

            {/* Simple Footer */}
            <div className="flex items-center gap-4">
                 {/* Clinic Initial/Logo */}
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 flex-shrink-0 text-lg font-bold text-slate-700">
                    {data.logoUrl ? (
                         <img src={data.logoUrl} alt="" className="w-full h-full object-contain p-1 opacity-90" />
                    ) : (
                         data.clinicName.charAt(0)
                    )}
                 </div>

                 {/* Text Info */}
                 <div className="flex flex-col">
                     <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {data.clinicName}
                     </h4>
                     <p className="text-xs text-slate-500 mt-0.5">
                        {data.treatment} • {data.date}
                     </p>
                 </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default TestimonialCard;