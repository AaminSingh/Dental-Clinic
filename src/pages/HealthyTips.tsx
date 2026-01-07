import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const HealthyTips = () => {
  const tips = [
    {
      title: "Proper Brushing Technique",
      icon: "🪥",
      tips: [
        "Brush twice daily for 2 minutes each time",
        "Use a soft-bristled toothbrush at a 45-degree angle",
        "Use gentle circular motions, not harsh back-and-forth strokes",
        "Don't forget to brush your tongue to remove bacteria",
        "Replace your toothbrush every 3-4 months",
      ],
    },
    {
      title: "How Often to Floss",
      icon: "🧵",
      tips: [
        "Floss at least once a day, preferably before bedtime",
        "Use about 18 inches of floss, wrapping most around your middle fingers",
        "Gently slide the floss between teeth using a rubbing motion",
        "Curve the floss around each tooth in a C-shape",
        "Don't skip hard-to-reach back teeth",
      ],
    },
    {
      title: "Foods That Improve Teeth Health",
      icon: "🥗",
      tips: [
        "Dairy products (milk, cheese, yogurt) - rich in calcium",
        "Crunchy fruits and vegetables (apples, carrots, celery)",
        "Leafy greens (spinach, kale) - high in vitamins",
        "Nuts and seeds - contain essential minerals",
        "Green and black tea - contain polyphenols that fight bacteria",
        "Water - helps wash away food particles and bacteria",
      ],
    },
    {
      title: "Habits to Avoid",
      icon: "🚫",
      tips: [
        "Smoking and tobacco use - causes staining and gum disease",
        "Excessive sugary drinks and snacks - lead to cavities",
        "Chewing ice or hard candies - can crack teeth",
        "Using teeth as tools to open packages",
        "Grinding or clenching teeth - wear down enamel",
        "Acidic foods and drinks in excess - erode tooth enamel",
      ],
    },
    {
      title: "Care Tips for Braces",
      icon: "🦷",
      tips: [
        "Brush after every meal to prevent food from getting stuck",
        "Use a special orthodontic toothbrush or electric brush",
        "Floss daily using a floss threader or orthodontic floss",
        "Avoid hard, sticky, or chewy foods that can damage braces",
        "Use orthodontic wax for any irritation",
        "Attend all scheduled adjustment appointments",
      ],
    },
    {
      title: "Care After Tooth Extraction",
      icon: "🩹",
      tips: [
        "Bite on gauze for 30-45 minutes to control bleeding",
        "Avoid rinsing or spitting for 24 hours",
        "Apply ice pack to reduce swelling (15 min on, 15 min off)",
        "Eat soft foods and avoid the extraction site while chewing",
        "Don't use straws - suction can dislodge the blood clot",
        "Take prescribed medications as directed",
        "Gently rinse with salt water after 24 hours",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Healthy Teeth Tips
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your guide to maintaining excellent oral health at home
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tips.map((section, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 bg-background border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-primary">
                  {section.title}
                </h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/10 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Need Professional Dental Care?
          </h3>
          <p className="text-muted-foreground mb-6">
            Following these tips at home is important, but regular dental
            check-ups are essential for maintaining optimal oral health.
          </p>
          <a
            href="/booking"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthyTips;
