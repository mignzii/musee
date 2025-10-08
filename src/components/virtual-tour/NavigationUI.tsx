'use client';

import { MuseumRoom } from '@/types/museum';

interface NavigationUIProps {
  currentRoom: number;
  rooms: MuseumRoom[];
  visitedRooms: number[];
  onRoomChange: (roomId: number) => void;
  isTransitioning: boolean;
}

export default function NavigationUI({
  currentRoom,
  rooms,
  visitedRooms,
  onRoomChange,
  isTransitioning
}: NavigationUIProps) {
  const currentRoomData = rooms.find(r => r.id === currentRoom);
  const availableRooms = currentRoomData?.connections || [];

  return (
    <div className="absolute top-4 left-4 right-4 z-10">
      {/* Barre de navigation principale */}
      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-xl font-bold">Visite du Musée</h1>
            <p className="text-gray-300 text-sm">
              Salle actuelle: {currentRoomData?.name}
            </p>
          </div>
          <div className="text-white text-sm">
            Salles visitées: {visitedRooms.length}/{rooms.length}
          </div>
        </div>
      </div>

      {/* Mini-carte des salles */}
      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 mb-4">
        <h3 className="text-white text-lg font-semibold mb-3">Plan du Musée</h3>
        <div className="grid grid-cols-3 gap-2">
          {rooms.map((room) => {
            const isCurrent = room.id === currentRoom;
            const isVisited = visitedRooms.includes(room.id);
            const isAvailable = availableRooms.includes(room.id);
            
            return (
              <button
                key={room.id}
                onClick={() => isAvailable && !isTransitioning && onRoomChange(room.id)}
                disabled={!isAvailable || isTransitioning}
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
      {availableRooms.length > 0 && (
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
          <h3 className="text-white text-lg font-semibold mb-3">Salles accessibles</h3>
          <div className="flex flex-wrap gap-2">
            {availableRooms.map((roomId) => {
              const room = rooms.find(r => r.id === roomId);
              if (!room) return null;
              
              return (
                <button
                  key={roomId}
                  onClick={() => !isTransitioning && onRoomChange(roomId)}
                  disabled={isTransitioning}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {room.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 mt-4">
        <h3 className="text-white text-lg font-semibold mb-2">Instructions</h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Cliquez sur les salles pour naviguer</li>
          <li>• Utilisez la souris pour explorer la vue 3D</li>
          <li>• Les salles vertes sont actuellement visitées</li>
          <li>• Les salles bleues sont accessibles</li>
          <li>• Les salles grises sont visitées mais non accessibles</li>
        </ul>
      </div>
    </div>
  );
}
