import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Code, Workflow, Globe, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      category: 'AI Automation',
      icon: Bot,
      description: 'Intelligent automation solutions that streamline your workflow and boost productivity with cutting-edge AI technology.',
      features: [
        'Workflow Automation',
        'AI Chatbots & Assistants', 
        'Predictive Analytics',
        'Machine Learning Integration'
      ],
      gradient: 'from-accent to-neon-glow',
      link: '/services/ai-automation'
    },
    {
      category: 'Web Development',
      icon: Code,
      description: 'Modern, responsive websites and applications built with cutting-edge technology and beautiful design.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'UI/UX Design',
        'Performance Optimization'
      ],
      gradient: 'from-primary to-primary-light',
      link: '/services/web-development'
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              We specialize in two key areas that drive modern business success: 
              AI automation and cutting-edge web development. Transform your business with our expert solutions.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card key={service.category} className="card-shadow hover:elevated-shadow transition-smooth group">
                  <CardHeader className="text-center pb-8">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary mb-4">
                      {service.category}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-neon flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-accent to-neon text-primary group"
                      asChild
                    >
                      <Link to={service.link}>
                        Learn More About {service.category}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Tech Q?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that not only work beautifully but drive real results for your organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick turnaround times without compromising on quality or attention to detail.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Proven Results</h3>
                <p className="text-muted-foreground">Track record of successful projects that drive measurable business outcomes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Modern Technology</h3>
                <p className="text-muted-foreground">Latest tools and frameworks to ensure your solutions are future-proof and scalable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
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

export default Services;