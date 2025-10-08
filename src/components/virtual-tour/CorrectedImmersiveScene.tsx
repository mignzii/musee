'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { museumConfig } from '@/config/museumConfig';
import CorrectedDepthRoom from './CorrectedDepthRoom';
import NavigationUI from './NavigationUI';
import LoadingSpinner from './LoadingSpinner';
import OptimizedImmersiveControls from './OptimizedImmersiveControls';

interface CorrectedImmersiveSceneProps {
  onRoomChange?: (roomId: number) => void;
}

export default function CorrectedImmersiveScene({ onRoomChange }: CorrectedImmersiveSceneProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);
  const [isImmersed, setIsImmersed] = useState(false);

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
    setIsImmersed(false);
    
    // Animation de transition
    setTimeout(() => {
      setCurrentRoom(roomId);
      setVisitedRooms(prev => 
        prev.includes(roomId) ? prev : [...prev, roomId]
      );
      setIsTransitioning(false);
      setIsImmersed(true);
      onRoomChange?.(roomId);
    }, 1000);
  };

  const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);

  // Position de caméra corrigée pour éviter les déformations
  const getCameraPosition = () => {
    if (isImmersed) {
      return [0, 0, -60]; // Position corrigée pour éviter les déformations
    }
    return [0, 15, 25]; // Vue externe
  };

  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{
          position: getCameraPosition() as [number, number, number],
          fov: 60, // FOV réduit pour moins de déformation
          near: 0.1,
          far: 1000
        }}
        shadows
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* Éclairage adaptatif */}
          {!isImmersed && (
            <>
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={0.8}
                castShadow
              />
            </>
          )}

          {/* Contrôles de caméra */}
          <OptimizedImmersiveControls
            targetRoom={isImmersed ? { position: { x: 0, y: 0, z: 0 } } : currentRoomData}
            isTransitioning={isTransitioning}
            isImmersed={isImmersed}
          />

          {/* Salles du musée */}
          {museumConfig.rooms.map((room) => (
            <CorrectedDepthRoom
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
          <div className="text-white text-xl">Transition vers l&apos;immersion 3D...</div>
        </div>
      )}

      {/* Instructions pour l'immersion */}
      {isImmersed && !showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Vous êtes maintenant dans l&apos;environnement 3D</p>
          <p>• Utilisez la souris pour explorer à 360°</p>
          <p>• Cliquez sur les boutons pour changer de salle</p>
        </div>
      )}

      {/* Instructions pour la vue externe */}
      {!isImmersed && !showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Cliquez sur les portes pour entrer dans les salles</p>
          <p>• Souris pour explorer la vue 3D</p>
          <p>• Bouton &quot;Afficher UI&quot; pour les contrôles</p>
        </div>
      )}

      {/* Indicateur d'état d'immersion */}
      <div className="absolute top-4 left-4 bg-black/70 text-white p-2 rounded-lg text-sm">
        {isImmersed ? '🎯 Mode Immersion 3D' : '🏛️ Vue du Musée'}
      </div>
    </div>
  );
}
