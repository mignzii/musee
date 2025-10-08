'use client';

import { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

interface ImmersiveCameraControlsProps {
  targetRoom?: {
    position: { x: number; y: number; z: number };
  };
  isTransitioning: boolean;
  isImmersed: boolean;
}

export default function ImmersiveCameraControls({ 
  targetRoom, 
  isTransitioning, 
  isImmersed 
}: ImmersiveCameraControlsProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (targetRoom && controlsRef.current && isTransitioning) {
      const targetPosition = new Vector3(
        targetRoom.position.x,
        targetRoom.position.y + (isImmersed ? 0 : 15),
        targetRoom.position.z + (isImmersed ? 0 : 25)
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
  }, [targetRoom, isTransitioning, isImmersed, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={!isImmersed} // Pas de pan en mode immersion
      enableZoom={true}
      enableRotate={true}
      minDistance={isImmersed ? 0.1 : 10}
      maxDistance={isImmersed ? 0.1 : 100}
      maxPolarAngle={isImmersed ? Math.PI : Math.PI / 2}
      minPolarAngle={isImmersed ? 0 : Math.PI / 6}
      enableDamping={true}
      dampingFactor={0.05}
      zoomSpeed={isImmersed ? 0.5 : 1.0}
      rotateSpeed={isImmersed ? 0.8 : 1.0}
    />
  );
}
