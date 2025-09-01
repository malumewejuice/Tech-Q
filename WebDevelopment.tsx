import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Zap, Smartphone, Search, ShoppingCart, Palette, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with modern frameworks and technologies to meet your specific business needs.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered design that creates engaging experiences and drives conversions.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment processing and inventory management.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed, SEO, and user experience across all devices.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks and works perfectly on all screen sizes.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in search engine optimization to help your website rank higher and attract more visitors.'
    },
    {
      icon: Monitor,
      title: 'Content Management',
      description: 'Easy-to-use content management systems that let you update your website without technical knowledge.'
    },
    {
      icon: Code,
      title: 'Modern Technologies',
      description: 'Latest web technologies including React, TypeScript, and cloud-based solutions for scalability.'
    }
  ];

  const technologies = [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'MongoDB & PostgreSQL',
    'AWS & Vercel',
    'Stripe Integration',
    'REST & GraphQL APIs'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Web <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Create stunning, high-performance websites and web applications that captivate your audience 
              and drive business growth with modern technologies and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Our Web Development Services?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the digital age, your website is often the first interaction customers have with your brand. 
                We create web experiences that not only look incredible but perform flawlessly, convert visitors 
                into customers, and scale with your business growth. From simple websites to complex web applications, 
                we deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Web Development Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive web development services that cover every aspect of your digital presence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-shadow hover:elevated-shadow transition-smooth text-center group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
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

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Technologies We Use
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We work with the latest and most reliable technologies to ensure your website is fast, secure, and future-proof.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-smooth">
                  <span className="text-sm font-medium text-primary">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Development Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your goals, requirements, and target audience.' },
                { step: '02', title: 'Design', description: 'Create wireframes and designs that align with your brand vision.' },
                { step: '03', title: 'Development', description: 'Build your website using modern technologies and best practices.' },
                { step: '04', title: 'Launch', description: 'Deploy, test, and optimize your website for peak performance.' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-neon flex items-center justify-center">
                    <span className="text-primary font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Build Your Website?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create a stunning web presence that drives results and grows your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn About Our Team</Link>
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

export default WebDevelopment;