'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { museumConfig } from '../../config/museumConfig';

interface WorkingImmersiveTourProps {
  onNavigateToHome?: () => void;
}

// Composant pour une salle simple
function SimpleRoom({ 
  position, 
  name, 
  isActive, 
  isVisited, 
  onClick 
}: { 
  position: [number, number, number]; 
  name: string; 
  isActive: boolean; 
  isVisited: boolean; 
  onClick: () => void; 
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const getColor = () => {
    if (isActive) return '#4ade80';
    if (isVisited) return '#3b82f6';
    return '#6b7280';
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <boxGeometry args={[8, 6, 8]} />
        <meshStandardMaterial color={getColor()} transparent opacity={0.8} />
      </mesh>
      
      <Text
        position={[0, 4, 0]}
        fontSize={0.8}
        color={isActive ? '#ffffff' : '#9ca3af'}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      
      {isActive && (
        <Html position={[0, 2, 0]} center>
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </Html>
      )}
    </group>
  );
}

// Composant pour la scène 3D
function MuseumScene({ 
  currentRoom, 
  visitedRooms, 
  onRoomChange 
}: { 
  currentRoom: number; 
  visitedRooms: number[]; 
  onRoomChange: (roomId: number) => void; 
}) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Positionner la caméra pour une vue d'ensemble
    camera.position.set(0, 15, 25);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      
      {museumConfig.rooms.map((room) => {
        const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
        const isAccessible = currentRoomData?.connections.includes(room.id) || false;
        
        return (
          <SimpleRoom
            key={room.id}
            position={[room.position.x, room.position.y, room.position.z]}
            name={room.name}
            isActive={room.id === currentRoom}
            isVisited={visitedRooms.includes(room.id)}
            onClick={() => isAccessible && onRoomChange(room.id)}
          />
        );
      })}
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={50}
      />
    </>
  );
}

export default function WorkingImmersiveTour({ onNavigateToHome }: WorkingImmersiveTourProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);

  const handleRoomChange = (roomId: number) => {
    if (roomId === currentRoom) return;
    
    const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
    if (!currentRoomData?.connections.includes(roomId)) {
      console.warn(`Salle ${roomId} non accessible depuis la salle ${currentRoom}`);
      return;
    }

    setCurrentRoom(roomId);
    setVisitedRooms(prev => 
      prev.includes(roomId) ? prev : [...prev, roomId]
    );
  };

  const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);

  return (
    <div className="w-full h-screen relative bg-gray-900">
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
          position: [0, 15, 25],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        shadows
        style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}
      >
        <MuseumScene
          currentRoom={currentRoom}
          visitedRooms={visitedRooms}
          onRoomChange={handleRoomChange}
        />
      </Canvas>

      {/* Interface de navigation */}
      {showUI && (
        <div className="absolute top-20 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 z-10 max-w-sm">
          <h3 className="text-white text-lg font-semibold mb-3">Plan du Musée</h3>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {museumConfig.rooms.map((room) => {
              const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
              const isCurrent = room.id === currentRoom;
              const isVisited = visitedRooms.includes(room.id);
              const isAvailable = currentRoomData?.connections.includes(room.id) || false;
              
              return (
                <button
                  key={room.id}
                  onClick={() => isAvailable && handleRoomChange(room.id)}
                  disabled={!isAvailable}
                  className={`
                    p-2 rounded text-xs font-medium transition-all duration-200
                    ${isCurrent 
                      ? 'bg-green-500 text-white' 
                      : isAvailable 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : isVisited 
                          ? 'bg-gray-500 text-white' 
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  <div className="text-center">
                    <div className="font-bold">{room.id}</div>
                    <div className="truncate">{room.name}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Salles accessibles */}
          {currentRoomData?.connections && currentRoomData.connections.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white text-sm font-semibold mb-2">Salles accessibles</h4>
              <div className="flex flex-wrap gap-2">
                {currentRoomData.connections.map((roomId) => {
                  const room = museumConfig.rooms.find(r => r.id === roomId);
                  if (!room) return null;
                  
                  return (
                    <button
                      key={roomId}
                      onClick={() => handleRoomChange(roomId)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      {room.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">Instructions</h4>
            <ul className="text-gray-300 text-xs space-y-1">
              <li>• Utilisez la souris pour explorer la vue 3D</li>
              <li>• Cliquez sur les salles pour naviguer</li>
              <li>• Les salles vertes sont actuellement visitées</li>
              <li>• Les salles bleues sont accessibles</li>
            </ul>
          </div>
        </div>
      )}

      {/* Instructions en bas */}
      {!showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Utilisez la souris pour explorer la vue 3D</p>
          <p>• Cliquez sur les salles pour naviguer</p>
          <p>• Bouton "Afficher UI" pour les contrôles</p>
        </div>
      )}
    </div>
  );
}
