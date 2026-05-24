import { MapPin, Globe, BookOpen, Star } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { personalInfo, aboutText } from "../data/portfolio";

const details = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Globe, label: "Targeting", value: personalInfo.targets },
  { icon: BookOpen, label: "Language", value: personalInfo.language },
  { icon: Star, label: "Goal", value: personalInfo.goal },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>About</SectionLabel>
        <SectionTitle>Who I Am</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="text-base text-text-secondary space-y-4">
              {aboutText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="bg-bg-card border border-border rounded-xl p-7 flex flex-col gap-4">
              {details.map((d) => (
                <div key={d.label} className="flex gap-3 items-start">
                  <div className="w-9 h-9 min-w-9 rounded-lg bg-accent-glow border border-border-accent flex items-center justify-center text-accent">
                    <d.icon size={16} />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs uppercase tracking-wider">
                      {d.label}
                    </div>
                    <div className="text-text-primary font-medium mt-0.5">
                      {d.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
