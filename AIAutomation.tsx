import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Workflow, BarChart3, Zap, Clock, TrendingUp, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and processes with intelligent automation that learns and adapts to your business needs.'
    },
    {
      icon: Bot,
      title: 'AI Chatbots & Assistants',
      description: 'Deploy smart customer service solutions that provide 24/7 support and improve customer satisfaction.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage data-driven insights and forecasting to make informed decisions and stay ahead of trends.'
    },
    {
      icon: Zap,
      title: 'Machine Learning Integration',
      description: 'Custom ML solutions tailored to your specific business challenges and opportunities.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 80% and focus your team on high-value strategic activities.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Boost productivity and operational efficiency with intelligent process optimization.'
    },
    {
      icon: Shield,
      title: 'Error Reduction',
      description: 'Minimize human errors and ensure consistent, reliable execution of business processes.'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Build automation that grows with your business and adapts to changing requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-accent to-neon-glow flex items-center justify-center">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              AI <span className="text-gradient">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Transform your business operations with intelligent automation solutions that work 24/7, 
              reduce costs, and eliminate repetitive tasks so your team can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose AI Automation?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's fast-paced business environment, manual processes are holding you back. 
                Our AI automation solutions eliminate bottlenecks, reduce human error, and free up 
                your valuable team members to focus on strategic initiatives that drive growth. 
                Experience the power of intelligent automation that learns, adapts, and evolves with your business.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Key Features & Benefits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive AI automation solutions deliver measurable results across every aspect of your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-shadow hover:elevated-shadow transition-smooth text-center group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-primary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Automate Your Business?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can transform your operations, reduce costs, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
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

export default AIAutomation;