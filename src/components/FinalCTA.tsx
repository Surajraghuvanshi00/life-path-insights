import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenPopup: () => void;
}

const FinalCTA = ({ onOpenPopup }: FinalCTAProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Discover Your <span className="text-primary">True Path?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Your numbers hold the answers. Unlock your free personalized insight today.
          </p>
          <button
            onClick={onOpenPopup}
            className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg glow-primary hover:scale-105 transition-transform duration-300"
          >
            Unlock My Free Insight
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
