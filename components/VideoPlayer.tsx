import React, { useEffect, useRef, useState } from 'react';
import { useVideoContext } from '../context/VideoContext';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  id: string; // ID is required now for the mutex logic
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { playingId, setPlayingId } = useVideoContext();
  
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const isPlaying = playingId === id;

  const isVimeo = url.includes('vimeo');
  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  // Helper to send commands to Vimeo iframe
  const postToVimeo = (method: string, value?: string) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const message = { method, value };
      iframeRef.current.contentWindow.postMessage(JSON.stringify(message), '*');
    }
  };

  // Intersection Observer for Auto-play/Pause on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If visible (threshold 0.6), play this video
          setPlayingId(id);
          setIsLoaded(true); // Trigger load if not loaded
        } else {
          // If scrolls out of view AND this was the playing video, stop it
          if (playingId === id) {
            setPlayingId(null);
          }
        }
      },
      { threshold: 0.65 } // 65% of the video must be visible to start
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [id, playingId, setPlayingId]);

  // Effect to handle Play/Pause based on global context state
  useEffect(() => {
    if (isImage) return;

    if (isPlaying) {
      // PLAY LOGIC
      if (isVimeo) {
        postToVimeo('play');
        postToVimeo('setVolume', isMuted ? '0' : '1');
      } else if (videoRef.current) {
        videoRef.current.muted = isMuted; // Mobile needs muted to autoplay
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented (usually because not muted or interaction required)
            // We force mute again to try recovery
            if(videoRef.current) videoRef.current.muted = true;
          });
        }
      }
    } else {
      // PAUSE LOGIC
      if (isVimeo) {
        postToVimeo('pause');
      } else if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isVimeo, isMuted, isImage]);

  // Toggle Mute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (isVimeo) {
      postToVimeo('setVolume', !isMuted ? '0' : '1');
    } else if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Manual Play Click
  const handleContainerClick = () => {
    if (isPlaying) {
      setPlayingId(null); // Pause if clicking
    } else {
      setPlayingId(id); // Play if clicking
      setIsMuted(false); // Unmute on explicit interaction
    }
  };

  if (isImage) {
      return (
        <div className="relative w-full h-full bg-slate-100 rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <img 
              src={url} 
              alt="Testimonio" 
              className="w-full h-full object-cover" 
              loading="lazy" 
            />
        </div>
      )
  }

  // Get optimized Vimeo URL
  const getVimeoUrl = (src: string) => {
    let videoId = '';
    if (src.includes('player.vimeo.com')) {
      const match = src.match(/video\/(\d+)/);
      videoId = match ? match[1] : '';
    } else {
      videoId = src.split('/').pop() || '';
    }
    // API=1 is crucial for postMessage control. Background=1 removes controls for cleaner look (optional)
    return `https://player.vimeo.com/video/${videoId}?api=1&title=0&byline=0&portrait=0&dnt=1&autopause=0`;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-200 group cursor-pointer"
      onClick={handleContainerClick}
      style={{ aspectRatio: '16/9' }}
    >
      {isVimeo ? (
        // Vimeo Player
        <>
          {isLoaded ? (
            <iframe
              ref={iframeRef}
              src={getVimeoUrl(url)}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Testimonio"
              style={{ pointerEvents: 'none' }} // Pass clicks to container
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
               <div className="w-10 h-10 border-4 border-slate-700 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
        </>
      ) : (
        // HTML5 Player
        <video
          ref={videoRef}
          src={url}
          className="absolute top-0 left-0 w-full h-full object-cover"
          playsInline
          loop
          muted={isMuted}
          preload="metadata" // Performance optimization
        ></video>
      )}

      {/* Overlay Controls */}
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        {!isPlaying && (
           <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110">
              <Play size={24} className="text-primary ml-1" fill="currentColor" />
           </div>
        )}
      </div>

      {/* Mute Toggle Button (Visible when playing) */}
      {isPlaying && (
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/70 transition-colors z-20"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;