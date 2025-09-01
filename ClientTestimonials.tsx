import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
const ClientTestimonials = () => {
  const testimonials = [{
    name: 'Mandla Zulu',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart',
    content: 'Tech Q transformed our entire workflow with their AI automation. We\'ve seen a 60% increase in productivity and our team can now focus on what really matters.',
    rating: 5,
    avatar: 'MZ'
  }, {
    name: 'Thato Ximba',
    position: 'CTO, Lew Prop Construction',
    company: 'Lew Prop Construction',
    content: 'The web application they built for us is not only beautiful but incredibly fast and user-friendly. Our conversion rates have increased by 40% since launch.',
    rating: 5,
    avatar: 'TX'
  }, {
    name: 'Lerato Dlamini',
    position: 'Operations Director, LogiFlow',
    company: 'LogiFlow',
    content: 'Their chatbot solution has revolutionized our customer service. We now handle 3x more inquiries with the same team size and customer satisfaction is at an all-time high.',
    rating: 5,
    avatar: 'ER'
  }];
  const clientLogos = ['TechStart', 'Lew Prop Construction', 'LogiFlow', 'Innovation Corp', 'Future Systems', 'Smart Ventures'];
  return <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <Card key={index} className="card-shadow hover:elevated-shadow transition-smooth group">
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                  </div>
                  <Quote className="w-8 h-8 text-accent/30" />
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-neon flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">Trusted by leading companies nation wide </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => <div key={index} className="flex items-center justify-center h-16 px-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-smooth group">
                <span className="text-muted-foreground group-hover:text-accent transition-smooth font-semibold">
                  {logo}
                </span>
              </div>)}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99%</div>
            <div className="text-muted-foreground">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>;
};
export default ClientTestimonials;