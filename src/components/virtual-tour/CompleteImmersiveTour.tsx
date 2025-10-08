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
import AudioGuide from './AudioGuide';

interface CompleteImmersiveTourProps {
  onNavigateToHome?: () => void;
}

export default function CompleteImmersiveTour({ onNavigateToHome }: CompleteImmersiveTourProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);
  const [isImmersed, setIsImmersed] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [transitioningToRoom, setTransitioningToRoom] = useState<number | null>(null);

  const handleRoomChange = (roomId: number) => {
    if (isTransitioning || roomId === currentRoom) return;
    
    const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
    const targetRoomData = museumConfig.rooms.find(r => r.id === roomId);
    
    if (!currentRoomData || !targetRoomData) return;
    
    if (!currentRoomData.connections.includes(roomId)) {
      console.warn(`Salle ${roomId} non accessible depuis la salle ${currentRoom}`);
      return;
    }

    setTransitioningToRoom(roomId);
    setIsTransitioning(true);
    setIsImmersed(false);
    
    setTimeout(() => {
      setCurrentRoom(roomId);
      setVisitedRooms(prev => 
        prev.includes(roomId) ? prev : [...prev, roomId]
      );
      setIsTransitioning(false);
      setIsImmersed(true);
      setTransitioningToRoom(null);
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
    <div className="w-full h-screen relative" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <Canvas
        camera={{
          position: getCameraPosition(),
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        shadows
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
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

      <button
        onClick={() => setShowUI(!showUI)}
        className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-lg hover:bg-black/90 transition-colors"
        style={{ 
          position: 'absolute', 
          top: '16px', 
          right: '16px', 
          zIndex: 99999, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          color: 'white', 
          padding: '8px', 
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {showUI ? 'Masquer UI' : 'Afficher UI'}
      </button>

      {/* Bouton retour à l'accueil */}
      {onNavigateToHome && (
        <button
          onClick={onNavigateToHome}
          className="absolute top-4 right-24 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          style={{ 
            position: 'absolute', 
            top: '16px', 
            right: '96px', 
            zIndex: 99999, 
            backgroundColor: '#2563eb', 
            color: 'white', 
            padding: '8px', 
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Retour à l'accueil
        </button>
      )}

      {/* Interface simplifiée - seulement le nom de la salle actuelle */}
      {showUI && (
        <div 
          className="absolute top-16 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white"
          style={{ 
            position: 'absolute', 
            top: '64px', 
            left: '16px', 
            zIndex: 99999, 
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            color: 'white', 
            padding: '12px', 
            borderRadius: '8px',
            backdropFilter: 'blur(4px)'
          }}
        >
          <div className="text-lg font-bold text-green-400">
            {museumConfig.rooms.find(r => r.id === currentRoom)?.name || 'Salle Inconnue'}
          </div>
          {currentRoom === 3 && (
            <div className="text-sm text-yellow-400 mt-1">⭐ Salle Interactive</div>
          )}
        </div>
      )}

      {/* Minimap en bas à droite - toujours visible */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '16px', 
          right: '16px', 
          zIndex: 99999, 
          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
          color: 'white', 
          padding: '16px', 
          borderRadius: '12px',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          minWidth: '200px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '12px', fontWeight: 'bold', color: '#fbbf24' }}>
          🗺️ Plan du Musée
        </div>
        
        {/* Grille 3x3 pour les 9 salles */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '8px', 
          width: '128px', 
          height: '128px', 
          marginBottom: '12px',
          margin: '0 auto 12px auto'
        }}>
          {museumConfig.rooms.map((room) => {
            const isCurrent = room.id === currentRoom;
            const isVisited = visitedRooms.includes(room.id);
            const isInteractive = room.id === 3;
            
            let bgColor = 'rgba(156, 163, 175, 1)'; // gris par défaut
            if (isCurrent) bgColor = 'rgba(34, 197, 94, 1)'; // vert
            else if (isVisited) bgColor = 'rgba(59, 130, 246, 1)'; // bleu
            
            return (
              <button
                key={room.id}
                onClick={() => handleRoomChange(room.id)}
                disabled={isTransitioning}
                style={{
                  backgroundColor: bgColor,
                  width: isCurrent ? '32px' : '24px',
                  height: isCurrent ? '32px' : '24px',
                  borderRadius: '8px',
                  border: isInteractive ? '2px solid #fbbf24' : 'none',
                  cursor: isTransitioning ? 'not-allowed' : 'pointer',
                  opacity: isTransitioning ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: isInteractive ? '#fbbf24' : 'white',
                  fontWeight: 'bold',
                  transition: 'all 0.2s',
                  margin: 'auto'
                }}
                title={`Salle ${room.id}: ${room.name}${isInteractive ? ' (Interactive)' : ''}`}
              >
                {isInteractive && '⭐'}
              </button>
            );
          })}
        </div>
        
        {/* Légende compacte */}
        <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(34, 197, 94, 1)', borderRadius: '2px' }}></div>
            <span>Actuelle</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(59, 130, 246, 1)', borderRadius: '2px' }}></div>
            <span>Visitée</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(156, 163, 175, 1)', borderRadius: '2px' }}></div>
            <span>Non visitée</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(249, 115, 22, 1)', border: '1px solid #fbbf24', borderRadius: '2px' }}></div>
            <span style={{ color: '#fbbf24' }}>Interactive</span>
          </div>
        </div>
      </div>

      {/* Modal d'accueil */}
      <WelcomeModal
        isOpen={showWelcome}
        onClose={() => setShowWelcome(false)}
      />

      {isTransitioning && (
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 99999, 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <div 
            className="text-white text-xl text-center"
            style={{ 
              color: 'white', 
              fontSize: '24px', 
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {transitioningToRoom ? (
              <>
                <div className="mb-2">🚀 Transition en cours...</div>
                <div className="text-lg text-green-400">
                  Vers: {museumConfig.rooms.find(r => r.id === transitioningToRoom)?.name || `Salle ${transitioningToRoom}`}
                </div>
                <div className="text-sm text-gray-300 mt-2">
                  {museumConfig.rooms.find(r => r.id === transitioningToRoom)?.description}
                </div>
              </>
            ) : (
              'Transition vers l&apos;immersion 3D...'
            )}
          </div>
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

      {/* Instructions d'aide - toujours visibles */}
      <div 
        className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm"
        style={{ 
          position: 'absolute', 
          bottom: '16px', 
          left: '16px', 
          zIndex: 99999, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          color: 'white', 
          padding: '12px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}
      >
        <p>• Utilisez la minimap en bas à droite pour naviguer</p>
        <p>• Souris pour explorer la vue 3D</p>
        {currentRoom === 3 && (
          <p>• ⭐ Salle 3 : Salle Interactive Spéciale</p>
        )}
        <p>• Bouton &quot;Afficher UI&quot; pour les contrôles</p>
      </div>

      <div 
        className="absolute top-4 left-4 bg-black/70 text-white p-2 rounded-lg text-sm"
        style={{ 
          position: 'absolute', 
          top: '16px', 
          left: '16px', 
          zIndex: 99999, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          color: 'white', 
          padding: '8px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}
      >
        {isImmersed ? '🎯 Mode Immersion 3D' : '🏛️ Vue du Musée'}
        {currentRoom === 3 && (
          <span className="ml-2 text-yellow-400">⭐ Interactive</span>
        )}
      </div>

      {/* Guide Audio */}
      <AudioGuide 
        currentRoom={currentRoom} 
        isVisible={showUI && !showWelcome} 
      />
    </div>
  );
}
