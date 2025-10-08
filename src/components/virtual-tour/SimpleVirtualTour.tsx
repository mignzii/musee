'use client';

import React, { useState } from 'react';

interface SimpleVirtualTourProps {
  onNavigateToHome?: () => void;
}

export default function SimpleVirtualTour({ onNavigateToHome }: SimpleVirtualTourProps) {
  const [currentRoom, setCurrentRoom] = useState(1);
  const [showUI, setShowUI] = useState(true);

  const rooms = [
    {
      id: 1,
      name: "Hall d'entrée",
      description: "Bienvenue dans notre musée. Commencez votre visite ici.",
      image: "/1.png",
      connections: [2, 4]
    },
    {
      id: 2,
      name: "Galerie des Arts Classiques",
      description: "Découvrez les œuvres d'art classiques de différentes époques.",
      image: "/2.png",
      connections: [1, 3, 5]
    },
    {
      id: 3,
      name: "Salle Interactive Spéciale",
      description: "Explorez cette salle interactive et découvrez les objets cachés.",
      image: "/3.png",
      connections: [2, 6]
    },
    {
      id: 4,
      name: "Galerie Moderne",
      description: "L'art contemporain et les mouvements artistiques modernes.",
      image: "/4.png",
      connections: [1, 5, 7]
    },
    {
      id: 5,
      name: "Salle des Maîtres",
      description: "Les œuvres des plus grands maîtres de l'histoire de l'art.",
      image: "/5.png",
      connections: [2, 4, 6, 8]
    },
    {
      id: 6,
      name: "Galerie des Impressionnistes",
      description: "La lumière et les couleurs des impressionnistes français.",
      image: "/6.png",
      connections: [3, 5, 9]
    },
    {
      id: 7,
      name: "Salle des Antiquités",
      description: "Artéfacts et œuvres d'art des civilisations anciennes.",
      image: "/7.png",
      connections: [4, 8]
    },
    {
      id: 8,
      name: "Galerie des Contemporains",
      description: "Les artistes contemporains et leurs créations innovantes.",
      image: "/8.png",
      connections: [5, 7, 9]
    },
    {
      id: 9,
      name: "Salle des Expositions Temporaires",
      description: "Nos expositions temporaires et événements spéciaux.",
      image: "/9.png",
      connections: [6, 8]
    }
  ];

  const currentRoomData = rooms.find(r => r.id === currentRoom);
  const availableRooms = currentRoomData?.connections || [];

  const handleRoomChange = (roomId: number) => {
    if (availableRooms.includes(roomId)) {
      setCurrentRoom(roomId);
    }
  };

  return (
    <div className="w-full h-screen relative bg-gray-900">
      {/* Header avec navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm p-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-xl font-bold">Visite Virtuelle du Musée</h1>
            <p className="text-sm text-gray-300">
              {currentRoomData?.name || 'Salle Inconnue'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowUI(!showUI)}
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              {showUI ? 'Masquer UI' : 'Afficher UI'}
            </button>
            {onNavigateToHome && (
              <button
                onClick={onNavigateToHome}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retour à l'accueil
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="pt-20 h-full flex">
        {/* Image de la salle actuelle */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="relative max-w-4xl w-full">
            <img
              src={currentRoomData?.image}
              alt={currentRoomData?.name}
              className="w-full h-auto rounded-lg shadow-2xl"
              onError={(e) => {
                // Fallback si l'image n'existe pas
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vbiBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg">
              <h2 className="text-lg font-bold">{currentRoomData?.name}</h2>
              <p className="text-sm text-gray-300">{currentRoomData?.description}</p>
            </div>
          </div>
        </div>

        {/* Interface de navigation */}
        {showUI && (
          <div className="w-80 bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
            {/* Plan du Musée */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-3">Plan du Musée</h3>
              <div className="grid grid-cols-3 gap-2">
                {rooms.map((room) => {
                  const isCurrent = room.id === currentRoom;
                  const isAvailable = availableRooms.includes(room.id);
                  
                  return (
                    <button
                      key={room.id}
                      onClick={() => handleRoomChange(room.id)}
                      disabled={!isAvailable}
                      className={`
                        p-2 rounded text-xs font-medium transition-all duration-200
                        ${isCurrent 
                          ? 'bg-green-500 text-white' 
                          : isAvailable 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        }
                      `}
                    >
                      <div className="text-center">
                        <div className="font-bold">{room.id}</div>
                        <div className="truncate">{room.name}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation rapide */}
            {availableRooms.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white text-lg font-semibold mb-3">Salles accessibles</h3>
                <div className="flex flex-wrap gap-2">
                  {availableRooms.map((roomId) => {
                    const room = rooms.find(r => r.id === roomId);
                    if (!room) return null;
                    
                    return (
                      <button
                        key={roomId}
                        onClick={() => handleRoomChange(roomId)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        {room.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Instructions */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Instructions</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cliquez sur les salles pour naviguer</li>
                <li>• Les salles vertes sont actuellement visitées</li>
                <li>• Les salles bleues sont accessibles</li>
                <li>• Les salles grises ne sont pas accessibles</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Instructions en bas */}
      {!showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Cliquez sur les boutons pour changer de salle</p>
          <p>• Bouton "Afficher UI" pour les contrôles</p>
        </div>
      )}
    </div>
  );
}
