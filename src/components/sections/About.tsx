"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { MapPin, Mail, Linkedin, Globe, Code2 } from "lucide-react";

const stats = [
  { value: "2+", label: "Internships" },
  { value: "3", label: "Live Projects" },
  { value: "6", label: "Certifications" },
  { value: "Top 3", label: "IEEExtreme TN" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-cyan-DEFAULT text-sm">01.</span>
          <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight" style={{ fontFamily: "'Bebas Neue', cursive" }}>
            ABOUT ME
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-DEFAULT/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-slate-300 leading-relaxed text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-400 leading-relaxed"
            >
              From automating workstation deployments with PXE at{" "}
              <span className="text-cyan-DEFAULT">DRÄXLMAIER Group</span> to building full-stack platforms
              at <span className="text-violet-400">WARDA</span>, I bridge the gap between software development
              and security. I believe robust systems start with secure foundations.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-3 pt-2"
            >
              {[
                { icon: MapPin, label: profile.location, color: "text-cyan-DEFAULT" },
                { icon: Mail, label: profile.email, color: "text-cyan-DEFAULT", href: `mailto:${profile.email}` },
                { icon: Linkedin, label: "med-aziz-essid", color: "text-cyan-DEFAULT", href: profile.linkedin },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon size={14} className={item.color} />
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-slate-400 hover:text-cyan-DEFAULT transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-slate-400">{item.label}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Languages</p>
              <div className="space-y-2">
                {profile.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-4">
                    <span className="font-mono text-sm text-slate-300 w-20">{lang.name}</span>
                    <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percent}%` } : {}}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }}
                      />
                    </div>
                    <span className="font-mono text-xs text-slate-500 w-24">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — stats + education */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass glass-hover p-6 rounded-xl text-center transition-all duration-300 cursor-default"
                >
                  <p
                    className="font-display text-4xl font-bold mb-1"
                    style={{
                      fontFamily: "'Bebas Neue', cursive",
                      background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass rounded-xl p-6 space-y-4"
            >
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Code2 size={12} className="text-cyan-DEFAULT" />
                Education
              </p>
              {profile.education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-cyan-DEFAULT/30 pl-4 py-1">
                  <p className="text-slate-200 font-medium text-sm">{edu.degree}</p>
                  <p className="text-slate-500 font-mono text-xs mt-1">{edu.period}</p>
                  <span
                    className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-mono ${
                      edu.status === "In Progress"
                        ? "bg-cyan-dim/100 text-cyan-DEFAULT border border-cyan-DEFAULT/20"
                        : "bg-green-500/10 text-green-400 border border-green-500/20"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Achievements preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-6"
            >
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Top Achievement</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-sm">3rd Place — IEEExtreme</p>
                  <p className="text-slate-500 font-mono text-xs">Programming Competition · Tunisia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
