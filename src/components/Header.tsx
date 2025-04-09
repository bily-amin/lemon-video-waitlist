
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#how-it-works"
                  className="text-fashion-white hover:text-red transition-colors px-3 py-2"
                >
                  How It Works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#features"
                  className="text-fashion-white hover:text-red transition-colors px-3 py-2"
                >
                  Features
                </NavigationMenuLink>
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
          
          <Button className="bg-red hover:bg-red/90 text-white">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
