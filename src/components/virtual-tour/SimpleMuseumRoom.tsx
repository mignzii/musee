'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { Mesh } from 'three';
import { MuseumRoom } from '@/types/museum';

interface SimpleMuseumRoomProps {
  room: MuseumRoom;
  isActive: boolean;
  isVisited: boolean;
  isTransitioning: boolean;
  onRoomClick: (roomId: number) => void;
}

export default function SimpleMuseumRoom({
  room,
  isActive,
  isVisited,
  isTransitioning,
  onRoomClick
}: SimpleMuseumRoomProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animation de rotation pour la salle active
  useFrame((state) => {
    if (meshRef.current) {
      if (isActive) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      } else {
        meshRef.current.rotation.y = 0;
      }
    }
  });

  const handleClick = () => {
    if (!isTransitioning) {
      onRoomClick(room.id);
    }
  };

  const getRoomColor = () => {
    if (isActive) return '#4ade80'; // Vert pour la salle active
    if (isVisited) return '#3b82f6'; // Bleu pour les salles visitées
    if (hovered) return '#f59e0b'; // Orange au survol
    return '#6b7280'; // Gris par défaut
  };

  const getRoomScale = (): [number, number, number] => {
    if (isActive) return [1.2, 1.2, 1.2];
    if (hovered) return [1.1, 1.1, 1.1];
    return [1, 1, 1];
  };

  return (
    <group
      position={[room.position.x, room.position.y, room.position.z]}
      rotation={room.rotation ? [room.rotation.x, room.rotation.y, room.rotation.z] : [0, 0, 0]}
    >
      {/* Salle principale */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={getRoomScale()}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[8, 6, 8]} />
        <meshStandardMaterial
          color={getRoomColor()}
          transparent
          opacity={isActive ? 1 : 0.8}
        />
      </mesh>

      {/* Plafond */}
      <mesh
        position={[0, 3, 0]}
        receiveShadow
      >
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#f3f4f6" />
      </mesh>

      {/* Sol */}
      <mesh
        position={[0, -3, 0]}
        receiveShadow
      >
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Nom de la salle */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.8}
        color={isActive ? '#ffffff' : '#9ca3af'}
        anchorX="center"
        anchorY="middle"
      >
        {room.name}
      </Text>

      {/* Indicateur de salle visitée */}
      {isVisited && !isActive && (
        <Html position={[0, 2, 0]} center>
          <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
        </Html>
      )}

      {/* Indicateur de salle active */}
      {isActive && (
        <Html position={[0, 2, 0]} center>
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </Html>
      )}

      {/* Portes vers les salles connectées */}
      {room.connections.map((connectionId, index) => {
        const angle = (index / room.connections.length) * Math.PI * 2;
        const x = Math.cos(angle) * 4.5;
        const z = Math.sin(angle) * 4.5;
        
        return (
          <mesh
            key={connectionId}
            position={[x, 0, z]}
            rotation={[0, angle + Math.PI / 2, 0]}
          >
            <boxGeometry args={[1, 4, 0.2]} />
            <meshStandardMaterial color="#8b5cf6" transparent opacity={0.7} />
          </mesh>
        );
      })}
    </group>
  );
}
