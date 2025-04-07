
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
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
      </div>
    </header>
  );
};

export default Header;
