
import { useState, useEffect } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Search, HelpCircle, Plus, Minus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const faqCategories = [
    { id: "general", name: "General", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "creators", name: "For Creators", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "users", name: "For Users", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "shopping", name: "Shopping", icon: <HelpCircle className="h-4 w-4" /> }
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
      },
      {
        question: "How do I track my orders?",
        answer: "You can track all your orders in real-time through the 'My Purchases' section of your profile. You'll also receive email notifications with tracking information."
      },
      {
        question: "Are there any membership benefits for frequent shoppers?",
        answer: "Yes! Our FashionElite program rewards frequent shoppers with early access to new styles, special discounts, and exclusive content from top creators."
      }
    ]
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqs(allFaqs[activeCategory as keyof typeof allFaqs]);
      return;
    }

    const searchResults: any[] = [];
    
    // Search through all categories
    Object.keys(allFaqs).forEach(category => {
      const categoryFaqs = allFaqs[category as keyof typeof allFaqs];
      const matchingFaqs = categoryFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      searchResults.push(...matchingFaqs);
    });
    
    setFilteredFaqs(searchResults);
  }, [searchQuery, activeCategory]);

  return (
    <section className="py-16 bg-fashion-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-fashion-white mb-2">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red/60 -z-0"></span>
          </h2>
          <p className="mt-4 text-fashion-white/80 mb-6">
            Everything you need to know about FashionVideo
          </p>
          
          {/* Search Input */}
          <div className="relative mx-auto max-w-md mt-8 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-fashion-white/50 group-focus-within:text-red transition-colors duration-200" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-fashion-white/5 border border-fashion-white/10 focus:border-red/70 outline-none rounded-lg text-fashion-white placeholder:text-fashion-white/50 transition-all duration-200"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-fashion-white/50 hover:text-red transition-colors duration-200"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {searchQuery ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-red/10 text-fashion-white mb-6 px-4 py-3 rounded-lg">
              <p>
                Showing results for: <span className="font-semibold">"{searchQuery}"</span> 
                {filteredFaqs.length > 0 
                  ? ` (${filteredFaqs.length} ${filteredFaqs.length === 1 ? 'result' : 'results'} found)`
                  : ' (No results found)'}
              </p>
            </div>
            
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`search-item-${index}`}
                    className="border-b border-fashion-white/10 animate-in"
                  >
                    <AccordionTrigger className="text-fashion-white hover:text-red transition-colors flex items-center">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-fashion-white/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="mx-auto h-12 w-12 text-red/50 mb-4" />
                <h3 className="text-xl font-medium text-fashion-white mb-2">No results found</h3>
                <p className="text-fashion-white/60 mb-4">
                  We couldn't find answers matching your search.
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-red/20 hover:bg-red/30 text-fashion-white rounded-lg transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? "bg-red text-white shadow-lg"
                      : "bg-fashion-white/10 text-fashion-white/80 hover:bg-fashion-white/20"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4"
            >
              {allFaqs[activeCategory as keyof typeof allFaqs].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-fashion-white/10 rounded-lg bg-fashion-white/5 backdrop-blur-sm overflow-hidden animate-in stagger-1"
                >
                  <AccordionTrigger className="text-fashion-white hover:text-red transition-colors px-6 py-4">
                    <div className="flex items-center gap-2 text-left">
                      <span className="font-medium text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-fashion-white/80 px-6 pb-6 pt-0">
                    <div className="bg-fashion-white/5 p-4 rounded-lg">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Additional FAQ Help */}
        <div className="max-w-3xl mx-auto mt-12">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full border border-fashion-white/10 rounded-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-red/20 to-red/10 p-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-red" />
                  <h3 className="text-lg font-medium text-fashion-white">Can't find what you're looking for?</h3>
                </div>
                <div className="h-6 w-6 bg-fashion-white/10 rounded-full flex items-center justify-center">
                  {isOpen ? (
                    <Minus className="h-4 w-4 text-fashion-white" />
                  ) : (
                    <Plus className="h-4 w-4 text-fashion-white" />
                  )}
                </div>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="bg-fashion-black/50 p-6">
              <div className="text-fashion-white/80">
                <p className="mb-4">
                  If you still have questions that aren't answered here, feel free to reach out to our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-2 bg-fashion-white/10 hover:bg-fashion-white/15 text-fashion-white px-4 py-3 rounded-lg transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                    </svg>
                    <span>Email Support</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"></path>
                    </svg>
                    <span>Live Chat</span>
                  </a>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

