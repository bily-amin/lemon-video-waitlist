
import { Camera, Eye, ThumbsUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Watch Short Videos",
      description: "Discover fashion through our curated short-form videos from creators and brands"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Find Your Style",
      description: "Our algorithm learns your preferences and shows you more of what you like"
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "Shop Instantly",
      description: "See something you love? Purchase directly from the video with just one tap"
    }
  ];

  return (
    <section className="py-20 bg-fashion-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-fashion-black/70">
            Our platform makes fashion discovery and shopping simpler than ever
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-red-light/30 -z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6">
                  <div className="bg-red h-14 w-14 rounded-full flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-36 transform -translate-y-1/2">
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-red-dark" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-fashion-black/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-xl mx-auto bg-red/20 p-8 rounded-2xl border border-red">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white rounded-full p-4">
              <svg className="h-12 w-12" width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2"/>
                <path d="M15.5 12L10.5 15.5V8.5L15.5 12Z" fill="#000000" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Ready to transform your fashion discovery?</h4>
              <p className="text-fashion-black/80 mb-0">Join our waitlist to be among the first to experience it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
