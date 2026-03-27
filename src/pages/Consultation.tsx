import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, ShieldCheck, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const processSteps = [
  { title: "Share Your Details", desc: "Submit your birth date and basic info through our secure form." },
  { title: "Receive Your Analysis", desc: "Get a personalized numerology snapshot within 24 hours." },
  { title: "Book Your Session", desc: "Schedule a one-on-one session with our expert numerologist." },
  { title: "Get Actionable Guidance", desc: "Walk away with clear, practical steps for your life path." },
];

const benefits = [
  "Personalized life path analysis",
  "Career and financial guidance",
  "Relationship compatibility insights",
  "Optimal timing for major decisions",
  "Pattern recognition for growth",
  "Ongoing support and follow-ups",
];

const faqs = [
  { q: "How long is a consultation session?", a: "A standard session lasts 45–60 minutes, giving us enough time to thoroughly analyze your numbers and provide detailed guidance." },
  { q: "Do I need to prepare anything?", a: "Just your full name (as on birth certificate) and exact date, time, and place of birth. We'll handle the analysis." },
  { q: "Is my information kept confidential?", a: "Absolutely. All your personal data is encrypted and never shared with third parties. Your privacy is our top priority." },
  { q: "What if I'm skeptical about numerology?", a: "That's completely fine. Many of our most satisfied clients started as skeptics. The insights speak for themselves through their accuracy and practical value." },
  { q: "Can I get a consultation for someone else?", a: "Yes, you can book a consultation for a family member or partner, provided you have their birth details and consent." },
];

const Consultation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 pt-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Book Your <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg mb-8">
            Get expert numerology guidance tailored to your life's unique blueprint.
          </p>
          <Link
            to="/free-analysis"
            className="inline-flex px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base glow-primary hover:scale-105 transition-transform"
          >
            Start with Free Analysis
          </Link>
        </motion.div>

        {/* Process */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            How It <span className="text-primary">Works</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((s, i) => (
              <div key={s.title} className="glass rounded-xl p-5 flex gap-4 items-start">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/15 flex items-center justify-center font-heading font-bold text-primary text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            What You <span className="text-primary">Get</span>
          </h2>
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>45–60 min session</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>100% confidential</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <MessageCircle className="w-3.5 h-3.5 text-primary" />
                <span>Follow-up support</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-medium text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <div className="text-center">
          <Link
            to="/free-analysis"
            className="inline-flex px-10 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg glow-primary hover:scale-105 transition-transform"
          >
            Get Your Free Analysis Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
