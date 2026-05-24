import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { pacsComponents } from "../data/portfolio";

export default function Pacs() {
  return (
    <section id="pacs" className="py-20 md:py-24 px-6 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>Domain</SectionLabel>
        <SectionTitle>What is PACS?</SectionTitle>

        <Reveal>
          <div className="bg-bg-card border border-border-accent rounded-xl p-6 mb-10 border-l-[3px] border-l-accent">
            <p className="text-text-primary text-base font-medium">
              <strong>PACS</strong> = Picture Archiving and Communication System.
              The backbone of modern radiology — it stores, retrieves, and
              distributes medical images (X-ray, CT, MRI, Ultrasound) across
              hospitals and clinics.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-text-secondary text-base max-w-[720px] mb-10 leading-relaxed">
            I build and operate the entire infrastructure stack that connects
            these systems — cloud, networking, storage, security, CI/CD, and
            automation. Here are the key components:
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pacsComponents.map((item, i) => (
            <Reveal key={item.name} delay={i % 3}>
              <div className="bg-bg-card border border-border rounded-lg p-5 hover:border-border-accent hover:-translate-y-0.5 transition-all h-full">
                <div className="font-mono text-sm text-accent font-semibold mb-1.5">
                  {item.name}
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
