import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

const testimonials = [
  { name: "Priya M.", text: "The numerology reading gave me clarity I hadn't found anywhere else. It completely shifted my career decisions.", rating: 5 },
  { name: "Arjun K.", text: "I was skeptical at first, but the insights were incredibly accurate. It helped me understand my relationship patterns.", rating: 5 },
  { name: "Sneha R.", text: "The consultation was professional, insightful, and deeply personal. I now feel aligned with my life path.", rating: 5 },
];

const TrustSection = () => {
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
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real stories from people who found their clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 md:p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-heading font-semibold text-sm text-primary">{t.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-muted-foreground text-sm"
        >
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>We respect your privacy. No spam, ever.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
