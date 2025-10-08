'use client';

import { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { TextureLoader, Texture, BackSide } from 'three';
import { MuseumRoom } from '../../types/museum';

interface CorrectedDepthRoomProps {
  room: MuseumRoom;
  isActive: boolean;
  isVisited: boolean;
  isTransitioning: boolean;
  onRoomClick: (roomId: number) => void;
}

export default function CorrectedDepthRoom({
  room,
  isActive,
  isVisited,
  isTransitioning,
  onRoomClick
}: CorrectedDepthRoomProps) {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [textureLoaded, setTextureLoaded] = useState(false);
  const [textureError, setTextureError] = useState(false);

  // Chargement de la texture pour l'environnement 360°
  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      room.imagePath,
      (loadedTexture) => {
        try {
          // Configuration corrigée pour éviter les déformations
          loadedTexture.wrapS = loadedTexture.wrapT = 1000; // RepeatWrapping
          loadedTexture.flipY = true; // Remis pour l'orientation correcte
          loadedTexture.generateMipmaps = true;
          loadedTexture.minFilter = 1006; // LinearMipmapLinearFilter
          loadedTexture.magFilter = 1003; // LinearFilter
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


  return (
    <group position={[room.position.x, room.position.y, room.position.z]}>
      {/* Sphère immersive 360° - configuration corrigée */}
      {isActive && texture && (
        <mesh rotation={[0, Math.PI, 0]}>
          <sphereGeometry args={[100, 64, 64]} />
          <meshBasicMaterial 
            map={texture} 
            side={BackSide}
            transparent={false}
          />
        </mesh>
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
