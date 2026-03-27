import { motion } from "framer-motion";
import cosmicOrb from "@/assets/cosmic-orb.jpg";

interface HeroSectionProps {
  onOpenPopup: () => void;
}

const HeroSection = ({ onOpenPopup }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-cosmic">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={cosmicOrb}
          alt="Cosmic energy visualization"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container relative z-10 text-center px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-primary font-heading text-sm md:text-base tracking-[0.2em] uppercase mb-4 md:mb-6"
        >
          Numerology & Birth Chart Insights
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 max-w-4xl mx-auto glow-text"
        >
          Discover Your Life Path
          <br />
          <span className="text-primary">Through Numerology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          Get personalized insights about your career, relationships, and life direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenPopup}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base md:text-lg glow-primary hover:scale-105 transition-transform duration-300"
          >
            Get Free Analysis
          </button>
          <button
            onClick={onOpenPopup}
            className="w-full sm:w-auto px-8 py-4 rounded-lg glass text-foreground font-heading font-medium text-base md:text-lg hover:bg-secondary/80 transition-colors duration-300"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
