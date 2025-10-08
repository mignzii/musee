'use client';

import { InteractiveObject as InteractiveObjectType } from '../../types/interactive';

interface ObjectInfoModalProps {
  object: InteractiveObjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ObjectInfoModal({ object, isOpen, onClose }: ObjectInfoModalProps) {
  if (!isOpen || !object) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div className="text-2xl font-bold text-gray-800">{object.name}</div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="mb-4">
          <div 
            className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: object.color || '#ff6b6b' }}
          >
            <span className="text-white text-lg font-semibold">
              {object.icon || '📦'}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {object.description}
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              // Ici vous pourriez ajouter plus d'actions
              console.log('Plus d\'informations sur:', object.name);
            }}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
