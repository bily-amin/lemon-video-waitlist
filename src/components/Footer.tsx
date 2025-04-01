
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fashion-black text-fashion-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              Fashion<span className="text-lemon">Video</span>
            </h2>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-lemon transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-lemon transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-lemon transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm text-fashion-white/70">
            <a href="#" className="hover:text-lemon transition-colors">About Us</a>
            <a href="#" className="hover:text-lemon transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lemon transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-lemon transition-colors">Contact</a>
          </div>
          
          <div className="text-center text-sm text-fashion-white/50">
            <p>© {new Date().getFullYear()} FashionVideo. All rights reserved.</p>
            <p className="mt-1">Join the fashion revolution.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
