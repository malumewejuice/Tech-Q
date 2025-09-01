import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, and Message).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message || 'Failed to send email');
      }

      console.log('Email sent successfully:', data);
      
      setIsSubmitted(true);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to Send Message",
        description: error.message || "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team of experts 
              and let's discuss your next project.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Request a Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting Tech Q. We've received your message and will get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        You should also receive a confirmation email shortly.
                      </p>
                      <Button 
                        onClick={resetForm}
                        variant="outline" 
                        className="mt-4"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input 
                              id="firstName" 
                              placeholder="John" 
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input 
                              id="lastName" 
                              placeholder="Doe" 
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@company.com" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="061 512 6221" 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            disabled={isSubmitting}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input 
                            id="company" 
                            placeholder="Your Company" 
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            disabled={isSubmitting}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="service">Service Interested In</Label>
                          <Select 
                            value={formData.service} 
                            onValueChange={(value) => handleInputChange('service', value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-automation">AI Automation</SelectItem>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="both">Both Services</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us about your project, goals, and any specific requirements..." 
                            rows={4} 
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-accent to-neon text-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                        
                        <p className="text-xs text-muted-foreground text-center">
                          * Required fields. We'll never share your information with third parties.
                        </p>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Email</h3>
                        <p className="text-muted-foreground">Techqho@outlook.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Phone</h3>
                        <p className="text-muted-foreground">061 512 6221</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Address</h3>
                        <p className="text-muted-foreground">
                          240 Apex street<br />
                          Johannesburg,2091
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Mon - Fri: 9:00 AM - 6:00 PM GMT<br />
                          Sat - Sun: Emergency support only
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="card-shadow">
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Johannesburg South</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                    Schedule Call
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their business with our solutions.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-accent to-neon text-primary px-8">
              Start Your Project Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>;
};
export default Contact;