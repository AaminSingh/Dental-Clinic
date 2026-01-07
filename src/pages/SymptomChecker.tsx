import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SymptomChecker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<{
    issue: string;
    description: string;
    recommendation: string;
  } | null>(null);

  const questions = [
    {
      question: "What is your main concern?",
      options: [
        "Tooth pain",
        "Bleeding gums",
        "Bad breath",
        "Tooth sensitivity",
        "Cosmetic concerns",
      ],
    },
    {
      question: "How long have you been experiencing this?",
      options: [
        "Just started (1-2 days)",
        "About a week",
        "Several weeks",
        "Months",
        "Ongoing issue",
      ],
    },
    {
      question: "Rate the severity (for pain/discomfort)",
      options: ["Mild", "Moderate", "Severe", "Very severe", "Not applicable"],
    },
  ];

  const diagnoseIssue = (userAnswers: string[]) => {
    const mainConcern = userAnswers[0];
    const duration = userAnswers[1];
    const severity = userAnswers[2];

    const diagnoses: Record<string, { issue: string; description: string; recommendation: string }> = {
      "Tooth pain": {
        issue: "Possible Cavity or Tooth Decay",
        description:
          "Tooth pain can indicate a cavity, cracked tooth, or infection. If the pain is severe or persistent, it may require immediate attention.",
        recommendation:
          "Schedule an appointment for examination. In the meantime, avoid very hot or cold foods and take over-the-counter pain relief if needed.",
      },
      "Bleeding gums": {
        issue: "Possible Gingivitis or Gum Disease",
        description:
          "Bleeding gums are often a sign of gingivitis (early gum disease) caused by plaque buildup. If left untreated, it can progress to periodontitis.",
        recommendation:
          "Book a professional cleaning and examination. Improve your brushing and flossing routine, and use an antibacterial mouthwash.",
      },
      "Bad breath": {
        issue: "Possible Poor Oral Hygiene or Gum Issues",
        description:
          "Persistent bad breath can be caused by poor oral hygiene, gum disease, dry mouth, or underlying health conditions.",
        recommendation:
          "Schedule a dental check-up to rule out gum disease or cavities. Brush twice daily, floss regularly, and stay hydrated.",
      },
      "Tooth sensitivity": {
        issue: "Possible Enamel Erosion or Exposed Roots",
        description:
          "Tooth sensitivity to hot, cold, or sweet foods may indicate worn enamel, gum recession, or cavities.",
        recommendation:
          "Use toothpaste for sensitive teeth and avoid acidic foods. Schedule an appointment to determine the underlying cause.",
      },
      "Cosmetic concerns": {
        issue: "Cosmetic Dental Options Available",
        description:
          "We offer various cosmetic treatments including teeth whitening, veneers, bonding, and smile designing to enhance your smile.",
        recommendation:
          "Book a consultation to discuss your goals. We'll create a personalized treatment plan for your ideal smile.",
      },
    };

    const diagnosis = diagnoses[mainConcern] || {
      issue: "General Dental Concern",
      description:
        "Based on your symptoms, we recommend a professional examination to determine the exact cause and appropriate treatment.",
      recommendation:
        "Please schedule an appointment with our dentist for a thorough evaluation.",
    };

    if (severity === "Very severe" || severity === "Severe") {
      diagnosis.recommendation =
        "⚠️ URGENT: " +
        diagnosis.recommendation +
        " Consider our emergency services if pain is unbearable.";
    }

    return diagnosis;
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const diagnosis = diagnoseIssue(newAnswers);
      setResult(diagnosis);
    }
  };

  const resetChecker = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Symptom Checker
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to get possible dental issues and
            recommendations
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!result ? (
            <Card className="p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-accent rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-primary mb-6">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <RadioGroup className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                    onClick={() => handleAnswer(option)}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="cursor-pointer flex-1"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>
          ) : (
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🦷</div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {result.issue}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description:</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Recommendation:</h3>
                  <p className="text-foreground">{result.recommendation}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button onClick={resetChecker} variant="outline" className="flex-1">
                    Start Over
                  </Button>
                  <Button asChild className="flex-1">
                    <a href="/booking">Book Appointment</a>
                  </Button>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-6">
                ⚠️ This tool provides general guidance only and is not a substitute
                for professional dental diagnosis.
              </p>
            </Card>
          )}

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-secondary/10 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              This symptom checker is for informational purposes only. Always
              consult with a qualified dentist for accurate diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
