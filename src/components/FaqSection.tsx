
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  
  const faqCategories = [
    { id: "general", name: "General" },
    { id: "creators", name: "For Creators" },
    { id: "users", name: "For Users" },
    { id: "shopping", name: "Shopping" }
  ];
  
  const allFaqs = {
    general: [
      {
        question: "How does FashionVideo work?",
        answer: "FashionVideo is a platform that uses AI to connect you with fashion content through short videos. Simply browse, watch, discover styles you love, and purchase them directly through our seamless shopping experience."
      },
      {
        question: "Is FashionVideo free to use?",
        answer: "Yes! FashionVideo is completely free for fashion enthusiasts. We make money through partnerships with brands and retailers when you purchase items you discover on our platform."
      },
      {
        question: "When will FashionVideo be available?",
        answer: "We're currently in private beta testing with select users and creators. Join our waitlist to be among the first to experience FashionVideo when we launch publicly."
      },
      {
        question: "What makes FashionVideo different from other platforms?",
        answer: "FashionVideo is specifically designed for fashion discovery, combining short-form videos with AI-powered recommendations and seamless shopping integration. Our focus is entirely on helping you find and purchase styles you love."
      }
    ],
    creators: [
      {
        question: "How do I become a creator on FashionVideo?",
        answer: "We're currently inviting select fashion creators to join our platform. Sign up on our waitlist and indicate you're interested in being a creator to receive early access as we expand."
      },
      {
        question: "Can I monetize my content on FashionVideo?",
        answer: "Absolutely! Creators earn commission on all purchases made through their videos, plus bonus payouts for high-engagement content and featuring trending styles."
      },
      {
        question: "What kind of fashion content performs best?",
        answer: "Authentic, trend-focused content with clear outfit details performs best. Our AI helps match your content with users most likely to engage with your specific style niche."
      },
      {
        question: "Do I need professional equipment to create videos?",
        answer: "Not at all! While good lighting helps, most of our top creators simply use their smartphones. Our built-in editing tools help enhance your videos automatically."
      }
    ],
    users: [
      {
        question: "How does FashionVideo know what styles I like?",
        answer: "Our AI learns your preferences as you browse, like, and engage with content. The more you use FashionVideo, the more personalized your feed becomes."
      },
      {
        question: "Can I save outfits for later?",
        answer: "Yes! You can bookmark any video or specific items to revisit later. We'll even notify you about price drops or if items are running low on stock."
      },
      {
        question: "Is there a way to follow specific creators?",
        answer: "Absolutely! You can follow your favorite fashion creators to ensure their new content appears in your feed. You'll also receive notifications when they post new videos."
      }
    ],
    shopping: [
      {
        question: "Can I shop directly through the app?",
        answer: "Absolutely! When you see something you like, you can purchase it directly through our platform with just a few taps, without ever leaving the video experience."
      },
      {
        question: "What happens if an item I purchase doesn't fit?",
        answer: "All purchases through FashionVideo come with the retailer's standard return policy. We also provide detailed size guides and fit recommendations based on community feedback."
      },
      {
        question: "Does FashionVideo ship internationally?",
        answer: "We partner with retailers worldwide, so international shipping is available for many items. Shipping options and fees will be clearly displayed before checkout."
      }
    ]
  };

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
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-red text-white"
                    : "bg-fashion-white/10 text-fashion-white/80 hover:bg-fashion-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <Accordion type="single" collapsible className="w-full">
            {allFaqs[activeCategory as keyof typeof allFaqs].map((faq, index) => (
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
