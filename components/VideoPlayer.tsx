import React, { useState, useEffect } from 'react';
import { Play, Volume2, Maximize2, Settings } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  if (!url) return <div className="w-full h-full bg-slate-900 rounded-lg"></div>;

  const isVimeo = url.includes('vimeo');
  const isMp4 = url.toLowerCase().endsWith('.mp4');
  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  useEffect(() => {
    if (poster && !poster.includes('picsum')) {
      setThumbnail(poster);
      return;
    }

    if (isVimeo) {
      const idMatch = url.match(/video\/(\d+)/) || url.match(/vimeo\.com\/(\d+)/);
      const videoId = idMatch ? idMatch[1] : url.split('/').pop()?.split('?')[0];

      if (videoId) {
        fetch(`https://vimeo.com/api/v2/video/${videoId}.json`)
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data) && data.length > 0) {
              setThumbnail(data[0].thumbnail_large); 
            }
          })
          .catch(() => {
            fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
              .then(res => res.json())
              .then(data => { if (data.thumbnail_url) setThumbnail(data.thumbnail_url); })
              .catch(console.error);
          });
      }
    }
  }, [url, isVimeo, poster]);

  const getVimeoUrl = (src: string) => {
    let videoId = '';
    if (src.includes('player.vimeo.com')) {
      const match = src.match(/video\/(\d+)/);
      videoId = match ? match[1] : '';
    } else {
      videoId = src.split('/').pop() || '';
    }
    return `https://player.vimeo.com/video/${videoId}?api=1&autoplay=1&muted=0&color=0066FF&title=0&byline=0&portrait=0`;
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
      className="relative w-full h-full bg-black group cursor-pointer overflow-hidden rounded-xl"
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
              controlsList="nodownload"
            ></video>
          )}
        </div>
      ) : (
        /* --- FAKE PLAYER UI (Looks exactly like a paused player) --- */
        <>
            <div className="absolute inset-0 z-0">
               {thumbnail ? (
                 <img 
                    src={thumbnail} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                 />
               ) : isMp4 ? (
                 <video 
                    src={`${url}#t=0.1`} 
                    className="w-full h-full object-cover opacity-90" 
                    preload="metadata" 
                    muted 
                 />
               ) : (
                  <div className="w-full h-full bg-slate-800" />
               )}
               {/* Vignette Overlay */}
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
               {/* Bottom Gradient for controls contrast */}
               <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Main Play Button */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                 <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play size={20} className="ml-1 text-slate-900 fill-slate-900" />
                 </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-3 pt-4 flex flex-col gap-2">
                 {/* Progress Bar (Empty) */}
                 <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full w-0 bg-white"></div>
                 </div>
                 
                 {/* Icons Row */}
                 <div className="flex items-center justify-between text-white/90">
                    <div className="flex items-center gap-3">
                       <Play size={16} className="fill-white" />
                       <span className="text-[11px] font-medium font-mono">0:00 / 1:23</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Volume2 size={16} />
                       <Settings size={16} />
                       <Maximize2 size={16} />
                    </div>
                 </div>
            </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;