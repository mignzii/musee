'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { museumConfig } from '../../config/museumConfig';
import LoadingSpinner from './LoadingSpinner';
import SimpleMuseumRoom from './SimpleMuseumRoom';
import NavigationUI from './NavigationUI';

interface VirtualTourProps {
  onNavigateToHome?: () => void;
}

export default function VirtualTour({ onNavigateToHome }: VirtualTourProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);

  const handleRoomChange = (roomId: number) => {
    if (isTransitioning || roomId === currentRoom) return;
    
    const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
    const targetRoomData = museumConfig.rooms.find(r => r.id === roomId);
    
    if (!currentRoomData || !targetRoomData) return;
    
    if (!currentRoomData.connections.includes(roomId)) {
      console.warn(`Salle ${roomId} non accessible depuis la salle ${currentRoom}`);
      return;
    }

    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentRoom(roomId);
      setVisitedRooms(prev => 
        prev.includes(roomId) ? prev : [...prev, roomId]
      );
      setIsTransitioning(false);
    }, 1000);
  };

  const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);

  return (
    <div className="w-full h-screen relative bg-gray-900">
      {/* Header avec navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm p-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-xl font-bold">Visite Virtuelle du Musée</h1>
            <p className="text-sm text-gray-300">
              {currentRoomData?.name || 'Salle Inconnue'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowUI(!showUI)}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              {showUI ? 'Masquer UI' : 'Afficher UI'}
            </button>
            {onNavigateToHome && (
              <button
                onClick={onNavigateToHome}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retour à l'accueil
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Canvas 3D */}
      <Canvas
        camera={{
          position: [0, 15, 25],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        shadows
        style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow
          />

          {museumConfig.rooms.map((room) => (
            <SimpleMuseumRoom
              key={room.id}
              room={room}
              isActive={room.id === currentRoom}
              isVisited={visitedRooms.includes(room.id)}
              isTransitioning={isTransitioning}
              onRoomClick={handleRoomChange}
            />
          ))}
        </Suspense>
      </Canvas>

      {/* Interface de navigation */}
      {showUI && (
        <NavigationUI
          currentRoom={currentRoom}
          rooms={museumConfig.rooms}
          visitedRooms={visitedRooms}
          onRoomChange={handleRoomChange}
          isTransitioning={isTransitioning}
        />
      )}

      {/* Indicateur de transition */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-white text-xl">Transition vers la salle suivante...</div>
        </div>
      )}

      {/* Instructions */}
      {!showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Utilisez la souris pour explorer la vue 3D</p>
          <p>• Cliquez sur les boutons pour changer de salle</p>
          <p>• Bouton "Afficher UI" pour les contrôles</p>
        </div>
      )}
    </div>
  );
}
