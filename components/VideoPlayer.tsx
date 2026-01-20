import React, { useRef } from 'react';
import { useVideoContext } from '../context/VideoContext';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  id: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, id, poster }) => {
  const { playingId, setPlayingId } = useVideoContext();
  
  // Is this specific video currently active?
  const isPlaying = playingId === id;

  const isVimeo = url.includes('vimeo');
  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  const handlePlay = () => {
    setPlayingId(id);
  };

  const getVimeoUrl = (src: string) => {
    let videoId = '';
    if (src.includes('player.vimeo.com')) {
      const match = src.match(/video\/(\d+)/);
      videoId = match ? match[1] : '';
    } else {
      videoId = src.split('/').pop() || '';
    }
    // params: 
    // autoplay=1 -> Start immediately when loaded (since user clicked play)
    // muted=0 -> Audio ON
    // controls=1 -> Show native controls
    // dnt=1 -> Do not track (privacy)
    return `https://player.vimeo.com/video/${videoId}?api=1&autoplay=1&muted=0&controls=1&title=0&byline=0&portrait=0&dnt=1`;
  };

  // Case: Static Image (Screenshots of results, etc.)
  if (isImage) {
      return (
        <div className="relative w-full h-full bg-slate-100 rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <img 
              src={url} 
              alt="Resultado" 
              className="w-full h-full object-cover" 
              loading="lazy"
              decoding="async" 
            />
        </div>
      )
  }

  return (
    <div 
      className="relative w-full h-full bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-200 group"
      style={{ aspectRatio: '16/9', isolation: 'isolate' }}
    >
      {isPlaying ? (
        /* ACTIVE STATE: Show Video/Iframe with Controls */
        isVimeo ? (
          <iframe
            src={getVimeoUrl(url)}
            className="absolute inset-0 w-full h-full z-10"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Testimonio"
          ></iframe>
        ) : (
          <video
            src={url}
            className="absolute inset-0 w-full h-full object-cover z-10"
            controls
            autoPlay
            playsInline
            // No 'muted' attribute ensures sound is ON
          ></video>
        )
      ) : (
        /* IDLE STATE: Show Poster + Play Button */
        <div 
          className="absolute inset-0 w-full h-full cursor-pointer z-20"
          onClick={handlePlay}
        >
          {poster ? (
            <img 
              src={poster} 
              alt="Ver testimonio"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
             // Fallback gradient if no poster
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
          )}

          {/* Dark overlay for better text/icon contrast */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

          {/* Play Button Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
               <Play size={32} className="text-primary ml-1" fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
             <span className="inline-block px-3 py-1 bg-black/60 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
                Ver Video
             </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;