
import { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon, Star } from 'lucide-react';

const TestimonialSection = () => {
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emma Rodriguez",
      role: "Fashion Influencer",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop",
      content: "FashionVideo has completely transformed the way I share my outfits and connect with my audience. The engagement is incredible!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Style Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      content: "As a style consultant, this platform has become invaluable for showcasing trends and recommendations to my clients in an engaging format.",
      rating: 5
    },
    {
      name: "Sophia Williams",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1287&auto=format&fit=crop",
      content: "I've discovered so many unique styles that match my preferences. The personalized recommendations are spot on!",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-fashion-black to-[#1A1518]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-fashion-white">
            <span className="relative z-10">What People Are Saying</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red/60 -z-0"></span>
          </h2>
          <p className="mt-4 text-fashion-white/80">
            Join thousands of fashion enthusiasts already loving our platform
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            onSelect={(selectedIndex) => {
              if (typeof selectedIndex === 'number') {
                setCurrentIndex(selectedIndex);
              }
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="bg-fashion-black border border-fashion-white/10 hover:border-red/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-4 text-red">
                          <QuoteIcon size={32} />
                        </div>
                        <p className="text-fashion-white/90 mb-6 italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-red/30">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-fashion-white">{testimonial.name}</h4>
                            <p className="text-sm text-fashion-white/70">{testimonial.role}</p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i}
                                  size={14}
                                  className={i < testimonial.rating ? "fill-red text-red" : "text-fashion-white/30"}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12 bg-red text-fashion-white hover:bg-red/80 border-none shadow-lg" />
            <CarouselNext className="right-2 lg:-right-12 bg-red text-fashion-white hover:bg-red/80 border-none shadow-lg" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-red scale-125" : "bg-red/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
