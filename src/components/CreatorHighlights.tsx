
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, TrendingUp } from 'lucide-react';

const CreatorHighlights = () => {
  const creators = [
    {
      name: "StyleByMia",
      handle: "@stylebymia",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1470&auto=format&fit=crop",
      likes: "32.5K",
      comments: "1.2K",
      trending: true,
      category: "Street Style"
    },
    {
      name: "FashionForward",
      handle: "@fashionforward",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1470&auto=format&fit=crop",
      likes: "45.1K",
      comments: "2.8K",
      trending: true,
      category: "Luxury"
    },
    {
      name: "UrbanChic",
      handle: "@urbanchic",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",
      videoThumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1470&auto=format&fit=crop",
      likes: "28.7K",
      comments: "1.6K",
      trending: false,
      category: "Casual"
    }
  ];

  return (
    <section className="py-16 bg-[#120F12]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-fashion-white">
            <span className="relative z-10">Trending Creators</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red/60 -z-0"></span>
          </h2>
          <p className="mt-4 text-fashion-white/80">
            Discover inspiring content from top fashion creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div 
              key={index} 
              className="bg-fashion-black border border-fashion-white/10 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(234,56,76,0.3)] transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative">
                <AspectRatio ratio={9/16} className="max-h-[300px]">
                  <img 
                    src={creator.videoThumbnail} 
                    alt={`${creator.name}'s video thumbnail`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </AspectRatio>
                
                {/* Play indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-red/90 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-red/90 py-1 px-3 rounded-full text-sm font-medium text-white">
                  {creator.category}
                </div>
                
                {/* Trending tag */}
                {creator.trending && (
                  <div className="absolute top-4 right-4 bg-black/80 py-1 px-3 rounded-full text-sm font-medium text-white flex items-center gap-1">
                    <TrendingUp size={14} />
                    Trending
                  </div>
                )}
                
                {/* Engagement metrics */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-1 text-white">
                    <Heart size={16} className="fill-red text-red" />
                    <span className="text-sm">{creator.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <MessageSquare size={16} />
                    <span className="text-sm">{creator.comments}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-red/30">
                    <img 
                      src={creator.image} 
                      alt={creator.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-fashion-white">{creator.name}</h4>
                    <p className="text-sm text-fashion-white/70">{creator.handle}</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full bg-transparent text-fashion-white border-red/40 hover:bg-red/10">
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-red hover:bg-red/90 text-white">
            Discover More Creators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreatorHighlights;
