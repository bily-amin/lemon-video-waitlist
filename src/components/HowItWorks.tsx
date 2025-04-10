
import { Camera, Eye, ShoppingBag, ArrowRight, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-fashion-white" />,
      title: "Watch Short Videos",
      description: "Discover fashion through our curated short-form videos from creators and brands"
    },
    {
      icon: <Eye className="h-8 w-8 text-fashion-white" />,
      title: "Find Your Style",
      description: "Our algorithm learns your preferences and shows you more of what you like"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-fashion-white" />,
      title: "Shop Instantly",
      description: "See something you love? Purchase directly from the video with just one tap"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-fashion-white to-red/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">How It Works</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-red/30 -z-0"></span>
          </h2>
          <p className="text-lg text-fashion-black/70 max-w-2xl mx-auto">
            Our platform makes fashion discovery and shopping simpler than ever
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index}>
                  <div className="h-full p-1">
                    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col items-center text-center">
                      <div className="bg-red h-20 w-20 rounded-full flex items-center justify-center shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <span className="bg-red/10 text-red text-xs font-semibold px-3 py-1 rounded-full mb-4">Step {index + 1}</span>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-fashion-black/70">{step.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-red/90 text-white border-none hover:bg-red" />
            <CarouselNext className="right-2 bg-red/90 text-white border-none hover:bg-red" />
          </Carousel>
        </div>

        {/* Desktop View with Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red/20 via-red/40 to-red/20 -z-0 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 mb-8 transition-all duration-300 group-hover:transform group-hover:scale-110">
                  <div className="bg-gradient-to-r from-red to-red-dark h-24 w-24 rounded-2xl flex items-center justify-center shadow-lg transform rotate-45">
                    <div className="transform -rotate-45">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-md border border-red/20">
                    <span className="text-red font-bold">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-20 transform -translate-y-1/2 text-red-dark">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
                <span className="bg-red/10 text-red text-xs font-semibold px-3 py-1 rounded-full mb-4">Step {index + 1}</span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-red transition-colors duration-300">{step.title}</h3>
                <p className="text-fashion-black/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-red/10 to-red/5 p-8 rounded-2xl border border-red/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white rounded-full p-4 shadow-md flex-shrink-0">
              <div className="bg-red/10 rounded-full p-3">
                <Play className="h-12 w-12 text-red" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold mb-3 text-fashion-black">Ready to transform your fashion discovery?</h4>
              <p className="text-fashion-black/80 mb-6">Join our waitlist to be among the first to experience the future of fashion.</p>
              <a 
                href="#waitlist" 
                className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
