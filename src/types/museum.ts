export interface MuseumRoom {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation?: {
    x: number;
    y: number;
    z: number;
  };
  connections: number[]; // IDs des salles connectées
}

export interface MuseumConfig {
  rooms: MuseumRoom[];
  startRoom: number;
  camera: {
    position: [number, number, number];
    fov: number;
    near: number;
    far: number;
  };
}

export interface NavigationState {
  currentRoom: number;
  isTransitioning: boolean;
  visitedRooms: number[];
}
