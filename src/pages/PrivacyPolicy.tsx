
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">1. Introduction</h2>
            <p className="mb-6">
              At FashionVideo, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our platform. Please read this 
              policy carefully to understand our practices regarding your personal data.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">2. Information We Collect</h2>
            <p className="mb-6">
              We may collect personal information that you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-8 mb-6">
              <li>Create an account</li>
              <li>Update your profile</li>
              <li>Participate in interactive features</li>
              <li>Contact customer support</li>
              <li>Sign up for our newsletter</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">3. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-8 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize content and experiences</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">4. Sharing Your Information</h2>
            <p className="mb-6">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-8 mb-6">
              <li>With vendors and service providers</li>
              <li>In response to legal processes</li>
              <li>To protect our rights and the rights of others</li>
              <li>In connection with a merger, sale, or acquisition</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">5. Your Rights</h2>
            <p className="mb-6">
              Depending on your location, you may have certain rights regarding your personal information, 
              including the right to access, correct, delete, or restrict processing of your personal data.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">6. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@fashionvideo.com.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
