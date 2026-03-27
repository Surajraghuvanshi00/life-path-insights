import { useState } from "react";
import { Sparkles } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import LearningSection from "@/components/LearningSection";
import FinalCTA from "@/components/FinalCTA";
import ConsultationPopup from "@/components/ConsultationPopup";

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection onOpenPopup={() => setPopupOpen(true)} />
      <ProblemSection />
      <HowItWorks />
      <BenefitsSection />
      <TrustSection />
      <LearningSection onOpenPopup={() => setPopupOpen(true)} />
      <FinalCTA onOpenPopup={() => setPopupOpen(true)} />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Numerology Insights. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/90 backdrop-blur-md border-t border-border md:hidden">
        <button
          onClick={() => setPopupOpen(true)}
          className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base glow-primary flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Get Free Analysis
        </button>
      </div>

      <ConsultationPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default Index;
