'use client';

import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

interface TextureLoaderProps {
  imagePath: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export default function useTextureLoader({ imagePath, onLoad }: TextureLoaderProps) {
  const texture = useLoader(
    TextureLoader,
    imagePath,
    (loader) => {
      loader.setCrossOrigin('anonymous');
    }
  );

  useMemo(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = 1000; // RepeatWrapping
      texture.flipY = false;
      texture.generateMipmaps = true;
      texture.minFilter = 1006; // LinearMipmapLinearFilter
      texture.magFilter = 1003; // LinearFilter
      onLoad?.();
    }
  }, [texture, onLoad]);

  return texture;
}
