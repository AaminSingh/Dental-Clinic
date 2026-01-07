import { BeforeAfter } from "@/components/BeforeAfter";
import { motion } from "framer-motion";

const SmileGallery = () => {
    // Placeholder images - using placeholder.com or similar if local assets aren't available would be ideal, 
    // but for now we'll assume we might not have real before/afters.
    // I will use colors or text placeholders if I can't find images, but let's try to use generic nature/dental URLs if possible?
    // Actually, I'll use the hero image for both but modify one with a filter for demonstration, or use standard unsplash IDs.

    const cases = [
        {
            id: 1,
            title: "Teeth Whitening",
            description: "Complete brightenining in just one session.",
            before: "https://images.unsplash.com/photo-1588776813186-6f3fd4543d52?q=80&w=800&auto=format&fit=crop", // Dental close up
            after: "https://images.unsplash.com/photo-1606811841689-230391b42b16?q=80&w=800&auto=format&fit=crop" // Smiling person
        },
        {
            id: 2,
            title: "Veneers Transformation",
            description: "Correcting alignment and shape.",
            before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
            after: "https://images.unsplash.com/photo-1598256989494-0ba39676dfb0?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase">Results</span>
                    <h1 className="text-5xl font-serif font-bold mt-2 mb-6">Real Results, Real Smiles</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        See the life-changing transformations our patients have experienced.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {cases.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center">
                                <h2 className="text-3xl font-serif font-bold mb-2">{item.title}</h2>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>

                            <BeforeAfter
                                beforeImage={item.before}
                                afterImage={item.after}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmileGallery;
