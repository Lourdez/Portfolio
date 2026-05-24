import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pacs from "./components/Pacs";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero — sticky, pinned in background at z-0 */}
      <div className="sticky top-0 h-screen" style={{ zIndex: 0 }}>
        <Hero />
      </div>

      {/* All content slides up over the hero like a card from below */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          background: "#0a0e17",
          borderRadius: "2rem 2rem 0 0",
          boxShadow: "0 -24px 80px rgba(0,0,0,0.7)",
        }}
      >
        <About />
        <Pacs />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <footer className="py-8 px-6 border-t border-border text-center">
          <p className="font-mono text-xs text-text-muted">
            &copy; 2025 Lourdez Parker — Built with React + Vite + Tailwind CSS
          </p>
        </footer>
      </div>

      <ScrollToTop />
    </>
  );
}
