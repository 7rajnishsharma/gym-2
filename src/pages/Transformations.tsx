import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Transformations = () => {
   window.scrollTo(0, 0);
  const transformations = [
    {
      name: "Sarah Johnson",
      duration: "6 months",
      weightLoss: "35 lbs",
      story: "Lost 35 pounds and gained incredible strength. The supportive community at FitLife made all the difference in my journey.",
      beforeImg: "T2-A.jpg",
      afterImg: "T2-B.jpg",
      tags: ["Weight Loss", "Strength Training"]
    },
    {
      name: "Mike Chen",
      duration: "4 months", 
      weightLoss: "20 lbs",
      story: "Transformed my body and mindset. The personal trainers helped me achieve goals I never thought possible.",
      beforeImg: "T1-A.jpg",
      afterImg: "T1-B.jpg",
      tags: ["Muscle Gain", "Personal Training"]
    },
    {
      name: "Emma Rodriguez",
      duration: "8 months",
      weightLoss: "40 lbs",
      story: "From couch potato to marathon runner! FitLife's comprehensive programs changed my entire lifestyle.",
      beforeImg: "/api/placeholder/300/400",
      afterImg: "/api/placeholder/300/400",
      tags: ["Cardio", "Endurance"]
    },
    {
      name: "David Thompson",
      duration: "5 months",
      weightLoss: "25 lbs",
      story: "Built muscle and confidence. The nutrition coaching was a game-changer for my transformation.",
      beforeImg: "/api/placeholder/300/400",
      afterImg: "/api/placeholder/300/400",
      tags: ["Nutrition", "Muscle Building"]
    },
    {
      name: "Lisa Park",
      duration: "7 months",
      weightLoss: "30 lbs",
      story: "Overcame health challenges and built the strongest version of myself. Forever grateful for this journey.",
      beforeImg: "/api/placeholder/300/400",
      afterImg: "/api/placeholder/300/400",
      tags: ["Health Recovery", "Strength"]
    },
    {
      name: "Alex Morgan",
      duration: "3 months",
      weightLoss: "15 lbs",
      story: "Quick but sustainable transformation. The group classes kept me motivated and accountable.",
      beforeImg: "/api/placeholder/300/400",
      afterImg: "/api/placeholder/300/400",
      tags: ["Group Classes", "Quick Results"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real People, Real Results
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Be inspired by the incredible transformations of our members who decided to change their lives
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every transformation tells a unique story of dedication, perseverance, and the power of believing in yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((person, index) => (
              <Card key={index} className="card-shadow overflow-hidden">
                <CardContent className="p-0">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img 
                        src={person.beforeImg} 
                        alt={`${person.name} before`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-gray-800 text-white">
                          Before
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={person.afterImg} 
                        alt={`${person.name} after`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary text-primary-foreground">
                          After
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {person.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-primary">
                        {person.duration}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        -{person.weightLoss}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {person.story}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {person.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of members who have transformed their lives at FitLife Gym. Your success story starts today.
            </p>
            <Button asChild className="btn-hero">
              <a href="/join-now">Start Your Journey</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transformations;