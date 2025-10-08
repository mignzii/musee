'use client';

import { MuseumRoom } from '@/types/museum';

interface ImprovedNavigationUIProps {
  currentRoom: number;
  rooms: MuseumRoom[];
  visitedRooms: number[];
  onRoomChange: (roomId: number) => void;
  isTransitioning: boolean;
}

export default function ImprovedNavigationUI({
  currentRoom,
  rooms,
  visitedRooms,
  onRoomChange,
  isTransitioning
}: ImprovedNavigationUIProps) {
  const currentRoomData = rooms.find(room => room.id === currentRoom);

  const getConnectionColor = (roomId: number) => {
    if (visitedRooms.includes(roomId)) return 'bg-blue-500 hover:bg-blue-600';
    return 'bg-gray-500 hover:bg-gray-600';
  };

  return (
    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white z-20 max-w-xs">
      {/* Informations de la salle actuelle */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-green-400 mb-1">
          {currentRoomData?.name || 'Salle Inconnue'}
        </h3>
        <p className="text-sm text-gray-300">
          {currentRoomData?.description || 'Description non disponible'}
        </p>
      </div>

      {/* Salles connectées */}
      <div>
        <h4 className="text-sm font-semibold mb-2 text-yellow-400">Salles Accessibles</h4>
        <div className="space-y-2">
          {currentRoomData?.connections.map((connectionId) => {
            const connectedRoom = rooms.find(room => room.id === connectionId);
            if (!connectedRoom) return null;

            return (
              <button
                key={connectionId}
                onClick={() => onRoomChange(connectionId)}
                disabled={isTransitioning}
                className={`
                  w-full text-left p-2 rounded transition-colors duration-200
                  ${getConnectionColor(connectionId)}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {connectedRoom.name}
                  </span>
                  {visitedRooms.includes(connectionId) && (
                    <span className="text-xs text-blue-300">✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Indicateur de transition */}
      {isTransitioning && (
        <div className="mt-4 text-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mx-auto"></div>
          <p className="text-xs text-gray-400 mt-1">Transition...</p>
        </div>
      )}
    </div>
  );
}
