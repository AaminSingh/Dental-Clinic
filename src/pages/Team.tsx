import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Team = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Orthodontist",
      experience: "15+ years",
      education: "DDS, Harvard School of Dental Medicine",
      expertise: ["Braces", "Invisalign", "Smile Design"],
      description: "Specialist in orthodontics with expertise in creating beautiful, aligned smiles using the latest techniques."
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Endodontist",
      experience: "12+ years",
      education: "DMD, University of Pennsylvania",
      expertise: ["Root Canal", "Dental Surgery", "Pain Management"],
      description: "Expert in root canal therapy and endodontic treatments, focused on saving natural teeth with minimal discomfort."
    },
    {
      name: "Dr. Emily Rodriguez",
      specialization: "Cosmetic Dentist",
      experience: "10+ years",
      education: "DDS, UCLA School of Dentistry",
      expertise: ["Veneers", "Whitening", "Smile Makeover"],
      description: "Passionate about transforming smiles through cosmetic dentistry and advanced aesthetic procedures."
    },
    {
      name: "Dr. James Wilson",
      specialization: "Pediatric Dentist",
      experience: "14+ years",
      education: "DDS, Columbia University",
      expertise: ["Children's Dentistry", "Preventive Care", "Behavioral Management"],
      description: "Dedicated to providing gentle, compassionate dental care for children in a fun and friendly environment."
    },
    {
      name: "Dr. Priya Patel",
      specialization: "Periodontist",
      experience: "11+ years",
      education: "DMD, Boston University",
      expertise: ["Gum Treatment", "Implants", "Bone Grafting"],
      description: "Specialist in periodontal health and dental implants, committed to preserving and restoring gum health."
    },
    {
      name: "Dr. David Kim",
      specialization: "General Dentist",
      experience: "13+ years",
      education: "DDS, NYU College of Dentistry",
      expertise: ["General Care", "Crowns", "Preventive Dentistry"],
      description: "Comprehensive dental care provider with a focus on preventive dentistry and patient education."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced team of dental professionals is dedicated to providing 
            exceptional care with warmth and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-soft transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center text-4xl text-primary-foreground font-bold mb-4 mx-auto">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.specialization}</p>
                </div>

                {/* Experience Badge */}
                <div className="flex justify-center mb-4">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {doctor.experience} Experience
                  </Badge>
                </div>

                {/* Education */}
                <div className="flex items-start gap-2 mb-4 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{doctor.education}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {doctor.description}
                </p>

                {/* Expertise */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    Expertise:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-muted/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Why Our Team Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-muted-foreground">Patient Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
