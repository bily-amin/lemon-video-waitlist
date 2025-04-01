
import { VideoIcon, ShoppingBagIcon, TrendingUpIcon } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-fashion-black border border-fashion-white/20 rounded-xl p-6 md:p-8 hover:shadow-[0_0_15px_rgba(243,242,38,0.3)] transition-all hover:-translate-y-1 animate-in stagger-1"
            >
              <div className="bg-lemon p-3 rounded-lg inline-block mb-4 text-fashion-black">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-fashion-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
