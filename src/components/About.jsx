import { MapPin, Globe, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./AnimatedSection";
import { personalInfo, aboutText } from "../data/portfolio";

const details = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Globe, label: "Targeting", value: personalInfo.targets },
  { icon: BookOpen, label: "Language", value: personalInfo.language },
  { icon: Star, label: "Goal", value: personalInfo.goal },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden"
    >
      {/* Thin accent line at the top of the card — visible as it rises over the hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-accent opacity-40 mt-4" />
      {/* Background large text watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold text-[clamp(6rem,18vw,18rem)] leading-none text-text-primary opacity-[0.02] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        ABOUT
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <SectionLabel>About</SectionLabel>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — statement + bio */}
          <div>
            <Reveal delay={1}>
              <h2
                className="font-extrabold leading-[1.05] text-text-primary mb-8"
                style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
              >
                Infrastructure that keeps{" "}
                <span className="text-accent">hospitals running</span>.
              </h2>
            </Reveal>
            <div className="space-y-4">
              {aboutText.map((p, i) => (
                <Reveal key={i} delay={i + 2}>
                  <p className="text-base text-text-secondary leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — detail cards */}
          <Reveal delay={2}>
            <div className="flex flex-col gap-3">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 + 0.3 }}
                  className="flex gap-4 items-center p-5 bg-bg-card border border-border rounded-xl hover:border-border-accent transition-colors group"
                >
                  <div className="w-10 h-10 min-w-10 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <d.icon size={16} />
                  </div>
                  <div>
                    <div className="text-text-muted text-[0.68rem] uppercase tracking-widest font-mono">
                      {d.label}
                    </div>
                    <div className="text-text-primary font-semibold mt-0.5">{d.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
