import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      treatment: "Teeth Whitening",
      review:
        "Excellent service! Dr. Kumar did an amazing job with my teeth whitening. The staff was friendly and professional. My smile has never looked better!",
    },
    {
      name: "Rahul Verma",
      rating: 5,
      date: "1 month ago",
      treatment: "Dental Implant",
      review:
        "I was nervous about getting an implant, but the team made me feel so comfortable. The procedure was smooth and the results are fantastic. Highly recommend!",
    },
    {
      name: "Anita Desai",
      rating: 5,
      date: "3 weeks ago",
      treatment: "Root Canal Treatment",
      review:
        "Painless root canal! I couldn't believe it. Dr. Singh is incredibly skilled and gentle. The clinic is clean and uses modern equipment.",
    },
    {
      name: "Vikram Patel",
      rating: 5,
      date: "2 months ago",
      treatment: "Invisalign",
      review:
        "Started my Invisalign journey here and couldn't be happier. The treatment plan was explained clearly, and I can already see improvements. Worth every penny!",
    },
    {
      name: "Neha Gupta",
      rating: 5,
      date: "1 week ago",
      treatment: "General Check-up",
      review:
        "Very thorough examination and cleaning. They take time to explain everything and don't push unnecessary treatments. Transparent pricing and great care.",
    },
    {
      name: "Arjun Reddy",
      rating: 5,
      date: "3 months ago",
      treatment: "Dental Veneers",
      review:
        "My smile transformation is unbelievable! The veneers look so natural. Everyone asks me what I did to my teeth. Best decision ever!",
    },
    {
      name: "Kavita Menon",
      rating: 5,
      date: "2 weeks ago",
      treatment: "Emergency Care",
      review:
        "Had a dental emergency on a weekend and they saw me immediately. Quick, effective treatment and the pain relief was instant. Thank you!",
    },
    {
      name: "Sanjay Kumar",
      rating: 5,
      date: "1 month ago",
      treatment: "Braces",
      review:
        "My daughter got her braces here. The orthodontist is patient and great with kids. She's not scared to visit anymore! Excellent pediatric care.",
    },
  ];

  const stats = [
    { number: "2000+", label: "Happy Patients" },
    { number: "4.9", label: "Average Rating" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Patient Reviews
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our patients have to say
            about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-secondary text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Treatment */}
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium mb-3">
                {review.treatment}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.review}"
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/10 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Experience World-Class Dental Care?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied patients who trust us with their smiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="inline-block bg-background text-foreground border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Find us on Google Reviews
          </p>
          <div className="inline-flex items-center gap-2 text-2xl">
            <span className="font-bold text-primary">4.9</span>
            <span className="text-secondary">★★★★★</span>
            <span className="text-muted-foreground text-sm">(500+ reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
