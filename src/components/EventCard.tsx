import { Calendar, MapPin, Tag } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  location: string;
  startDate: string;
  endDate: string;
  price: string;
  eventNumber: string;
  month: string;
  year: string;
}

export function EventCard({ 
  title, 
  image, 
  location, 
  startDate, 
  endDate, 
  price, 
  eventNumber, 
  month, 
  year 
}: EventCardProps) {
  const handleLearnMore = () => {
    console.log(`Learning more about: ${title}`);
    // Here you would navigate to event details or open a modal
  };

  return (
    <div className="flex items-start gap-6 p-6 border-b border-gray-200/40 last:border-b-0 hover:bg-gray-50/30 transition-colors">
      {/* Date column */}
      <div className="flex flex-col items-center min-w-[80px]">
        <div className="text-[#101010] text-[29px] font-medium font-['Inter'] leading-[31px]">
          {eventNumber}
        </div>
        <div className="text-[#848484] text-[15px] font-normal font-['Kumbh_Sans'] leading-[19px] mt-2">
          {month}, {year}
        </div>
      </div>

      {/* Image */}
      <div className="w-[170px] h-[127px] rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[#101010] text-[21px] font-medium font-['Inter'] leading-[26px] mb-3 hover:text-[#ff5800] transition-colors cursor-pointer">
          {title}
        </h3>
        
        {/* Location and date info */}
        <div className="flex items-center gap-4 text-sm text-[#848484] mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ff5800]" />
            <span className="text-[#101010] text-[15px]">{location}</span>
          </div>
          <span className="text-[13px] font-['Kumbh_Sans']">
            {startDate} - {endDate}
          </span>
        </div>

        {/* Learn more button */}
        <button 
          onClick={handleLearnMore}
          className="flex items-center text-[#101010] text-[15px] hover:text-[#ff5800] transition-colors group"
        >
          <Calendar className="w-4 h-4 mr-2 group-hover:text-[#ff5800]" />
          En savoir plus
        </button>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 text-[#101010] text-[20px] font-medium font-['Inter']">
        <Tag className="w-5 h-5" />
        {price}
      </div>
    </div>
  );
}