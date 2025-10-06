import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MuseumNavigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'decouvrir', label: 'Découvrir' },
    { id: 'exposition', label: 'Exposition et Collection' },
    { id: 'evenements', label: 'Evènements' },
    { id: 'boutiques', label: 'Boutiques' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={`font-medium text-lg transition-colors duration-200 hover:text-[#ff5800] ${
            activeSection === item.id 
              ? 'text-[#ff5800] border-b-2 border-[#ff5800] pb-1' 
              : 'text-[#242424]'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}