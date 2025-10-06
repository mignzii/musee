import { useMuseumInteractions } from '../hooks/useMuseumInteractions';
import Accueil from "../imports/Accueil";
import { MuseumDescriptionSection } from './MuseumDescriptionSection';

export function InteractiveAccueil() {
  const { 
    activeSection, 
    isScrolled,
    scrollToSection, 
    handleTicketPurchase, 
    handleVirtualTour,
    handleEventRegistration 
  } = useMuseumInteractions();

  return (
    <div className="relative">
      {/* Render the original Figma design */}
      <div 
        className="relative"
        onClick={(e) => {
          // Add click handling for navigation and buttons
          const target = e.target as HTMLElement;
          const clickedText = target.textContent?.trim();
          
          // Handle navigation clicks
          if (clickedText?.includes('Découvrir')) {
            scrollToSection('Hero section');
          } else if (clickedText?.includes('Exposition')) {
            scrollToSection('Cpllection et Evenement');
          } else if (clickedText?.includes('Evènements')) {
            scrollToSection('CpllectionEtEvenement1');
          } else if (clickedText?.includes('Acheter un billet')) {
            handleTicketPurchase();
          } else if (clickedText?.includes('Visite Virtuelle') || clickedText?.includes('VISITE VIRTUEL')) {
            handleVirtualTour();
          } else if (target.closest('[data-name*="event"]')) {
            const eventTitle = target.closest('[data-name*="Heading 4"]')?.textContent;
            if (eventTitle) {
              handleEventRegistration(eventTitle);
            }
          }
        }}
      >
        <Accueil />
      </div>

      {/* Add the Museum Description Section */}
      <div 
        className="relative"
        onClick={(e) => {
          // Add click handling for the video play button
          const target = e.target as HTMLElement;
          const playButton = target.closest('[data-name="iconoir:play-solid"]');
          
          if (playButton) {
            handleVirtualTour();
          }
        }}
      >
        <MuseumDescriptionSection />
      </div>

      {/* Floating action button for accessibility */}
      <button
        className={`fixed bottom-8 right-8 w-14 h-14 bg-[#ff5800] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center ${
          isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Retour en haut"
        aria-label="Retour en haut de la page"
      >
        ↑
      </button>

      {/* Accessibility announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Section active: {activeSection}
      </div>

      {/* Add section IDs for smooth scrolling */}
      <style jsx global>{`
        [data-name="Hero section"] {
          scroll-margin-top: 100px;
        }
        [data-name="Cpllection et Evenement"] {
          scroll-margin-top: 100px;
        }
        #museum-description {
          scroll-margin-top: 100px;
        }
        [data-name="Header"] {
          position: sticky;
          top: 0;
          z-index: 40;
        }
        
        /* Add hover effects to buttons */
        [data-name="Link"] {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        [data-name="Link"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 88, 0, 0.3);
        }
        
        /* Add hover effects to navigation */
        [data-name="Item → Link"] {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        [data-name="Item → Link"]:hover {
          color: #ff5800 !important;
        }
        
        /* Add hover effects to images */
        img {
          transition: transform 0.3s ease;
        }
        
        /* Add hover effects to play button */
        [data-name="iconoir:play-solid"] {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        [data-name="iconoir:play-solid"]:hover {
        }
        
        /* Add hover effects to museum description section images */
        [data-name="rs-layer-wrap → rs-mask-wrap → rs-layer"] img {
          transition: transform 0.3s ease;
        }
        
        /* Add smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Add loading animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        [data-name="Container"] {
          animation: fadeIn 0.6s ease-out;
        }
        
        /* Responsive improvements */
        @media (max-width: 768px) {
          [data-name="Section"] {
            flex-direction: column !important;
            gap: 20px !important;
          }
          
          [data-name="Frame1321316022"] {
            flex-direction: column !important;
            gap: 20px !important;
          }
          
          .text-[72px] {
            font-size: 48px !important;
          }
          
          .text-[56px] {
            font-size: 36px !important;
          }
          
          /* Museum Description Section Responsive */
          [data-name="BG"] .absolute {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            flex-direction: column !important;
            gap: 30px !important;
            padding: 20px !important;
          }
          
          [data-name="BG"] [data-name="image 20"] {
            width: 100% !important;
            height: 300px !important;
            margin: 0 !important;
          }
          
          [data-name="iconoir:play-solid"] {
            margin: 0 !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          
          [data-name="Frame2"] {
            flex-direction: column !important;
            gap: 15px !important;
          }
          
          [data-name="rs-layer-wrap → rs-mask-wrap → rs-layer"] {
            width: 100% !important;
            height: 120px !important;
          }
        }
      `}</style>
    </div>
  );
}