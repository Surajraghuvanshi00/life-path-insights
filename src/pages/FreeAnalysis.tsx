import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, ShieldCheck } from "lucide-react";

const FreeAnalysis = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [energyColor, setEnergyColor] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const autoReason = "User seeking life clarity and personalized numerology guidance";

  const hslToHex = (h: number, s: number, l: number) => {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const generateColor = () => {
    const hue = Math.floor(Math.random() * 360);
    setEnergyColor(hslToHex(hue, 70, 55));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[+]?\d{7,15}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid phone number";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-24 gradient-cosmic">
      <div className="container px-4 max-w-lg mx-auto">
        {!submitted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-8">
              <h1 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                Get Your <span className="text-primary">Free Analysis</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Fill in your details to receive a personalized numerology snapshot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 md:p-8 space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="+91 9876543210"
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Auto-generated reason */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Purpose</label>
                <div className="w-full rounded-lg bg-muted border border-border px-4 py-3 text-sm text-muted-foreground">
                  {autoReason}
                </div>
              </div>

              {/* Energy Color */}
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
                      <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: energyColor }} />
                      <span className="text-xs text-muted-foreground font-mono">{energyColor}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base glow-primary hover:scale-[1.02] transition-transform duration-300"
              >
                Unlock My Free Insight
              </button>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Your data is 100% secure. No spam.</span>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-3">
              Thank You, {form.name}!
            </h2>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-sm mx-auto">
              Your free numerology insight is being prepared. We'll reach out shortly with your personalized analysis.
            </p>
            <a
              href="/consultation"
              className="inline-flex px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold glow-primary hover:scale-105 transition-transform"
            >
              Book Free Consultation
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FreeAnalysis;
