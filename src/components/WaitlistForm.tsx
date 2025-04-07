
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Check } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && agreeTerms) {
      console.log('Submitted email:', email);
      setHasSubmitted(true);
      setEmail('');
      setAgreeTerms(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setHasSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-fashion-gray">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Waitlist
          </h2>
          <p className="text-lg text-gray-600">
            Be the first to know when we launch and get early access to our fashion platform.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-2xl mx-auto">
          {hasSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-red" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We've added you to our waitlist. We'll reach out when we're ready to welcome you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="yourname@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label 
                    htmlFor="terms" 
                    className="text-sm text-gray-500 font-normal cursor-pointer"
                  >
                    I agree to receive marketing communications from the company, 
                    to the <a href="/terms" className="text-red underline">Terms and Conditions</a> and 
                    to the <a href="/privacy" className="text-red underline">Privacy Policy</a>.
                  </Label>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-red hover:bg-red-dark text-fashion-white py-6 rounded-xl text-lg"
                disabled={!email || !agreeTerms}
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
