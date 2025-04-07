import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 bg-fashion-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to FashionVideo! These Terms of Service govern your use of our platform.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using FashionVideo, you agree to be bound by these Terms of Service and our Privacy Policy.
              If you do not agree with all of these terms, you are prohibited from using our services.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Use of Our Platform</h2>
            <p className="mb-6">
              FashionVideo grants you a limited, non-exclusive, and revocable license to access and use our platform
              for personal, non-commercial purposes. You agree not to use our platform for any illegal or unauthorized purpose.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Content</h2>
            <p className="mb-6">
              Users may submit content to FashionVideo, including videos, comments, and other materials. You are solely
              responsible for the content you submit and the consequences of its publication.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Intellectual Property</h2>
            <p className="mb-6">
              The FashionVideo platform and its original content, features, and functionality are owned by us and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Disclaimer</h2>
            <p className="mb-6">
              FashionVideo is provided on an "as is" and "as available" basis. We make no warranties, express or implied,
              regarding the operation or availability of our platform.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall FashionVideo be liable for any indirect, incidental, special, or consequential damages
              arising out of or in connection with your use of our platform.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify or replace these Terms of Service at any time. Your continued use of
              FashionVideo after any such changes constitutes your acceptance of the new Terms of Service.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at [Your Contact Information].
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
