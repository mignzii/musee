import React, { useState } from "react";
import Accueil from "./imports/Accueil-21-2743";
import ExplorerOeuvreCollection from "./imports/ExplorerOeuvre-8-594";
import CompleteImmersiveTour from "./components/virtual-tour/CompleteImmersiveTour";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'collection' | 'virtual-tour'>('home');

  const navigateToCollection = () => {
    setCurrentPage('collection');
  };

  const navigateToVirtualTour = () => {
    setCurrentPage('virtual-tour');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="size-full">
      {currentPage === 'home' ? (
        <Accueil 
          onNavigateToCollection={navigateToCollection} 
          onNavigateToVirtualTour={navigateToVirtualTour}
        />
      ) : currentPage === 'collection' ? (
        <ExplorerOeuvreCollection onNavigateToHome={navigateToHome} />
      ) : (
        <CompleteImmersiveTour onNavigateToHome={navigateToHome} />
      )}
    </div>
  );
}