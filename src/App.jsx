// import Navbar from "./components/Navbar";
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
      {/* ── Hero ─────────────────────────────────────────────────────────────
          Normal document flow, z-index 20.
          Scrolls away naturally — reveals About sitting behind it.          */}
      <div style={{ position: "relative", zIndex: 20, height: "100vh" }}>
        <Hero />
      </div>

      {/* ── About ────────────────────────────────────────────────────────────
          Sticky at top:0, z-index 10 (behind Hero).
          margin-top: -100vh pulls it up to share the same viewport as Hero.
          As Hero scrolls off the top it uncovers About — About never moves.  */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          marginTop: "-100vh",
          zIndex: 10,
        }}
      >
        <About />
      </div>

      {/* ── Spacer ───────────────────────────────────────────────────────────
          Gives About "dwell time" — user fully reads About before the
          content card slides over it.                                        */}
      <div style={{ height: "100vh" }} />

      {/* ── Rest of content ──────────────────────────────────────────────────
          z-index 20, solid background — slides over the sticky About.
          Sharp top edge + strong shadow = firm card feel.                    */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          background: "#0a0e17",
          borderTop: "1px solid #1e293b",
          boxShadow: "0 -16px 60px rgba(0,0,0,0.85)",
        }}
      >
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
