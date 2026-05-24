import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center py-32 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem,16vw,16rem)" }}
        aria-hidden="true"
      >
        WORK
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Where I've Worked</SectionTitle>

        {experience.map((exp, idx) => (
          <Reveal key={exp.company} delay={0}>
            <div className={`mb-16 ${idx > 0 ? "bg-bg-card border border-border rounded-2xl p-8" : ""}`}>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3
                    className="font-extrabold text-text-primary leading-tight"
                    style={{ fontSize: idx === 0 ? "clamp(1.8rem, 4vw, 3.5rem)" : "clamp(1.4rem,3vw,2rem)" }}
                  >
                    {exp.company}
                  </h3>
                  <div className="text-accent font-semibold text-lg mt-1">{exp.role}</div>
                </div>
              </div>
              <div className="font-mono text-xs text-text-muted mb-8">
                {exp.period} &bull; {exp.context}
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {exp.categories.map((cat, ci) => (
                  <div key={ci}>
                    {cat.title && (
                      <div className="text-[0.7rem] font-bold text-accent mb-3 font-mono uppercase tracking-[3px] flex items-center gap-2">
                        {cat.title}
                        <span className="flex-1 h-px bg-border" />
                      </div>
                    )}
                    <ul className="flex flex-col gap-2 list-none p-0">
                      {cat.items.map((item, ii) => (
                        <li key={ii} className="pl-5 relative text-sm text-text-secondary leading-relaxed">
                          <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full border-[1.5px] border-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
