import { motion } from "framer-motion";
import { FileText, Sparkles, Calendar } from "lucide-react";

const steps = [
  { icon: FileText, step: "01", title: "Submit Your Details", desc: "Share your birth details securely through our simple form." },
  { icon: Sparkles, step: "02", title: "Receive Free Insight", desc: "Get your personalized numerology snapshot within minutes." },
  { icon: Calendar, step: "03", title: "Book Consultation", desc: "Dive deeper with an expert one-on-one guidance session." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps to unlock your life's blueprint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass rounded-2xl p-6 md:p-8 text-center group"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-heading font-bold text-primary bg-background border border-primary/30 rounded-full px-3 py-1">
                {item.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2 group-hover:glow-primary-soft transition-shadow duration-500">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
