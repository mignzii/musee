'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { museumConfig } from '../../config/museumConfig';
import { specialRoomConfig } from '../../config/specialRoomConfig';
import CorrectedDepthRoom from './CorrectedDepthRoom';
import SpecialInteractiveRoom from './SpecialInteractiveRoom';
import MiniMap from './MiniMap';
import WelcomeModal from './WelcomeModal';
import LoadingSpinner from './LoadingSpinner';
import OptimizedImmersiveControls from './OptimizedImmersiveControls';

interface ImmersiveVirtualTourProps {
  onNavigateToHome?: () => void;
}

export default function ImmersiveVirtualTour({ onNavigateToHome }: ImmersiveVirtualTourProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);
  const [isImmersed, setIsImmersed] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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
    setIsImmersed(false);
    
    setTimeout(() => {
      setCurrentRoom(roomId);
      setVisitedRooms(prev => 
        prev.includes(roomId) ? prev : [...prev, roomId]
      );
      setIsTransitioning(false);
      setIsImmersed(true);
    }, 1000);
  };

  const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);

  const getCameraPosition = () => {
    if (isImmersed) {
      return [0, 0, -60] as [number, number, number];
    }
    return [0, 15, 25] as [number, number, number];
  };

  return (
    <div className="w-full h-screen relative">
      {/* Header avec navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm p-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-xl font-bold">Visite Immersive 3D du Musée</h1>
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
          position: getCameraPosition(),
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        shadows
        style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
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

          <OptimizedImmersiveControls
            targetRoom={isImmersed ? { position: { x: 0, y: 0, z: 0 } } : currentRoomData}
            isTransitioning={isTransitioning}
            isImmersed={isImmersed}
          />

          {museumConfig.rooms.map((room) => {
            if (room.id === 3) {
              return (
                <SpecialInteractiveRoom
                  key={room.id}
                  room={specialRoomConfig}
                  isActive={room.id === currentRoom}
                  isVisited={visitedRooms.includes(room.id)}
                  isTransitioning={isTransitioning}
                  onRoomClick={handleRoomChange}
                />
              );
            }
            
            return (
              <CorrectedDepthRoom
                key={room.id}
                room={room}
                isActive={room.id === currentRoom}
                isVisited={visitedRooms.includes(room.id)}
                isTransitioning={isTransitioning}
                onRoomClick={handleRoomChange}
              />
            );
          })}
        </Suspense>
      </Canvas>

      {/* Interface simplifiée - seulement le nom de la salle actuelle */}
      {showUI && (
        <div className="absolute top-20 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white z-20">
          <div className="text-lg font-bold text-green-400">
            {museumConfig.rooms.find(r => r.id === currentRoom)?.name || 'Salle Inconnue'}
          </div>
          {currentRoom === 3 && (
            <div className="text-sm text-yellow-400 mt-1">⭐ Salle Interactive</div>
          )}
        </div>
      )}

      {/* Minimap en bas à droite */}
      <MiniMap
        currentRoom={currentRoom}
        rooms={museumConfig.rooms}
        visitedRooms={visitedRooms}
        onRoomChange={handleRoomChange}
        isTransitioning={isTransitioning}
      />

      {/* Modal d'accueil */}
      <WelcomeModal
        isOpen={showWelcome}
        onClose={() => setShowWelcome(false)}
      />

      {isTransitioning && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-white text-xl">Transition vers l&apos;immersion 3D...</div>
        </div>
      )}

      {isImmersed && !showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Vous êtes maintenant dans l&apos;environnement 3D</p>
          <p>• Utilisez la souris pour explorer à 360°</p>
          {currentRoom === 3 && (
            <p>• ⭐ Cliquez sur les objets pour plus d&apos;informations</p>
          )}
          <p>• Cliquez sur les boutons pour changer de salle</p>
        </div>
      )}

      {!isImmersed && !showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Utilisez la minimap en bas à droite pour naviguer</p>
          <p>• Souris pour explorer la vue 3D</p>
          {currentRoom === 3 && (
            <p>• ⭐ Salle 3 : Salle Interactive Spéciale</p>
          )}
          <p>• Bouton &quot;Afficher UI&quot; pour les contrôles</p>
        </div>
      )}

      <div className="absolute top-20 right-4 bg-black/70 text-white p-2 rounded-lg text-sm">
        {isImmersed ? '🎯 Mode Immersion 3D' : '🏛️ Vue du Musée'}
        {currentRoom === 3 && (
          <span className="ml-2 text-yellow-400">⭐ Interactive</span>
        )}
      </div>
    </div>
  );
}
