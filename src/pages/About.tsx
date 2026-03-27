import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Heart, Shield, Sparkles } from "lucide-react";

const values = [
  { icon: Target, title: "Clarity-Driven", desc: "Every insight we deliver is designed to bring actionable clarity to your life decisions." },
  { icon: Heart, title: "Empathetic Approach", desc: "We listen first, analyze deeply, and guide with genuine care for your well-being." },
  { icon: Shield, title: "Trust & Privacy", desc: "Your data and personal details are treated with the highest level of confidentiality." },
  { icon: Sparkles, title: "Modern Methods", desc: "We blend ancient numerology wisdom with modern analytical techniques for accuracy." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 pt-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We're on a mission to make ancient numerical wisdom accessible, practical, and transformative for the modern generation.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <div className="glass rounded-2xl p-6 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              We believe everyone deserves clarity about their life's direction. In a world filled with noise and uncertainty, numerology provides a timeless framework for understanding yourself and making empowered choices.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Our mission is to bridge ancient wisdom with modern life — helping individuals between 18–40 navigate career pivots, relationships, personal growth, and life transitions with confidence and purpose.
            </p>
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            Our <span className="text-primary">Approach</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 md:p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Trust */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <div className="glass rounded-2xl p-6 md:p-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Why <span className="text-primary">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              With thousands of consultations delivered, we've built a reputation on accuracy, empathy, and real results. Our approach is transparent — we explain not just what your numbers say, but how to apply those insights in practical, everyday decisions.
            </p>
            <Link
              to="/free-analysis"
              className="inline-flex px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold glow-primary hover:scale-105 transition-transform"
            >
              Experience It Free
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
