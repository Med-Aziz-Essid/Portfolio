"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { Cloud, Network, Languages, BarChart2, Shield, Lock } from "lucide-react";

const ICONS: Record<string, React.ElementType> = { Cloud, Network, Languages, BarChart2, Shield, Lock };

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-cyan-DEFAULT text-sm">05.</span>
          <h2
            className="font-display text-4xl lg:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            CERTIFICATIONS
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-DEFAULT/30 to-transparent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.certifications.map((cert, i) => {
            const Icon = ICONS[cert.icon];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass glass-hover rounded-xl p-5 flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Badge */}
                <div
                  className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center relative"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 20px ${cert.color}40` }}
                  />
                  {Icon && <Icon size={22} style={{ color: cert.color }} className="relative z-10" />}
                </div>

                <div className="min-w-0">
                  <p className="text-slate-200 font-medium text-sm leading-tight mb-1 group-hover:text-white transition-colors">
                    {cert.name}
                  </p>
                  <p className="font-mono text-xs" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                  {/* Verified badge */}
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-3 h-3 rounded-full bg-green-500/80 flex items-center justify-center">
                      <span className="text-[6px] text-white font-bold">✓</span>
                    </div>
                    <span className="font-mono text-[10px] text-green-500">Certified</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-600" />
            Achievements & Community
            <span className="w-8 h-px bg-slate-600" />
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="glass rounded-xl p-4 flex items-center gap-3 hover:border-cyan-DEFAULT/20 transition-all duration-300 group"
              >
                <span className="text-2xl">{
                  { Trophy: "🏆", Users: "👥", Star: "⭐", Flag: "🚩", Gamepad2: "🎮" }[ach.icon] || "🎯"
                }</span>
                <div>
                  <p className="text-slate-200 text-sm font-medium group-hover:text-cyan-DEFAULT transition-colors">
                    {ach.title}
                  </p>
                  <p className="text-slate-500 font-mono text-xs">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
