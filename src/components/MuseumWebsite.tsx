import React, { useState } from 'react';
import { Play, Pause, Volume2, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import svgPaths from "../imports/svg-8ibcoib0hp";
import imgImage13 from "figma:asset/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgRectangle12312 from "figma:asset/3dec1125c1484391649747df3380d07d8920a7a1.png";
import imgRectangle12313 from "figma:asset/aaf64882d25296bfe8e4d488d61f644d2a771c45.png";
import imgRectangle12314 from "figma:asset/8f9332662f782de48b9f6aa0c81dd52b2e50c7d9.png";
import imgRectangle12316 from "figma:asset/bc89288450089216ee693a954257c2d62f142724.png";
import imgRectangle12315 from "figma:asset/9cc6a0ff2579afcef533f970476404a89e9c297b.png";
import imgRectangle394 from "figma:asset/8a1f7503ffd68bc01b813781c9ca7e1699e85a2e.png";
import imgRectangle396 from "figma:asset/d44bd07a0fd0a0ab9de3c456780a7b38d33524a5.png";
import imgRectangle398 from "figma:asset/24fc70d68fb94de85be22b4b18adb0c22e4e78c4.png";
import imgRectangle395 from "figma:asset/dd5b83737c63727a4df8f3905d262cb8d355f733.png";
import imgRectangle397 from "figma:asset/90837034ff8c56ee9a701ced6e763659824fa733.png";
import imgImage from "figma:asset/fe4a4e60379d20a3b5897cca0da0e3537f659bc1.png";
import imgImage1 from "figma:asset/43bcd3e5c97c014efe43d35a6c0c8046e7609de2.png";
import imgImage2 from "figma:asset/73763b379d91dd9a53f08032ae1f043937aeb119.png";
import imgImage3 from "figma:asset/72a9613a2919e89593b3204ed694441056c8869d.png";
import imgImage4 from "figma:asset/88782c78e87edcc71d2c001124b46cfdd231c1ea.png";
import imgImage5 from "figma:asset/4c468b5d5380c497014e19e70ef6ff8a6b7fce39.png";
import imgImage6 from "figma:asset/2165d3b2e33dbeb9284b5de54e758abcb533788d.png";
import imgImage7 from "figma:asset/44f650c7d3e920b38d2cf16bc73194485f6be9c7.png";

const MuseumWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(83); // 1:23 en secondes
  const [selectedThumbnail, setSelectedThumbnail] = useState(4); // 5ème image sélectionnée par défaut
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const thumbnails = [
    imgRectangle12312,
    imgRectangle12313,
    imgRectangle12314,
    imgRectangle12316,
    imgRectangle12315,
    imgRectangle12313
  ];

  const artworks = [
    { image: imgImage, title: "Masque cérémoniel" },
    { image: imgImage1, title: "Sculpture ancestrale" },
    { image: imgImage2, title: "Objets rituels" },
    { image: imgImage3, title: "Art contemporain" },
    { image: imgImage4, title: "Instruments traditionnels" },
    { image: imgImage5, title: "Textiles anciens" },
    { image: imgImage6, title: "Bijoux royaux" },
    { image: imgImage7, title: "Poteries sacrées" }
  ];

  const exhibitions = [
    {
      image: imgRectangle397,
      title: "Afrique, berceau de l'humanité",
      link: "VISITE VIRTUELLE →"
    },
    {
      image: imgRectangle395,
      title: "portraits historiques",
      link: "VISITE VIRTUELLE →"
    },
    {
      image: imgRectangle395,
      title: "femmes africaines marquantes",
      link: "VISITE VIRTUELLE →"
    },
    {
      image: imgRectangle394,
      title: "Galerie des masques et des rituels",
      link: "VISITE VIRTUELLE →"
    },
    {
      image: imgRectangle396,
      title: "Galerie de l'art",
      link: "VISITE VIRTUELLE →"
    },
    {
      image: imgRectangle398,
      title: "Galerie des religions",
      link: "VISITE VIRTUELLE →"
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = Math.floor(percentage * duration);
    setCurrentTime(newTime);
  };

  return (
    <div className="bg-[#f2e8d5] relative min-h-screen">
      {/* Header */}
      <header className="absolute bg-[#faf7f0] box-border content-stretch flex flex-col items-start left-0 pb-[27.01px] pt-[27.02px] px-[50px] right-0 top-0 z-50">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[1061.81px]">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-center flex flex-wrap gap-0 items-center px-[15px] py-0 relative size-full">
                  {/* Logo */}
                  <div className="box-border content-stretch flex flex-col items-start max-w-[1085.81px] pl-0 pr-[64px] py-[8px] relative shrink-0">
                    <div className="h-[88.944px] relative shrink-0 w-[80px]">
                      <img alt="Musée des Civilisations Noires" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
                    </div>
                  </div>

                  {/* Navigation Desktop */}
                  <div className="basis-0 grow max-w-[1085.81px] min-h-px min-w-px relative shrink-0 hidden md:block">
                    <div className="max-w-inherit size-full">
                      <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[8px] pl-0 pr-[24px] pt-[12px] relative w-full">
                        <nav className="content-stretch flex isolate items-start relative shrink-0">
                          <a href="#" className="h-[61px] relative shrink-0 w-[120px] z-[5] flex items-center justify-center">
                            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#242424] text-[18.9px] tracking-[0.2px]">Découvrir</span>
                          </a>
                          <a href="#exposition" className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[4] group">
                            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#242424] text-[19px] tracking-[0.2px] group-hover:text-[#ff5800] transition-colors">Exposition et Collection</span>
                            <div className="bg-[#242424] h-[2px] shrink-0 w-[189px] group-hover:bg-[#ff5800] transition-colors" />
                          </a>
                          <a href="#visite" className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[3] hover:text-[#ff5800] transition-colors">
                            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#242424] text-[19px] tracking-[0.2px]">Visite Virtuelle</span>
                          </a>
                          <a href="#evenements" className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[2] hover:text-[#ff5800] transition-colors">
                            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#242424] text-[18.7px] tracking-[0.2px]">Evènements</span>
                          </a>
                          <a href="#boutiques" className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[1] hover:text-[#ff5800] transition-colors">
                            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#242424] text-[19px] tracking-[0.2px]">Boutiques</span>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {/* Cart & Search Icons */}
                  <div className="box-border content-stretch flex flex-col items-start max-w-[1085.81px] pb-[7.99px] pl-[25px] pr-[24px] pt-[6.39px] relative shrink-0">
                    <div className="box-border content-stretch flex items-start pb-0 pt-[1.02px] px-0 relative shrink-0">
                      <div className="box-border content-stretch flex items-start pb-[1.38px] pt-px px-0 relative shrink-0 w-[18px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none scale-y-[-100%]">
                            <div className="h-[24px] relative w-[18px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
                                <path d={svgPaths.p3f980d00} fill="#242424" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#ff5800] bottom-[-2.99px] box-border content-stretch flex flex-col items-center min-h-[15px] min-w-[15px] pl-[4.55px] pr-[4.56px] py-0 right-[-6.11px] rounded-[8px]">
                        <span className="font-['Kumbh_Sans:Medium',_sans-serif] font-medium text-[#242424] text-[10px] text-center">0</span>
                      </div>
                    </div>
                  </div>

                  <div className="box-border content-stretch flex flex-col items-start max-w-[1061.81px] pb-[7.63px] pl-[8px] pr-0 pt-[6.89px] relative shrink-0">
                    <div className="box-border content-stretch flex flex-col h-[26px] items-center pl-[5.61px] pr-0 py-0 relative shrink-0 w-[22.39px]">
                      <div className="box-border content-stretch flex items-start p-px relative shrink-0">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none scale-y-[-100%]">
                            <div className="relative size-[24px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPaths.p10e0c900} fill="#242424" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[268.36px]">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="box-border content-center flex flex-wrap gap-0 items-center justify-end px-[15px] py-0 relative size-full">
                  <Button className="bg-[#ff5800] hover:bg-[#e04e00] text-[#101010] px-[26px] py-[16px] rounded-[4px] font-['Jost:Medium',_sans-serif] font-medium text-[18px]">
                    Acheter un billet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf7f0] border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4 px-[50px]">
              <a href="#" className="text-[#242424] hover:text-[#ff5800] transition-colors">Découvrir</a>
              <a href="#exposition" className="text-[#242424] hover:text-[#ff5800] transition-colors">Exposition et Collection</a>
              <a href="#visite" className="text-[#242424] hover:text-[#ff5800] transition-colors">Visite Virtuelle</a>
              <a href="#evenements" className="text-[#242424] hover:text-[#ff5800] transition-colors">Evènements</a>
              <a href="#boutiques" className="text-[#242424] hover:text-[#ff5800] transition-colors">Boutiques</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="absolute bg-[#242424] h-[274px] left-0 overflow-clip top-[141px] w-full">
        <div className="absolute flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-1/2 text-[56px] text-center text-white top-[123px] translate-x-[-50%] translate-y-[-50%] w-[966px] max-w-[90%]">
          <p className="leading-[70px]">Entrez dans l'univers vivant des civilisations noires</p>
        </div>
        
        {/* Breadcrumb */}
        <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-[204px] translate-x-[-50%]">
          <div className="box-border content-stretch flex gap-[8px] h-[45px] items-center px-0 py-[8px] relative shrink-0">
            <p className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.8] relative shrink-0 text-[#d2d3d5] text-[16px] text-nowrap whitespace-pre">
              Exposition et Collection
            </p>
          </div>
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3b299880} fill="white" fillOpacity="0.5" />
            </svg>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[45px] items-center px-0 py-[8px] relative shrink-0">
            <p className="capitalize font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
              Masques et rituels
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Mask Display */}
      <div id="exposition" className="absolute content-stretch flex gap-[36px] items-center left-1/2 top-[475px] translate-x-[-50%] w-[1320px] max-w-[95%]">
        {/* Image Gallery */}
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          {/* Thumbnail Column */}
          <div className="flex flex-row items-center self-stretch">
            <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
              {thumbnails.map((thumb, index) => (
                <div 
                  key={index} 
                  className={`h-[78px] relative shrink-0 w-[80px] cursor-pointer transition-all hover:scale-105 ${
                    selectedThumbnail === index ? 'ring-2 ring-[#ff5800]' : ''
                  }`}
                  onClick={() => setSelectedThumbnail(index)}
                >
                  <img 
                    alt={`Aperçu ${index + 1}`} 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={thumb} 
                  />
                  {selectedThumbnail === index && (
                    <div className="absolute border-2 border-[#ff5800] border-solid inset-0" />
                  )}
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                className="absolute top-0 left-0 w-[32px] h-[80px] backdrop-blur-md bg-white/80 border border-[#dfdfdf] flex items-center justify-center hover:bg-white/90 transition-all"
                onClick={() => setSelectedThumbnail(Math.max(0, selectedThumbnail - 1))}
                disabled={selectedThumbnail === 0}
              >
                <ChevronLeft size={16} className="text-[#0C0C0C]" />
              </button>
              
              <button 
                className="absolute bottom-0 left-0 w-[32px] h-[80px] backdrop-blur-md bg-white/80 border border-[#dfdfdf] flex items-center justify-center hover:bg-white/90 transition-all"
                onClick={() => setSelectedThumbnail(Math.min(thumbnails.length - 1, selectedThumbnail + 1))}
                disabled={selectedThumbnail === thumbnails.length - 1}
              >
                <ChevronRight size={16} className="text-[#0C0C0C]" />
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div className="h-[605px] relative shrink-0 w-[648px]">
            <img 
              alt="Masque Bamiléké aux grandes oreilles" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full rounded-lg shadow-lg" 
              src={thumbnails[selectedThumbnail]} 
            />
          </div>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-[505px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[467px]">
            <div className="content-stretch flex flex-col gap-[11px] items-center relative shrink-0 w-full">
              <h1 className="font-['Jost:SemiBold',_sans-serif] font-semibold text-[#242424] text-[48px] leading-[61px] w-full">
                Masque Bamiléké aux grandes oreilles
              </h1>
              <div className="font-['Jost:Medium',_sans-serif] font-medium text-[#2f2f2f] text-[18px] leading-[normal] w-full">
                <p>
                  Origine : Cameroun<br />
                  Matériau : Bois<br />
                  Dimensions : 130 × 65 cm
                </p>
              </div>
            </div>
            <div className="font-['Jost:Regular',_sans-serif] font-normal text-[#2f2f2f] text-[18px] leading-[normal] w-full">
              <p className="mb-4">Ce masque Bamiléké aux grandes oreilles provient des hautes terres de l'Ouest du Cameroun, une région riche en traditions royales et spirituelles.</p>
              <p className="mb-4">Symbole de sagesse, d'écoute et de pouvoir, ce masque était porté lors de cérémonies rituelles destinées à honorer les ancêtres ou à marquer les grandes fêtes du royaume.</p>
              <p>Les oreilles démesurées évoquent la capacité du chef à entendre la voix du peuple et des esprits.</p>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-[#f1f3f4] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[15px] relative rounded-[200px] shrink-0 w-[477px]">
            <button onClick={togglePlay} className="flex items-center justify-center">
              {isPlaying ? (
                <Pause size={22} className="text-black" />
              ) : (
                <Play size={22} className="text-black" />
              )}
            </button>
            
            <span className="font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-black text-nowrap whitespace-pre">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            
            <div 
              className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative rounded-[200px] shrink-0 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div className="basis-0 bg-[#d9d9d9] grow h-[4px] min-h-px min-w-px shrink-0" />
              <div 
                className="absolute bg-[#595959] h-[4px] left-0 rounded-[200px] top-0 transition-all duration-300" 
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            
            <Volume2 size={22} className="text-black" />
            
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3db58f80} fill="#00853F" />
                  <path d={svgPaths.p371d5d00} fill="#FDEF42" />
                  <path d={svgPaths.p124c01f0} fill="#E31B23" />
                  <path d={svgPaths.p28202880} fill="#00853F" />
                </svg>
              </div>
              <ChevronLeft size={22} className="text-[#333333] rotate-180" />
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Exhibitions Section */}
      <div className="absolute bg-[#242424] h-[802px] left-1/2 overflow-clip top-[1993px] translate-x-[-50%] w-full">
        {/* Title */}
        <div className="absolute content-stretch flex flex-col gap-[20px] h-[198px] items-center leading-[0] left-1/2 text-center text-white top-[91px] translate-x-[-50%] w-[948px] max-w-[90%]">
          <h2 className="font-['Jost:SemiBold',_sans-serif] font-semibold text-[56px] leading-[72px] text-nowrap">
            Plongez au cœur du musée
          </h2>
          <p className="font-['Jost:Regular',_sans-serif] font-normal text-[18px] leading-[normal] w-[695px] max-w-full">
            Découvrez le Musée des Civilisations Noires à travers une expérience virtuelle unique. Parcourez les galeries, admirez les œuvres, et laissez-vous guider par les récits qui font vibrer l'histoire du continent africain.
          </p>
        </div>

        {/* Exhibitions Carousel */}
        <div id="visite" className="absolute bg-[#2f2f2f] h-[450px] left-[calc(50%+0.5px)] overflow-x-auto overflow-y-clip top-[278px] translate-x-[-50%] w-full max-w-[1307px]">
          <div className="flex gap-4 h-full p-4">
            {exhibitions.map((exhibition, index) => (
              <Card key={index} className="relative min-w-[400px] h-full bg-transparent border-none overflow-hidden group cursor-pointer">
                <div className="absolute inset-0">
                  <img 
                    alt={exhibition.title} 
                    className="w-full h-full object-cover" 
                    src={exhibition.image} 
                  />
                  <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 group-hover:bg-[rgba(0,0,0,0.4)] transition-all" />
                </div>
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-['Bebas_Neue:Regular',_sans-serif] text-[32px] leading-[normal] mb-4">
                    {exhibition.title}
                  </h3>
                  <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] leading-[24px] group-hover:text-[#ff5800] transition-colors">
                    {exhibition.link}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Artworks Gallery Section */}
      <div className="absolute bg-[#f2e8d5] h-[889px] left-[calc(50%+1px)] overflow-clip top-[1104px] translate-x-[-50%] w-full">
        {/* Title */}
        <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[calc(50%+0.5px)] top-[50px] translate-x-[-50%] w-[715px] max-w-[90%]">
          <h2 className="font-['Jost:SemiBold',_sans-serif] font-semibold text-[#242424] text-[56px] leading-[normal] w-full text-center">
            Explorer les Oeuvres et Arts
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="absolute content-stretch flex flex-col items-start left-[30px] right-[30px] top-[calc(50%+72.61px)] translate-y-[-50%]">
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
              <div className="h-[634.22px] relative shrink-0 w-full">
                <div className="grid grid-cols-4 gap-4 h-full">
                  {artworks.map((artwork, index) => (
                    <Card 
                      key={index} 
                      className={`relative overflow-hidden bg-transparent border-none cursor-pointer group ${
                        index === 0 ? 'row-span-1' : 
                        index === 1 ? 'row-span-2' : 
                        index === 2 ? 'row-span-2' : 
                        index === 3 ? 'row-span-1' : 
                        index === 4 ? 'row-span-1' : 
                        index === 5 ? 'row-span-1' : 
                        index === 6 ? 'row-span-2' : 
                        'row-span-1'
                      }`}
                    >
                      <div className="absolute inset-0">
                        <img 
                          alt={artwork.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                          src={artwork.image} 
                        />
                        <div className="absolute bg-[#040404] inset-0 opacity-0 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge variant="secondary" className="bg-white/90 text-black">
                          {artwork.title}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 h-[652px] left-0 w-full">
        <footer className="absolute bg-[#faf7f0] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-1/2 px-[60px] py-[65px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <div className="box-border content-stretch flex flex-col h-[522px] items-center pb-[20px] pt-0 px-0 relative shrink-0 w-full max-w-6xl">
            {/* Footer Content */}
            <div className="box-border content-stretch flex gap-[119px] items-start mb-[-20px] relative shrink-0 flex-wrap">
              {/* Navigation */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                <h3 className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] text-[#101010] text-[18px]">Navigation</h3>
                <div className="content-stretch flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium gap-[10px] items-start leading-[normal] text-[#101010] text-[18px]">
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Découvrir</a>
                  <a href="#exposition" className="opacity-50 hover:opacity-100 transition-opacity">Exposition et Collection</a>
                  <a href="#visite" className="opacity-50 hover:opacity-100 transition-opacity">Visite Virtuelle</a>
                  <a href="#evenements" className="opacity-50 hover:opacity-100 transition-opacity">Evenement</a>
                  <a href="#boutiques" className="opacity-50 hover:opacity-100 transition-opacity">Boutique</a>
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Acheter un Ticket</a>
                </div>
              </div>

              {/* Contact */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                <h3 className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] text-[#101010] text-[18px]">Contact</h3>
                <div className="content-stretch flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium gap-[11px] items-start leading-[normal] text-[#101010] text-[18px]">
                  <a href="tel:+22133889118" className="opacity-50 hover:opacity-100 transition-opacity underline">+221 33 889 11 80</a>
                  <a href="mailto:mcn@gmail.com" className="opacity-50 hover:opacity-100 transition-opacity">mcn@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                <h3 className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] text-[#101010] text-[18px]">Adresse</h3>
                <a href="#" className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] opacity-50 text-[#101010] text-[18px] underline hover:opacity-100 transition-opacity">
                  Musée des Civilisations noires, Dakar
                </a>
              </div>

              {/* Hours */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                <h3 className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] text-[#101010] text-[18px]">Horaires</h3>
                <div className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[30px] opacity-50 text-[#101010] text-[18px]">
                  <p>lundi	Fermé</p>
                  <p>mardi	10:00–19:00</p>
                  <p>mercredi	10:00–19:00</p>
                  <p>jeudi	10:00–19:00</p>
                  <p>vendredi	10:00–19:00</p>
                  <p>samedi	10:00–19:00</p>
                  <p>dimanche	10:00–19:00</p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="box-border content-stretch flex flex-col gap-[25px] items-center mb-[-20px] relative shrink-0">
              <div className="h-[221.247px] relative shrink-0 w-[199px]">
                <img alt="Logo du musée" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
              </div>
              <p className="font-['Jost:Regular',_sans-serif] font-normal leading-[26px] text-[#101010] text-[16px] text-center">
                © 2018 - 2025 Musée des Civilisations Noires. Tous droits réservés.
              </p>
              
              {/* Social Media */}
              <div className="content-stretch flex gap-[27px] items-center relative shrink-0">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-[8.571px] h-[18.341px]" fill="none" preserveAspectRatio="none" viewBox="0 0 9 19">
                    <path d={svgPaths.p1b369f80} fill="#101010" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-[19.178px] h-[15.495px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                    <path d={svgPaths.p34662d00} fill="#101010" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-[20px] h-[19.891px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.pd4f8700} fill="#101010" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-[15.565px] h-[16.151px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
                    <path d={svgPaths.p3a18d900} fill="#101010" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MuseumWebsite;