import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Users, Zap } from 'lucide-react';

const JoinNow = () => {
  window.scrollTo(0, 0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    membershipType: '',
    fitnessGoals: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
    agreeTerms: false,
    agreeNewsletter: false
  });

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "Thank you for joining FitLife Gym. We'll contact you within 24 hours to complete your membership setup.",
    });

    console.log('Membership application:', formData);
  };

  const membershipPlans = [
    {
      name: "Basic",
      price: "$29/month",
      features: ["Gym Access", "Locker Room", "Free Parking"],
      icon: <Calendar className="h-6 w-6" />
    },
    {
      name: "Premium",
      price: "$59/month", 
      features: ["All Basic Features", "Group Classes", "Personal Training Consultation"],
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Elite",
      price: "$99/month",
      features: ["All Premium Features", "Unlimited Personal Training", "Massage Therapy"],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join FitLife Gym Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Start your fitness transformation journey with us. Fill out the form below to apply for membership.
          </p>
        </div>
      </section>

      {/* Membership Plans Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {membershipPlans.map((plan, index) => (
              <Card key={index} className="card-shadow hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">{plan.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-2xl font-bold text-primary">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                Membership Application
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Please fill out all required fields to complete your application
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="16"
                        max="100"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="membershipType">Membership Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('membershipType', value)}>
                        <SelectTrigger className="transition-smooth">
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic - $29/month</SelectItem>
                          <SelectItem value="premium">Premium - $59/month</SelectItem>
                          <SelectItem value="elite">Elite - $99/month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Fitness Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Fitness Information</h3>
                  <div>
                    <Label htmlFor="fitnessGoals">Fitness Goals</Label>
                    <Textarea
                      id="fitnessGoals"
                      placeholder="Tell us about your fitness goals and what you hope to achieve..."
                      value={formData.fitnessGoals}
                      onChange={(e) => handleInputChange('fitnessGoals', e.target.value)}
                      className="transition-smooth"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="medicalConditions">Medical Conditions or Injuries</Label>
                    <Textarea
                      id="medicalConditions"
                      placeholder="Please list any medical conditions, injuries, or physical limitations we should be aware of..."
                      value={formData.medicalConditions}
                      onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                      className="transition-smooth"
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                        required
                        className="transition-smooth"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Agreements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                        I agree to the terms and conditions, privacy policy, and waiver of liability. I understand that physical exercise involves risk of injury. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeNewsletter"
                        checked={formData.agreeNewsletter}
                        onCheckedChange={(checked) => handleInputChange('agreeNewsletter', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeNewsletter" className="text-sm leading-relaxed">
                        I would like to receive fitness tips, promotions, and updates via email.
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-hero transition-smooth">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinNow;