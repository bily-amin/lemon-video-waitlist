
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-fashion-black/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-lemon py-2 px-4 rounded-full mb-6">
              <p className="font-medium text-fashion-black text-sm">Coming Soon</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-fashion-white mb-6 leading-tight">
              Discover Fashion Through
              <span className="block relative">
                <span className="relative z-10">Short Videos</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-lemon/70 -z-0"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-fashion-white/90 mb-8 max-w-2xl mx-auto">
              Join our waitlist for early access to the most innovative way to discover and shop fashion trends in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-subtle">
        <div className="w-8 h-12 rounded-full border-2 border-fashion-white flex items-start justify-center py-2">
          <div className="w-1 h-3 bg-lemon rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
