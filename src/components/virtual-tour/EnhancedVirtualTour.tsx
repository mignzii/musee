'use client';

import React, { useState, useEffect } from 'react';
import { museumConfig } from '../../config/museumConfig';

interface EnhancedVirtualTourProps {
  onNavigateToHome?: () => void;
}

export default function EnhancedVirtualTour({ onNavigateToHome }: EnhancedVirtualTourProps) {
  const [currentRoom, setCurrentRoom] = useState(museumConfig.startRoom);
  const [visitedRooms, setVisitedRooms] = useState<number[]>([museumConfig.startRoom]);
  const [showUI, setShowUI] = useState(true);
  const [isImmersed, setIsImmersed] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleRoomChange = (roomId: number) => {
    if (roomId === currentRoom) return;
    
    const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);
    if (!currentRoomData?.connections.includes(roomId)) {
      console.warn(`Salle ${roomId} non accessible depuis la salle ${currentRoom}`);
      return;
    }

    setCurrentRoom(roomId);
    setVisitedRooms(prev => 
      prev.includes(roomId) ? prev : [...prev, roomId]
    );
  };

  const currentRoomData = museumConfig.rooms.find(r => r.id === currentRoom);

  // Effet d'immersion avec transition
  useEffect(() => {
    if (isImmersed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isImmersed]);

  return (
    <div className="w-full h-screen relative bg-gray-900 overflow-hidden">
      {/* Modal d'accueil */}
      {showWelcome && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenue dans la Visite Immersive</h2>
            <p className="text-gray-600 mb-6">
              Explorez le Musée des Civilisations Noires en 3D. Naviguez entre les salles, 
              découvrez les œuvres et plongez dans l'histoire africaine.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowWelcome(false);
                  setIsImmersed(true);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Commencer la visite
              </button>
              <button
                onClick={() => setShowWelcome(false)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Plus tard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header avec navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm p-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-xl font-bold">Visite Immersive 3D du Musée</h1>
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
            <button
              onClick={() => setIsImmersed(!isImmersed)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isImmersed 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isImmersed ? 'Sortir de l\'immersion' : 'Mode Immersion'}
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

      {/* Contenu principal avec effet immersif */}
      <div className={`pt-20 h-full transition-all duration-1000 ${
        isImmersed ? 'bg-black' : 'bg-gray-900'
      }`}>
        <div className="h-full flex">
          {/* Vue immersive de la salle */}
          <div className="flex-1 flex items-center justify-center p-8 relative">
            <div className={`relative max-w-6xl w-full transition-all duration-1000 ${
              isImmersed ? 'scale-110' : 'scale-100'
            }`}>
              {/* Image de la salle avec effet 3D */}
              <div className="relative">
                <img
                  src={currentRoomData?.imagePath}
                  alt={currentRoomData?.name}
                  className={`w-full h-auto rounded-lg shadow-2xl transition-all duration-1000 ${
                    isImmersed ? 'brightness-75 contrast-125' : 'brightness-100'
                  }`}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vbiBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                
                {/* Overlay immersif */}
                {isImmersed && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                )}
                
                {/* Informations de la salle */}
                <div className={`absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg transition-all duration-1000 ${
                  isImmersed ? 'bg-black/90 backdrop-blur-sm' : ''
                }`}>
                  <h2 className="text-xl font-bold mb-2">{currentRoomData?.name}</h2>
                  <p className="text-sm text-gray-300 mb-3">{currentRoomData?.description}</p>
                  
                  {/* Indicateur de salle spéciale */}
                  {currentRoom === 3 && (
                    <div className="flex items-center gap-2 text-yellow-400">
                      <span>⭐</span>
                      <span className="text-sm">Salle Interactive Spéciale</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Interface de navigation */}
          {showUI && (
            <div className={`w-80 bg-black/70 backdrop-blur-sm p-4 overflow-y-auto transition-all duration-1000 ${
              isImmersed ? 'bg-black/90' : ''
            }`}>
              {/* Plan du Musée */}
              <div className="mb-6">
                <h3 className="text-white text-lg font-semibold mb-3">Plan du Musée</h3>
                <div className="grid grid-cols-3 gap-2">
                  {museumConfig.rooms.map((room) => {
                    const isCurrent = room.id === currentRoom;
                    const isVisited = visitedRooms.includes(room.id);
                    const isAvailable = currentRoomData?.connections.includes(room.id) || false;
                    
                    return (
                      <button
                        key={room.id}
                        onClick={() => isAvailable && handleRoomChange(room.id)}
                        disabled={!isAvailable}
                        className={`
                          p-2 rounded text-xs font-medium transition-all duration-200
                          ${isCurrent 
                            ? 'bg-green-500 text-white' 
                            : isAvailable 
                              ? 'bg-blue-500 text-white hover:bg-blue-600' 
                              : isVisited 
                                ? 'bg-gray-500 text-white' 
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
              {currentRoomData?.connections && currentRoomData.connections.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Salles accessibles</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentRoomData.connections.map((roomId) => {
                      const room = museumConfig.rooms.find(r => r.id === roomId);
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
                  <li>• Mode Immersion pour une expérience 3D</li>
                  <li>• Les salles vertes sont actuellement visitées</li>
                  <li>• Les salles bleues sont accessibles</li>
                  <li>• Les salles grises ne sont pas accessibles</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions en bas */}
      {!showUI && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <p>• Utilisez les boutons pour naviguer</p>
          <p>• Mode Immersion pour une expérience 3D</p>
          <p>• Bouton "Afficher UI" pour les contrôles</p>
        </div>
      )}

      {/* Indicateur de mode */}
      <div className="absolute top-20 right-4 bg-black/70 text-white p-2 rounded-lg text-sm">
        {isImmersed ? '🎯 Mode Immersion 3D' : '🏛️ Vue du Musée'}
        {currentRoom === 3 && (
          <span className="ml-2 text-yellow-400">⭐ Interactive</span>
        )}
      </div>
    </div>
  );
}
