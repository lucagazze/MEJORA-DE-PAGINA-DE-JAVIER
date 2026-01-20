import React from 'react';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  if (!url) return <div className="w-full aspect-video bg-slate-100 rounded-lg"></div>;

  const isVimeo = url.includes('vimeo');
  
  const getVimeoEmbedUrl = (url: string) => {
    if (url.includes('player.vimeo.com')) {
      return `${url}?title=0&byline=0&portrait=0&dnt=1`;
    }
    const videoId = url.split('/').pop();
    return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&dnt=1`;
  };

  const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  if (isImage) {
      return (
        <div className="relative w-full aspect-video bg-slate-100 rounded-lg overflow-hidden shadow-lg border border-slate-200">
            <img src={url} alt="Testimonio" className="w-full h-full object-cover" />
        </div>
      )
  }

  return (
    <div className="relative w-full aspect-video bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-200 group">
      {isVimeo ? (
        <iframe
          src={getVimeoEmbedUrl(url)}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Testimonio"
        ></iframe>
      ) : (
        <video
          src={url}
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          controlsList="nodownload"
          preload="metadata"
        ></video>
      )}
    </div>
  );
};

export default VideoPlayer;