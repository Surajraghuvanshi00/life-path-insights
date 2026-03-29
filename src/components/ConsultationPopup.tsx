import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle } from "lucide-react";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationPopup = ({ isOpen, onClose }: ConsultationPopupProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
  });
  const [energyColor, setEnergyColor] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const generateColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const hex = `#${hslToHex(hue, 70, 55)}`;
    setEnergyColor(hex);
  };

  const hslToHex = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return `${f(0)}${f(8)}${f(4)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    try {
      const response = await fetch(
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZmMDYzMDA0MzE1MjZhNTUzMzEi_pc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setSubmissionStatus("success");
        setSubmitted(true);
      } else {
        setSubmissionStatus("error");
        console.error("Webhook submission failed:", response.statusText);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setSubmissionStatus("idle");
      setForm({ name: "", phone: "", email: "", purpose: "" });
      setEnergyColor(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto glass rounded-2xl p-5 md:p-6"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <h3 className="font-heading text-xl font-bold mb-1 pr-8">
                  Unlock Your <span className="text-primary">Free Insight</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  Fill in your details to receive a personalized numerology snapshot.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Tell us what clarity or guidance you are seeking today (career, relationship, personal growth, or life direction).
                    </label>
                    <textarea
                      value={form.purpose}
                      onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                      rows={3}
                      className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="I want guidance about my career path and future decisions."
                    />
                  </div>

                  {/* Energy Color Generator */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Energy Color</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={generateColor}
                        className="px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        Generate My Energy Color
                      </button>
                      {energyColor && (
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-lg border border-border"
                            style={{ backgroundColor: energyColor }}
                          />
                          <span className="text-xs text-muted-foreground font-mono">{energyColor}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base glow-primary hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submissionStatus === "submitting"}
                  >
                    {submissionStatus === "submitting" ? "Submitting..." : "Unlock My Free Insight"}
                  </button>
                  {submissionStatus === "error" && (
                    <p className="text-sm text-red-500 mt-2 text-center">
                      Submission failed. Please try again.
                    </p>
                  )}
                </form>
              </>
            ) : submissionStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Thank You, {form.name}!
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Your free numerology insight is being prepared. We'll reach out to you shortly with your personalized analysis.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold glow-primary hover:scale-105 transition-transform"
                >
                  Book Free Consultation
                </button>
              </motion.div>
            ) : null}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
