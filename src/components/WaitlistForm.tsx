
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { CheckIcon, Loader2Icon } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "You're on the list!",
        description: "We'll notify you when we launch.",
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-fashion-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-fashion-gray p-8 md:p-10 rounded-2xl shadow-sm border border-fashion-black/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Join Our Exclusive Waitlist
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-2 border-fashion-black/20 focus:border-red bg-white h-12 px-4"
                  disabled={isLoading || isSubmitted}
                />
                <Button
                  type="submit"
                  className={`h-12 px-6 font-medium transition-all ${
                    isSubmitted 
                      ? 'bg-red-dark text-fashion-white hover:bg-red-dark' 
                      : 'bg-red text-fashion-white hover:bg-red-dark'
                  }`}
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Submitting
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckIcon className="mr-2 h-4 w-4" />
                      Joined
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </Button>
              </div>
              
              <p className="text-xs text-center text-fashion-black/60 mt-4">
                By joining, you agree to receive occasional updates about our launch. We respect your privacy.
              </p>
            </form>
            
            <div className="mt-8 pt-6 border-t border-fashion-black/10">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-fashion-black">1000+</div>
                  <div className="text-sm text-fashion-black/60">On Waitlist</div>
                </div>
                <div className="h-10 border-r border-fashion-black/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fashion-black">30+</div>
                  <div className="text-sm text-fashion-black/60">Fashion Brands</div>
                </div>
                <div className="h-10 border-r border-fashion-black/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fashion-black">94%</div>
                  <div className="text-sm text-fashion-black/60">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
