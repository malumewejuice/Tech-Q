import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      category: 'AI Automation',
      questions: [
        {
          question: 'What is AI automation and how can it help my business?',
          answer: 'AI automation uses artificial intelligence to streamline repetitive tasks, improve efficiency, and reduce human error. It can help with customer service, data processing, scheduling, and many other business processes.'
        },
        {
          question: 'How long does it take to implement AI automation?',
          answer: 'Implementation time varies depending on complexity. Simple chatbots can be deployed in 1-2 weeks, while comprehensive automation systems may take 4-8 weeks.'
        },
        {
          question: 'Will AI automation replace my employees?',
          answer: 'No, AI automation is designed to augment human capabilities, not replace them. It handles repetitive tasks so your team can focus on strategic, creative work.'
        },
        {
          question: 'What kind of ROI can I expect from AI automation?',
          answer: 'Most businesses see 20-40% efficiency improvements and cost savings within 6 months of implementation. Specific ROI depends on your industry and use case.'
        }
      ]
    },
    {
      category: 'Web Development',
      questions: [
        {
          question: 'What technologies do you use for web development?',
          answer: 'We use modern technologies including React, Next.js, TypeScript, Tailwind CSS, and various backend solutions depending on your needs.'
        },
        {
          question: 'Do you offer website maintenance after launch?',
          answer: 'Yes, we provide ongoing maintenance packages including security updates, content updates, performance optimization, and technical support.'
        },
        {
          question: 'How long does it take to build a website?',
          answer: 'Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. Timeline depends on features, design complexity, and content preparation.'
        },
        {
          question: 'Will my website be mobile-friendly?',
          answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops.'
        }
      ]
    },
    {
      category: 'Pricing & Support',
      questions: [
        {
          question: 'Do you offer custom pricing for large projects?',
          answer: 'Yes, we provide custom quotes for enterprise-level projects. Contact us to discuss your specific requirements and get a tailored proposal.'
        },
        {
          question: 'What support do you provide after project completion?',
          answer: 'We offer 24/7 support, regular maintenance, performance monitoring, and updates. Support levels vary by package.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can discuss milestone-based payments or monthly payment options.'
        },
        {
          question: 'What happens if I need changes after the project is complete?',
          answer: 'Minor changes are included in our support package. Larger modifications are handled as separate projects with transparent pricing.'
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions about our AI automation and web development services.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chat Help Banner */}
        <section className="bg-primary/10 py-8">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Can't find what you're looking for?</h3>
                      <p className="text-muted-foreground">Our AI support assistant is here to help with any questions.</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setChatOpen(true)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No FAQs found matching your search. Try our chat support for personalized help!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-8">
                  {filteredFaqs.map((category, categoryIndex) => (
                    <Card key={categoryIndex}>
                      <CardHeader>
                        <CardTitle className="text-2xl text-primary">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                              <AccordionTrigger className="text-left">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is ready to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setChatOpen(true)}
              >
                Chat with AI Assistant
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Integrated Chat Support */}
      <ChatSupport forceOpen={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
};

export default FAQ;