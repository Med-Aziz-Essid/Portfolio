"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { CheckCircle2, Briefcase } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-cyan-DEFAULT text-sm">03.</span>
          <h2
            className="font-display text-4xl lg:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            EXPERIENCE
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-DEFAULT/30 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-DEFAULT/40 via-violet-DEFAULT/40 to-transparent hidden md:block" />

          <div className="space-y-12">
            {profile.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-5 top-6 w-6 h-6 rounded-full border-2 items-center justify-center hidden md:flex"
                  style={{ borderColor: exp.color, background: "#030712" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}` }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass glass-hover rounded-xl p-8 transition-all duration-300 group"
                  style={{ borderColor: `${exp.color}20` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                    <div>
                      {/* Company name */}
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                        >
                          <Briefcase size={16} style={{ color: exp.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-DEFAULT transition-colors">
                            {exp.company}
                          </h3>
                          <p className="font-mono text-sm" style={{ color: exp.color }}>
                            {exp.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full font-mono text-xs border"
                        style={{ color: exp.color, borderColor: `${exp.color}30`, background: `${exp.color}10` }}>
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + j * 0.08 + 0.3 }}
                        className="flex items-start gap-3 text-slate-400 text-sm"
                      >
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
