import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Membership = () => {
    const plans = [
        {
            name: "Basic Care",
            price: "299",
            description: "Essential preventive care for individuals.",
            features: [
                "2 Professional Cleanings per year",
                "2 Comprehensive Exams",
                "All Necessary X-Rays",
                "15% Off Basic Procedures"
            ],
            highlight: false
        },
        {
            name: "Premium Smile",
            price: "499",
            description: "Comprehensive care plus cosmetic perks.",
            features: [
                "All Basic Care Features",
                "1 Emergency Limited Exam",
                "One Teeth Whitening Session",
                "20% Off Major Procedures",
                "Fluoride Treatment"
            ],
            highlight: true
        },
        {
            name: "Family Plan",
            price: "899",
            description: "Coverage for up to 4 family members.",
            features: [
                "Include 2 Adults & 2 Children",
                "Shared Preventive Benefits",
                "15% Off All Procedures",
                "Priority Scheduling"
            ],
            highlight: false
        },
    ];

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase">Membership</span>
                    <h1 className="text-5xl font-serif font-bold mt-2 mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        No insurance? No problem. Join our membership club and get superior dental care for a simple annual fee.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-2xl p-8 border ${plan.highlight
                                    ? "border-primary bg-primary/5 shadow-2xl scale-105 z-10"
                                    : "border-border bg-card shadow-soft"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className="text-muted-foreground">/year</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className={`w-full h-12 rounded-full font-bold ${plan.highlight ? "bg-primary text-primary-foreground" : "variant-outline"}`}>
                                Join Now
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-muted/30 p-10 rounded-3xl">
                    <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                    <p className="text-muted-foreground mb-6">Our team is here to help you choose the right plan for your smile.</p>
                    <Button variant="outline" className="rounded-full px-8">Contact Us</Button>
                </div>
            </div>
        </div>
    );
};

export default Membership;
