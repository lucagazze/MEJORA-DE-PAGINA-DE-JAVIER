import React, { useState, useEffect } from 'react';
import { Play, Volume2, Maximize2, Settings } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null);

  if (!url) return <div className="w-full h-full bg-slate-900 rounded-lg"></div>;

  const isVimeo = url.includes('vimeo');
  const isMp4 = url.toLowerCase().endsWith('.mp4');
  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  useEffect(() => {
    if (isVimeo && !poster) {
      // Extract Vimeo ID
      const idMatch = url.match(/video\/(\d+)/) || url.match(/vimeo\.com\/(\d+)/);
      const videoId = idMatch ? idMatch[1] : url.split('/').pop()?.split('?')[0];

      if (videoId) {
        // Try v2 API first
        fetch(`https://vimeo.com/api/v2/video/${videoId}.json`)
          .then(res => {
            if (!res.ok) throw new Error('Failed');
            return res.json();
          })
          .then(data => {
            if (Array.isArray(data) && data.length > 0) {
              setVimeoThumbnail(data[0].thumbnail_large);
            }
          })
          .catch(() => {
            // Fallback to oEmbed
            fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
              .then(res => res.json())
              .then(data => {
                if (data.thumbnail_url) setVimeoThumbnail(data.thumbnail_url);
              })
              .catch(err => console.error("Could not fetch Vimeo thumbnail", err));
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
    // Updated parameters to match source: title=1, portrait=1, byline=1
    return `https://player.vimeo.com/video/${videoId}?api=1&autoplay=1&muted=0&color=0066FF&title=1&byline=1&portrait=1`;
  };

  if (isImage) {
      return (
        <div className="relative w-full h-full bg-slate-100 overflow-hidden">
            <img src={url} alt="Testimonio" className="w-full h-full object-cover" />
        </div>
      )
  }

  // Determine which image to show
  const activePoster = poster && !poster.includes('picsum') ? poster : vimeoThumbnail;

  return (
    <div 
      className="relative w-full h-full bg-black group cursor-pointer overflow-hidden rounded-lg"
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
        /* --- FAKE PLAYER UI (Start State 00:00) --- */
        <>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-slate-900">
               {activePoster ? (
                 <img src={activePoster} alt="Video thumbnail" className="w-full h-full object-cover opacity-90 transition-opacity duration-500" />
               ) : isMp4 ? (
                 /* Priority 2: If MP4, show the actual video paused at start */
                 <video 
                    src={`${url}#t=0.1`} 
                    className="w-full h-full object-cover opacity-90" 
                    preload="metadata" 
                    muted 
                 />
               ) : (
                 /* Priority 3: Default Cinematic Dark Gradient as last resort */
                 <div className="w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-black" />
               )}
               
               {/* Overlay Gradient for Text Readability */}
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* Play Button - Centered */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-primary border-4 border-transparent group-hover:border-white/20">
                  <Play size={32} className="text-slate-900 ml-1 fill-slate-900 group-hover:text-white group-hover:fill-white transition-colors" />
               </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 w-full px-5 pb-4 pt-12">
               {/* Progress Bar (Empty/Start) */}
               <div className="w-full h-1.5 bg-white/30 rounded-full mb-3 overflow-hidden backdrop-blur-sm">
                  <div className="h-full bg-primary w-0 relative"></div>
               </div>
               
               {/* Icons & Time */}
               <div className="flex items-center justify-between text-white drop-shadow-md">
                  <div className="flex items-center gap-4">
                     <Play size={20} className="fill-white" />
                     <Volume2 size={20} />
                     <span className="text-[13px] font-mono font-medium tracking-wide">00:00</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-90">
                     <Settings size={20} />
                     <div className="flex items-center justify-center border border-white/60 rounded px-1 h-5">
                        <span className="text-[10px] font-bold">HD</span>
                     </div>
                     <Maximize2 size={20} />
                  </div>
               </div>
            </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;