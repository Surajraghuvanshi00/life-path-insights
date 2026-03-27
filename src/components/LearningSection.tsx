import { motion } from "framer-motion";
import { BookOpen, Globe, Hash, MessageCircle } from "lucide-react";

interface LearningSectionProps {
  onOpenPopup: () => void;
}

const topics = [
  { icon: Hash, title: "What is Numerology?", desc: "Numerology is the study of numbers' mystical significance in your life. Each number carries unique vibrations that influence your personality, decisions, and destiny." },
  { icon: Globe, title: "What is a Birth Chart?", desc: "Your birth chart is a cosmic snapshot at the moment you were born. It maps planetary positions to reveal your innate talents, challenges, and life themes." },
  { icon: BookOpen, title: "How Numbers Influence Decisions", desc: "From your life path number to personal year cycles, numbers provide a framework for understanding timing, compatibility, and optimal choices." },
  { icon: MessageCircle, title: "Benefits of Consultation", desc: "A personalized session connects the dots between your numbers, giving you actionable guidance tailored to your current life situation." },
];

const LearningSection = ({ onOpenPopup }: LearningSectionProps) => {
  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Learn <span className="text-primary">More</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Understanding the science behind your numbers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {topics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 md:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
              <button
                onClick={onOpenPopup}
                className="text-primary text-sm font-medium hover:underline underline-offset-4"
              >
                Get Your Reading →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
