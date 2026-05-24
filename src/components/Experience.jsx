import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { experience } from "../data/portfolio";

function CategoryBlock({ cat }) {
  return (
    <div className="mb-5">
      {cat.title && (
        <div className="text-xs font-bold text-accent mb-2.5 font-mono uppercase tracking-wider flex items-center gap-2">
          {cat.title}
          <span className="flex-1 h-px bg-border" />
        </div>
      )}
      <ul className="flex flex-col gap-2 list-none">
        {cat.items.map((item, i) => (
          <li
            key={i}
            className="pl-5 relative text-sm text-text-secondary leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:border-[1.5px] before:border-accent"
          />
        ))}
      </ul>
      {/* Re-render items with text since before pseudo-elements need separate handling */}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 px-6 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Where I've Worked</SectionTitle>

        {experience.map((exp, idx) => (
          <Reveal key={exp.company} delay={0}>
            <div
              className={`mb-12 ${
                idx > 0
                  ? "bg-bg-card border border-border rounded-xl p-6"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className={`font-bold text-text-primary ${idx > 0 ? "text-lg" : "text-xl"}`}>
                    {exp.company}
                  </h3>
                  <div className="text-[0.95rem] text-accent font-medium">
                    {exp.role}
                  </div>
                </div>
              </div>
              <div className="font-mono text-xs text-text-muted mb-5">
                {exp.period} &bull; {exp.context}
              </div>

              {exp.categories.map((cat, ci) => (
                <div key={ci} className="mb-5">
                  {cat.title && (
                    <div className="text-xs font-bold text-accent mb-2.5 font-mono uppercase tracking-wider flex items-center gap-2">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
