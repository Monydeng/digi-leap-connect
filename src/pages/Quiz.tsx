import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Clock, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";

const quizQuestions = [
  {
    id: 1,
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit",
      "Core Processing Unit",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which of the following is an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speakers"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "What is RAM used for?",
    options: [
      "Permanent storage",
      "Temporary memory while computer is on",
      "Connecting to the internet",
      "Playing audio",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Which is an example of an operating system?",
    options: ["Microsoft Word", "Google Chrome", "Windows 10", "Adobe Photoshop"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "What is the main function of an operating system?",
    options: [
      "Create documents",
      "Manage computer hardware and software",
      "Browse the internet",
      "Play games",
    ],
    correctAnswer: 1,
  },
];

const Quiz = () => {
  const { id, quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(answerIndex);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetry = () => {
    setAnswers(new Array(quizQuestions.length).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const correctAnswers = answers.filter(
    (answer, index) => answer === quizQuestions[index].correctAnswer
  ).length;

  const percentage = (correctAnswers / quizQuestions.length) * 100;
  const passed = percentage >= 70;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="overflow-hidden">
              <div
                className={`p-8 text-center ${
                  passed ? "bg-success" : "bg-destructive"
                }`}
              >
                {passed ? (
                  <CheckCircle2 className="h-16 w-16 text-success-foreground mx-auto mb-4" />
                ) : (
                  <XCircle className="h-16 w-16 text-destructive-foreground mx-auto mb-4" />
                )}
                <h1 className="font-display text-3xl font-bold text-card mb-2">
                  {passed ? "Congratulations!" : "Keep Practicing!"}
                </h1>
                <p className="text-card/80">
                  {passed
                    ? "You have passed the quiz successfully."
                    : "You need 70% to pass. Try again!"}
                </p>
              </div>

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {percentage.toFixed(0)}%
                  </div>
                  <p className="text-muted-foreground">
                    {correctAnswers} out of {quizQuestions.length} correct
                  </p>
                </div>

                {/* Review Answers */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold">Review Your Answers</h3>
                  {quizQuestions.map((question, index) => (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg border ${
                        answers[index] === question.correctAnswer
                          ? "border-success bg-success/5"
                          : "border-destructive bg-destructive/5"
                      }`}
                    >
                      <p className="font-medium mb-2">{question.question}</p>
                      <p className="text-sm">
                        Your answer:{" "}
                        <span
                          className={
                            answers[index] === question.correctAnswer
                              ? "text-success"
                              : "text-destructive"
                          }
                        >
                          {question.options[answers[index] ?? 0]}
                        </span>
                      </p>
                      {answers[index] !== question.correctAnswer && (
                        <p className="text-sm text-success">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1" onClick={handleRetry}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                  <Button className="flex-1" asChild>
                    <Link to={`/courses/${id}`}>Continue Course</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link
            to={`/courses/${id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>

          <Card>
            <CardContent className="p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {progress.toFixed(0)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <h2 className="font-display text-xl font-semibold mb-6">
                {question.question}
              </h2>

              {/* Options */}
              <RadioGroup
                value={answers[currentQuestion]?.toString() ?? ""}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                      answers[currentQuestion] === index
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer font-normal"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                {currentQuestion === quizQuestions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={answers.includes(null)}
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === null}
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
