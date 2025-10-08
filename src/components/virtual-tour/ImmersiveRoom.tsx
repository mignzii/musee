'use client';

import { useState, useEffect } from 'react';
import { Text, Html } from '@react-three/drei';
import { TextureLoader, Texture, BackSide } from 'three';
import { MuseumRoom } from '@/types/museum';

interface ImmersiveRoomProps {
  room: MuseumRoom;
  isActive: boolean;
  isVisited: boolean;
  isTransitioning: boolean;
  onRoomClick: (roomId: number) => void;
}

export default function ImmersiveRoom({
  room,
  isActive,
  isVisited,
  isTransitioning,
  onRoomClick
}: ImmersiveRoomProps) {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [textureLoaded, setTextureLoaded] = useState(false);
  const [textureError, setTextureError] = useState(false);
  // const [isInside, setIsInside] = useState(false);

  // Chargement de la texture pour l'environnement 360°
  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      room.imagePath,
      (loadedTexture) => {
        try {
          loadedTexture.wrapS = loadedTexture.wrapT = 1000; // RepeatWrapping
          loadedTexture.flipY = false;
          setTexture(loadedTexture);
          setTextureLoaded(true);
        } catch (error) {
          console.warn(`Erreur de configuration de la texture pour ${room.imagePath}:`, error);
          setTextureError(true);
          setTextureLoaded(true);
        }
      },
      undefined,
      (error) => {
        console.warn(`Erreur de chargement de la texture pour ${room.imagePath}:`, error);
        setTextureError(true);
        setTextureLoaded(true);
      }
    );
  }, [room.imagePath]);

  const handleClick = () => {
    if (!isTransitioning) {
      onRoomClick(room.id);
    }
  };

  const getRoomColor = () => {
    if (isActive) return '#4ade80'; // Vert pour la salle active
    if (isVisited) return '#3b82f6'; // Bleu pour les salles visitées
    return '#6b7280'; // Gris par défaut
  };

  return (
    <group position={[room.position.x, room.position.y, room.position.z]}>
      {/* Sphère immersive 360° - visible seulement quand on est à l'intérieur */}
      {isActive && texture && (
        <mesh>
          <sphereGeometry args={[100, 64, 64]} />
          <meshBasicMaterial 
            map={texture} 
            side={BackSide}
            transparent
            opacity={1.0}
          />
        </mesh>
      )}

      {/* Indicateur de salle - visible seulement quand on n'est pas à l'intérieur */}
      {!isActive && (
        <group>
          {/* Porte d'entrée */}
          <mesh
            onClick={handleClick}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[3, 4, 0.5]} />
            <meshStandardMaterial color={getRoomColor()} />
          </mesh>

          {/* Nom de la salle */}
          <Text
            position={[0, 3, 0]}
            fontSize={0.8}
            color={isVisited ? '#ffffff' : '#9ca3af'}
            anchorX="center"
            anchorY="middle"
          >
            {room.name}
          </Text>

          {/* Indicateur de salle visitée */}
          {isVisited && (
            <Html position={[0, 1, 0]} center>
              <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
            </Html>
          )}

          {/* Indicateur de salle active */}
          {isActive && (
            <Html position={[0, 1, 0]} center>
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </Html>
          )}
        </group>
      )}

      {/* Informations de la salle quand on est à l'intérieur */}
      {isActive && (
        <Html position={[0, 0, 0]} center>
          <div className="bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm max-w-sm">
            <h2 className="text-xl font-bold mb-2">{room.name}</h2>
            <p className="text-sm mb-4">{room.description}</p>
            <div className="flex gap-2">
              {room.connections.map((connectionId) => (
                <button
                  key={connectionId}
                  onClick={() => onRoomClick(connectionId)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  Salle {connectionId}
                </button>
              ))}
            </div>
          </div>
        </Html>
      )}

      {/* Indicateur de chargement de texture */}
      {isActive && !textureLoaded && !textureError && (
        <Html position={[0, 0, 0]} center>
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p className="text-sm">Chargement de l&apos;environnement 3D...</p>
          </div>
        </Html>
      )}

      {/* Indicateur d'erreur de texture */}
      {isActive && textureError && (
        <Html position={[0, 0, 0]} center>
          <div className="text-red-400 text-center">
            <p className="text-sm">Erreur de chargement de l&apos;image 3D</p>
          </div>
        </Html>
      )}
    </group>
  );
}
