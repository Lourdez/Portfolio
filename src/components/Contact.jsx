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
    value: `${personalInfo.location} • Open to: ${personalInfo.targets}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-32 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem,16vw,16rem)" }}
        aria-hidden="true"
      >
        TALK
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <SectionLabel>Connect</SectionLabel>
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-md">
                Actively looking for DevOps and infrastructure roles in European
                medtech — Netherlands and Switzerland. If you're building
                healthcare imaging infrastructure, let's talk.
              </p>
            </Reveal>

            <div className="flex flex-col gap-3">
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
                      className="flex items-center gap-4 p-5 bg-bg-card border border-border rounded-xl hover:border-border-accent hover:translate-x-1.5 transition-all group"
                    >
                      <div className="w-11 h-11 min-w-11 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <l.icon size={18} />
                      </div>
                      <div>
                        <div className="text-[0.68rem] text-text-muted uppercase tracking-widest font-mono">
                          {l.label}
                        </div>
                        <div className="text-[0.95rem] text-text-primary font-semibold mt-0.5">
                          {l.value}
                        </div>
                      </div>
                    </Tag>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={2}>
            <div className="bg-bg-card border border-border rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent mx-auto mb-6">
                <Globe size={22} />
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Open to Relocation</h3>
              <p className="text-sm text-text-secondary mb-2">
                Actively targeting EU medtech hubs
              </p>
              <p className="text-accent font-bold text-lg">
                Netherlands &bull; Switzerland
              </p>
              <div className="mt-6 pt-6 border-t border-border text-xs text-text-muted leading-relaxed space-y-1">
                <p>Healthcare IT &bull; PACS/RIS &bull; Medical Imaging</p>
                <p>DevOps &bull; Infrastructure &bull; Cloud</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
