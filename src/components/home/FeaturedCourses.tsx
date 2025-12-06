import { Link } from "react-router-dom";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "Computer Basics",
    description: "Learn the fundamentals of using a computer, from hardware to operating systems.",
    icon: "💻",
    duration: "4 hours",
    students: 1250,
    rating: 4.8,
    level: "Beginner",
    lessons: 12,
  },
  {
    id: 2,
    title: "Internet & Web Browsing",
    description: "Navigate the internet safely and effectively with essential browsing skills.",
    icon: "🌐",
    duration: "3 hours",
    students: 980,
    rating: 4.7,
    level: "Beginner",
    lessons: 8,
  },
  {
    id: 3,
    title: "Email Essentials",
    description: "Master email communication for personal and professional use.",
    icon: "📧",
    duration: "2.5 hours",
    students: 856,
    rating: 4.9,
    level: "Beginner",
    lessons: 6,
  },
  {
    id: 4,
    title: "Microsoft Word",
    description: "Create professional documents using Microsoft Word's powerful features.",
    icon: "📝",
    duration: "5 hours",
    students: 1100,
    rating: 4.6,
    level: "Intermediate",
    lessons: 15,
  },
  {
    id: 5,
    title: "Microsoft Excel",
    description: "Learn spreadsheets, formulas, and data analysis with Excel.",
    icon: "📊",
    duration: "6 hours",
    students: 890,
    rating: 4.7,
    level: "Intermediate",
    lessons: 18,
  },
  {
    id: 6,
    title: "Online Safety & Security",
    description: "Protect yourself online with essential cybersecurity knowledge.",
    icon: "🔒",
    duration: "3 hours",
    students: 720,
    rating: 4.9,
    level: "Beginner",
    lessons: 10,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Courses
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Build Your Digital Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive courses designed for South Sudanese learners, from complete beginners to advanced users.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                {/* Icon & Level */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{course.icon}</span>
                  <Badge
                    variant={course.level === "Beginner" ? "secondary" : "default"}
                    className="text-xs"
                  >
                    {course.level}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    {course.rating}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link to={`/courses/${course.id}`}>
                    Start Course
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/courses">
              View All Courses
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
