
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { Separator } from "@/components/ui/separator";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import CreatorHighlights from "@/components/CreatorHighlights";

const Index = () => {
  // Scroll to section when clicking on nav links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Smooth scroll to element
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        
        {/* Decorative separator between sections */}
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-red/60 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-fashion-black border border-red/30 flex items-center justify-center z-10">
            <div className="w-6 h-6 bg-red rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div id="features">
          <FeatureSection />
        </div>
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-red/60 to-transparent" />
        </div>
        
        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-red/60 to-transparent" />
        </div>
        
        <TestimonialSection />
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-red/60 to-transparent" />
        </div>
        
        <CreatorHighlights />
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-red/60 to-transparent" />
        </div>
        
        <div id="faq">
          <FaqSection />
        </div>
        
        <div className="relative">
          <Separator className="h-[1px] bg-gradient-to-r from-transparent via-red/60 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-fashion-black border border-red/30 flex items-center justify-center z-10">
            <div className="w-6 h-6 bg-red rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div id="waitlist">
          <WaitlistForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
