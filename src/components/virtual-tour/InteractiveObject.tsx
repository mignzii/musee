'use client';

import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { Mesh } from 'three';
import { InteractiveObject as InteractiveObjectType } from '../../types/interactive';

interface InteractiveObjectProps {
  object: InteractiveObjectType;
  onObjectClick: (object: InteractiveObjectType) => void;
}

export default function InteractiveObject({ object, onObjectClick }: InteractiveObjectProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation de pulsation au survol
  useFrame((state) => {
    if (meshRef.current) {
      if (hovered) {
        meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 8) * 0.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const handleClick = () => {
    setIsAnimating(true);
    onObjectClick(object);
    
    // Arrêter l'animation après un délai
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <group position={[object.position.x, object.position.y, object.position.z]}>
      {/* Objet interactif */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[object.size.width, object.size.height, object.size.depth]} />
        <meshStandardMaterial 
          color={object.color || '#ff6b6b'}
          transparent
          opacity={hovered ? 0.8 : 0.6}
          emissive={hovered ? '#ff6b6b' : '#000000'}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Icône d'information */}
      <Html position={[0, object.size.height/2 + 0.5, 0]} center>
        <div className="bg-blue-500 text-white p-1 rounded-full text-xs font-bold">
          ℹ️
        </div>
      </Html>

      {/* Nom de l'objet */}
      <Text
        position={[0, object.size.height/2 + 1, 0]}
        fontSize={0.3}
        color={hovered ? '#ffffff' : '#cccccc'}
        anchorX="center"
        anchorY="middle"
      >
        {object.name}
      </Text>

      {/* Effet de clic */}
      {isAnimating && (
        <Html position={[0, 0, 0]} center>
          <div className="animate-ping bg-green-500 text-white px-2 py-1 rounded text-xs">
            ✓ Cliqué !
          </div>
        </Html>
      )}
    </group>
  );
}
