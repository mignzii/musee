import { useState } from "react";
import Accueil from "./imports/Accueil-21-2743";
import ExplorerOeuvreCollection from "./imports/ExplorerOeuvre-8-594";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'collection'>('home');

  const navigateToCollection = () => {
    setCurrentPage('collection');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="size-full">
      {currentPage === 'home' ? (
        <Accueil onNavigateToCollection={navigateToCollection} />
      ) : (
        <ExplorerOeuvreCollection onNavigateToHome={navigateToHome} />
      )}
    </div>
  );
}