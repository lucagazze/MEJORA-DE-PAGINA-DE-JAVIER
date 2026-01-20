import React, { useEffect, useRef, useState } from 'react';
import { useVideoContext } from '../context/VideoContext';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  id: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, id, poster }) => {
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

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayingId(id);
          setIsLoaded(true);
        } else {
          if (playingId === id) {
            setPlayingId(null);
          }
        }
      },
      { threshold: 0.65 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [id, playingId, setPlayingId]);

  // Effect to handle Play/Pause
  useEffect(() => {
    if (isImage) return;

    if (isPlaying) {
      if (isVimeo) {
        postToVimeo('play');
        postToVimeo('setVolume', isMuted ? '0' : '1');
      } else if (videoRef.current) {
        videoRef.current.muted = isMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if(videoRef.current) videoRef.current.muted = true;
          });
        }
      }
    } else {
      if (isVimeo) {
        postToVimeo('pause');
      } else if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isVimeo, isMuted, isImage]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (isVimeo) {
      postToVimeo('setVolume', !isMuted ? '0' : '1');
    } else if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleContainerClick = () => {
    if (isPlaying) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      setIsMuted(false);
    }
  };

  const getVimeoUrl = (src: string) => {
    let videoId = '';
    if (src.includes('player.vimeo.com')) {
      const match = src.match(/video\/(\d+)/);
      videoId = match ? match[1] : '';
    } else {
      videoId = src.split('/').pop() || '';
    }
    return `https://player.vimeo.com/video/${videoId}?api=1&title=0&byline=0&portrait=0&dnt=1&autopause=0&background=1`;
  };

  if (isImage) {
      return (
        <div className="relative w-full h-full bg-slate-100 rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <img src={url} alt="Testimonio" className="w-full h-full object-cover" loading="lazy" />
        </div>
      )
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-200 group cursor-pointer"
      onClick={handleContainerClick}
      style={{ aspectRatio: '16/9', isolation: 'isolate' }}
    >
      {/* Vimeo Implementation */}
      {isVimeo && (
        <>
          {/* Poster Layer (Behind iframe, visible until iframe loads opaque) */}
          {poster && (
            <img 
              src={poster} 
              alt="Cover"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          )}

          {/* Iframe Layer */}
          {isLoaded ? (
            <iframe
              ref={iframeRef}
              src={getVimeoUrl(url)}
              className="absolute inset-0 w-full h-full z-10"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Testimonio"
              style={{ pointerEvents: 'none' }}
              onLoad={() => {
                // Ensure we trigger play once iframe is ready if logic demands it
                if (isPlaying) postToVimeo('play');
              }}
            ></iframe>
          ) : (
             // Spinner only if no poster is available
             !poster && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-0">
                  <div className="w-10 h-10 border-4 border-slate-700 border-t-primary rounded-full animate-spin"></div>
                </div>
             )
          )}
        </>
      )}

      {/* HTML5 Implementation */}
      {!isVimeo && (
        <video
          ref={videoRef}
          src={url}
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover z-10"
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
        ></video>
      )}

      {/* Overlay Play Button */}
      <div className={`absolute inset-0 bg-black/10 z-20 transition-opacity duration-300 flex items-center justify-center ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        {!isPlaying && (
           <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110">
              <Play size={24} className="text-primary ml-1" fill="currentColor" />
           </div>
        )}
      </div>

      {/* Mute Toggle */}
      {isPlaying && (
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/70 transition-colors z-30"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;