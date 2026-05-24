import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "DevOps Engineer",
  "Healthcare — Radiology Specialist",
  "Infrastructure Engineer",
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

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative h-full w-full flex items-center justify-center overflow-hidden"
    >
      {/* GIF background — fills the hero */}
      <img
        src="/loop_style.gif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bg-primary/65" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(10,14,23,0.75) 100%)",
        }}
      />

      {/* Centered content — no scroll-driven effects, scrolls away cleanly */}
      <div className="relative z-10 text-center px-6 select-none">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-extrabold leading-[1.05] text-text-primary"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)", letterSpacing: "-0.02em" }}
        >
          Lourdez{" "}
          <span className="text-accent">Parker</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-5 h-9 flex items-center justify-center"
        >
          <span className="font-mono text-lg md:text-xl text-text-secondary tracking-wide">
            {role}
          </span>
          <span
            className="inline-block w-[2px] h-6 bg-accent ml-1 mb-0.5"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-[0.65rem] font-mono uppercase tracking-[4px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
