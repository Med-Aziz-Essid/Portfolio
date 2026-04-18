"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { X, Activity, Car, CalendarDays, ExternalLink, Tag } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  Activity,
  Car,
  CalendarDays,
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-cyan-DEFAULT text-sm">04.</span>
          <h2
            className="font-display text-4xl lg:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            PROJECTS
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-DEFAULT/30 to-transparent" />
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, i) => {
            const Icon = ICONS[project.icon];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(i)}
                className="glass glass-hover rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2"
                data-cursor
              >
                {/* Card header */}
                <div
                  className="h-2 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                <div className="p-6">
                  {/* Icon + category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
                    >
                      {Icon && <Icon size={22} style={{ color: project.color }} />}
                    </div>
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full"
                      style={{
                        color: project.color,
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-DEFAULT transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mb-3">{project.year}</p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div
                    className="flex items-center gap-2 p-3 rounded-lg mb-4"
                    style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}
                  >
                    <span className="text-xs" style={{ color: project.color }}>⚡</span>
                    <p className="font-mono text-xs" style={{ color: project.color }}>
                      {project.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono text-slate-500 bg-surface border border-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-slate-600 border border-border rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" style={{ color: project.color }}>
                    <span>View Details</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4 glass rounded-2xl overflow-hidden"
              style={{ borderColor: `${profile.projects[selected].color}30` }}
            >
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${profile.projects[selected].color}, transparent)` }}
              />
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {profile.projects[selected].title}
                    </h3>
                    <p className="font-mono text-xs text-slate-500">{profile.projects[selected].year} · {profile.projects[selected].category}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 hover:bg-surface rounded-lg transition-colors text-slate-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{profile.projects[selected].description}</p>

                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{
                    background: `${profile.projects[selected].color}08`,
                    border: `1px solid ${profile.projects[selected].color}20`,
                  }}
                >
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="font-mono text-xs text-slate-500 mb-1">Impact</p>
                    <p className="font-semibold" style={{ color: profile.projects[selected].color }}>
                      {profile.projects[selected].impact}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Tag size={10} /> Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.projects[selected].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg"
                        style={{
                          color: profile.projects[selected].color,
                          background: `${profile.projects[selected].color}10`,
                          border: `1px solid ${profile.projects[selected].color}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
