import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-heading font-bold text-foreground">
                Numero<span className="text-primary">logy</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern numerology insights for clarity, growth, and empowered decisions.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              {[{ label: "Home", path: "/" }, { label: "Free Analysis", path: "/free-analysis" }, { label: "Consultation", path: "/consultation" }].map((l) => (
                <Link key={l.path} to={l.path} className="block text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Learn</h4>
            <div className="space-y-2">
              {[{ label: "Learning Hub", path: "/learning" }, { label: "About Us", path: "/about" }].map((l) => (
                <Link key={l.path} to={l.path} className="block text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Privacy</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We respect your privacy. No spam, ever. Your data is secure and confidential.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Numerology Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
