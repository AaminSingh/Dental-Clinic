import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Activity, 
  Sparkles, 
  Smile, 
  Building2, 
  Baby, 
  Heart, 
  Scissors,
  Shield,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Root Canal Treatment",
      duration: "1-2 hours",
      description: "Pain-free root canal therapy using advanced rotary endodontics. We save your natural tooth while eliminating infection and discomfort with precision and care.",
      features: ["Digital X-rays", "Pain-free procedure", "Single visit option", "High success rate"]
    },
    {
      icon: Sparkles,
      title: "Teeth Cleaning & Whitening",
      duration: "45-60 minutes",
      description: "Professional teeth cleaning and advanced whitening treatments for a brighter, healthier smile. Remove stains and achieve the radiant smile you deserve.",
      features: ["Professional scaling", "Laser whitening", "Stain removal", "Lasting results"]
    },
    {
      icon: Building2,
      title: "Dental Implants",
      duration: "Multiple visits",
      description: "Permanent tooth replacement solution that looks, feels, and functions like natural teeth. High-quality titanium implants with excellent success rates.",
      features: ["Titanium implants", "Natural appearance", "Permanent solution", "Bone preservation"]
    },
    {
      icon: Smile,
      title: "Braces & Invisalign",
      duration: "12-24 months",
      description: "Straighten your teeth with traditional braces or clear Invisalign aligners. Customized orthodontic treatment plans for perfect alignment.",
      features: ["Metal & ceramic braces", "Clear aligners", "Regular monitoring", "Beautiful results"]
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      duration: "30-45 minutes",
      description: "Gentle, specialized dental care for children in a fun, friendly environment. We make dental visits enjoyable while ensuring optimal oral health.",
      features: ["Child-friendly approach", "Preventive care", "Education programs", "Gentle treatments"]
    },
    {
      icon: Heart,
      title: "Gum Treatment",
      duration: "Varies",
      description: "Comprehensive periodontal care to treat and prevent gum disease. Advanced treatments to restore gum health and prevent tooth loss.",
      features: ["Deep cleaning", "Laser therapy", "Gum surgery", "Maintenance plans"]
    },
    {
      icon: Scissors,
      title: "Crowns & Bridges",
      duration: "2-3 visits",
      description: "High-quality dental crowns and bridges to restore damaged teeth or replace missing ones. Custom-made for perfect fit and natural appearance.",
      features: ["Porcelain crowns", "Natural look", "Durable materials", "Perfect fit"]
    },
    {
      icon: Shield,
      title: "Smile Designing",
      duration: "Multiple visits",
      description: "Complete smile makeover combining various cosmetic procedures. Transform your smile with veneers, whitening, and contouring.",
      features: ["Digital smile preview", "Custom veneers", "Comprehensive care", "Natural results"]
    },
    {
      icon: Clock,
      title: "Emergency Services",
      duration: "Immediate",
      description: "24/7 emergency dental care for urgent situations. Immediate relief for dental pain, accidents, and emergencies.",
      features: ["24/7 availability", "Immediate relief", "Experienced staff", "Advanced care"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental care solutions using the latest technology and techniques. 
            From routine check-ups to complex procedures, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-soft transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button variant="outline" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Healthy Teeth Tips Section */}
        <div className="my-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Keep Your Teeth Healthy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential tips to maintain excellent oral health between dental visits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🪥",
                title: "Proper Brushing",
                tips: [
                  "Brush twice daily for 2 minutes",
                  "Use soft-bristled brush at 45° angle",
                  "Gentle circular motions",
                  "Don't forget your tongue",
                ]
              },
              {
                icon: "🧵",
                title: "Daily Flossing",
                tips: [
                  "Floss at least once daily",
                  "Use about 18 inches of floss",
                  "Curve around each tooth",
                  "Reach back teeth too",
                ]
              },
              {
                icon: "🥗",
                title: "Healthy Foods",
                tips: [
                  "Dairy products for calcium",
                  "Crunchy fruits & vegetables",
                  "Leafy greens for vitamins",
                  "Drink plenty of water",
                ]
              },
              {
                icon: "🚫",
                title: "Avoid Habits",
                tips: [
                  "No smoking or tobacco",
                  "Limit sugary drinks",
                  "Don't chew ice",
                  "Avoid teeth grinding",
                ]
              },
              {
                icon: "🦷",
                title: "Braces Care",
                tips: [
                  "Brush after every meal",
                  "Use orthodontic floss",
                  "Avoid hard/sticky foods",
                  "Attend all appointments",
                ]
              },
              {
                icon: "🩹",
                title: "After Extraction",
                tips: [
                  "Bite gauze for 30-45 min",
                  "Apply ice to reduce swelling",
                  "Eat soft foods",
                  "No straws for 24 hours",
                ]
              },
            ].map((section, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{section.icon}</span>
                  <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/healthy-tips">
              <Button variant="outline">View All Dental Tips</Button>
            </Link>
          </div>
        </div>

        {/* Patient Reviews Section */}
        <div className="my-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real patients who trusted us with their smiles
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { number: "2000+", label: "Happy Patients" },
              { number: "4.9", label: "Average Rating" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                treatment: "Teeth Whitening",
                rating: 5,
                review: "Excellent service! Dr. Kumar did an amazing job with my teeth whitening. The staff was friendly and professional. My smile has never looked better!"
              },
              {
                name: "Rahul Verma",
                treatment: "Dental Implant",
                rating: 5,
                review: "I was nervous about getting an implant, but the team made me feel so comfortable. The procedure was smooth and the results are fantastic."
              },
              {
                name: "Anita Desai",
                treatment: "Root Canal",
                rating: 5,
                review: "Painless root canal! I couldn't believe it. Dr. Singh is incredibly skilled and gentle. The clinic uses modern equipment."
              },
              {
                name: "Vikram Patel",
                treatment: "Invisalign",
                rating: 5,
                review: "Started my Invisalign journey here and couldn't be happier. The treatment plan was explained clearly, and I can already see improvements."
              },
              {
                name: "Neha Gupta",
                treatment: "General Check-up",
                rating: 5,
                review: "Very thorough examination and cleaning. They take time to explain everything and don't push unnecessary treatments. Great care!"
              },
              {
                name: "Arjun Reddy",
                treatment: "Dental Veneers",
                rating: 5,
                review: "My smile transformation is unbelievable! The veneers look so natural. Everyone asks me what I did to my teeth. Best decision ever!"
              },
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-secondary">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium mb-3">
                  {review.treatment}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.review}"
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline">View All Reviews</Button>
            </Link>
          </div>
        </div>

        <Separator className="my-12" />

        {/* CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Not sure which service you need?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a consultation with our expert dentists. We'll assess your needs and 
            recommend the best treatment plan for your oral health.
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
