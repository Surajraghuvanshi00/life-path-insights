import { motion } from "framer-motion";
import { Compass, Heart, RotateCcw, CloudOff, HelpCircle } from "lucide-react";

const problems = [
  { icon: Compass, title: "Career Confusion", desc: "Unsure which path leads to fulfillment" },
  { icon: Heart, title: "Relationship Challenges", desc: "Struggling to build meaningful connections" },
  { icon: CloudOff, title: "Feeling Stuck", desc: "Trapped in a cycle with no way forward" },
  { icon: RotateCcw, title: "Repeated Failures", desc: "Patterns that keep holding you back" },
  { icon: HelpCircle, title: "Lack of Clarity", desc: "Uncertain about life's next step" },
];

const ProblemSection = () => {
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
            Sound <span className="text-primary">Familiar?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            These are the signs your life is calling for deeper alignment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 md:p-6 text-center hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
