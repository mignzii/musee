'use client';

import { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

interface CameraControlsProps {
  targetRoom?: {
    position: { x: number; y: number; z: number };
  };
  isTransitioning: boolean;
}

export default function CameraControls({ targetRoom, isTransitioning }: CameraControlsProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (targetRoom && controlsRef.current && isTransitioning) {
      const targetPosition = new Vector3(
        targetRoom.position.x,
        targetRoom.position.y + 5,
        targetRoom.position.z + 10
      );
      
      // Animation fluide vers la nouvelle position
      const startPosition = camera.position.clone();
      const startTime = Date.now();
      const duration = 1000; // 1 seconde

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function pour une animation fluide
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        const easedProgress = easeInOutCubic(progress);
        
        camera.position.lerpVectors(startPosition, targetPosition, easedProgress);
        if (controlsRef.current) {
          controlsRef.current.target.lerp(
            new Vector3(targetRoom.position.x, targetRoom.position.y, targetRoom.position.z),
            easedProgress
          );
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [targetRoom, isTransitioning, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={5}
      maxDistance={50}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 6}
      enableDamping={true}
      dampingFactor={0.05}
    />
  );
}
