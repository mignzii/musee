'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-[100]"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.75)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 9999 
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all duration-300"
        style={{ 
          backgroundColor: 'white', 
          borderRadius: '1rem', 
          padding: '2rem', 
          maxWidth: '42rem', 
          width: '100%', 
          margin: '0 1rem', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          zIndex: 10000
        }}
      >
        {/* Logo du Musée */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="text-white text-2xl font-bold">MCN</div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            MUSÉE DES CIVILISATIONS NOIRES
          </h1>
          <p className="text-sm text-gray-600 mb-1">MCN DAKAR - SÉNÉGAL</p>
          <p className="text-xs text-gray-500 italic">Une création continue de l&apos;humanité</p>
        </div>

        {/* Description principale */}
        <div className="text-center mb-8">
          <p className="text-gray-800 mb-4">
            Découvrez le Musée des Civilisations Noires à travers une visite virtuelle 3D interactive.
          </p>
          <p className="text-gray-700">
            Déambulez librement entre les galeries, approchez les œuvres, écoutez leurs histoires et laissez-vous guider par les récits qui façonnent la mémoire du continent.
          </p>
        </div>

        {/* Guide de Navigation */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Guide de Navigation</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.9461 42.7176L11.4766 49.678C10.9234 49.8889 10.4025 49.9421 9.91396 49.8375C9.42541 49.7329 9.01005 49.511 8.66789 49.1718C8.32574 48.8326 8.10274 48.4108 7.9989 47.9063C7.89506 47.4017 7.94783 46.8744 8.15721 46.3244L25.5842 7.40926C25.797 6.90305 26.1273 6.52339 26.575 6.27028C27.0226 6.01718 27.4797 5.89062 27.9461 5.89062C28.4126 5.89063 28.8696 6.01718 29.3173 6.27028C29.765 6.52339 30.0953 6.90305 30.308 7.40926L47.735 46.3244C47.9478 46.8728 48.0006 47.4001 47.8934 47.9063C47.7861 48.4125 47.5631 48.8343 47.2244 49.1718C46.8856 49.5093 46.4703 49.7312 45.9783 49.8375C45.4863 49.9438 44.9655 49.8906 44.4156 49.678L27.9461 42.7176ZM15.4344 42.4645L27.9461 37.1493L40.4578 42.4645L27.9461 14.6228L15.4344 42.4645Z" fill="#242424"/>
                </svg>
              </div>
              <p className="text-xs text-gray-700">Navigation du site</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.5 5C15.4 5 5.5 14.9 5.5 27C5.5 39.1 15.4 49 27.5 49C39.6 49 49.5 39.1 49.5 27C49.5 14.9 39.6 5 27.5 5ZM27.5 44C18.1 44 10.5 36.4 10.5 27C10.5 17.6 18.1 10 27.5 10C36.9 10 44.5 17.6 44.5 27C44.5 36.4 36.9 44 27.5 44Z" fill="#242424"/>
                  <path d="M27.5 12C19.5 12 13 18.5 13 26.5C13 34.5 19.5 41 27.5 41C35.5 41 42 34.5 42 26.5C42 18.5 35.5 12 27.5 12ZM27.5 38C21.2 38 16 32.8 16 26.5C16 20.2 21.2 15 27.5 15C33.8 15 39 20.2 39 26.5C39 32.8 33.8 38 27.5 38Z" fill="#242424"/>
                  <path d="M27.5 18C22.8 18 19 21.8 19 26.5C19 31.2 22.8 35 27.5 35C32.2 35 36 31.2 36 26.5C36 21.8 32.2 18 27.5 18ZM27.5 32C24.5 32 22 29.5 22 26.5C22 23.5 24.5 21 27.5 21C30.5 21 33 23.5 33 26.5C33 29.5 30.5 32 27.5 32Z" fill="#242424"/>
                  <path d="M27.5 24C26.1 24 25 25.1 25 26.5C25 27.9 26.1 29 27.5 29C28.9 29 30 27.9 30 26.5C30 25.1 28.9 24 27.5 24Z" fill="#242424"/>
                  <path d="M20 20L35 35M35 20L20 35" stroke="#242424" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-xs text-gray-700">Zoom sur une photo</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15L45 15L45 40L10 40Z" stroke="#242424" strokeWidth="2" fill="none"/>
                  <path d="M15 20L25 20L25 30L15 30Z" fill="#242424"/>
                  <path d="M30 25L40 25L40 35L30 35Z" fill="#242424"/>
                  <circle cx="27.5" cy="27.5" r="2" fill="#242424"/>
                </svg>
              </div>
              <p className="text-xs text-gray-700">Carte 2D</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.5 5C15.4 5 5.5 14.9 5.5 27C5.5 39.1 15.4 49 27.5 49C39.6 49 49.5 39.1 49.5 27C49.5 14.9 39.6 5 27.5 5ZM27.5 44C18.1 44 10.5 36.4 10.5 27C10.5 17.6 18.1 10 27.5 10C36.9 10 44.5 17.6 44.5 27C44.5 36.4 36.9 44 27.5 44Z" fill="#242424"/>
                  <path d="M27.5 15C21.2 15 16 20.2 16 26.5C16 32.8 21.2 38 27.5 38C33.8 38 39 32.8 39 26.5C39 20.2 33.8 15 27.5 15ZM27.5 35C22.8 35 19 31.2 19 26.5C19 21.8 22.8 18 27.5 18C32.2 18 36 21.8 36 26.5C36 31.2 32.2 35 27.5 35Z" fill="#242424"/>
                  <path d="M27.5 21C24.5 21 22 23.5 22 26.5C22 29.5 24.5 32 27.5 32C30.5 32 33 29.5 33 26.5C33 23.5 30.5 21 27.5 21ZM27.5 29C26.1 29 25 27.9 25 26.5C25 25.1 26.1 24 27.5 24C28.9 24 30 25.1 30 26.5C30 27.9 28.9 29 27.5 29Z" fill="#242424"/>
                  <path d="M27.5 24C26.1 24 25 25.1 25 26.5C25 27.9 26.1 29 27.5 29C28.9 29 30 27.9 30 26.5C30 25.1 28.9 24 27.5 24Z" fill="#242424"/>
                  <text x="27.5" y="32" textAnchor="middle" fontSize="12" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">i</text>
                </svg>
              </div>
              <p className="text-xs text-gray-700">Information sur une œuvre</p>
            </div>
          </div>
        </div>

        {/* Bouton d'exploration */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Explorer le musée
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}