"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Terminal, FileText } from "lucide-react";
import { profile } from "@/data/profile";

const TYPED_STRINGS = [
  "Cybersecurity Engineer",
  "Network Security Specialist",
  "Ethical Hacker",
  "Infrastructure Architect",
  "IT Engineering Student",
];

function useTypingEffect(strings: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setStrIndex((s) => (s + 1) % strings.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex, strings, speed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(TYPED_STRINGS);
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-DEFAULT/30" />
      <div className="absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-cyan-DEFAULT/30" />
      <div className="absolute bottom-16 left-6 w-16 h-16 border-l-2 border-b-2 border-cyan-DEFAULT/30" />
      <div className="absolute bottom-16 right-6 w-16 h-16 border-r-2 border-b-2 border-cyan-DEFAULT/30" />

      {/* Status indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-4 py-2 rounded-full border border-green-500/30"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column */}
          <div>
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                📍 {profile.location}
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-2">
              <motion.p
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-sm text-cyan-DEFAULT tracking-widest uppercase mb-2"
              >
                &gt; Hello, I&apos;m
              </motion.p>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-7xl lg:text-9xl leading-none tracking-tight"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                <span className="text-white">AZIZ</span>
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  ESSID
                </span>
              </motion.h1>
            </div>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-slate-500 font-mono text-sm">//</span>
              <span className="font-mono text-lg text-slate-300 min-w-[260px]">
                {typedText}
                <span className="text-cyan-DEFAULT animate-pulse">_</span>
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-slate-400 leading-relaxed max-w-lg mb-10 text-base"
            >
              {profile.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToAbout}
                className="group flex items-center gap-2 px-6 py-3 bg-cyan-DEFAULT text-bg font-mono text-sm font-semibold tracking-wider uppercase rounded hover:bg-cyan-DEFAULT/90 hover:shadow-cyan-glow transition-all duration-300"
              >
                Explore My Work
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-cyan-DEFAULT/30 text-cyan-DEFAULT font-mono text-sm tracking-wider uppercase rounded hover:bg-cyan-dim/100 hover:border-cyan-DEFAULT transition-all duration-300"
              >
                LinkedIn
                <ExternalLink size={14} />
              </a>
              <a
                href="/ESSID_Mohamed_Aziz_CV.pdf"
                download="ESSID_Mohamed_Aziz_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 border border-violet-DEFAULT/40 text-violet-400 font-mono text-sm tracking-wider uppercase rounded hover:bg-violet-dim/100 hover:border-violet-DEFAULT transition-all duration-300"
              >
                Download CV
                <Download size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right column — Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="terminal relative">
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="font-mono text-xs text-slate-500 ml-3">aziz@portfolio:~$</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <TerminalLine delay={1.0} color="text-cyan-DEFAULT" text="whoami" prefix="$ " />
                <TerminalLine delay={1.2} color="text-slate-300" text="ESSID Mohamed Aziz — IT Engineer & Cybersecurity Enthusiast" />
                <TerminalLine delay={1.5} color="text-cyan-DEFAULT" text="cat skills.txt" prefix="$ " />
                <TerminalLine delay={1.7} color="text-violet-400" text="[Networking] [Cybersecurity] [PowerShell] [ASP.NET]" />
                <TerminalLine delay={2.0} color="text-cyan-DEFAULT" text="ls certifications/" prefix="$ " />
                <TerminalLine delay={2.2} color="text-green-400" text="AWS_Cloud  CCNA_2  Ethical_Hacker  TOEIC  CyberSec" />
                <TerminalLine delay={2.5} color="text-cyan-DEFAULT" text="cat achievements.log" prefix="$ " />
                <TerminalLine delay={2.7} color="text-yellow-400" text="[TROPHY] 3rd Place — IEEExtreme Tunisia 🏆" />
                <TerminalLine delay={3.0} color="text-cyan-DEFAULT" text="echo $STATUS" prefix="$ " />
                <TerminalLine delay={3.2} color="text-green-400" text="OPEN_TO_WORK=true | LOCATION=Tunisia | READY=yes" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="flex items-center gap-2 text-cyan-DEFAULT"
                >
                  <span>$</span>
                  <span className="animate-pulse">▋</span>
                </motion.div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="mt-4 flex gap-3 flex-wrap">
              {["Cisco Certified", "AWS Trained", "IEEE Member", "Hack Arena Ambassador"].map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.5 + i * 0.1 }}
                  className="px-3 py-1 bg-surface border border-border font-mono text-xs text-slate-400 rounded-full hover:border-cyan-DEFAULT/40 hover:text-cyan-DEFAULT transition-all duration-300"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-DEFAULT transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function TerminalLine({
  delay,
  color,
  text,
  prefix,
}: {
  delay: number;
  color: string;
  text: string;
  prefix?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`${color} flex gap-2`}
    >
      {prefix && <span className="text-slate-500">{prefix}</span>}
      <span>{text}</span>
    </motion.div>
  );
}
