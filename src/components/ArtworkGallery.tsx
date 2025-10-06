import { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

interface Artwork {
  id: string;
  image: string;
  title: string;
  artist?: string;
  description?: string;
}

interface ArtworkGalleryProps {
  artworks: Artwork[];
}

export function ArtworkGallery({ artworks }: ArtworkGalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleFavorite = (artworkId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(artworkId)) {
      newFavorites.delete(artworkId);
    } else {
      newFavorites.add(artworkId);
    }
    setFavorites(newFavorites);
  };

  const handleShare = (artwork: Artwork, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Sharing artwork: ${artwork.title}`);
    // Here you would implement sharing functionality
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => handleArtworkClick(artwork)}
          >
            {/* Image container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleFavorite(artwork.id, e)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      favorites.has(artwork.id)
                        ? 'bg-red-500/80 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.has(artwork.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={(e) => handleShare(artwork, e)}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                
                {/* View button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-[#ff5800] text-white py-2 px-4 rounded-md hover:bg-[#ff5800]/90 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    Voir l'œuvre
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-medium text-[#242424] text-lg mb-1 group-hover:text-[#ff5800] transition-colors">
                {artwork.title}
              </h3>
              {artwork.artist && (
                <p className="text-[#5f5f5f] text-sm">{artwork.artist}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected artwork */}
      {selectedArtwork && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex">
              {/* Image */}
              <div className="flex-1">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="w-96 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-[#242424]">
                    {selectedArtwork.title}
                  </h2>
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                {selectedArtwork.artist && (
                  <p className="text-[#5f5f5f] mb-4">{selectedArtwork.artist}</p>
                )}
                
                {selectedArtwork.description && (
                  <p className="text-[#5f5f5f] leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                )}
                
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={(e) => handleFavorite(selectedArtwork.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      favorites.has(selectedArtwork.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.has(selectedArtwork.id) ? 'currentColor' : 'none'} />
                    {favorites.has(selectedArtwork.id) ? 'Retiré des favoris' : 'Ajouter aux favoris'}
                  </button>
                  <button
                    onClick={(e) => handleShare(selectedArtwork, e)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#ff5800] text-white hover:bg-[#ff5800]/90 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Partager
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}