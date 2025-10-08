'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { museumConfig } from '@/config/museumConfig';
import SimpleMuseumRoom from './SimpleMuseumRoom';
import NavigationUI from './NavigationUI';
import LoadingSpinner from './LoadingSpinner';
import CameraControls from './CameraControls';
import Effects from './Effects';

interface MuseumSceneTestProps {
  onRoomChange?: (roomId: number) => void;
}

export default function MuseumSceneTest({ onRoomChange }: MuseumSceneTestProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);

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
          {/* Éclairage */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[0, 10, 0]} intensity={0.5} />

          {/* Environnement */}
          <Environment preset="apartment" />

          {/* Contrôles de caméra */}
          <CameraControls
            targetRoom={currentRoomData}
            isTransitioning={isTransitioning}
          />

          {/* Salles du musée - Version simple sans textures */}
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

          {/* Effets visuels */}
          <Effects />
        </Suspense>
      </Canvas>

      {/* Interface de navigation */}
      <NavigationUI
        currentRoom={currentRoom}
        rooms={museumConfig.rooms}
        visitedRooms={visitedRooms}
        onRoomChange={handleRoomChange}
        isTransitioning={isTransitioning}
      />

      {/* Indicateur de transition */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-white text-xl">Transition en cours...</div>
        </div>
      )}

      {/* Message de test */}
      <div className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded">
        Version de test - Sans textures
      </div>
    </div>
  );
}
