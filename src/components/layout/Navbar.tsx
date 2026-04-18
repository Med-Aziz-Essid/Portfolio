"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-cyan-glow/20 py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-glow/20 rounded-md group-hover:bg-cyan-glow/40 transition-all duration-300" />
              <Shield size={16} className="text-cyan-DEFAULT relative z-10" />
            </div>
            <span className="font-mono text-sm text-cyan-DEFAULT font-semibold tracking-wider">
              AE<span className="text-slate-400">.sec</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded group ${
                  active === link.href ? "text-cyan-DEFAULT" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute inset-0 rounded bg-cyan-dim/0 group-hover:bg-cyan-dim/100 transition-all duration-300`} />
                {active === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-px bg-cyan-DEFAULT"
                  />
                )}
              </button>
            ))}
            <a
              href="mailto:aziz0essid0@gmail.com"
              className="ml-4 px-5 py-2 bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/30 text-cyan-DEFAULT font-mono text-xs tracking-widest uppercase rounded hover:bg-cyan-DEFAULT/20 hover:border-cyan-DEFAULT/60 hover:shadow-cyan-glow transition-all duration-300"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cyan-DEFAULT p-2"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 glass md:hidden flex flex-col pt-20 px-8 gap-4"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                className="text-left font-mono text-2xl text-slate-300 hover:text-cyan-DEFAULT border-b border-border py-4 transition-colors"
              >
                <span className="text-cyan-DEFAULT text-sm mr-3">0{i + 1}.</span>
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
