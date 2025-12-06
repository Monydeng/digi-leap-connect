import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-primary rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-card rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-card rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-card/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join thousands of South Sudanese learners who are building their digital future with DigiLAP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" asChild>
                <Link to="/register">
                  Get Started for Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="heroOutline" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
