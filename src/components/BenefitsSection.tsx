import { motion } from "framer-motion";
import { Eye, Fingerprint, Target, Clock } from "lucide-react";

const benefits = [
  { icon: Eye, title: "Gain Life Clarity", desc: "See your life's purpose with crystal-clear vision and understanding." },
  { icon: Fingerprint, title: "Understand Your Patterns", desc: "Recognize your unique strengths and recurring cycles." },
  { icon: Target, title: "Make Confident Decisions", desc: "Act with certainty backed by ancient numerical wisdom." },
  { icon: Clock, title: "Discover Right Timing", desc: "Know when to move forward and when to pause." },
];

const BenefitsSection = () => {
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
            What You'll <span className="text-primary">Gain</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transform uncertainty into empowered action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 md:p-6 flex gap-4 items-start hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
