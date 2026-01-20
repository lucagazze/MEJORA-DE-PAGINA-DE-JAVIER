import React from 'react';
import { Testimonial } from '../types';
import VideoPlayer from './VideoPlayer';
import { TrendingUp, Calendar, Quote } from 'lucide-react';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-card hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
      <div className="mb-6 rounded-2xl overflow-hidden bg-slate-100">
         <VideoPlayer url={data.videoUrl} />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
           <div>
              <h3 className="text-lg font-bold text-slate-900">{data.clinicName}</h3>
              <p className="text-sm text-slate-500">{data.treatment}</p>
           </div>
           {data.logoUrl && (
             <img src={data.logoUrl} alt="logo" className="h-8 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" />
           )}
        </div>

        <div className="relative mb-6">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 -z-10 transform -scale-x-100" />
          <h4 className="text-xl font-extrabold text-blue-600 mb-3 leading-tight">{data.headline}</h4>
          <p className="text-slate-600 italic leading-relaxed text-sm md:text-base">"{data.quote}"</p>
        </div>

        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between text-sm">
           <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" />
              {data.result}
           </div>
           <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{data.date}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;