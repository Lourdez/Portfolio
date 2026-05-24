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
      <Hero />
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
      <ScrollToTop />
    </>
  );
}
