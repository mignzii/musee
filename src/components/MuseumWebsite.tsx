import { useState } from 'react';
import { Play, ShoppingCart, Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import { MuseumNavigation } from './MuseumNavigation';
import { VirtualTourCarousel } from './VirtualTourCarousel';
import { EventCard } from './EventCard';
import { ArtworkGallery } from './ArtworkGallery';
import { BlogCard } from './BlogCard';

// Import all images
import imgImage13 from "../imports/figma:asset/3dfc09fde94d1676b720112d3154e3321fe1758d.png";
import imgImage20 from "../imports/figma:asset/29913987288b2001921738e459180dbcb25aeadb.png";
import img663Thumb3MinJpg from "../imports/figma:asset/f92721b740f139b289b99437ffba433507318af8.png";
import img663Thumb1MinJpg from "../imports/figma:asset/c00337eb05128f1969d4a2c5e691a981c3496e76.png";
import img663Thumb2MinJpg from "../imports/figma:asset/120d15f2cafe1da0fa66ab8e0ba849a41d1820c1.png";
import imgImage from "../imports/figma:asset/fe4a4e60379d20a3b5897cca0da0e3537f659bc1.png";
import imgImage1 from "../imports/figma:asset/43bcd3e5c97c014efe43d35a6c0c8046e7609de2.png";
import imgImage2 from "../imports/figma:asset/73763b379d91dd9a53f08032ae1f043937aeb119.png";
import imgImage3 from "../imports/figma:asset/72a9613a2919e89593b3204ed694441056c8869d.png";
import imgImage4 from "../imports/figma:asset/88782c78e87edcc71d2c001124b46cfdd231c1ea.png";
import imgImage5 from "../imports/figma:asset/4c468b5d5380c497014e19e70ef6ff8a6b7fce39.png";
import imgImage6 from "../imports/figma:asset/2165d3b2e33dbeb9284b5de54e758abcb533788d.png";
import imgImage7 from "../imports/figma:asset/44f650c7d3e920b38d2cf16bc73194485f6be9c7.png";
import imgEventImage6890X664Jpg from "../imports/figma:asset/b558645b3b29a39290f215bcf6d1501916967d40.png";
import imgEventImage5890X664Jpg from "../imports/figma:asset/71cc7f0aba7f70446004ff9df8ce92a2207b404a.png";
import imgEventImage4890X664Jpg from "../imports/figma:asset/9908c42b4208dee635d1ffdbd9abacd87156bbc6.png";
import imgRectangle394 from "../imports/figma:asset/3302973b3d1d59dfec01c989383fd9f7d585e12a.png";
import imgRectangle396 from "../imports/figma:asset/822a1d7a57aeb6ee36dbec6c681eae80bcaf32f9.png";
import imgRectangle397 from "../imports/figma:asset/df1021caee8b77436de2e90d52ec3e80b26ca87b.png";
import imgRectangle399 from "../imports/figma:asset/9cc6a0ff2579afcef533f970476404a89e9c297b.png";
import imgBlogPost9890X664Jpg from "../imports/figma:asset/b39e2252ff9a423a05c88141859f46477d4bd7fc.png";
import imgBlogPost10890X664Jpg from "../imports/figma:asset/9e353bf76d7181d53d3a4ef4ceeef8f55a89a4e0.png";
import imgBlogPost11890X664Jpg from "../imports/figma:asset/264199c0a5afbebb8d7da9d21797230e756cbb70.png";

export function MuseumWebsite() {
  const [activeSection, setActiveSection] = useState('decouvrir');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Sample data for interactive components
  const artworks = [
    { id: '1', image: imgImage, title: 'Art Traditionnel Africain', artist: 'Artiste Inconnu' },
    { id: '2', image: imgImage1, title: 'Masque Ceremonial', artist: 'Maître Sculpteur' },
    { id: '3', image: imgImage2, title: 'Textile Ancien', artist: 'Artisans du Mali' },
    { id: '4', image: imgImage3, title: 'Sculpture Moderne', artist: 'Ousmane Sow' },
    { id: '5', image: imgImage4, title: 'Poterie Traditionnelle', artist: 'Artisans du Sénégal' },
    { id: '6', image: imgImage5, title: 'Art Contemporain', artist: 'El Hadji Sy' },
    { id: '7', image: imgImage6, title: 'Bijoux Ancestraux', artist: 'Maîtres Bijoutiers' },
    { id: '8', image: imgImage7, title: 'Instrument Musical', artist: 'Luthiers Traditionnels' }
  ];

  const events = [
    {
      id: '1',
      title: "David Hockney's Exhibition",
      image: imgEventImage5890X664Jpg,
      location: 'Dakar',
      startDate: 'December 1, 2026 00:00',
      endDate: 'January 2, 2027 00:00',
      price: 'Gratuit',
      eventNumber: '01',
      month: 'Dec',
      year: '2026'
    },
    {
      id: '2',
      title: "Marcel Duchamp's Exhibition",
      image: imgEventImage4890X664Jpg,
      location: 'Dakar',
      startDate: 'November 2, 2026 00:00',
      endDate: 'November 25, 2026 00:00',
      price: 'Gratuit',
      eventNumber: '02',
      month: 'Nov',
      year: '2026'
    },
    {
      id: '3',
      title: "Georges Seurat's Exhibition",
      image: imgEventImage6890X664Jpg,
      location: 'Dakar',
      startDate: 'January 4, 2027 00:00',
      endDate: 'January 27, 2027 00:00',
      price: 'Gratuit',
      eventNumber: '04',
      month: 'Jan',
      year: '2027'
    }
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'Do you need expensive art supplies to make good art?',
      image: imgBlogPost9890X664Jpg,
      category: 'Modern Art',
      date: 'April 21, 2020',
      commentCount: 0,
      excerpt: 'Découvrez les secrets des grands maîtres et leurs techniques ancestrales...'
    },
    {
      id: '2',
      title: 'What do all the best museum websites do?',
      image: imgBlogPost10890X664Jpg,
      category: 'Modern Art',
      date: 'April 21, 2020',
      commentCount: 0,
      excerpt: 'Une analyse des meilleures pratiques en matière de sites web de musées...'
    },
    {
      id: '3',
      title: 'European masterpieces from the Grasset collection',
      image: imgBlogPost11890X664Jpg,
      category: 'Modern Art',
      date: 'April 21, 2020',
      commentCount: 0,
      excerpt: 'Plongez dans la richesse de la collection Grasset et ses œuvres exceptionnelles...'
    }
  ];

  const virtualTourImages = [
    { src: imgRectangle397, title: 'Masque', description: 'Découvrez l\'art traditionnel africain' },
    { src: imgRectangle399, title: 'Salon sashimi', description: 'Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque.' },
    { src: imgRectangle394, title: 'Cheescake', description: 'Lorem ipsum dolor sit amet consectetur. Bibendum nunc pellentesque in tincidunt tortor auctor tellus congue neque.' },
    { src: imgRectangle396, title: 'Collection Moderne', description: 'Art contemporain africain' },
    { src: imgImage5, title: 'Galerie Principal', description: 'Notre exposition permanente' },
    { src: imgImage6, title: 'Espace Culturel', description: 'Découvrez notre espace dédié aux événements' }
  ];

  const handleBuyTicket = () => {
    console.log('Redirecting to ticket purchase...');
    // Here you would redirect to ticket purchase page
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    console.log('Starting museum introduction video...');
    // Here you would start playing the intro video
  };

  return (
    <div className="min-h-screen bg-[#f2e8d5]">
      {/* Header */}
      <header className="bg-[#faf7f0] px-12 py-6 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img src={imgImage13} alt="Musée des Civilisations Noires" className="h-20 w-auto" />
          </div>

          {/* Navigation */}
          <MuseumNavigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />

          {/* Shopping cart */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-[#242424]" />
              <span className="absolute -top-2 -right-2 bg-[#ff5800] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <button 
              onClick={handleBuyTicket}
              className="bg-[#ff5800] text-white px-6 py-3 rounded-md hover:bg-[#ff5800]/90 transition-colors font-medium"
            >
              Acheter un billet
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative  py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center gap-20">
            {/* Hero Content */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-5">
                  <img src={img663Thumb3MinJpg} alt="Aperçu 1" className="w-40 h-28 object-cover rounded-lg border-2 border-[#ff5800]" />
                  <img src={img663Thumb1MinJpg} alt="Aperçu 2" className="w-40 h-28 object-cover rounded-lg" />
                  <img src={img663Thumb2MinJpg} alt="Aperçu 3" className="w-40 h-28 object-cover rounded-lg" />
                </div>
                <div className="text-[#ff5800] font-['Inter'] text-base tracking-wide">
                  <span className="text-[#ff5800]">01</span>
                  <span className="text-[#2f2f2f]"> / 03</span>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-7xl font-semibold font-['Jost'] text-[#242424] leading-tight">
                  <div>Célébrer</div>
                  <div>La grandeur des</div>
                  <div>Civilisations Noires</div>
                </h1>
                
                <p className="text-lg text-[#5f5f5f] font-['DM_Sans'] max-w-2xl leading-relaxed">
                  De nos ancêtres bâtisseurs aux créateurs d'aujourd'hui,
                  le Musée des Civilisations Noires célèbre la grandeur et la diversité de l'Afrique.
                </p>

                <button className="flex items-center gap-3 border-2 border-[#ff5800] text-[#2f2f2f] px-8 py-4 rounded-md hover:bg-[#ff5800] hover:text-white transition-colors font-medium">
                  <ArrowRight className="w-5 h-5" />
                  Visiter le musée
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="w-[500px] h-[655px] relative">
                <img 
                  src={imgImage20} 
                  alt="Musée des Civilisations Noires" 
                  className="w-full h-full object-cover border-8 border-[#ff5800]"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Play button */}
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           w-24 h-24 bg-white rounded-full flex items-center justify-center
                           hover:scale-110 transition-transform shadow-lg"
                >
                  <Play className="w-8 h-8 text-[#ff5800] ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Description */}
      <section className="bg-[#242424] py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center gap-20">
            <div className="relative">
              <div className="w-[500px] h-[655px] relative">
                <img 
                  src={imgImage20} 
                  alt="Intérieur du musée" 
                  className="w-full h-full object-cover border-6 border-[#ff5800]"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           w-24 h-24 bg-white rounded-full flex items-center justify-center
                           hover:scale-110 transition-transform shadow-lg"
                >
                  <Play className="w-8 h-8 text-[#ff5800] ml-1" fill="currentColor" />
                </button>
              </div>
            </div>

            <div className="flex-1 text-white space-y-6">
              <h2 className="text-5xl font-semibold font-['Jost'] leading-tight">
                Le Musée – L'âme du patrimoine
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Construit à Dakar, cœur battant de l'Afrique, le Musée des Civilisations Noires 
                  est un hommage vivant à la créativité du continent.
                </p>
                <p>
                  le Musée des Civilisations noires (MCN) a été inauguré le 6 décembre 2018 par le 
                  Président Macky Sall. Le MCN œuvre depuis lors pour la valorisation de l'apport des 
                  Civilisations noires au patrimoine universel de l'humanité. Ainsi, le visiteur qui 
                  franchit la porte de la case à impluvium qui a inspiré son architecture rencontre tout 
                  autour du grand Baobab de l'artiste haïtien Edouard Duval-Carrié, l'exposition : 
                  l'Afrique, berceau de l'humanité.
                </p>
              </div>

              <div className="flex gap-5 pt-6">
                <img src={img663Thumb1MinJpg} alt="Galerie 1" className="w-32 h-24 object-cover rounded-lg" />
                <img src={img663Thumb2MinJpg} alt="Galerie 2" className="w-32 h-24 object-cover rounded-lg" />
                <img src={img663Thumb3MinJpg} alt="Galerie 3" className="w-32 h-24 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks Gallery */}
      <section className="bg-[#f2e8d5] py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold font-['Jost'] text-[#242424] mb-4">
              Explorer les Oeuvres et Arts
            </h2>
            <p className="text-lg text-[#5f5f5f] max-w-2xl mx-auto">
              En parcourant nos galeries, vous explorez l'âme de l'Afrique, son dialogue avec le monde, 
              et la puissance symbolique de ses créations.
            </p>
          </div>
          
          <ArtworkGallery artworks={artworks} />
          
          <div className="text-center mt-12">
            <button className="flex items-center gap-3 border-2 border-[#ff5800] text-[#2f2f2f] px-8 py-4 rounded-md hover:bg-[#ff5800] hover:text-white transition-colors font-medium mx-auto">
              <ArrowRight className="w-5 h-5" />
              Voir Plus d'oeuvres
            </button>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="bg-[#242424] py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center text-white mb-16">
            <h2 className="text-5xl font-semibold font-['Jost'] mb-6">
              Plongez au cœur du musée
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez le Musée des Civilisations Noires à travers une expérience virtuelle unique. 
              Parcourez les galeries, admirez les œuvres, et laissez-vous guider par les récits qui 
              font vibrer l'histoire du continent africain.
            </p>
          </div>
          
          <VirtualTourCarousel images={virtualTourImages} />
          
          <div className="text-center mt-12">
            <button className="flex items-center gap-3 border-2 border-[#ff5800] text-white px-8 py-4 rounded-md hover:bg-[#ff5800] transition-colors font-medium mx-auto">
              <ArrowRight className="w-5 h-5" />
              Visite Virtuelle
            </button>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-[#f2e8d5] py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-semibold font-['Jost'] text-[#242424]">
              Evènement à venir
            </h2>
            <button className="text-[#040404] font-medium hover:text-[#ff5800] transition-colors flex items-center gap-2">
              All Events
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-[#242424] py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-semibold font-['Jost'] text-white">
              Articles récents
            </h2>
            <button className="text-white font-medium hover:text-[#ff5800] transition-colors flex items-center gap-2">
              All Posts
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#faf7f0] py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Navigation */}
            <div>
              <h3 className="text-[#101010] text-lg font-bold font-['Jost'] mb-4">Navigation</h3>
              <div className="space-y-3 text-[#101010] font-['DM_Sans']">
                <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity">Découvrir</div>
                <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity">Exposition et Collection</div>
                <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity">Visite Virtuelle</div>
                <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity">Evenement</div>
                <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity">Boutique</div>
                <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity">Acheter un Ticket</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#101010] text-lg font-bold font-['Jost'] mb-4">Contact</h3>
              <div className="space-y-3 text-[#101010] font-['DM_Sans']">
                <div className="opacity-50 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +221 33 889 11 80
                </div>
                <div className="opacity-50 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  mcn@gmail.com
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-[#101010] text-lg font-bold font-['Jost'] mb-4">Adresse</h3>
              <div className="opacity-50 text-[#101010] font-['DM_Sans'] underline cursor-pointer hover:opacity-100 transition-opacity">
                Musée des Civilisations noires, Dakar
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-[#101010] text-lg font-bold font-['Jost'] mb-4">Horaires</h3>
              <div className="space-y-1 text-[#101010] font-['DM_Sans'] opacity-50 text-sm">
                <div>lundi: Fermé</div>
                <div>mardi: 10:00–19:00</div>
                <div>mercredi: 10:00–19:00</div>
                <div>jeudi: 10:00–19:00</div>
                <div>vendredi: 10:00–19:00</div>
                <div>samedi: 10:00–19:00</div>
                <div>dimanche: 10:00–19:00</div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="text-center border-t border-gray-200 pt-12">
            <img src={imgImage13} alt="Logo MCN" className="h-24 mx-auto mb-6" />
            <p className="text-[#101010] font-['Jost'] mb-6">
              © 2018 - 2025 Musée des Civilisations Noires. Tous droits réservés.
            </p>
            <div className="flex items-center justify-center gap-6">
              {/* Social media icons would go here */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#101010] rounded"></div>
                <div className="w-8 h-8 bg-[#101010] rounded"></div>
                <div className="w-8 h-8 bg-[#101010] rounded"></div>
                <div className="w-8 h-8 bg-[#101010] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}