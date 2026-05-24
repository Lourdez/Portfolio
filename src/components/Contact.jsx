import { Mail, ExternalLink, MapPin, Globe } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { personalInfo } from "../data/portfolio";
import GithubIcon from "./GithubIcon";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Lourdez Parker",
    href: personalInfo.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Lourdez",
    href: personalInfo.github,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: `${personalInfo.location} \u2022 Open to: ${personalInfo.targets}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 px-6 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Connect</SectionLabel>
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <p className="text-base text-text-secondary mb-8 leading-relaxed">
                I'm actively looking for DevOps and infrastructure roles in
                European medtech — particularly in the Netherlands and
                Switzerland. If you're building healthcare imaging infrastructure,
                let's talk.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {links.map((l, i) => {
                const Tag = l.href ? "a" : "div";
                return (
                  <Reveal key={l.label} delay={i}>
                    <Tag
                      {...(l.href
                        ? {
                            href: l.href,
                            ...(l.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {}),
                          }
                        : {})}
                      className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-border-accent hover:translate-x-1 transition-all"
                    >
                      <div className="w-11 h-11 min-w-11 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent">
                        <l.icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">
                          {l.label}
                        </div>
                        <div className="text-[0.95rem] text-text-primary font-medium mt-0.5">
                          {l.value}
                        </div>
                      </div>
                    </Tag>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={1}>
            <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-9 h-9 rounded-lg bg-accent-glow border border-border-accent flex items-center justify-center text-accent mx-auto mb-4">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">Open to Relocation</h3>
              <p className="text-sm text-text-secondary">
                Actively targeting EU medtech hubs
              </p>
              <p className="mt-2 text-accent font-semibold">
                Netherlands &bull; Switzerland
              </p>
              <p className="mt-4 text-xs text-text-muted leading-relaxed">
                Healthcare IT &bull; PACS/RIS &bull; Medical Imaging
                <br />
                DevOps &bull; Infrastructure &bull; Cloud
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
