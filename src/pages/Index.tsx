import { useState } from "react";
import { Link } from "react-router-dom";
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

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/90 backdrop-blur-md border-t border-border md:hidden">
        <Link
          to="/free-analysis"
          className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base glow-primary flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Get Free Analysis
        </Link>
      </div>

      <ConsultationPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default Index;
