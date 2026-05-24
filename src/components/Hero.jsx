import { BookOpen, Mail } from "lucide-react";
import { Reveal } from "./AnimatedSection";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute -top-1/2 -right-[30%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <Reveal>
          <div className="font-mono text-sm text-accent mb-5 inline-flex items-center gap-2">
            <span
              className="inline-block w-0.5 h-4 bg-accent"
              style={{ animation: "blink 1s step-end infinite" }}
            />
            lourdez@infra ~
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-2">
            {personalInfo.name}{" "}
            <span className="text-accent">{personalInfo.lastName}</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium mb-6">
            {personalInfo.role}
          </p>
        </Reveal>

        <Reveal delay={2}>
          <p className="text-base text-text-muted max-w-[600px] mb-9 leading-relaxed">
            {personalInfo.tagline}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-semibold bg-accent text-bg-primary hover:shadow-[0_0_24px_var(--color-accent-dim)] hover:-translate-y-0.5 transition-all"
            >
              <BookOpen size={16} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-semibold bg-transparent text-accent border border-border-accent hover:bg-accent-glow hover:border-accent hover:-translate-y-0.5 transition-all"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-12 flex gap-8 flex-wrap">
            {["Open to EU relocation", "Learning German (B2 target)", "Healthcare IT focused"].map(
              (text) => (
                <div key={text} className="text-xs text-text-muted flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-accent"
                    style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                  />
                  {text}
                </div>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
