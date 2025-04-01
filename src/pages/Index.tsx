
import HeroSection from "@/components/HeroSection";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-fashion-white">
            Fashion<span className="text-lemon">Video</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <WaitlistForm />
        <FeatureSection />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
