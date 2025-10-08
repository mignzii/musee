export interface InteractiveObject {
  id: string;
  name: string;
  description: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  size: {
    width: number;
    height: number;
    depth: number;
  };
  color?: string;
  icon?: string;
}

export interface SpecialRoom {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  connections: number[];
  interactiveObjects: InteractiveObject[];
  isSpecial: boolean;
}
