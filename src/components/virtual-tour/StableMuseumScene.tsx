'use client';

import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { museumConfig } from '@/config/museumConfig';
import AsyncTextureRoom from './AsyncTextureRoom';
import NavigationUI from './NavigationUI';
import LoadingSpinner from './LoadingSpinner';
import CameraControls from './CameraControls';

interface StableMuseumSceneProps {
  onRoomChange?: (roomId: number) => void;
}

export default function StableMuseumScene({ onRoomChange }: StableMuseumSceneProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);

  const handleRoomChange = (roomId: number) => {
    if (isTransitioning || roomId === currentRoom) return;
    
    const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
    const targetRoomData = museumConfig.rooms.find(r => r.id === roomId);
    
    if (!currentRoomData || !targetRoomData) return;
    
    // Vérifier si les salles sont connectées
    if (!currentRoomData.connections.includes(roomId)) {
      console.warn(`Salle ${roomId} non accessible depuis la salle ${currentRoom}`);
      return;
    }

    setIsTransitioning(true);
    
    // Animation de transition
    setTimeout(() => {
      setCurrentRoom(roomId);
      setVisitedRooms(prev => 
        prev.includes(roomId) ? prev : [...prev, roomId]
      );
      setIsTransitioning(false);
      onRoomChange?.(roomId);
    }, 1000);
  };

  const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{
          position: museumConfig.camera.position,
          fov: museumConfig.camera.fov,
          near: museumConfig.camera.near,
          far: museumConfig.camera.far
        }}
        shadows
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* Éclairage simple */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            castShadow
          />

          {/* Contrôles de caméra */}
          <CameraControls
            targetRoom={currentRoomData}
            isTransitioning={isTransitioning}
          />

          {/* Salles du musée */}
          {museumConfig.rooms.map((room) => (
            <AsyncTextureRoom
              key={room.id}
              room={room}
              isActive={room.id === currentRoom}
              isVisited={visitedRooms.includes(room.id)}
              isTransitioning={isTransitioning}
              onRoomClick={handleRoomChange}
            />
          ))}

          {/* Informations de la salle actuelle */}
          {currentRoomData && (
            <Html
              position={[currentRoomData.position.x, currentRoomData.position.y + 3, currentRoomData.position.z]}
              center
            >
              <div className="bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-2">{currentRoomData.name}</h2>
                <p className="text-sm max-w-xs">{currentRoomData.description}</p>
              </div>
            </Html>
          )}
        </Suspense>
      </Canvas>

      {/* Bouton pour masquer/afficher l'interface */}
      <button
        onClick={() => setShowUI(!showUI)}
        className="absolute top-4 right-4 z-20 bg-black/70 text-white p-2 rounded-lg hover:bg-black/90 transition-colors"
      >
        {showUI ? 'Masquer UI' : 'Afficher UI'}
      </button>

      {/* Interface de navigation - masquable */}
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
          <div className="text-white text-xl">Transition en cours...</div>
        </div>
      )}

      {/* Instructions rapides */}
      {!showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Clic sur les salles pour naviguer</p>
          <p>• Souris pour explorer la vue 3D</p>
          <p>• Bouton &quot;Afficher UI&quot; pour les contrôles</p>
        </div>
      )}
    </div>
  );
}
