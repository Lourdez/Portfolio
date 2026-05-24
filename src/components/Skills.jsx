import {
  Activity, Cloud, Server, Database, GitBranch, Shield, Radio, Mail, Box,
} from "lucide-react";
import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { skills } from "../data/portfolio";
import TiltCard from "./TiltCard";

const iconMap = { Activity, Cloud, Server, Database, GitBranch, Shield, Radio, Mail, Box };

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <SectionTitle>Technical Arsenal</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <Reveal key={skill.title} delay={i % 3}>
                <TiltCard className="h-full">
                  <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-accent transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-[0.95rem] font-bold text-text-primary">
                        {skill.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[0.72rem] px-2.5 py-1 rounded bg-bg-primary border border-border text-text-secondary hover:border-accent-dim hover:text-text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
