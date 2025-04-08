
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CirclePlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden bg-fashion-black">
      {/* Left content - text and CTA */}
      <div className="w-full md:w-1/2 z-20 mb-12 md:mb-0">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-red py-2 px-4 rounded-full mb-6">
            <p className="font-medium text-fashion-white text-sm">Coming Soon</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fashion-white mb-6 leading-tight">
            Discover Fashion Through
            <span className="block relative">
              <span className="relative z-10">Short Videos</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-red/70 -z-0"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-fashion-white/90 mb-8 max-w-lg">
            Join our platform for the most innovative way to discover and shop fashion trends in seconds. Watch, like, and shop all in one place.
          </p>

          {/* New Waitlist Form with Estyl UI */}
          <div className="bg-gradient-to-br from-white/20 rounded-3xl p-px to-transparent max-w-md w-full shadow-[0px_4px_32px_rgba(140,_152,_192,_0.12)] backdrop-blur-[17.85px] mt-6">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-3xl p-2 mx-auto bg-fashion-black">
              <Mail className="size-4 ml-4 opacity-60 text-fashion-white" />
              
              <div className="space-y-2 flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border-input bg-transparent py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-0 shadow-none text-sm focus-visible:ring-0 px-0 text-fashion-white"
                />
              </div>
              
              <div className="hidden">
                <label htmlFor="b_name">Name:</label>
                <input type="text" id="b_name" tabIndex={-1} name="b_name" />
                <label htmlFor="b_email">Email:</label>
                <input type="email" id="b_email" tabIndex={-1} name="b_email" />
                <label htmlFor="b_comment">Comment:</label>
                <textarea name="b_comment" id="b_comment" tabIndex={-1}></textarea>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 ml-auto"
              >
                <CirclePlus className="size-4" />
                Join the Waitlist
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Right content - phone mockup */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
        <div className="relative w-full max-w-sm">
          {/* Phone mockup */}
          <div className="relative rounded-[40px] border-[10px] border-fashion-white/20 shadow-xl overflow-hidden w-full h-[580px] bg-fashion-black">
            {/* Main video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* UI overlay elements */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
              <div className="text-fashion-white text-sm">FashionVideo</div>
              <div className="bg-red rounded-full w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            {/* Bottom UI elements */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-fashion-black to-transparent">
              <div className="flex justify-between items-center">
                <div className="text-fashion-white text-sm">@fashionista</div>
                <div className="bg-red rounded-full px-3 py-1">
                  <span className="text-fashion-white text-xs">Shop Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-to-br from-red/40 to-red/5 blur-3xl"></div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fashion-black via-fashion-black to-fashion-black/90 z-0"></div>
    </section>
  );
};

export default HeroSection;
