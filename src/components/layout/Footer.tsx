import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-display font-bold text-xl">DigiLAP</span>
            </div>
            <p className="text-card/70 text-sm leading-relaxed mb-6">
              Empowering South Sudanese citizens with essential digital literacy skills for the modern world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-card/10 rounded-lg hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-card/10 rounded-lg hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-card/10 rounded-lg hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Courses", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(" ", "-")}`} className="text-card/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-3">
              {["Computer Basics", "Internet Safety", "Microsoft Office", "Email Essentials"].map((course) => (
                <li key={course}>
                  <Link to="/courses" className="text-card/70 hover:text-primary transition-colors text-sm">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-card/70 text-sm">
                  University of Juba, Juba, South Sudan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@digilap.ss" className="text-card/70 hover:text-primary transition-colors text-sm">
                  info@digilap.ss
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-card/70 text-sm">+211 XXX XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/60 text-sm">
            © {new Date().getFullYear()} DigiLAP. University of Juba Graduation Project.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-card/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-card/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
