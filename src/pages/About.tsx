import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About DentalCare
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building healthier smiles and happier lives through exceptional dental care
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded with a vision to revolutionize dental care, DentalCare has been serving 
              the community for over 15 years. What started as a small practice has grown into 
              a comprehensive dental center, equipped with state-of-the-art technology and 
              staffed by experienced professionals.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our journey has been guided by one simple principle: putting patients first. 
              Every treatment plan, every interaction, and every decision we make is centered 
              around providing you with the best possible care in a comfortable, welcoming environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to be recognized as one of the leading dental care providers, 
              trusted by thousands of families for their oral health needs.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img 
              src={clinicImage} 
              alt="Modern dental clinic interior" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-border hover:shadow-soft transition-all">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered dental care using the latest technology 
                and techniques, while maintaining the highest standards of safety and comfort.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in dental care, known for excellence, innovation, 
                and compassionate service that transforms lives one smile at a time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, compassion, excellence, and continuous improvement guide everything we do. 
                We treat every patient like family and every smile as our responsibility.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-muted/50 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">10K+</p>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-muted-foreground">Expert Dentists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
