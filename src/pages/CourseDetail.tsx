import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, PlayCircle, Lock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const courseData = {
  1: {
    title: "Computer Basics",
    description: "Learn the fundamentals of using a computer, from hardware components to operating systems and file management. This comprehensive course is perfect for absolute beginners.",
    icon: "💻",
    duration: "4 hours",
    students: 1250,
    rating: 4.8,
    level: "Beginner",
    objectives: [
      "Identify main computer components (CPU, RAM, Storage)",
      "Navigate the Windows operating system",
      "Manage files and folders effectively",
      "Use basic keyboard shortcuts",
      "Install and uninstall programs",
      "Troubleshoot common computer issues",
    ],
    modules: [
      {
        title: "Introduction to Computers",
        lessons: [
          { id: 1, title: "What is a Computer?", duration: "10 min", completed: true },
          { id: 2, title: "Types of Computers", duration: "8 min", completed: true },
          { id: 3, title: "Hardware vs Software", duration: "12 min", completed: false },
        ],
        quiz: { questions: 5, title: "Module 1 Quiz" },
      },
      {
        title: "Computer Hardware",
        lessons: [
          { id: 4, title: "The Central Processing Unit (CPU)", duration: "15 min", completed: false },
          { id: 5, title: "Memory and Storage", duration: "12 min", completed: false },
          { id: 6, title: "Input and Output Devices", duration: "10 min", completed: false },
        ],
        quiz: { questions: 5, title: "Module 2 Quiz" },
      },
      {
        title: "Operating Systems",
        lessons: [
          { id: 7, title: "What is an Operating System?", duration: "10 min", completed: false },
          { id: 8, title: "Using Windows Desktop", duration: "15 min", completed: false },
          { id: 9, title: "File Management", duration: "18 min", completed: false },
        ],
        quiz: { questions: 5, title: "Module 3 Quiz" },
      },
      {
        title: "Essential Skills",
        lessons: [
          { id: 10, title: "Keyboard Shortcuts", duration: "12 min", completed: false },
          { id: 11, title: "Installing Programs", duration: "10 min", completed: false },
          { id: 12, title: "Basic Troubleshooting", duration: "15 min", completed: false },
        ],
        quiz: { questions: 5, title: "Final Assessment" },
      },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[1]; // Using course 1 as demo
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, mod) => acc + mod.lessons.filter((l) => l.completed).length,
    0
  );
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Course Header */}
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-card/80 hover:text-card mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{course.icon}</span>
                  <Badge className="bg-card/20 text-card border-card/30">
                    {course.level}
                  </Badge>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-card mb-4">
                  {course.title}
                </h1>
                <p className="text-card/80 text-lg mb-6">{course.description}</p>

                <div className="flex flex-wrap items-center gap-6 text-card/80">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-warning text-warning" />
                    {course.rating} rating
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {totalLessons} lessons
                  </div>
                </div>
              </div>

              {/* Progress Card */}
              <Card className="lg:sticky lg:top-24 h-fit">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Your Progress</h3>
                  <Progress value={progress} className="h-3 mb-2" />
                  <p className="text-sm text-muted-foreground mb-6">
                    {completedLessons} of {totalLessons} lessons completed
                  </p>
                  <Button className="w-full" size="lg">
                    {progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Modules */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl font-bold mb-6">Course Content</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {course.modules.map((module, index) => (
                    <AccordionItem
                      key={index}
                      value={`module-${index}`}
                      className="border border-border rounded-xl px-4 bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {module.lessons.length} lessons
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <div className="space-y-2 mt-2">
                          {module.lessons.map((lesson) => (
                            <Link
                              key={lesson.id}
                              to={`/courses/${id}/lesson/${lesson.id}`}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle2 className="h-5 w-5 text-success" />
                                ) : (
                                  <PlayCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                                )}
                                <span className={lesson.completed ? "text-muted-foreground" : ""}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </span>
                            </Link>
                          ))}
                          {/* Quiz */}
                          <Link
                            to={`/courses/${id}/quiz/${index + 1}`}
                            className="flex items-center justify-between p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">Q</span>
                              </div>
                              <span className="font-medium text-primary">
                                {module.quiz.title}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {module.quiz.questions} questions
                            </span>
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* What You'll Learn */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-4">
                      What You'll Learn
                    </h3>
                    <ul className="space-y-3">
                      {course.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
