'use client';

import { MuseumRoom } from '../../types/museum';

interface MiniMapProps {
  currentRoom: number;
  rooms: MuseumRoom[];
  visitedRooms: number[];
  onRoomChange: (roomId: number) => void;
  isTransitioning: boolean;
}

export default function MiniMap({ 
  currentRoom, 
  rooms, 
  visitedRooms, 
  onRoomChange, 
  isTransitioning 
}: MiniMapProps) {
  const getRoomColor = (roomId: number) => {
    if (roomId === currentRoom) return 'bg-green-500'; // Salle actuelle
    if (visitedRooms.includes(roomId)) return 'bg-blue-500'; // Salles visitées
    return 'bg-gray-400'; // Salles non visitées
  };

  const getRoomSize = (roomId: number) => {
    return roomId === currentRoom ? 'w-4 h-4' : 'w-3 h-3';
  };

  return (
    <div 
      className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-sm rounded-xl p-4 text-white shadow-2xl border border-white/20"
      style={{ 
        position: 'absolute', 
        bottom: '16px', 
        right: '16px', 
        zIndex: 99999, 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        color: 'white', 
        padding: '16px', 
        borderRadius: '12px',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="text-sm font-bold mb-3 text-center text-yellow-400">🗺️ Plan du Musée</div>
      
      {/* Grille 3x3 pour les 9 salles */}
      <div className="grid grid-cols-3 gap-2 w-32 h-32 mb-3">
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => onRoomChange(room.id)}
            disabled={isTransitioning}
            className={`
              ${getRoomColor(room.id)} 
              ${getRoomSize(room.id)}
              rounded-lg transition-all duration-200 
              hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
              ${room.id === currentRoom ? 'ring-2 ring-yellow-400 shadow-lg' : ''}
              ${room.id === 3 ? 'border-2 border-yellow-400' : ''}
            `}
            title={`Salle ${room.id}: ${room.name}${room.id === 3 ? ' (Interactive)' : ''}`}
          >
            {room.id === 3 && (
              <div className="text-xs text-yellow-300 font-bold">⭐</div>
            )}
          </button>
        ))}
      </div>
      
      {/* Légende compacte */}
      <div className="text-xs space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          <span>Actuelle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span>Visitée</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          <span>Non visitée</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-3 h-3 bg-orange-500 rounded-sm border border-yellow-400"></div>
          <span className="text-yellow-300">Interactive</span>
        </div>
      </div>
    </div>
  );
}
