'use client';

import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        blendFunction={BlendFunction.ADD}
      />
      <ChromaticAberration
        offset={[0.001, 0.001]}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}
