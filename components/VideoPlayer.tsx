import React, { useState } from 'react';
import { Play, Volume2, Maximize2, Settings } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!url) return <div className="w-full h-full bg-slate-900 rounded-lg"></div>;

  const isVimeo = url.includes('vimeo');
  const isMp4 = url.toLowerCase().endsWith('.mp4');
  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  const getVimeoUrl = (src: string) => {
    let videoId = '';
    if (src.includes('player.vimeo.com')) {
      const match = src.match(/video\/(\d+)/);
      videoId = match ? match[1] : '';
    } else {
      videoId = src.split('/').pop() || '';
    }
    // Autoplay=1 is crucial here because the user has already clicked our fake play button
    return `https://player.vimeo.com/video/${videoId}?api=1&autoplay=1&muted=0&controls=1&title=0&byline=0&portrait=0&dnt=1`;
  };

  if (isImage) {
      return (
        <div className="relative w-full h-full bg-slate-100 overflow-hidden">
            <img src={url} alt="Testimonio" className="w-full h-full object-cover" />
        </div>
      )
  }

  return (
    <div 
      className="relative w-full h-full bg-black group cursor-pointer overflow-hidden"
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <div className="absolute inset-0 z-20 bg-black">
          {isVimeo ? (
            <iframe
              src={getVimeoUrl(url)}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Testimonio"
            ></iframe>
          ) : (
            <video
              src={url}
              className="w-full h-full object-cover"
              controls
              autoPlay
            ></video>
          )}
        </div>
      ) : (
        /* --- FAKE PLAYER UI (Start State 00:00) --- */
        <div className="absolute inset-0 z-10 flex flex-col justify-between">
            
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-slate-900">
               {/* Priority 1: Provided Poster (if valid image and not placeholder) */}
               {poster && !poster.includes('picsum') ? (
                 <img src={poster} alt="Video thumbnail" className="w-full h-full object-cover opacity-80" />
               ) : isMp4 ? (
                 /* Priority 2: If MP4, show the actual video paused at start */
                 <video 
                    src={`${url}#t=0.1`} 
                    className="w-full h-full object-cover opacity-90" 
                    preload="metadata" 
                    muted 
                 />
               ) : (
                 /* Priority 3: Default Cinematic Dark Gradient for Vimeo/Others */
                 <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black opacity-100" />
               )}
               
               {/* Overlay Gradient for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            </div>

            {/* Play Button - Centered */}
            <div className="relative z-10 flex items-center justify-center flex-1">
               <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary">
                  <Play size={28} className="text-white ml-1 fill-white" />
               </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 w-full px-4 pb-3 pt-8">
               {/* Progress Bar (Empty/Start) */}
               <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden backdrop-blur-sm">
                  <div className="h-full bg-primary w-0 relative">
                      {/* Fake handle at start */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform"></div>
                  </div>
               </div>
               
               {/* Icons & Time */}
               <div className="flex items-center justify-between text-white drop-shadow-md">
                  <div className="flex items-center gap-4">
                     <Play size={18} className="fill-white" />
                     <Volume2 size={18} />
                     <span className="text-[12px] font-mono font-medium tracking-wide">00:00</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-90">
                     <Settings size={18} />
                     <span className="text-[10px] font-bold border border-white/60 px-1 rounded bg-black/20 backdrop-blur-sm">HD</span>
                     <Maximize2 size={18} />
                  </div>
               </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;