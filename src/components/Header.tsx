
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300",
        isScrolled ? "bg-fashion-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/877d7f5b-04be-4716-a994-694894a3e060.png" 
            alt="FashionVideo Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-2xl font-bold text-fashion-white">
            Fashion<span className="text-red">Video</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-fashion-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-red" />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile menu */}
        <div className={`
          md:hidden fixed inset-0 bg-fashion-black/95 backdrop-blur-sm z-40 transition-all duration-300 transform
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-20 px-6
        `}>
          <nav className="flex flex-col space-y-6">
            <a 
              href="#features" 
              className="text-fashion-white hover:text-red text-xl font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-fashion-white hover:text-red text-xl font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-fashion-white hover:text-red text-xl font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('faq');
              }}
            >
              FAQ
            </a>
            <div className="pt-4">
              <a 
                href="#waitlist" 
                className="block w-full bg-red hover:bg-red/90 text-white text-center py-3 rounded-md font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('waitlist');
                }}
              >
                Join Waitlist
              </a>
            </div>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <a 
                  href="#how-it-works"
                  className="text-fashion-white hover:text-red transition-colors px-3 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }}
                >
                  How It Works
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#features"
                  className="text-fashion-white hover:text-red transition-colors px-3 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                >
                  Features
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#faq"
                  className="text-fashion-white hover:text-red transition-colors px-3 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('faq');
                  }}
                >
                  FAQ
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-fashion-white hover:bg-fashion-black/50 hover:text-red">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] bg-fashion-black border border-fashion-white/20 p-2 rounded-md">
                    <NavigationMenuLink 
                      href="/about"
                      className="block px-3 py-2 text-fashion-white hover:bg-red/20 rounded-md"
                    >
                      About Us
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="/contact"
                      className="block px-3 py-2 text-fashion-white hover:bg-red/20 rounded-md"
                    >
                      Contact
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="/privacy"
                      className="block px-3 py-2 text-fashion-white hover:bg-red/20 rounded-md"
                    >
                      Privacy Policy
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="/terms"
                      className="block px-3 py-2 text-fashion-white hover:bg-red/20 rounded-md"
                    >
                      Terms of Service
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a 
            href="#waitlist" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('waitlist');
            }}
          >
            <Button className="bg-red hover:bg-red/90 text-white">
              Join Waitlist
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
