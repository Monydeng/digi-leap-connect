import { Link } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Clock,
  BarChart3,
  Settings,
  LogOut,
  Home,
  GraduationCap,
  FileText,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const stats = [
  { title: "Total Learners", value: "5,234", change: "+12%", icon: Users, color: "text-primary" },
  { title: "Active Courses", value: "25", change: "+3", icon: BookOpen, color: "text-accent" },
  { title: "Completions", value: "1,847", change: "+8%", icon: Trophy, color: "text-warning" },
  { title: "Avg. Score", value: "78%", change: "+5%", icon: TrendingUp, color: "text-success" },
];

const recentLearners = [
  { name: "Akol Deng", course: "Computer Basics", progress: 75, avatar: "" },
  { name: "Amira Hassan", course: "Microsoft Word", progress: 45, avatar: "" },
  { name: "James Lado", course: "Internet Safety", progress: 90, avatar: "" },
  { name: "Mary Achol", course: "Email Essentials", progress: 60, avatar: "" },
  { name: "Peter Bol", course: "Microsoft Excel", progress: 30, avatar: "" },
];

const recentActivity = [
  { action: "New registration", user: "Akol Deng", time: "2 minutes ago" },
  { action: "Course completed", user: "Sarah Nyabol", time: "15 minutes ago" },
  { action: "Quiz passed", user: "John Majok", time: "1 hour ago" },
  { action: "New registration", user: "Grace Ayen", time: "2 hours ago" },
  { action: "Certificate issued", user: "James Lado", time: "3 hours ago" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden lg:block">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-display font-bold text-xl">DigiLAP</span>
          </Link>
        </div>

        <nav className="px-4 space-y-2">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
          >
            <BarChart3 className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/admin/learners"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <Users className="h-5 w-5" />
            Learners
          </Link>
          <Link
            to="/admin/courses"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            Courses
          </Link>
          <Link
            to="/admin/quizzes"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <FileText className="h-5 w-5" />
            Quizzes
          </Link>
          <Link
            to="/admin/certificates"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <GraduationCap className="h-5 w-5" />
            Certificates
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <Home className="h-5 w-5" />
            Back to Site
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors w-full">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">
              Welcome back! Here's what's happening with DigiLAP.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Learners */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="font-display">Recent Learner Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentLearners.map((learner, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Avatar>
                        <AvatarImage src={learner.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {learner.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{learner.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {learner.progress}%
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {learner.course}
                        </p>
                        <Progress value={learner.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Learners
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.user}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
