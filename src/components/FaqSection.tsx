
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does FashionVideo work?",
      answer: "FashionVideo is a platform that uses AI to connect you with fashion content through short videos. Simply browse, watch, discover styles you love, and purchase them directly through our seamless shopping experience."
    },
    {
      question: "Is FashionVideo free to use?",
      answer: "Yes! FashionVideo is completely free for fashion enthusiasts. We make money through partnerships with brands and retailers when you purchase items you discover on our platform."
    },
    {
      question: "How do I become a creator on FashionVideo?",
      answer: "We're currently inviting select fashion creators to join our platform. Sign up on our waitlist and indicate you're interested in being a creator to receive early access as we expand."
    },
    {
      question: "What makes FashionVideo different from other platforms?",
      answer: "FashionVideo is specifically designed for fashion discovery, combining short-form videos with AI-powered recommendations and seamless shopping integration. Our focus is entirely on helping you find and purchase styles you love."
    },
    {
      question: "Can I shop directly through the app?",
      answer: "Absolutely! When you see something you like, you can purchase it directly through our platform with just a few taps, without ever leaving the video experience."
    }
  ];

  return (
    <section className="py-16 bg-fashion-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-fashion-white">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red/60 -z-0"></span>
          </h2>
          <p className="mt-4 text-fashion-white/80">
            Everything you need to know about FashionVideo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-fashion-white/10 animate-in stagger-1"
              >
                <AccordionTrigger className="text-fashion-white hover:text-red transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-fashion-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
