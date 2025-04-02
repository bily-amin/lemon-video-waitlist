
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-fashion-white">
            Fashion<span className="text-red">Video</span>
          </a>
        </div>
      </header>

      <main className="flex-1 pt-20 bg-fashion-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to FashionVideo, the revolutionary platform transforming how you discover and shop for fashion.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Our Mission</h2>
            <p className="mb-6">
              At FashionVideo, we believe that fashion discovery should be intuitive, engaging, and personalized. 
              Our mission is to connect fashion enthusiasts with creators and brands through short-form videos 
              that inspire and delight.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Our Story</h2>
            <p className="mb-6">
              Founded in 2023, FashionVideo was born from a simple observation: traditional fashion shopping 
              experiences weren't keeping up with how people consume content today. We saw an opportunity to 
              bridge this gap by creating a platform that leverages the power of short-form video to make 
              fashion discovery more engaging and convenient.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Our Team</h2>
            <p className="mb-6">
              Our diverse team brings together expertise from fashion, technology, and content creation. 
              United by our passion for innovation, we're committed to building a platform that empowers both 
              creators and consumers in the fashion ecosystem.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Join Our Journey</h2>
            <p className="mb-6">
              We're just getting started, and we invite you to be part of our story. Whether you're a fashion 
              enthusiast looking for your next style inspiration or a creator wanting to share your passion, 
              FashionVideo is the place for you.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
