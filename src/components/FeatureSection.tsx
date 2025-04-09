
import { VideoIcon, ShoppingBagIcon, TrendingUpIcon, MousePointer, Sparkles } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const FeatureSection = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: <VideoIcon className="h-8 w-8" />,
      title: "Short Video Discovery",
      description: "Find fashion you love through engaging short-form videos that showcase styles in real-world settings.",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop"
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8" />,
      title: "Trending Styles",
      description: "Stay ahead of fashion trends with our AI-powered algorithm that shows you what's popular right now.",
      image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1924&auto=format&fit=crop"
    },
    {
      icon: <ShoppingBagIcon className="h-8 w-8" />,
      title: "Seamless Shopping",
      description: "See something you like? Buy it instantly with just one tap directly from the video.",
      image: "https://images.unsplash.com/photo-1571380401583-72ca84994796?q=80&w=1964&auto=format&fit=crop"
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Personalized Recommendations",
      description: "Get fashion suggestions tailored to your style preferences and shopping history.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Creator Collaborations",
      description: "Discover exclusive collections from your favorite fashion creators and influencers.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (!api) return;
    
    // Set up auto-sliding with interval
    const autoPlayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds
    
    // Update current slide index when the carousel changes
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Clean up
    return () => {
      clearInterval(autoPlayInterval);
      api?.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-fashion-black text-fashion-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="relative z-10">Why You'll Love It</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red/60 -z-0"></span>
          </h2>
          <p className="mt-4 text-fashion-white/80">
            We're reinventing how fashion discovery works in the digital age
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-fashion-black border border-fashion-white/20 rounded-xl p-6 md:p-8 h-full hover:shadow-[0_0_15px_rgba(234,56,76,0.3)] transition-all hover:-translate-y-1">
                    <div className="relative mb-6 rounded-lg overflow-hidden">
                      <AspectRatio ratio={9/16} className="bg-black/20">
                        {/* Mobile Phone Mockup */}
                        <div className="w-full h-full relative">
                          {/* Phone frame */}
                          <div className="absolute inset-0 mx-auto w-[85%] h-full rounded-[36px] border-[6px] border-gray-800 overflow-hidden shadow-lg transform perspective-1200 rotate-y-3 hover:rotate-y-6 transition-transform duration-500">
                            {/* Screen content (the image) */}
                            <div className="absolute inset-0 bg-black">
                              <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            {/* Screen overlay to add realism */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                            
                            {/* Phone notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-6 bg-gray-800 rounded-b-xl"></div>
                            
                            {/* Side buttons */}
                            <div className="absolute top-24 -right-[6px] w-[3px] h-12 bg-gray-700 rounded-r-sm"></div>
                            <div className="absolute top-20 -left-[6px] w-[3px] h-8 bg-gray-700 rounded-l-sm"></div>
                            <div className="absolute top-32 -left-[6px] w-[3px] h-8 bg-gray-700 rounded-l-sm"></div>
                          </div>
                          
                          {/* Phone reflection/glow effect */}
                          <div className="absolute inset-0 mx-auto w-[85%] bg-gradient-to-tr from-red/20 via-blue-400/10 to-purple-500/10 rounded-[40px] blur-xl opacity-50 -z-10"></div>
                        </div>
                      </AspectRatio>
                    </div>
                    <div className="bg-red p-3 rounded-lg inline-block mb-4 text-fashion-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-fashion-white/70">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12 bg-red text-fashion-white hover:bg-red/80 border-none shadow-lg" />
            <CarouselNext className="right-2 lg:-right-12 bg-red text-fashion-white hover:bg-red/80 border-none shadow-lg" />
          </Carousel>

          <div className="mt-10 flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-red scale-125" : "bg-red/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
