'use client';

import { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { TextureLoader, Texture, BackSide } from 'three';
import { SpecialRoom, InteractiveObject as InteractiveObjectType } from '../../types/interactive';
import InteractiveObject from './InteractiveObject';
import ObjectInfoModal from './ObjectInfoModal';

interface SpecialInteractiveRoomProps {
  room: SpecialRoom;
  isActive: boolean;
  isVisited: boolean;
  isTransitioning: boolean;
  onRoomClick: (roomId: number) => void;
}

export default function SpecialInteractiveRoom({
  room,
  isActive,
  isVisited,
  isTransitioning,
  onRoomClick
}: SpecialInteractiveRoomProps) {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [textureLoaded, setTextureLoaded] = useState(false);
  const [textureError, setTextureError] = useState(false);
  const [selectedObject, setSelectedObject] = useState<InteractiveObjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Chargement de la texture pour l'environnement 360°
  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      room.imagePath,
      (loadedTexture) => {
        try {
          loadedTexture.wrapS = loadedTexture.wrapT = 1000;
          loadedTexture.flipY = true;
          loadedTexture.generateMipmaps = true;
          loadedTexture.minFilter = 1006;
          loadedTexture.magFilter = 1003;
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

  const handleObjectClick = (object: InteractiveObjectType) => {
    setSelectedObject(object);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedObject(null);
  };

  return (
    <>
      <group position={[room.position.x, room.position.y, room.position.z]}>
        {/* Sphère immersive 360° */}
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

        {/* Objets interactifs - seulement dans la salle spéciale */}
        {isActive && room.isSpecial && room.interactiveObjects.map((object) => (
          <InteractiveObject
            key={object.id}
            object={object}
            onObjectClick={handleObjectClick}
          />
        ))}



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

      {/* Modal d'information sur l'objet */}
      <ObjectInfoModal
        object={selectedObject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
