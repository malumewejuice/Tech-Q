
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Globe, Bot, Phone, MessageCircle, ShoppingCart } from 'lucide-react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiPlans = [
    {
      name: 'Starter',
      price: 'R499',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '1 AI chatbot (website or WhatsApp)',
        'Up to 250 conversations',
        'Basic FAQs / lead capture',
        'Monthly performance report'
      ],
      popular: false,
      icon: Bot
    },
    {
      name: 'Business',
      price: 'R999',
      period: '/month',
      description: 'Enhanced automation for growing businesses',
      features: [
        '2 AI agents (chatbot + WhatsApp or email)',
        'Up to 450 conversations',
        'Workflow automation (bookings, reminders)',
        'Integration with Google Sheets, Calendly, etc.'
      ],
      popular: true,
      icon: Zap
    },
    {
      name: 'Pro',
      price: 'R4,999',
      period: '/month',
      description: 'Complete AI solution for enterprise needs',
      features: [
        'Unlimited conversations',
        '3+ AI agents (chat, voice, WhatsApp)',
        'GPT-4 agent support',
        'Custom workflows + CRM/API integration',
        'Priority support'
      ],
      popular: false,
      icon: Bot
    }
  ];

  const websitePlans = [
    {
      name: 'Starter Site',
      price: 'R299',
      period: '/month',
      description: 'Essential web presence for small businesses',
      features: [
        '1-5 page website',
        'Hosting included',
        '1 content update/month',
        'Basic SEO setup'
      ],
      popular: false,
      icon: Globe
    },
    {
      name: 'Business Site',
      price: 'R599',
      period: '/month',
      description: 'Professional website with enhanced features',
      features: [
        'Up to 10 pages',
        'Mobile optimization',
        'Monthly updates',
        'Google Maps, WhatsApp chat, etc.'
      ],
      popular: true,
      icon: Globe
    },
    {
      name: 'E-Commerce/Advanced',
      price: 'R1,499',
      period: '/month',
      description: 'Full-featured online store or booking system',
      features: [
        'Online store or booking system',
        'Payment integration',
        '2 updates/month',
        'Advanced analytics & SEO'
      ],
      popular: false,
      icon: ShoppingCart
    }
  ];

  const addOns = [
    {
      name: 'WhatsApp Business AI Integration',
      price: '+R299/month',
      icon: MessageCircle
    },
    {
      name: 'AI Voice Agent (Call Center / IVR)',
      price: '+R799–R2999/month',
      icon: Phone
    },
    {
      name: 'Domain + Business Email Setup',
      price: 'R150–R400/month',
      icon: Globe
    },
    {
      name: 'Monthly Blog/Content Writing',
      price: 'R400–R800/month',
      icon: Globe
    },
    {
      name: 'Social Media Automation',
      price: 'R500–R1,200/month',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Choose Your <span className="text-gradient">Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Transform your business with our AI automation and web development solutions. 
              Flexible plans designed to grow with your business.
            </p>
          </div>
        </section>

        {/* AI Agent Plans */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                💬 AI Agent Monthly Subscription Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Intelligent automation solutions that streamline your workflow and boost productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {aiPlans.map((plan, index) => (
                <Card key={plan.name} className={`relative card-shadow hover:elevated-shadow transition-smooth ${plan.popular ? 'border-accent shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-accent to-neon text-primary font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-accent to-neon' : 'bg-muted'} flex items-center justify-center`}>
                      <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-accent to-neon text-primary' : 'bg-primary text-white'} hover:opacity-90`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                ⚠️ Extra GPT or API usage billed separately if above limits.
              </p>
            </div>
          </div>
        </section>

        {/* Website Plans */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                🌐 Website Monthly Subscription Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Modern, responsive websites built with cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {websitePlans.map((plan, index) => (
                <Card key={plan.name} className={`relative card-shadow hover:elevated-shadow transition-smooth ${plan.popular ? 'border-accent shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-accent to-neon text-primary font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-accent to-neon' : 'bg-muted'} flex items-center justify-center`}>
                      <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-accent to-neon text-primary' : 'bg-primary text-white'} hover:opacity-90`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                ⚠️ 12-month minimum recommended, or a once-off setup fee (e.g. R1,000–R3,000)
              </p>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                🔗 Add-On Services (Optional)
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Enhance your package with additional services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card key={addon.name} className="card-shadow hover:elevated-shadow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center flex-shrink-0">
                        <addon.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{addon.name}</h3>
                        <p className="text-sm font-medium text-accent">{addon.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              🧾 Sample Bundle Offer
            </h2>
            
            <Card className="card-shadow hover:elevated-shadow transition-smooth border-accent">
              <CardHeader className="text-center pb-8">
                <Badge className="bg-gradient-to-r from-accent to-neon text-primary font-semibold w-fit mx-auto mb-4">
                  Best Value
                </Badge>
                <CardTitle className="text-3xl font-bold text-primary mb-2">
                  "AI + Website Combo"
                </CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">R1,499</span>
                  <span className="text-muted-foreground text-xl">/month</span>
                </div>
                <CardDescription className="text-lg text-muted-foreground">
                  Complete digital transformation package for your business
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">1 website (5 pages)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">1 AI chatbot on website</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">WhatsApp connection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Monthly updates + performance report</span>
                    </li>
                  </ul>
                </div>
                
                <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8">
                  Get Combo Deal
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get started with our AI automation and web development services today. 
                Choose the plan that fits your needs and watch your business grow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8" asChild>
                  <Link to="/contact">Start Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Pricing;
