import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'AI Automation', href: '/services/ai-automation' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Workflow Automation', href: '/services/ai-automation' },
    { name: 'Custom Applications', href: '/services/web-development' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/about#careers' }
  ];

  const support = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Client Login', href: '/client-login' },
    { name: 'Support Center', href: '/contact' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-neon rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">AI</span>
                </div>
                <span className="text-2xl font-bold">Tech Q</span>
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Leading AI automation and web development company. We transform businesses with 
                intelligent solutions and cutting-edge technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">Techqho@outlook.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">061 512 6221</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">Johannesburg, SA</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-primary-foreground/80 hover:text-accent transition-smooth"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-primary-foreground/80 hover:text-accent transition-smooth"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Tech Q. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-accent/10 transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;