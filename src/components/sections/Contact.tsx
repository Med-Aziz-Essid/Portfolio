"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { Send, Mail, MapPin, Linkedin, CheckCircle2, Terminal, Download } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-cyan-DEFAULT text-sm">06.</span>
          <h2
            className="font-display text-4xl lg:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            GET IN TOUCH
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-DEFAULT/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-semibold text-white mb-4">
                Let&apos;s build something{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                  secure
                </span>
                {" "}together.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m currently open to internship opportunities, collaborative projects, and cybersecurity
                challenges. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, color: "#00d4ff" },
                { icon: MapPin, label: profile.location, color: "#7c3aed" },
                { icon: Linkedin, label: "linkedin.com/in/med-aziz-essid", href: profile.linkedin, color: "#06b6d4" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-slate-300 hover:text-cyan-DEFAULT transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-slate-400">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/ESSID_Mohamed_Aziz_CV.pdf"
              download="ESSID_Mohamed_Aziz_CV.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 bg-violet-DEFAULT/10 border border-violet-DEFAULT/30 text-violet-400 font-mono text-sm tracking-wider uppercase rounded-lg hover:bg-violet-DEFAULT/20 hover:border-violet-DEFAULT/60 transition-all duration-300 group w-fit"
            >
              <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              Download My CV
            </a>
            <div className="glass rounded-xl p-6">
              <p className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal size={12} /> Branding Tips
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  "Publish CTF writeups on a personal blog",
                  "Contribute to open-source security tools",
                  "Build a homelab and document it on GitHub",
                  "Speak at university IEEE/security events",
                  "Get TryHackMe / HackTheBox top rankings",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="text-cyan-DEFAULT mt-0.5">▸</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-xl p-12 flex flex-col items-center justify-center text-center h-full min-h-96"
              >
                <CheckCircle2 size={48} className="text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 font-mono text-sm">I&apos;ll get back to you soon. 🚀</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  Send Message
                </p>

                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                      required
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-DEFAULT/50 focus:shadow-[0_0_0_2px_rgba(0,212,255,0.1)] transition-all duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-DEFAULT/50 focus:shadow-[0_0_0_2px_rgba(0,212,255,0.1)] transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-cyan-DEFAULT text-bg font-mono text-sm font-semibold uppercase tracking-widest rounded-lg hover:shadow-cyan-glow hover:bg-cyan-DEFAULT/90 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
