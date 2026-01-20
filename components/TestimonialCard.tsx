import React from 'react';
import { Testimonial } from '../types';
import VideoPlayer from './VideoPlayer';
import { CheckCircle2, TrendingUp, Calendar } from 'lucide-react';

interface Props {
  data: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Video Column */}
        <div>
           <VideoPlayer url={data.videoUrl} />
           <div className="mt-4 flex flex-wrap gap-4 items-center justify-center md:justify-start">
             {data.logoUrl && (
               <img src={data.logoUrl} alt="Logo Clinica" className="h-12 object-contain opacity-80" />
             )}
             {data.photoUrl && (
               <img src={data.photoUrl} alt="Foto Clinica" className="h-16 w-24 object-cover rounded-md shadow-sm" />
             )}
           </div>
        </div>

        {/* Content Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{data.clinicName}</h3>
            <h4 className="text-lg font-bold text-primary mt-1">{data.headline}</h4>
          </div>

          <div className="relative pl-4 border-l-4 border-primary/20 italic text-slate-600">
             "{data.quote}"
          </div>

          <div className="pt-4 space-y-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="font-semibold">Resultado:</span> {data.result}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">Tratamiento:</span> {data.treatment}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{data.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;