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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
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
        className="bg-white rounded-2xl w-full max-w-4xl mx-8 shadow-2xl"
        style={{ 
          backgroundColor: 'white', 
          borderRadius: '16px', 
          padding: '60px 40px', 
          maxWidth: '800px', 
          width: '100%', 
          margin: '0 32px', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          zIndex: 10000,
          fontFamily: 'Jost, sans-serif'
        }}
      >
        {/* Logo du Musée - Centré avec espacement généreux */}
        <div className="text-center mb-12">
          <img 
            src="/modal/logo.png" 
            alt="Logo Musée des Civilisations Noires"
            style={{ 
              width: '96px', 
              height: '96px', 
              objectFit: 'contain',
              margin: '0 auto 32px auto',
              display: 'block'
            }}
          />
        </div>

        {/* Description principale avec espacement généreux */}
        <div className="text-center mb-12">
          <p 
            style={{ 
              fontSize: '16px', 
              fontWeight: '400', 
              color: '#374151',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Découvrez le Musée des Civilisations Noires à travers une visite virtuelle 3D interactive. Déambulez librement entre les galeries, approchez les œuvres, écoutez leurs histoires et laissez-vous guider par les récits qui façonnent la mémoire du continent.
          </p>
        </div>

        {/* Guide de Navigation avec espacement généreux */}
        <div className="mb-16">
          <h2 
            className="text-center mb-8"
            style={{ 
              fontSize: '18px', 
              fontWeight: '700', 
              color: '#111827',
              lineHeight: '1.3',
              marginBottom: '32px'
            }}
          >
            Guide de Navigation
          </h2>
          <div 
            className="grid grid-cols-4 gap-8"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '32px' 
            }}
          >
            {/* Navigation du site */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-3 flex items-center justify-center"
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 12px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/modal/navigation.png" 
                  alt="Navigation du site"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
              </div>
              <div 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: '400', 
                  color: '#374151',
                  lineHeight: '1.3'
                }}
              >
                <div>Navigation</div>
                <div>du site</div>
              </div>
            </div>

            {/* Zoom sur une photo */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-3 flex items-center justify-center"
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 12px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/modal/zoom.png" 
                  alt="Zoom sur une photo"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
              </div>
              <div 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: '400', 
                  color: '#374151',
                  lineHeight: '1.3'
                }}
              >
                <div>Zoom sur</div>
                <div>une photo</div>
              </div>
            </div>

            {/* Carte 2D */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-3 flex items-center justify-center"
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 12px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/modal/map.png" 
                  alt="Carte 2D"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
              </div>
              <div 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: '400', 
                  color: '#374151',
                  lineHeight: '1.3'
                }}
              >
                Carte 2D
              </div>
            </div>

            {/* Information sur une œuvre */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-3 flex items-center justify-center"
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 12px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/modal/info.png" 
                  alt="Information sur une œuvre"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
              </div>
              <div 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: '400', 
                  color: '#374151',
                  lineHeight: '1.3'
                }}
              >
                <div>Information</div>
                <div>sur une œuvre</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton d'exploration avec espacement généreux */}
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="text-white font-bold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#f97316', 
              color: 'white', 
              fontWeight: '700', 
              padding: '16px 32px', 
              borderRadius: '12px', 
              fontSize: '20px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ea580c';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f97316';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explorer le musée
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}