import React, { createContext, useContext, useState, useCallback } from 'react';

interface VideoContextType {
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <VideoContext.Provider value={{ playingId, setPlayingId }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};