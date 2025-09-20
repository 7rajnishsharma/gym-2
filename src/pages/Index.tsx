import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dumbbell, 
  Users, 
  Heart, 
  Target, 
  MapPin, 
  Clock, 
  Phone,
  Star,
  Award,
  Zap
} from 'lucide-react';

// Import images
import gymHero from '@/assets/gym-hero.jpg';
import trainer1 from '@/assets/trainer-1.jpg';
import trainer2 from '@/assets/trainer-2.jpg';
import cardioSection from '@/assets/cardio-section.jpg';

const Index = () => {
  window.scrollTo(0, 0);
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase strength with our state-of-the-art equipment and expert guidance."
    },
    {
      icon: Heart,
      title: "Cardio Workouts",
      description: "Improve cardiovascular health with our variety of cardio equipment and high-energy classes."
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our motivating group fitness classes including yoga, spinning, and HIIT workouts."
    },
    {
      icon: Target,
      title: "Personal Training",
      description: "Get personalized workout plans and one-on-one coaching to reach your specific goals."
    }
  ];

  const team = [
    {
      name: "Mike Johnson",
      role: "Head Trainer & Nutritionist",
      experience: "8+ years",
      specialties: ["Strength Training", "Weight Loss", "Nutrition"],
      image: trainer1
    },
    {
      name: "Sarah Williams",
      role: "Fitness Coach & Yoga Instructor",
      experience: "6+ years", 
      specialties: ["Yoga", "Flexibility", "Mindfulness"],
      image: trainer2
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="mb-6 bg-primary text-primary-foreground px-4 py-2 text-lg">
                #1 Gym in the City
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Transform Your Body, 
                <span className="text-primary"> Transform Your Life</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Join thousands of members who have transformed their lives with our world-class facilities, expert trainers, and supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-hero transition-smooth">
                  <Link to="/join-now">Start Your Journey</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-outline-hero transition-smooth">
                  <Link to="/transformations">See Results</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">5000+</h3>
                  <p className="text-muted-foreground">Members</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">50+</h3>
                  <p className="text-muted-foreground">Classes</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">15+</h3>
                  <p className="text-muted-foreground">Trainers</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={gymHero} 
                  alt="Modern gym with state-of-the-art equipment" 
                  className="w-full h-[600px] object-cover transition-smooth hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">About FitLife Gym</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                More Than Just A Gym
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2015, FitLife Gym has been dedicated to helping people achieve their fitness goals in a welcoming, 
                supportive environment. We believe fitness is not just about physical transformation—it's about building 
                confidence, creating healthy habits, and becoming the best version of yourself.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facility features the latest equipment, diverse class offerings, and a team of 
                certified trainers who are passionate about your success.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-gray-600">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Group Classes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">Expert Trainers</div>
                </div>
              </div>
              
              <Button asChild className="btn-hero transition-smooth">
                <Link to="/join-now">Join Our Community</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={cardioSection} 
                alt="Modern gym facility" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg card-shadow">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-gray-600">Best Gym 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need To Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From cutting-edge equipment to personalized training programs, we provide comprehensive fitness solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-shadow text-center group hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <service.icon className="h-12 w-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Team</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Trainers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified trainers are here to guide, motivate, and help you achieve your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="card-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Location & Hours</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Us Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conveniently located in the heart of the city with ample parking and flexible hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-96 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400466074!2d77.04417434001834!3d28.527252739872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1758346708792!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    Address
                  </h3>
                  <p className="text-gray-600 text-lg">
                    123 Fitness Street<br />
                    Gym City, GC 12345<br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">5:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">7:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    Contact
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@fitlifegym.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8">
            Join FitLife Gym today and start your journey to a healthier, stronger you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    asChild
    className="btn-hero bg-[#945ff0] text-white hover:bg-[#7e4dd1] transition-all duration-300 ease-in-out"
  >
    <Link to="/join-now">Get Membership Now</Link>
  </Button>

  <Button
    asChild
    variant="outline"
    className="btn-outline-hero border-[#945ff0] text-[#945ff0] hover:bg-[#945ff0] hover:text-white transition-all duration-300 ease-in-out"
  >
    <Link to="/transformations">View Success Stories</Link>
  </Button>
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
