import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-card/20 text-card border-card/30">
              About DigiLAP
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-card mb-6">
              Empowering South Sudan Through Digital Literacy
            </h1>
            <p className="text-card/80 text-lg max-w-3xl mx-auto">
              DigiLAP is a graduation project developed by students from the University of Juba's
              School of Computer Science and Information Technology, Department of Information Technology.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide accessible, high-quality digital literacy education to every South Sudanese
                    citizen, bridging the digital divide and empowering communities with essential
                    technology skills for the 21st century.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A digitally literate South Sudan where every citizen has the knowledge and skills
                    to participate fully in the digital economy, access online services, and leverage
                    technology for personal and national development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                South Sudan faces one of the lowest digital literacy rates in the world. Many citizens
                lack basic computer skills, limiting their access to online education, job opportunities,
                government services, and financial inclusion.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "< 5%", label: "Internet Penetration" },
                  { value: "Low", label: "Digital Skills" },
                  { value: "Limited", label: "Tech Access" },
                  { value: "Growing", label: "Demand" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Developed by dedicated IT students from the University of Juba, committed to making
                a positive impact in our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Team Member 1", role: "Lead Developer" },
                { name: "Team Member 2", role: "UI/UX Designer" },
                { name: "Team Member 3", role: "Backend Developer" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-display font-semibold text-lg">{member.name}</h4>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* University */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">University of Juba</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              School of Computer Science and Information Technology<br />
              Department of Information Technology<br />
              Graduation Project 2024
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
