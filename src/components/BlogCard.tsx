import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  commentCount: number;
  excerpt?: string;
}

export function BlogCard({ 
  id, 
  title, 
  image, 
  category, 
  date, 
  commentCount,
  excerpt 
}: BlogCardProps) {
  const handleReadMore = () => {
    console.log(`Reading article: ${title}`);
    // Here you would navigate to the full article
  };

  const handleCategoryClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Viewing category: ${category}`);
    // Here you would filter by category
  };

  return (
    <article className="group cursor-pointer" onClick={handleReadMore}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category badge */}
        <button
          onClick={handleCategoryClick}
          className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider hover:bg-[#ff5800]/80 transition-colors"
        >
          {category}
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="text-white text-xl font-medium font-['Inter'] leading-tight group-hover:text-[#ff5800] transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Meta information */}
        <div className="flex items-center justify-between text-sm text-[#848484]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="font-['Kumbh_Sans']">{date}</span>
            </div>
            <div className="w-px h-4 bg-[#848484]" />
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span className="font-['Kumbh_Sans']">{commentCount} Comments</span>
            </div>
          </div>
          
          {/* Read more arrow */}
          <ArrowRight className="w-4 h-4 text-[#ff5800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </article>
  );
}