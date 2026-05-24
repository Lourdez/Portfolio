import { useState, useEffect, useRef } from "react";
import { BookOpen, Mail, ArrowDown } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { Reveal } from "./AnimatedSection";
import { personalInfo } from "../data/portfolio";
import GithubIcon from "./GithubIcon";

const roles = [
  "DevOps Engineer",
  "PACS Infrastructure Specialist",
  "Healthcare IT Engineer",
];

const stats = [
  { numeric: 35, prefix: "", suffix: "+", label: "Services in Production" },
  { numeric: 3, prefix: "", suffix: "-node", label: "PostgreSQL HA Cluster" },
  { numeric: 15, prefix: "~", suffix: "s", label: "Automated Failover" },
  { numeric: 7, prefix: "", suffix: "", label: "Jenkins Pipelines" },
];

function useTypewriter(texts, typingSpeed = 65, deleteSpeed = 38, pause = 2400) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display === "") {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplay(current.slice(0, display.length - 1)),
        deleteSpeed
      );
    } else {
      timeout = setTimeout(
        () => setDisplay(current.slice(0, display.length + 1)),
        typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, texts, typingSpeed, deleteSpeed, pause]);

  return display;
}

function StatCounter({ numeric, prefix, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, numeric, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, numeric, count]);

  return (
    <div
      ref={ref}
      className="bg-bg-card border border-border rounded-xl p-4 text-center hover:border-border-accent transition-colors"
    >
      <div className="font-mono text-xl font-bold text-accent">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-[0.65rem] text-text-muted mt-1 leading-tight">{label}</div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(roles);
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 700], [0, -180]);
  const glowScale = useTransform(scrollY, [0, 700], [1, 1.15]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Parallax glow orb */}
      <motion.div
        style={{
          y: glowY,
          scale: glowScale,
          background:
            "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
        }}
        className="absolute -top-1/2 -right-[30%] w-[800px] h-[800px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1100px] mx-auto relative z-10 w-full">
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

          {/* Typewriter role */}
          <p className="text-lg md:text-xl text-text-secondary font-medium mb-6 h-8 flex items-center">
            {role}
            <span
              className="inline-block w-[2px] h-5 bg-accent ml-1"
              style={{ animation: "blink 1s step-end infinite" }}
            />
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
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold bg-transparent text-text-secondary border border-border hover:text-accent hover:border-border-accent hover:-translate-y-0.5 transition-all"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </Reveal>

        {/* Count-up stats */}
        <Reveal delay={4}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[640px]">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={5}>
          <div className="mt-10 flex gap-8 flex-wrap">
            {[
              "Open to EU relocation",
              "Learning German (B2 target)",
              "Healthcare IT focused",
            ].map((text) => (
              <div key={text} className="text-xs text-text-muted flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-accent"
                  style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                {text}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={6}>
          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors"
          >
            <ArrowDown size={14} /> Scroll to explore
          </a>
        </Reveal>
      </div>
    </section>
  );
}
