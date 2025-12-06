import { GraduationCap, Shield, Users, Trophy, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert-Led Courses",
    description: "Learn from University of Juba graduates with real-world experience.",
  },
  {
    icon: Shield,
    title: "Free & Accessible",
    description: "All courses are completely free and accessible to every South Sudanese citizen.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join a supportive community of learners on the same journey.",
  },
  {
    icon: Trophy,
    title: "Earn Certificates",
    description: "Get recognized certificates upon completing each course.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access courses anytime, anywhere, and learn at your own speed.",
  },
  {
    icon: Globe,
    title: "Local Context",
    description: "Content designed specifically for South Sudanese learners and needs.",
  },
];

const WhyDigiLAP = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-card mb-4">
            Why Choose DigiLAP?
          </h2>
          <p className="text-card/80 text-lg">
            Designed with South Sudan in mind, our platform makes digital literacy accessible to everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-card/20 hover:bg-card/20 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-card mb-2">
                {feature.title}
              </h3>
              <p className="text-card/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDigiLAP;
