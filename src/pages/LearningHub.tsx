import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hash, Globe, BookOpen, MessageCircle, Users, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Hash,
    title: "What is Numerology?",
    content: "Numerology is the ancient study of numbers and their profound influence on human life. Each number carries a unique vibration that shapes your personality, life choices, and destiny. By understanding these numerical patterns, you gain clarity about your strengths, challenges, and the path that aligns with your true self.",
  },
  {
    icon: Globe,
    title: "What is a Birth Chart?",
    content: "A birth chart is a cosmic blueprint captured at the exact moment of your birth. It maps the positions of celestial bodies to reveal your innate talents, emotional patterns, relationship dynamics, and career inclinations. This personalized map serves as a guide to understanding yourself at the deepest level.",
  },
  {
    icon: BookOpen,
    title: "Common Life Problems Explained",
    content: "Many challenges we face — career confusion, relationship struggles, financial instability, feeling lost — are reflections of misalignment with our core numbers. Numerology helps identify the root cause behind recurring patterns, providing a framework to break free from cycles that hold you back.",
  },
  {
    icon: TrendingUp,
    title: "Numerology Basics",
    content: "Your Life Path Number, derived from your date of birth, reveals your life's purpose. Your Expression Number, calculated from your name, shows your natural abilities. Personal Year Numbers indicate the theme of each year in your life, helping you make decisions with perfect timing.",
  },
  {
    icon: MessageCircle,
    title: "Benefits of Consultation",
    content: "A one-on-one consultation connects all the dots between your numbers. Instead of generic readings, you receive actionable insights tailored to your current situation — whether it's a career pivot, relationship decision, or personal transformation you're navigating.",
  },
  {
    icon: Users,
    title: "Case Studies",
    content: "Thousands have transformed their lives through numerology guidance. From professionals who found their ideal career path to couples who strengthened their relationships, the patterns in numbers have consistently provided clarity and direction where confusion once reigned.",
  },
];

const LearningHub = () => {
  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16 pt-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Learning <span className="text-primary">Hub</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Explore the science and wisdom behind numerology and birth charts.
          </p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-lg md:text-xl">{s.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                {s.content}
              </p>
              <Link
                to="/free-analysis"
                className="inline-flex text-primary text-sm font-medium hover:underline underline-offset-4"
              >
                Get Your Free Reading →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
