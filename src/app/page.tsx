import Cursor from "@/components/ui/Cursor";
import CyberBackground from "@/components/ui/CyberBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <CyberBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/20 to-transparent" />

        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Skills />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Experience />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <Certifications />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/20 to-transparent" />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
