
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using FashionVideo, you agree to be bound by these Terms of Service. If you do not 
              agree to these terms, please do not use our service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">2. Description of Service</h2>
            <p className="mb-6">
              FashionVideo provides a platform for users to discover and shop for fashion through short-form videos. 
              We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">3. User Accounts</h2>
            <p className="mb-6">
              To access certain features of our service, you may need to create an account. You are responsible for 
              maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">4. User Content</h2>
            <p className="mb-6">
              Users may have the ability to post content on our platform. By posting content, you grant us a worldwide, 
              non-exclusive license to use, reproduce, and distribute your content in connection with our service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">5. Prohibited Activities</h2>
            <p className="mb-6">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-8 mb-6">
              <li>Violating any laws or regulations</li>
              <li>Impersonating any person or entity</li>
              <li>Interfering with the proper functioning of the service</li>
              <li>Engaging in any activity that could harm our systems or other users</li>
              <li>Using the service for any unauthorized commercial purposes</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">6. Intellectual Property</h2>
            <p className="mb-6">
              All content included on the service, such as text, graphics, logos, and software, is the property 
              of FashionVideo or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">7. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall FashionVideo be liable for any indirect, incidental, special, or consequential damages 
              arising out of or in connection with your use of the service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">8. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. It is your responsibility to review these terms periodically.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">9. Contact Information</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at terms@fashionvideo.com.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
