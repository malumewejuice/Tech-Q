import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with intelligent automation and cutting-edge web solutions that drive growth and efficiency.'
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the leading AI automation and web development partner for businesses ready to embrace the future of technology.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, integrity, and client success drive everything we do. We believe in transparent communication and delivering exceptional results.'
    }
  ];

  const team = [
    {
      name: 'Sabelo Nkomonde',
      role: 'Marketing and sales ',
      bio: '.',
      avatar: 'SN'
    },
    {
      name: 'Mawande Ntsodo',
      role: 'Web Developer',
      bio: '.',
      avatar: 'MN'
    },
    {
      name: 'Shimiyeto Maswanganyi',
      role: 'Lead AI Engineer',
      bio: '.',
      avatar: 'SM'
    },
    {
      name: 'Cebo Maphanga',
      role: 'Software Engineer',
      bio: '.',
      avatar: 'CM'
    }
  ];

  const openPositions = [
    { title: 'Senior AI Engineer', type: 'Part-time', location: 'Remote' },
    { title: 'React Developer', type: 'Part-time', location: 'Remote' },
    { title: 'DevOps Engineer', type: 'Part-time', location: 'Remote' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-gradient">Tech Q</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to transforming businesses 
              through AI automation and innovative web development.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-shadow hover:elevated-shadow transition-smooth text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-neon/20 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Industry experts and innovators working together to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="card-shadow hover:elevated-shadow transition-smooth text-center">
                  <CardHeader>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-neon flex items-center justify-center text-primary font-bold text-xl">
                      {member.avatar}
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">{member.name}</CardTitle>
                    <p className="text-accent font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-24 bg-background" id="careers">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Join Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <Card className="card-shadow p-12">
                <CardContent>
                  <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    We're Not Hiring at the Moment
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    While we're not actively recruiting, we're always interested in connecting with talented individuals who share our passion for innovation.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Feel free to reach out and introduce yourself - we'd love to stay in touch for future opportunities.
                  </p>
                  <Button className="bg-gradient-to-r from-accent to-neon text-primary">
                    Get in Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default About;