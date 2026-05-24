import { GraduationCap } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Education</SectionLabel>
        <SectionTitle>Academic Background</SectionTitle>

        <div className="flex gap-5 flex-wrap">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i}>
              <div className="bg-bg-card border border-border rounded-xl p-6 min-w-[260px] flex-1">
                <div className="w-9 h-9 rounded-lg bg-accent-glow border border-border-accent flex items-center justify-center text-accent mb-3">
                  <GraduationCap size={16} />
                </div>
                <div className="text-base font-bold text-text-primary mb-1">
                  {e.degree}
                </div>
                <div className="text-sm text-text-secondary">{e.school}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
