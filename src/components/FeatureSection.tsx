
import { VideoIcon, ShoppingBagIcon, TrendingUpIcon, MousePointer, Sparkles } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const FeatureSection = () => {
  const features = [
    {
      icon: <VideoIcon className="h-8 w-8" />,
      title: "Short Video Discovery",
      description: "Find fashion you love through engaging short-form videos that showcase styles in real-world settings."
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8" />,
      title: "Trending Styles",
      description: "Stay ahead of fashion trends with our AI-powered algorithm that shows you what's popular right now."
    },
    {
      icon: <ShoppingBagIcon className="h-8 w-8" />,
      title: "Seamless Shopping",
      description: "See something you like? Buy it instantly with just one tap directly from the video."
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Personalized Recommendations",
      description: "Get fashion suggestions tailored to your style preferences and shopping history."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Creator Collaborations",
      description: "Discover exclusive collections from your favorite fashion creators and influencers."
    }
  ];

  return (
    <section className="py-16 bg-fashion-black text-fashion-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="relative z-10">Why You'll Love It</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-lemon/60 -z-0"></span>
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
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                  <div className="bg-fashion-black border border-fashion-white/20 rounded-xl p-6 md:p-8 h-full hover:shadow-[0_0_15px_rgba(243,242,38,0.3)] transition-all hover:-translate-y-1">
                    <div className="bg-lemon p-3 rounded-lg inline-block mb-4 text-fashion-black">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-fashion-white/70">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12 bg-lemon text-fashion-black hover:bg-lemon-dark border-none shadow-lg" />
            <CarouselNext className="right-2 lg:-right-12 bg-lemon text-fashion-black hover:bg-lemon-dark border-none shadow-lg" />
          </Carousel>

          <div className="mt-10 flex justify-center gap-2">
            <span className="block w-2 h-2 rounded-full bg-lemon animate-pulse"></span>
            <span className="block w-2 h-2 rounded-full bg-lemon/70 animate-pulse" style={{ animationDelay: "0.2s" }}></span>
            <span className="block w-2 h-2 rounded-full bg-lemon/50 animate-pulse" style={{ animationDelay: "0.4s" }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
