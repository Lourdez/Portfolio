import { Clock, CheckCircle, Star } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { certifications } from "../data/portfolio";

const groups = [
  {
    label: "Actively Pursuing",
    items: certifications.active,
    icon: Clock,
    iconClass: "bg-[#f59e0b22] border-[#f59e0b44] text-[#f59e0b]",
    badge: "IN PROGRESS",
    badgeClass: "bg-[#f59e0b22] text-[#f59e0b]",
  },
  {
    label: "Planned",
    items: certifications.planned,
    icon: CheckCircle,
    iconClass: "bg-accent-glow border-border-accent text-accent",
    badge: "PLANNED",
    badgeClass: "bg-accent-glow text-accent",
  },
  {
    label: "Domain Knowledge",
    items: certifications.domain,
    icon: Star,
    iconClass: "bg-[#8b5cf622] border-[#8b5cf644] text-[#8b5cf6]",
    badge: "DOMAIN",
    badgeClass: "bg-[#8b5cf622] text-[#8b5cf6]",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-24 px-6 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Growth</SectionLabel>
        <SectionTitle>Certifications & Learning Roadmap</SectionTitle>

        {groups.map((g) => (
          <div key={g.label} className="mb-8">
            <Reveal>
              <h3 className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-4">
                {g.label}
              </h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {g.items.map((cert, i) => (
                <Reveal key={cert.name} delay={i % 3}>
                  <div className="bg-bg-card border border-border rounded-xl p-6 flex gap-4 items-start hover:border-border-accent transition-colors h-full">
                    <div
                      className={`w-10 h-10 min-w-10 rounded-xl flex items-center justify-center border ${g.iconClass}`}
                    >
                      <g.icon size={18} />
                    </div>
                    <div>
                      <div className="text-[0.95rem] font-semibold text-text-primary">
                        {cert.name}
                      </div>
                      <div className="text-xs text-text-muted mt-0.5">
                        {cert.org}
                      </div>
                      <span
                        className={`font-mono text-[0.68rem] font-semibold px-2 py-0.5 rounded mt-1.5 inline-block ${g.badgeClass}`}
                      >
                        {g.badge}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
