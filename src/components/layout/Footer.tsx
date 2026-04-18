"use client";
import { profile } from "@/data/profile";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-cyan-DEFAULT" />
          <span className="font-mono text-xs text-slate-500">
            © 2026 ESSID Mohamed Aziz · Built with Next.js + Framer Motion
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-500 hover:text-cyan-DEFAULT transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-slate-500 hover:text-cyan-DEFAULT transition-colors"
          >
            Email
          </a>
          <span className="font-mono text-xs text-slate-600">
            {profile.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
