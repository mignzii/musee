import { SpecialRoom } from '../types/interactive';

export const specialRoomConfig: SpecialRoom = {
  id: 3,
  name: "Salle Interactive Spéciale",
  description: "Explorez cette salle interactive et découvrez les objets cachés dans l'environnement 3D.",
  imagePath: "/3.png",
  position: { x: 20, y: 0, z: 0 },
  connections: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Navigation libre vers toutes les salles
  isSpecial: true,
  interactiveObjects: [
    {
      id: "obj1",
      name: "Sculpture Antique",
      description: "Une magnifique sculpture en marbre datant du 2ème siècle avant J.-C. Cette œuvre représente une déesse de la fertilité et témoigne de l'art raffiné de l'époque hellénistique.",
      position: { x: -15, y: 0, z: -20 },
      size: { width: 2, height: 3, depth: 1 },
      color: "#d4af37",
      icon: "🗿"
    },
    {
      id: "obj2",
      name: "Vase Grec",
      description: "Un vase grec en céramique rouge et noir, orné de scènes mythologiques. Ce type de vase était utilisé lors des banquets et cérémonies religieuses dans la Grèce antique.",
      position: { x: 10, y: 0, z: -25 },
      size: { width: 1.5, height: 2, depth: 1.5 },
      color: "#8b4513",
      icon: "🏺"
    },
    {
      id: "obj3",
      name: "Tablette Cunéiforme",
      description: "Une tablette d'argile avec des inscriptions cunéiformes mésopotamiennes. Ces tablettes étaient utilisées pour l'écriture administrative et littéraire il y a plus de 4000 ans.",
      position: { x: -5, y: 0, z: -30 },
      size: { width: 1, height: 0.5, depth: 1 },
      color: "#cd853f",
      icon: "📜"
    },
    {
      id: "obj4",
      name: "Masque Funéraire",
      description: "Un masque funéraire en or massif provenant d'une tombe égyptienne. Ces masques étaient placés sur le visage des momies pour protéger l'âme dans l'au-delà.",
      position: { x: 15, y: 0, z: -15 },
      size: { width: 1, height: 1.5, depth: 0.5 },
      color: "#ffd700",
      icon: "🎭"
    },
    {
      id: "obj5",
      name: "Bijou Viking",
      description: "Un collier en argent et ambre datant de l'ère viking. L'ambre était considéré comme une pierre magique par les Vikings et était souvent utilisée dans leurs bijoux.",
      position: { x: -20, y: 0, z: -10 },
      size: { width: 0.5, height: 0.5, depth: 0.5 },
      color: "#c0c0c0",
      icon: "💎"
    },
    {
      id: "obj6",
      name: "Manuscrit Médiéval",
      description: "Un manuscrit enluminé du 12ème siècle contenant des textes religieux. Les enluminures sont des illustrations peintes à la main qui ornent les marges et les initiales.",
      position: { x: 5, y: 0, z: -35 },
      size: { width: 1, height: 1.5, depth: 0.2 },
      color: "#8b4513",
      icon: "📖"
    }
  ]
};
