import { MuseumConfig } from '../types/museum';
import { specialRoomConfig } from './specialRoomConfig';

export const museumConfig: MuseumConfig = {
  rooms: [
    {
      id: 1,
      name: "Hall d'entrée",
      description: "Bienvenue dans notre musée. Commencez votre visite ici.",
      imagePath: "/1.png",
      position: { x: 0, y: 0, z: 0 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    {
      id: 2,
      name: "Galerie des Arts Classiques",
      description: "Découvrez les œuvres d'art classiques de différentes époques.",
      imagePath: "/2.png",
      position: { x: 10, y: 0, z: 0 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    // Salle spéciale interactive remplace la salle 3
    specialRoomConfig,
    {
      id: 4,
      name: "Galerie Moderne",
      description: "L'art contemporain et les mouvements artistiques modernes.",
      imagePath: "/4.png",
      position: { x: 0, y: 0, z: 10 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    {
      id: 5,
      name: "Salle des Maîtres",
      description: "Les œuvres des plus grands maîtres de l'histoire de l'art.",
      imagePath: "/5.png",
      position: { x: 10, y: 0, z: 10 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    {
      id: 6,
      name: "Galerie des Impressionnistes",
      description: "La lumière et les couleurs des impressionnistes français.",
      imagePath: "/6.png",
      position: { x: 20, y: 0, z: 10 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    {
      id: 7,
      name: "Salle des Antiquités",
      description: "Artéfacts et œuvres d'art des civilisations anciennes.",
      imagePath: "/7.png",
      position: { x: 0, y: 0, z: 20 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    {
      id: 8,
      name: "Galerie des Contemporains",
      description: "Les artistes contemporains et leurs créations innovantes.",
      imagePath: "/8.png",
      position: { x: 10, y: 0, z: 20 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    },
    {
      id: 9,
      name: "Salle des Expositions Temporaires",
      description: "Nos expositions temporaires et événements spéciaux.",
      imagePath: "/9.png",
      position: { x: 20, y: 0, z: 20 },
      connections: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Navigation libre vers toutes les salles
    }
  ],
  startRoom: 1,
  camera: {
    position: [0, 5, 10],
    fov: 75,
    near: 0.1,
    far: 1000
  }
};
