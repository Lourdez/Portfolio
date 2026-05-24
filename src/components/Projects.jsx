import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { projects } from "../data/portfolio";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <SectionTitle>What I've Built</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.number} delay={i % 3}>
              <TiltCard className="h-full">
                <div className="bg-bg-card border border-border rounded-xl p-7 flex flex-col hover:border-border-accent transition-all h-full">
                  <div className="font-mono text-xs text-accent font-bold mb-3 opacity-60">
                    {p.number}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[0.7rem] px-2 py-0.5 rounded bg-accent-glow border border-border-accent text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
