import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Clock, Users, Star, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const allCourses = [
  {
    id: 1,
    title: "Computer Basics",
    description: "Learn the fundamentals of using a computer, from hardware components to operating systems and file management.",
    icon: "💻",
    duration: "4 hours",
    students: 1250,
    rating: 4.8,
    level: "Beginner",
    lessons: 12,
    category: "basics",
  },
  {
    id: 2,
    title: "Internet & Web Browsing",
    description: "Navigate the internet safely and effectively with essential browsing skills and search techniques.",
    icon: "🌐",
    duration: "3 hours",
    students: 980,
    rating: 4.7,
    level: "Beginner",
    lessons: 8,
    category: "basics",
  },
  {
    id: 3,
    title: "Email Essentials",
    description: "Master email communication for personal and professional use, including etiquette and organization.",
    icon: "📧",
    duration: "2.5 hours",
    students: 856,
    rating: 4.9,
    level: "Beginner",
    lessons: 6,
    category: "communication",
  },
  {
    id: 4,
    title: "Microsoft Word",
    description: "Create professional documents using Microsoft Word's powerful formatting and editing features.",
    icon: "📝",
    duration: "5 hours",
    students: 1100,
    rating: 4.6,
    level: "Intermediate",
    lessons: 15,
    category: "office",
  },
  {
    id: 5,
    title: "Microsoft Excel",
    description: "Learn spreadsheets, formulas, charts, and data analysis with Microsoft Excel.",
    icon: "📊",
    duration: "6 hours",
    students: 890,
    rating: 4.7,
    level: "Intermediate",
    lessons: 18,
    category: "office",
  },
  {
    id: 6,
    title: "Microsoft PowerPoint",
    description: "Design engaging presentations with slides, animations, and multimedia content.",
    icon: "📽️",
    duration: "4 hours",
    students: 720,
    rating: 4.5,
    level: "Intermediate",
    lessons: 12,
    category: "office",
  },
  {
    id: 7,
    title: "Online Safety & Security",
    description: "Protect yourself online with essential cybersecurity knowledge and safe browsing practices.",
    icon: "🔒",
    duration: "3 hours",
    students: 720,
    rating: 4.9,
    level: "Beginner",
    lessons: 10,
    category: "safety",
  },
  {
    id: 8,
    title: "Social Media Basics",
    description: "Learn to use social media platforms responsibly and effectively for personal and business use.",
    icon: "📱",
    duration: "2.5 hours",
    students: 650,
    rating: 4.6,
    level: "Beginner",
    lessons: 8,
    category: "communication",
  },
  {
    id: 9,
    title: "Digital Photography",
    description: "Capture and edit photos using your smartphone or digital camera with professional techniques.",
    icon: "📸",
    duration: "4 hours",
    students: 480,
    rating: 4.7,
    level: "Intermediate",
    lessons: 10,
    category: "creative",
  },
  {
    id: 10,
    title: "Online Banking & Finance",
    description: "Manage your finances digitally with mobile banking, online payments, and financial apps.",
    icon: "💳",
    duration: "3 hours",
    students: 540,
    rating: 4.8,
    level: "Intermediate",
    lessons: 8,
    category: "safety",
  },
  {
    id: 11,
    title: "Job Searching Online",
    description: "Find employment opportunities using online job portals, LinkedIn, and digital networking.",
    icon: "💼",
    duration: "2 hours",
    students: 390,
    rating: 4.5,
    level: "Beginner",
    lessons: 6,
    category: "productivity",
  },
  {
    id: 12,
    title: "Cloud Storage & Backup",
    description: "Store and access your files anywhere using Google Drive, OneDrive, and cloud services.",
    icon: "☁️",
    duration: "2 hours",
    students: 420,
    rating: 4.6,
    level: "Beginner",
    lessons: 5,
    category: "productivity",
  },
];

const categories = [
  { id: "all", label: "All Courses" },
  { id: "basics", label: "Basics" },
  { id: "office", label: "Office Tools" },
  { id: "communication", label: "Communication" },
  { id: "safety", label: "Safety" },
  { id: "productivity", label: "Productivity" },
  { id: "creative", label: "Creative" },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-card/20 text-card border-card/30">
              <BookOpen className="h-3 w-3 mr-1" />
              {allCourses.length} Courses Available
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4">
              Explore Our Courses
            </h1>
            <p className="text-card/80 text-lg max-w-2xl mx-auto mb-8">
              Comprehensive digital literacy courses designed for South Sudanese learners at every level.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-12 h-12 bg-card border-0 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{course.icon}</span>
                        <Badge
                          variant={course.level === "Beginner" ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {course.level}
                        </Badge>
                      </div>

                      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
