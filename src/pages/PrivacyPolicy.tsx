import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 bg-fashion-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Your privacy is important to us. This Privacy Policy explains how FashionVideo collects, uses, and protects your information.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us.
              This information may include your name, email address, and any other details you choose to share.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
            <p className="mb-6">
              We use your information to provide, maintain, and improve our services, as well as to communicate with you about updates, promotions, and other news.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
            <p className="mb-6">
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
