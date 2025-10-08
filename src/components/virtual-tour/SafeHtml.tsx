'use client';

import { Html } from '@react-three/drei';
import { ReactNode } from 'react';

interface SafeHtmlProps {
  position: [number, number, number];
  center?: boolean;
  children: ReactNode;
}

export default function SafeHtml({ position, center, children }: SafeHtmlProps) {
  return (
    <Html position={position} center={center}>
      <div className="safe-html-content">
        {children}
      </div>
    </Html>
  );
}
