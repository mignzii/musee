import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface CarouselImage {
  src: string;
  title: string;
  description?: string;
}

interface VirtualTourCarouselProps {
  images: CarouselImage[];
}

export function VirtualTourCarousel({ images }: VirtualTourCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    // Here you would integrate with a virtual tour player
    console.log('Starting virtual tour...');
  };

  return (
    <div className="relative bg-[#101010] h-[450px] w-full overflow-hidden">
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 416}px)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-[416px] h-full relative">
            <img 
              src={image.src} 
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            
            {/* Content overlay */}
            {index === currentIndex && (
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-4xl font-normal font-['Bebas_Neue'] mb-4">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-base mb-4 max-w-[360px] leading-normal">
                    {image.description}
                  </p>
                )}
                <button className="text-base font-semibold hover:text-[#ff5800] transition-colors">
                  VISITE VIRTUEL →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Play button overlay */}
      <button
        onClick={handlePlayClick}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                   w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full
                   flex items-center justify-center hover:bg-white/20 transition-colors
                   border-2 border-white/30"
      >
        <Play className="w-8 h-8 text-white ml-1" fill="white" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10
                   w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full
                   flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10
                   w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full
                   flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#ff5800]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}