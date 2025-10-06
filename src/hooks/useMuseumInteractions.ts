import { useEffect, useCallback, useState } from 'react';

export function useMuseumInteractions() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle smooth scrolling
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(`[data-name*="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  }, []);

  // Handle ticket purchase
  const handleTicketPurchase = useCallback(() => {
    console.log('Opening ticket purchase modal...');
    // Here you would integrate with a ticketing system
    alert('Redirection vers la billetterie...');
  }, []);

  // Handle virtual tour
  const handleVirtualTour = useCallback(() => {
    console.log('Starting virtual tour...');
    // Here you would integrate with a virtual tour system
    alert('Démarrage de la visite virtuelle...');
  }, []);

  // Handle event registration
  const handleEventRegistration = useCallback((eventTitle: string) => {
    console.log(`Registering for event: ${eventTitle}`);
    alert(`Inscription à l'événement: ${eventTitle}`);
  }, []);

  // Handle newsletter subscription
  const handleNewsletterSubscription = useCallback((email: string) => {
    console.log(`Subscribing email: ${email}`);
    alert(`Inscription à la newsletter avec: ${email}`);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['Hero section', 'Cpllection et Evenement', 'CpllectionEtEvenement1', 'CpllectionEtEvenement2'];
      
      for (const section of sections) {
        const element = document.querySelector(`[data-name="${section}"]`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals
      } else if (e.key === 'Enter' && e.target instanceof HTMLElement) {
        // Handle enter key on focusable elements
        if (e.target.dataset.name?.includes('Link')) {
          e.target.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return {
    activeSection,
    isScrolled,
    scrollToSection,
    handleTicketPurchase,
    handleVirtualTour,
    handleEventRegistration,
    handleNewsletterSubscription
  };
}