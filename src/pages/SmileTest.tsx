import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const SmileTest = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    whiteness: number;
    alignment: number;
    suggestions: string[];
  } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeSmile = () => {
    if (!uploadedImage) return;

    setAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const whiteness = Math.floor(Math.random() * 30) + 60;
      const alignment = Math.floor(Math.random() * 30) + 65;

      const suggestions: string[] = [];

      if (whiteness < 75) {
        suggestions.push(
          "Professional teeth whitening could brighten your smile by 2-4 shades"
        );
      }

      if (alignment < 80) {
        suggestions.push(
          "Consider orthodontic treatment (braces or Invisalign) for better alignment"
        );
      }

      if (whiteness >= 75 && alignment >= 80) {
        suggestions.push(
          "Your smile looks great! Regular cleaning and maintenance will keep it that way"
        );
      } else {
        suggestions.push(
          "Dental veneers could provide a comprehensive smile makeover"
        );
      }

      suggestions.push(
        "Schedule a consultation for a personalized treatment plan"
      );

      setResults({ whiteness, alignment, suggestions });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Virtual Smile Test
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your photo and get AI-powered suggestions for whitening and
            alignment improvements
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Upload Your Photo
            </h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="photo" className="text-base mb-2 block">
                  Choose a clear photo showing your smile
                </Label>
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="cursor-pointer"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Max file size: 5MB. Supported formats: JPG, PNG, WEBP
                </p>
              </div>

              {uploadedImage && (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden border">
                    <img
                      src={uploadedImage}
                      alt="Your smile"
                      className="w-full h-auto"
                    />
                  </div>

                  <Button
                    onClick={analyzeSmile}
                    disabled={analyzing}
                    className="w-full"
                    size="lg"
                  >
                    {analyzing ? "Analyzing Your Smile..." : "Analyze My Smile"}
                  </Button>
                </div>
              )}

              {!uploadedImage && (
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-muted-foreground">
                    Upload a photo to get started
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Results Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Analysis Results
            </h2>

            {!results ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🦷</div>
                <p className="text-muted-foreground">
                  Upload and analyze your photo to see personalized recommendations
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Scores */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Whiteness Score</span>
                      <span className="font-bold text-primary">
                        {results.whiteness}%
                      </span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${results.whiteness}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Alignment Score</span>
                      <span className="font-bold text-primary">
                        {results.alignment}%
                      </span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-3">
                      <div
                        className="bg-secondary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${results.alignment}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">
                    Personalized Suggestions:
                  </h3>
                  <ul className="space-y-2">
                    {results.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button asChild className="w-full" size="lg">
                  <a href="/booking">Book Consultation</a>
                </Button>
              </div>
            )}

            <p className="text-xs text-center text-muted-foreground mt-6">
              ⚠️ This is a simulated analysis for demonstration purposes. Book a
              consultation for professional assessment.
            </p>
          </Card>
        </div>

        {/* Tips */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-6 bg-secondary/10">
            <h3 className="font-semibold text-lg mb-3">
              Tips for Best Results:
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>✓ Use natural lighting</li>
              <li>✓ Show your full smile</li>
              <li>✓ Face the camera directly</li>
              <li>✓ Keep your lips relaxed</li>
              <li>✓ Avoid filters or edits</li>
              <li>✓ Use a recent photo</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmileTest;
