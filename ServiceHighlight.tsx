import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Code, Zap, Workflow, Globe, BarChart3, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServiceHighlight = () => {
  const services = [{
    category: 'AI Automation',
    icon: Bot,
    description: 'Intelligent automation solutions that streamline your workflow and boost productivity.',
    features: [{
      icon: Workflow,
      name: 'Workflow Automation',
      description: 'Automate repetitive tasks and processes'
    }, {
      icon: Bot,
      name: 'Chatbots & AI Assistants',
      description: 'Smart customer service solutions'
    }, {
      icon: BarChart3,
      name: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting'
    }, {
      icon: Zap,
      name: 'ML Integration',
      description: 'Custom machine learning solutions'
    }],
    gradient: 'from-accent to-neon-glow'
  }, {
    category: 'Web Development',
    icon: Code,
    description: 'Modern, responsive websites and applications built with cutting-edge technology.',
    features: [{
      icon: Globe,
      name: 'UI/UX Design',
      description: 'Beautiful, user-centered design'
    }, {
      icon: Code,
      name: 'Custom Applications',
      description: 'Tailored web solutions'
    }, {
      icon: LinkIcon,
      name: 'E-commerce Solutions',
      description: 'Complete online store development'
    }, {
      icon: Zap,
      name: 'Performance Optimization',
      description: 'Fast, SEO-optimized websites'
    }],
    gradient: 'from-primary to-primary-light'
  }];
  return <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in two key areas that drive modern business success: 
            AI automation and cutting-edge web development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => <Card key={service.category} className="card-shadow hover:elevated-shadow transition-smooth group">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-sky-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {service.category}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map(feature => <div key={feature.name} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <feature.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-1">{feature.name}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>)}
                </div>
                
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-primary group" asChild>
                  <Link to={`/services/${service.category.toLowerCase().replace(' ', '-')}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI automation and web development services can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8" asChild>
              <Link to="/contact">Let Us Connect You</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServiceHighlight;