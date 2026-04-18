import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aziz Essid — Cybersecurity Engineer",
  description:
    "Portfolio of ESSID Mohamed Aziz — IT Engineering Student & Cybersecurity Enthusiast based in Tunisia. Specialized in network security, infrastructure, and ethical hacking.",
  keywords: ["cybersecurity", "IT engineer", "Tunisia", "network security", "portfolio", "Aziz Essid"],
  authors: [{ name: "ESSID Mohamed Aziz" }],
  openGraph: {
    title: "Aziz Essid — Cybersecurity Engineer",
    description: "IT Engineering Student | Cybersecurity Enthusiast",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-slate-200 antialiased noise">
        {children}
      </body>
    </html>
  );
}
