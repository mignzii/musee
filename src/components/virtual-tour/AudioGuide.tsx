import React, { useState, useRef, useEffect } from 'react';

interface AudioGuideProps {
  currentRoom: number;
  isVisible?: boolean;
}

export default function AudioGuide({ currentRoom, isVisible = true }: AudioGuideProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fichiers audio pour chaque salle
  const roomAudioFiles: { [key: number]: string } = {
    1: '/audio/guide-salle-1.mp3', // Hall d'entrée
    2: '/audio/guide-salle-2.mp3', // Galerie des Arts Classiques
    3: '/audio/guide-salle-3.mp3', // Salle Interactive Spéciale
    4: '/audio/guide-salle-4.mp3', // Galerie Moderne
    5: '/audio/guide-salle-5.mp3', // Salle des Maîtres
    6: '/audio/guide-salle-6.mp3', // Galerie des Impressionnistes
    7: '/audio/guide-salle-7.mp3', // Salle des Antiquités
    8: '/audio/guide-salle-8.mp3', // Galerie des Contemporains
    9: '/audio/guide-salle-9.mp3', // Salle des Expositions Temporaires
  };

  // Charger le fichier audio quand la salle change
  useEffect(() => {
    if (audioRef.current) {
      const audioFile = roomAudioFiles[currentRoom];
      if (audioFile) {
        audioRef.current.src = audioFile;
        audioRef.current.load();
      }
    }
  }, [currentRoom]);

  // Gestionnaires d'événements audio
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'absolute',
        top: '150px',
        left: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        zIndex: 99999,
        fontFamily: 'Jost, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <button
        onClick={handlePlayPause}
        style={{
          backgroundColor: isPlaying ? '#ef4444' : '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.2s ease'
        }}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      <button
        onClick={handleMute}
        style={{
          backgroundColor: isMuted ? '#ef4444' : '#6b7280',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.2s ease'
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Audio element caché */}
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
}
