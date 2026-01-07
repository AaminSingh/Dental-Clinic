import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Reach out to us for appointments, inquiries, or emergency care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h2>
            
            <Card className="border-border hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Dental Street<br />
                      Medical Center Building<br />
                      City, State 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">
                      Main: +1 (555) 123-4567<br />
                      Emergency: +1 (555) 987-6543<br />
                      Toll Free: 1-800-DENTAL-1
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">
                      General: info@dentalcare.com<br />
                      Appointments: booking@dentalcare.com<br />
                      Support: support@dentalcare.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Working Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-secondary font-medium pt-2">
                        Emergency Care: 24/7 Available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Find Us</h2>
            <Card className="border-border overflow-hidden h-[600px]">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316db0b3f1%3A0x6e7a5a8b3b3b3b3b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DentalCare Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-secondary/10 border-2 border-secondary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Dental Emergency?
          </h3>
          <p className="text-muted-foreground mb-4">
            We provide 24/7 emergency dental care. Don't wait - call us immediately for urgent assistance.
          </p>
          <a href="tel:+15559876543">
            <p className="text-3xl font-bold text-secondary">+1 (555) 987-6543</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
