import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "./svg-9abyehwwpy";
import imgImage13 from "../assets/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgRectangle12312 from "../assets/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgRectangle12313 from "../assets/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgRectangle12314 from "../assets/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgRectangle12316 from "../assets/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgRectangle12315 from "../assets/9cc6a0ff2579afcef533f970476404a89e9c297b.png";
import imgImage from "../assets/fe4a4e60379d20a3b5897cca0da0e3537f659bc1.png";
import imgImage1 from "../assets/43bcd3e5c97c014efe43d35a6c0c8046e7609de2.png";
import imgImage2 from "../assets/73763b379d91dd9a53f08032ae1f043937aeb119.png";
import imgImage3 from "../assets/72a9613a2919e89593b3204ed694441056c8869d.png";
import imgImage4 from "../assets/88782c78e87edcc71d2c001124b46cfdd231c1ea.png";
import imgImage5 from "../assets/4c468b5d5380c497014e19e70ef6ff8a6b7fce39.png";
import imgImage6 from "../assets/2165d3b2e33dbeb9284b5de54e758abcb533788d.png";
import imgImage7 from "../assets/44f650c7d3e920b38d2cf16bc73194485f6be9c7.png";
import imgRectangle394 from "../assets/8a1f7503ffd68bc01b813781c9ca7e1699e85a2e.png";
import imgRectangle396 from "../assets/d44bd07a0fd0a0ab9de3c456780a7b38d33524a5.png";
import imgRectangle398 from "../assets/24fc70d68fb94de85be22b4b18adb0c22e4e78c4.png";
import imgRectangle395 from "../assets/dd5b83737c63727a4df8f3905d262cb8d355f733.png";
import imgRectangle397 from "../assets/90837034ff8c56ee9a701ced6e763659824fa733.png";

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1085.81px] pl-0 pr-[64px] py-[8px] relative shrink-0" data-name="Margin">
      <div className="h-[88.944px] relative shrink-0 w-[80px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function ItemLink({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  const handleClick = () => {
    onNavigateToHome();
  };

  return (
    <div 
      className="h-[61px] relative shrink-0 w-[120px] z-[5] cursor-pointer" 
      data-name="Item → Link"
      onClick={handleClick}
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] left-[15.19px] not-italic text-[#242424] text-[18.9px] text-nowrap top-[28.68px] tracking-[0.2px] translate-y-[-50%]">
        <p className="leading-[28.5px] whitespace-pre">Découvrir</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[4]" data-name="Item → Link">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[19px] text-nowrap tracking-[0.2px]">
        <p className="leading-[28.5px] whitespace-pre">Exposition et Collection</p>
      </div>
      <div className="bg-[#242424] h-[2px] shrink-0 w-[189px]" data-name="Horizontal Divider" />
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[3]" data-name="Item → Link">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[19px] text-nowrap tracking-[0.2px]">
        <p className="leading-[28.5px] whitespace-pre">Visite Virtuelle</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[2]" data-name="Item → Link">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[18.7px] text-nowrap tracking-[0.2px]">
        <p className="leading-[28.5px] whitespace-pre">Evènements</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[17.7px] pt-[14.18px] px-[15.2px] relative shrink-0 z-[1]" data-name="Item → Link">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[19px] text-nowrap tracking-[0.2px]">
        <p className="leading-[28.5px] whitespace-pre">Boutiques</p>
      </div>
    </div>
  );
}

function NavList({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0" data-name="Nav → List">
      <ItemLink onNavigateToHome={onNavigateToHome} />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
    </div>
  );
}

function Margin1({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="basis-0 grow max-w-[1085.81px] min-h-px min-w-px relative shrink-0" data-name="Margin">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[8px] pl-0 pr-[24px] pt-[12px] relative w-full">
          <NavList onNavigateToHome={onNavigateToHome} />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="Icon">
          <path d={svgPaths.p3f980d00} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex items-start pb-[1.38px] pt-px px-0 relative shrink-0 w-[18px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#ff5800] bottom-[-2.99px] box-border content-stretch flex flex-col items-center min-h-[15px] min-w-[15px] pl-[4.55px] pr-[4.56px] py-0 right-[-6.11px] rounded-[8px]" data-name="Background">
      <div className="flex flex-col font-['Kumbh_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#242424] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        <p className="leading-[15px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex items-start pb-0 pt-[1.02px] px-0 relative shrink-0" data-name="Container">
      <Container />
      <Background />
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1085.81px] pb-[7.99px] pl-[25px] pr-[24px] pt-[6.39px] relative shrink-0" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p10e0c900} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex items-start p-px relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[26px] items-center pl-[5.61px] pr-0 py-0 relative shrink-0 w-[22.39px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1061.81px] pb-[7.63px] pl-[8px] pr-0 pt-[6.89px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container4({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-center flex flex-wrap gap-0 items-center px-[15px] py-0 relative size-full">
          <Margin />
          <Margin1 onNavigateToHome={onNavigateToHome} />
          <Margin2 />
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function Container5({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[1061.81px]" data-name="Container">
      <Container4 onNavigateToHome={onNavigateToHome} />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ff5800] box-border content-stretch flex gap-[8px] items-start overflow-clip px-[26px] py-[16px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Jost:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#101010] text-[18px] text-center text-nowrap">
        <p className="leading-[27px] whitespace-pre">Acheter un billet</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-center flex flex-wrap gap-0 items-center justify-end px-[15px] py-0 relative size-full">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[268.36px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Section({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Section">
      <Container5 onNavigateToHome={onNavigateToHome} />
      <Container7 />
    </div>
  );
}

function Header({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="bg-[#faf7f0] relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[27.01px] pt-[27.02px] px-[50px] relative w-full">
          <Section onNavigateToHome={onNavigateToHome} />
        </div>
      </div>
    </div>
  );
}

function BreadcrumbsElements() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[45px] items-center px-0 py-[8px] relative shrink-0" data-name="Breadcrumbs elements">
      <p className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.8] relative shrink-0 text-[#d2d3d5] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Exposition et Collection
      </p>
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow_forward_ios">
          <path d={svgPaths.p3b299880} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BreadcrumbsElements1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[45px] items-center px-0 py-[8px] relative shrink-0" data-name="Breadcrumbs elements">
      <p className="capitalize font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Masques et rituels
      </p>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-[204px] translate-x-[-50%]" data-name="breadcrumb">
      <BreadcrumbsElements />
      <ArrowForwardIos />
      <BreadcrumbsElements1 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#242424] h-[274px] overflow-clip relative shrink-0 w-full" data-name="Hero section">
      <div className="absolute flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-1/2 text-[56px] text-center text-white top-[123px] translate-x-[-50%] translate-y-[-50%] w-[966px]">
        <p className="leading-[70px]">Entrez dans l'univers vivant des civilisations noires</p>
      </div>
      <Breadcrumb />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute left-0 size-[32px] top-[24px]" data-name="arrow_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="arrow_left">
          <path d={svgPaths.p2ce9c100} fill="var(--fill-0, #0C0C0C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26085660() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-white h-[80px] relative w-[32px]">
      <div className="h-[80px] overflow-clip relative rounded-[inherit] w-[32px]">
        <ArrowLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame26085659({ selectedImageIndex, onThumbnailClick }: { selectedImageIndex: number; onThumbnailClick: (index: number) => void }) {
  const thumbnails = [
    { src: imgImage1, alt: "Masque Bamiléké - Vue 1" },
    { src: imgImage2, alt: "Masque Bamiléké - Vue 2" },
    { src: imgImage3, alt: "Masque Bamiléké - Vue 3" },
    { src: imgImage4, alt: "Masque Bamiléké - Vue 4" },
    { src: imgRectangle12315, alt: "Masque Bamiléké - Vue 5" },
    { src: imgImage5, alt: "Masque Bamiléké - Vue 6" }
  ];

  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
      {thumbnails.map((thumbnail, index) => (
        <motion.div
          key={index}
          className="h-[78px] relative shrink-0 w-[80px] cursor-pointer"
          onClick={() => onThumbnailClick(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.img
            alt={thumbnail.alt}
            className="absolute inset-0 max-w-none object-50%-50% object-cover size-full pointer-events-auto"
            src={thumbnail.src}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: index === selectedImageIndex ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
          {index === selectedImageIndex && (
            <motion.div
              className="absolute border-2 border-[#ff5800] border-solid inset-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          )}
        </motion.div>
      ))}
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-[573px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "80" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Frame26085660 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "80" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]" />
      </div>
    </div>
  );
}

function Frame26085658({ selectedImageIndex }: { selectedImageIndex: number }) {
  const images = [
    { src: imgImage1, alt: "Masque Bamiléké - Vue principale 1" },
    { src: imgImage2, alt: "Masque Bamiléké - Vue principale 2" },
    { src: imgImage3, alt: "Masque Bamiléké - Vue principale 3" },
    { src: imgImage4, alt: "Masque Bamiléké - Vue principale 4" },
    { src: imgRectangle12315, alt: "Masque Bamiléké - Vue principale 5" },
    { src: imgImage5, alt: "Masque Bamiléké - Vue principale 6" }
  ];

  return (
    <div className="h-[605px] relative shrink-0 w-[648px] overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImageIndex}
          className="absolute h-[605px] left-0 top-0 w-[648px]"
          initial={{ opacity: 0, scale: 1.1, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0.0, 0.2, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.img
            alt={images[selectedImageIndex].alt}
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={images[selectedImageIndex].src}
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Image({ selectedImageIndex, onThumbnailClick }: { selectedImageIndex: number; onThumbnailClick: (index: number) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Image">
      <div className="flex flex-row items-center self-stretch">
        <Frame26085659 selectedImageIndex={selectedImageIndex} onThumbnailClick={onThumbnailClick} />
      </div>
      <Frame26085658 selectedImageIndex={selectedImageIndex} />
    </div>
  );
}

function Frame1321316017() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[#242424] text-[48px] w-full">
        <p className="leading-[61px]">Masque Bamiléké aux grandes oreilles</p>
      </div>
      <div className="flex flex-col font-['Jost:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2f2f2f] text-[18px] w-full">
        <p className="leading-[normal]">
          Origine : Cameroun
          <br aria-hidden="true" />
          Matériau : Bois
          <br aria-hidden="true" />
          Dimensions : 130 × 65 cm
        </p>
      </div>
    </div>
  );
}

function Frame1321316018() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[467px]">
      <Frame1321316017 />
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#2f2f2f] text-[18px] w-full">
        <p className="mb-0">Ce masque Bamiléké aux grandes oreilles provient des hautes terres de l'Ouest du Cameroun, une région riche en traditions royales et spirituelles.</p>
        <p className="mb-0">Symbole de sagesse, d'écoute et de pouvoir, ce masque était porté lors de cérémonies rituelles destinées à honorer les ancêtres ou à marquer les grandes fêtes du royaume.</p>
        <p>Les oreilles démesurées évoquent la capacité du chef à entendre la voix du peuple et des esprits.Les oreilles démesurées évoquent la capacité du chef à entendre la voix du peuple et des esprits.</p>
      </div>
    </div>
  );
}

function Play({ isPlaying = false }: { isPlaying?: boolean }) {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_1_652)" id="play">
          <g id="Vector"></g>
          {isPlaying ? (
            // Icône pause (deux rectangles)
            <>
              <rect x="6" y="4" width="3" height="14" fill="var(--fill-0, black)" />
              <rect x="13" y="4" width="3" height="14" fill="var(--fill-0, black)" />
            </>
          ) : (
            // Icône play (triangle)
            <path d={svgPaths.p29d52280} fill="var(--fill-0, black)" id="Vector_2" />
          )}
        </g>
        <defs>
          <clipPath id="clip0_1_652">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timeline({ currentTime, duration, onSeek }: { currentTime: number; duration: number; onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative rounded-[200px] shrink-0" data-name="timeline">
      <div className="basis-0 bg-[#d9d9d9] grow h-[4px] min-h-px min-w-px shrink-0" data-name="all" />
      <div 
        className="absolute bg-[#595959] h-[4px] left-0 rounded-[200px] top-0 transition-all duration-100" 
        data-name="current" 
        style={{ width: `${progress}%` }}
      />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={onSeek}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

function Volume({ volume, onVolumeChange }: { volume: number; onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="volume">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_1_656)" id="volume">
          <g id="Vector"></g>
          <path d={svgPaths.p2949b700} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_656">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={onVolumeChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

function TwemojiFlagSenegal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="twemoji:flag-senegal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_660)" id="twemoji:flag-senegal">
          <path d={svgPaths.p3db58f80} fill="var(--fill-0, #00853F)" id="Vector" />
          <path d={svgPaths.p371d5d00} fill="var(--fill-0, #FDEF42)" id="Vector_2" />
          <path d={svgPaths.p124c01f0} fill="var(--fill-0, #E31B23)" id="Vector_3" />
          <path d={svgPaths.p28202880} fill="var(--fill-0, #00853F)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_660">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TablerChevronUp() {
  return (
    <div className="relative size-[22px]" data-name="tabler:chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="tabler:chevron-up">
          <path d={svgPaths.p1355cc80} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Langue() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Langue">
      <TwemojiFlagSenegal />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <TablerChevronUp />
        </div>
      </div>
    </div>
  );
}

function ChromeDefaultAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(83); // 1:23 en secondes
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="bg-[#f1f3f4] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[15px] relative rounded-[200px] shrink-0 w-[477px]" data-name="Chrome_Default_Audio_Player">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      >
        <source src="/audio/david.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
      
      <button onClick={togglePlayPause} className="cursor-pointer">
        <Play isPlaying={isPlaying} />
      </button>
      
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>
      
      <Timeline currentTime={currentTime} duration={duration} onSeek={handleSeek} />
      <Volume volume={volume} onVolumeChange={handleVolumeChange} />
      <Langue />
    </div>
  );
}

function Frame1321316019() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-[505px]">
      <Frame1321316018 />
      <ChromeDefaultAudioPlayer />
    </div>
  );
}

function Component1({ selectedImageIndex, onThumbnailClick }: { selectedImageIndex: number; onThumbnailClick: (index: number) => void }) {
  return (
    <div className="absolute content-stretch flex gap-[36px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1320px]" data-name="Component 1">
      <Image selectedImageIndex={selectedImageIndex} onThumbnailClick={onThumbnailClick} />
      <Frame1321316019 />
    </div>
  );
}

function Information() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(4); // Commencer avec l'image 5 (index 4)

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };


  return (
    <div className="bg-[#f2e8d5] h-[689px] overflow-clip relative shrink-0 w-full" data-name="Information">
      <Component1 selectedImageIndex={selectedImageIndex} onThumbnailClick={handleThumbnailClick} />
    </div>
  );
}

function Heading5() {
  return <div className="h-[26.59px] mb-[-0.01px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin4() {
  return <div className="h-[27.59px] mb-[-0.01px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[194.25px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.01px] pt-0 px-0 top-[20px] w-[282.5px]" data-name="Container">
      <Heading5 />
      <Margin4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[234.25px] left-0 overflow-clip right-[1057.5px] top-0" data-name="Container">
      <div className="absolute inset-[-0.59px_-0.8px_-0.58px_-0.81px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[244.75%] left-0 max-w-none top-[-49%] w-full" src={imgImage} />
        </div>
      </div>
      <div className="absolute bg-[#040404] inset-[9.61px_9.49px_9.32px_9px] opacity-0" data-name="Background" />
      <Container8 />
    </div>
  );
}

function Heading6() {
  return <div className="h-[26.59px] mb-[-0.01px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin5() {
  return <div className="h-[27.59px] mb-[-0.01px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[299.97px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.01px] pt-0 px-0 top-[20px] w-[282.5px]" data-name="Container">
      <Heading6 />
      <Margin5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[339.97px] left-0 overflow-clip right-[1057.5px] top-[264.25px]" data-name="Container">
      <div className="absolute inset-[-0.85px_-0.8px_-0.85px_-0.81px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-[#040404] inset-[9.2px_9.25px_9.2px_9.24px] opacity-0" data-name="Background" />
      <Container10 />
    </div>
  );
}

function Heading7() {
  return <div className="h-[26.59px] mb-[-0.01px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin6() {
  return <div className="h-[27.59px] mb-[-0.01px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[299.95px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.01px] pt-0 px-0 top-[20px] w-[282.5px]" data-name="Container">
      <Heading7 />
      <Margin6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[339.95px] left-[352.5px] overflow-clip right-[705px] top-0" data-name="Container">
      <div className="absolute inset-[-0.85px_-0.8px_-0.85px_-0.81px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute bg-[#040404] inset-[9.2px_9.25px_9.2px_9.24px] opacity-0" data-name="Background" />
      <Container12 />
    </div>
  );
}

function Heading8() {
  return <div className="h-[53.19px] mb-[-0.02px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin7() {
  return <div className="h-[27.59px] mb-[-0.02px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container14() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[194.27px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.02px] pt-0 px-0 top-[20px] w-[282.5px]" data-name="Container">
      <Heading8 />
      <Margin7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[234.27px] left-[352.5px] overflow-clip right-[705px] top-[369.95px]" data-name="Container">
      <div className="absolute inset-[-0.59px_-0.8px_-0.58px_-0.81px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[244.73%] left-0 max-w-none top-[-34.23%] w-full" src={imgImage3} />
        </div>
      </div>
      <div className="absolute bg-[#040404] inset-[9.46px_9.25px_9.47px_9.24px] opacity-0" data-name="Background" />
      <Container14 />
    </div>
  );
}

function Heading9() {
  return <div className="h-[26.59px] mb-[-0.01px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin8() {
  return <div className="h-[27.59px] mb-[-0.01px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container16() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[247.11px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.01px] pt-0 px-0 top-[20px] w-[282.5px]" data-name="Container">
      <Heading9 />
      <Margin8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[287.11px] left-[705px] overflow-clip right-[352.5px] top-0" data-name="Container">
      <div className="absolute inset-[-0.72px_-0.8px_-0.71px_-0.81px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute bg-[#040404] inset-[9.61px_9.49px_9.06px_9px] opacity-0" data-name="Background" />
      <Container16 />
    </div>
  );
}

function Heading10() {
  return <div className="h-[26.59px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin9() {
  return <div className="h-[27.59px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.457e_-13px] h-[247.11px] isolate items-center justify-center left-[20px] overflow-clip top-[20px] w-[282.5px]" data-name="Container">
      <Heading10 />
      <Margin9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[287.11px] left-[705px] overflow-clip right-[352.5px] top-[317.11px]" data-name="Container">
      <div className="absolute inset-[-0.72px_-0.8px_-0.71px_-0.81px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute bg-[#040404] inset-[9.33px_9.25px_9.34px_9.24px] opacity-0" data-name="Background" />
      <Container18 />
    </div>
  );
}

function Heading11() {
  return <div className="h-[53.19px] mb-[-0.01px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin10() {
  return <div className="h-[27.59px] mb-[-0.01px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[352.81px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.01px] pt-0 px-0 top-[20px] w-[282.5px]" data-name="Container">
      <Heading11 />
      <Margin10 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[392.81px] left-[1057.5px] overflow-clip right-0 top-0" data-name="Container">
      <div className="absolute inset-[-0.99px_-0.8px_-0.98px_-0.81px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute bg-[#040404] inset-[9.06px_9.25px_9.07px_9.24px] opacity-0" data-name="Background" />
      <Container20 />
    </div>
  );
}

function Heading12() {
  return <div className="h-[26.59px] mb-[-0.01px] shrink-0 w-full z-[2]" data-name="Heading 5" />;
}

function Margin11() {
  return <div className="h-[27.59px] mb-[-0.01px] shrink-0 w-[94.84px] z-[1]" data-name="Margin" />;
}

function Container22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[141.39px] isolate items-center justify-center left-[20px] overflow-clip pb-[0.01px] pt-0 px-0 top-[19.98px] w-[282.5px]" data-name="Container">
      <Heading12 />
      <Margin11 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[181.41px] left-[1057.5px] overflow-clip right-0 top-[422.81px]" data-name="Container">
      <div className="absolute inset-[-0.2px_-1.11px_-0.69px_-0.5px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute bg-[#040404] inset-[9.58px_9.25px_9.63px_9.24px] opacity-0" data-name="Background" />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[634.22px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[30px] right-[30px] top-[calc(50%+72.61px)] translate-y-[-50%]" data-name="Container">
      <Section1 />
    </div>
  );
}

function Titre() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[calc(50%+0.5px)] top-[50px] translate-x-[-50%] w-[715px]" data-name="Titre">
      <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#242424] text-[56px] w-full">
        <p className="leading-[normal]">Explorer les Oeuvres et Arts</p>
      </div>
    </div>
  );
}

function CpllectionEtEvenement() {
  return (
    <div className="bg-[#f2e8d5] h-[889px] overflow-clip relative shrink-0 w-full" data-name="Cpllection et Evenement">
      <Container26 />
      <Titre />
    </div>
  );
}

function Details() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[1836px] not-italic text-white top-[283px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[32px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`Galerie de l'art `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[287px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">SAlmon sashimi</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[574px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Cheescake</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-0" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`Galerie de l'art `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[88px] left-[2291px] overflow-clip top-[277px] w-[381px]" data-name="Text">
      <Details1 />
      <Details2 />
      <Details3 />
    </div>
  );
}

function Details4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[2305px] not-italic text-white top-[283px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[32px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Galerie des religions</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Details5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[287px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">SAlmon sashimi</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[574px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Cheescake</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-0" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[32px] w-[353px]">
        <p className="leading-[normal]">Afrique, berceau de l'humanité</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[82px] left-[26px] overflow-clip top-[298px] w-[381px]" data-name="Text">
      <Details5 />
      <Details6 />
      <Details7 />
    </div>
  );
}

function Details8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[287px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">SAlmon sashimi</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[574px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Cheescake</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-0" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[32px] w-[353px]">
        <p className="leading-[normal]">portraits historiques</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[82px] left-[472px] overflow-clip top-[293px] w-[381px]" data-name="Text">
      <Details8 />
      <Details9 />
      <Details10 />
    </div>
  );
}

function Details11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[287px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">SAlmon sashimi</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-[574px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[40px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Cheescake</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque. Interdum donec sit egestas quam bibendum elementum</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`SEE RECEIPE ->`}</p>
      </div>
    </div>
  );
}

function Details13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-0 not-italic text-white top-0" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[32px] w-[353px]">
        <p className="leading-[normal]">femmes africaines marquantes</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[82px] left-[938px] overflow-clip top-[283px] w-[381px]" data-name="Text">
      <Details11 />
      <Details12 />
      <Details13 />
    </div>
  );
}

function Details14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[1382px] not-italic text-white top-[283px]" data-name="details">
      <div className="flex flex-col font-['Bebas_Neue:Regular',_sans-serif] justify-center relative shrink-0 text-[32px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Galerie des masques et des rituels</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-[361px]">
        <p className="leading-[24px]">{`VISITE VIRTUELLE ->`}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#2f2f2f] h-[450px] left-[calc(50%+0.5px)] overflow-x-auto overflow-y-clip top-[278px] translate-x-[-50%] w-[1307px]">
      <div className="absolute h-[450px] left-[1345px] top-0 w-[435px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle394} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <div className="absolute h-[450px] left-[910px] top-0 w-[416px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle396} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <div className="absolute h-[450px] left-[1819px] top-0 w-[416px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle398} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Details />
      <Text />
      <div className="absolute h-[450px] left-[2274px] top-0 w-[416px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle395} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Details4 />
      <div className="absolute h-[450px] left-0 top-0 w-[416px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-51.9%] max-w-none top-0 w-[162.26%]" src={imgRectangle397} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Text1 />
      <div className="absolute h-[450px] left-[455px] top-0 w-[416px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle395} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Text2 />
      <Text3 />
      <Details14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute contents left-1/2 top-[223px] translate-x-[-50%]" data-name="Frame">
      <Frame2 />
      <div className="absolute h-[123px] left-[calc(50%-8px)] top-[223px] translate-x-[-50%] w-[1358px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1358 123">
          <ellipse cx="679" cy="61.5" fill="var(--fill-0, #242424)" id="Ellipse 1" rx="679" ry="61.5" />
        </svg>
      </div>
      <div className="absolute h-[123px] left-[calc(50%+8px)] top-[666px] translate-x-[-50%] w-[1358px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1358 123">
          <ellipse cx="679" cy="61.5" fill="var(--fill-0, #242424)" id="Ellipse 1" rx="679" ry="61.5" />
        </svg>
      </div>
    </div>
  );
}

function Frame1321316012() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[198px] items-center leading-[0] left-1/2 text-center text-white top-[91px] translate-x-[-50%] w-[948px]">
      <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[56px] text-nowrap">
        <p className="leading-[72px] whitespace-pre">Plongez au cœur du musée</p>
      </div>
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[18px] w-[695px]">
        <p className="leading-[normal]">Découvrez le Musée des Civilisations Noires à travers une expérience virtuelle unique. Parcourez les galeries, admirez les œuvres, et laissez-vous guider par les récits qui font vibrer l'histoire du continent africain.</p>
      </div>
    </div>
  );
}

function CpllectionEtEvenement1() {
  return (
    <div className="bg-[#242424] h-[802px] overflow-clip relative shrink-0 w-full" data-name="Cpllection et Evenement">
      <Frame />
      <Frame1321316012 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium gap-[10px] items-start leading-[normal] relative shrink-0 text-[#101010] text-[18px]">
      <p className="opacity-50 relative shrink-0 w-[96px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Découvrir
      </p>
      <p className="opacity-50 relative shrink-0 w-[234px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Exposition et Collection
      </p>
      <p className="opacity-50 relative shrink-0 w-[143px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Visite Virtuelle
      </p>
      <p className="opacity-50 relative shrink-0 w-[110px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Evenement
      </p>
      <p className="opacity-50 relative shrink-0 w-[90px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Boutique `}</p>
      <p className="opacity-50 relative shrink-0 w-[173px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Acheter un Ticket
      </p>
    </div>
  );
}

function Product() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Product">
      <p className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101010] text-[18px] text-nowrap whitespace-pre">Navigation</p>
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium gap-[11px] items-start leading-[normal] relative shrink-0 text-[#101010] text-[18px]">
      <p className="opacity-50 relative shrink-0 text-[0px] w-[189px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span>{`+221 `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TMsyNkpKKS8xYLRSMahITTY0NzI1tkiySExKS0mzMqhISTE0NDFOTTFPTjFONTBK8ZLPLS0-vDJVISVVISdRITmzLDMnszixJDM_TyEvP7MoFQB1XhxT&q=mus%C3%A9e+de+la+civilisation+noire&oq=mus&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRhBMhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOzIGCAMQRRg7MgYIBBBFGEEyBggFEEUYPDIGCAYQRRhBMgYIBxAuGEDSAQgyMTE0ajFqOagCALACAQ&sourceid=chrome&ie=UTF-8#">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-[18px]" href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TMsyNkpKKS8xYLRSMahITTY0NzI1tkiySExKS0mzMqhISTE0NDFOTTFPTjFONTBK8ZLPLS0-vDJVISVVISdRITmzLDMnszixJDM_TyEvP7MoFQB1XhxT&q=mus%C3%A9e+de+la+civilisation+noire&oq=mus&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRhBMhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOzIGCAMQRRg7MgYIBBBFGEEyBggFEEUYPDIGCAYQRRhBMgYIBxAuGEDSAQgyMTE0ajFqOagCALACAQ&sourceid=chrome&ie=UTF-8#">
            33 889 11 80
          </span>
        </a>
      </p>
      <p className="opacity-50 relative shrink-0 w-[165px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        mcn@gmail.com
      </p>
    </div>
  );
}

function Explore() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Explore">
      <p className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101010] text-[18px] text-nowrap whitespace-pre">Contact</p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] opacity-50 relative shrink-0 text-[#101010] text-[18px] underline w-[273px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Musée des Civilisations noires, Dakar
      </p>
    </div>
  );
}

function Community() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Community">
      <p className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101010] text-[18px] text-nowrap whitespace-pre">Adresse</p>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0">
      <div className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[30px] opacity-50 relative shrink-0 text-[#101010] text-[18px] w-[257px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`lundi	Fermé `}</p>
        <p className="mb-0">{`mardi	10:00–19:00 `}</p>
        <p className="mb-0">{`mercredi	10:00–19:00 `}</p>
        <p className="mb-0">{`jeudi	10:00–19:00 `}</p>
        <p className="mb-0">{`vendredi	10:00–19:00`}</p>
        <p className="mb-0">{`samedi	10:00–19:00 `}</p>
        <p>{`dimanche	10:00–19:00`}</p>
      </div>
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Company">
      <p className="font-['Jost:Bold',_sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101010] text-[18px] text-nowrap whitespace-pre">Horaires</p>
      <Frame5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[119px] items-start mb-[-20px] relative shrink-0">
      <Product />
      <Explore />
      <Community />
      <Company />
    </div>
  );
}

function Component001FacebookLogoButton() {
  return (
    <div className="h-[18.341px] relative shrink-0 w-[8.571px]" data-name="001-facebook-logo-button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 19">
        <g id="001-facebook-logo-button">
          <path d={svgPaths.p1b369f80} fill="var(--fill-0, #101010)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Component002Twitter() {
  return (
    <div className="h-[15.495px] relative shrink-0 w-[19.178px]" data-name="002-twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="002-twitter">
          <path d={svgPaths.p34662d00} fill="var(--fill-0, #101010)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function LogoInstagram() {
  return (
    <div className="[grid-area:1_/_1] h-[19.891px] ml-0 mt-0 relative w-[20px]" data-name="logo-instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="logo-instagram">
          <path d={svgPaths.pd4f8700} fill="var(--fill-0, #101010)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Component004VimeoSocialLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="004-vimeo-social-logo">
      <LogoInstagram />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[27px] items-center relative shrink-0" data-name="socials">
      <Component001FacebookLogoButton />
      <Component002Twitter />
      <Component004VimeoSocialLogo />
      <div className="h-[16.151px] relative shrink-0 w-[15.565px]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
          <path d={svgPaths.pd4f8700} fill="var(--fill-0, #101010)" id="Combined Shape" />
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[25px] items-center mb-[-20px] relative shrink-0">
      <div className="h-[221.247px] relative shrink-0 w-[199px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <p className="font-['Jost:Regular',_sans-serif] font-normal leading-[26px] relative shrink-0 text-[#101010] text-[16px] text-center text-nowrap whitespace-pre">© 2018 - 2025 Musée des Civilisations Noires. Tous droits réservés.</p>
      <Socials />
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-col h-[522px] items-center pb-[20px] pt-0 px-0 relative shrink-0">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#faf7f0] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-1/2 px-[60px] py-[65px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="Footer">
      <Frame16 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="h-[652px] relative shrink-0 w-full" data-name="Footer">
      <Footer />
    </div>
  );
}

function Content({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-start left-0 top-0 w-[1442px]" data-name="Content">
      <Header onNavigateToHome={onNavigateToHome} />
      <HeroSection />
      <Information />
      <CpllectionEtEvenement />
      <CpllectionEtEvenement1 />
      <Footer1 />
    </div>
  );
}

export default function ExplorerOeuvre({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="bg-[#f2e8d5] relative size-full" data-name="Explorer Oeuvre">
      <Content onNavigateToHome={onNavigateToHome} />
    </div>
  );
}
