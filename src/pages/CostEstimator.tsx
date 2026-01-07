import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CostEstimator = () => {
  const [selectedService, setSelectedService] = useState("");
  const [complexity, setComplexity] = useState("basic");
  const [estimatedCost, setEstimatedCost] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const services = {
    cleaning: { name: "Teeth Cleaning", basic: [1500, 2500], advanced: [2500, 4000] },
    whitening: { name: "Teeth Whitening", basic: [5000, 8000], advanced: [8000, 12000] },
    filling: { name: "Dental Filling", basic: [1000, 2000], advanced: [2000, 4000] },
    rct: { name: "Root Canal Treatment", basic: [5000, 8000], advanced: [8000, 15000] },
    crown: { name: "Crown & Bridges", basic: [5000, 10000], advanced: [10000, 20000] },
    implant: { name: "Dental Implant", basic: [25000, 35000], advanced: [35000, 50000] },
    braces: { name: "Braces", basic: [30000, 50000], advanced: [50000, 80000] },
    invisalign: { name: "Invisalign", basic: [60000, 100000], advanced: [100000, 150000] },
    extraction: { name: "Tooth Extraction", basic: [1000, 2000], advanced: [2000, 5000] },
    veneer: { name: "Dental Veneer", basic: [8000, 12000], advanced: [12000, 20000] },
  };

  const handleEstimate = () => {
    if (selectedService && services[selectedService as keyof typeof services]) {
      const service = services[selectedService as keyof typeof services];
      const costs = complexity === "basic" ? service.basic : service.advanced;
      setEstimatedCost({ min: costs[0], max: costs[1] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Online Cost Estimator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an estimated cost for your dental treatment. Final costs may vary
            based on examination.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            {/* Service Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">
                Select Treatment
              </Label>
              <RadioGroup
                value={selectedService}
                onValueChange={setSelectedService}
                className="grid md:grid-cols-2 gap-4"
              >
                {Object.entries(services).map(([key, service]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <RadioGroupItem value={key} id={key} />
                    <Label htmlFor={key} className="cursor-pointer">
                      {service.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator className="my-8" />

            {/* Complexity Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">
                Treatment Complexity
              </Label>
              <RadioGroup
                value={complexity}
                onValueChange={setComplexity}
                className="flex flex-col gap-4"
              >
                <div className="flex items-start space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="basic" id="basic" />
                  <div>
                    <Label htmlFor="basic" className="cursor-pointer font-semibold">
                      Basic
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Standard treatment with regular materials
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <div>
                    <Label htmlFor="advanced" className="cursor-pointer font-semibold">
                      Advanced
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Complex case or premium materials
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Estimate Button */}
            <Button
              onClick={handleEstimate}
              disabled={!selectedService}
              className="w-full"
              size="lg"
            >
              Get Cost Estimate
            </Button>

            {/* Result */}
            {estimatedCost && (
              <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Estimated Cost Range
                </h3>
                <p className="text-3xl font-bold text-primary">
                  ₹{estimatedCost.min.toLocaleString()} - ₹
                  {estimatedCost.max.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  * This is an approximate range. Actual cost will be determined
                  after examination by our dentist.
                </p>
              </div>
            )}
          </Card>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              💡 For accurate pricing and personalized treatment plan, please{" "}
              <a href="/booking" className="text-primary hover:underline">
                book a consultation
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
