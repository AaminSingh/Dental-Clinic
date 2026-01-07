import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users, ArrowRight, Star, Check } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { name: "Cosmetic Dentistry", desc: "Veneers, Whitening, & Smile Makeovers" },
    { name: "Invisalign & Ortho", desc: "Clear aligners for a perfect smile" },
    { name: "Implants & Restoration", desc: "Permanent solutions for missing teeth" },
    { name: "General Care", desc: "Cleanings, Exams, & Prevention" },
  ];

  const reviews = [
    { name: "Sarah J.", text: "The most relaxing dental experience I've ever had. Truly a spa-like atmosphere." },
    { name: "Michael R.", text: "Professional, high-tech, and incredibly friendly staff. Highly recommend!" },
    { name: "Emily W.", text: "Finally found a dentist I actually look forward to visiting." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Voted Best Dentist 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground leading-tight">
              Dentistry Done <br />
              <span className="text-primary italic">Differently.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed font-sans">
              Experience the perfect blend of modern technology and spa-like comfort.
              Your smile deserves the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  Book Online
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-foreground/10 hover:bg-muted text-lg w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                    Usesr
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                </div>
                <span>500+ 5-Star Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden md:block"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-t-[10rem] rounded-b-[2rem] rotate-3" />
            <div
              className="absolute inset-0 bg-cover bg-center rounded-t-[10rem] rounded-b-[2rem] shadow-2xl"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
              Comprehensive Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-soft hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-3 text-foreground">{service.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-foreground">
                Stories from <br />our Patients
              </h2>
            </div>
            <Button variant="link" className="text-primary text-lg">Read all reviews &rarr;</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-muted/20 p-8 rounded-2xl">
                <div className="flex text-secondary mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} fill="currentColor" className="w-4 h-4" />)}
                </div>
                <p className="text-lg font-serif italic mb-6 text-foreground/80">"{review.text}"</p>
                <p className="font-bold text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Start Your Journey Today
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
            Book online in less than 60 seconds. No phone tag, just a beautiful smile.
          </p>
          <Link to="/booking">
            <Button size="lg" variant="secondary" className="h-16 px-10 rounded-full text-lg shadow-xl hover:scale-105 transition-transform bg-background text-foreground hover:bg-background/90">
              Schedule Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
