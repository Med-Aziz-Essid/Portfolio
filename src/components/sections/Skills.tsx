"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Code2, Server, Shield } from "lucide-react";
import { profile } from "@/data/profile";

const ICONS: Record<string, React.ElementType> = {
  Network,
  Code2,
  Server,
  Shield,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-cyan-DEFAULT text-sm">02.</span>
          <h2
            className="font-display text-4xl lg:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            TECHNICAL SKILLS
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-DEFAULT/30 to-transparent" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profile.skills.map((cat, i) => {
            const Icon = ICONS[cat.icon];
            const isActive = activeCategory === cat.category;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(isActive ? null : cat.category)}
                className={`glass glass-hover p-6 rounded-xl cursor-pointer transition-all duration-300 group ${
                  isActive ? "border-opacity-60 shadow-cyan-glow" : ""
                }`}
                style={isActive ? { borderColor: cat.color, boxShadow: `0 0 30px ${cat.color}22` } : {}}
                data-cursor
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                >
                  {Icon && <Icon size={22} style={{ color: cat.color }} />}
                </div>

                <h3 className="font-mono text-sm font-semibold text-slate-200 mb-1 tracking-wider uppercase">
                  {cat.category}
                </h3>
                <p className="font-mono text-xs text-slate-500 mb-4">{cat.items.length} technologies</p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.slice(0, isActive ? undefined : 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-mono rounded"
                      style={{
                        background: `${cat.color}10`,
                        color: cat.color,
                        border: `1px solid ${cat.color}25`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {!isActive && cat.items.length > 3 && (
                    <span className="px-2 py-1 text-xs font-mono text-slate-500 border border-border rounded">
                      +{cat.items.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-8"
        >
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-8">
            Core Proficiency Indicators
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Network Security & Cisco", level: 80, color: "#00d4ff" },
              { skill: "PowerShell & Automation", level: 75, color: "#7c3aed" },
              { skill: "ASP.NET Core / C#", level: 72, color: "#06b6d4" },
              { skill: "Linux & Windows Server", level: 78, color: "#10b981" },
              { skill: "Ethical Hacking", level: 65, color: "#ef4444" },
              { skill: "Python & Data Science", level: 60, color: "#f59e0b" },
            ].map((item, i) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-slate-300">{item.skill}</span>
                  <span className="font-mono text-xs text-slate-500">{item.level}%</span>
                </div>
                <div className="h-1.5 bg-surface rounded-full overflow-hidden border border-border/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
                  >
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
