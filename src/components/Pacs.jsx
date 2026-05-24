import { Reveal, SectionLabel, SectionTitle } from "./AnimatedSection";
import { pacsComponents } from "../data/portfolio";

export default function Pacs() {
  return (
    <section id="pacs" className="min-h-screen flex items-center py-32 px-6 bg-bg-secondary relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem,16vw,16rem)" }}
        aria-hidden="true"
      >
        PACS
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <SectionLabel>Domain</SectionLabel>
        <SectionTitle>What is PACS?</SectionTitle>

        <Reveal>
          <div className="bg-bg-card border-l-[3px] border-l-accent border border-border rounded-xl p-7 mb-12">
            <p className="text-text-primary text-lg font-medium leading-relaxed">
              <strong>PACS</strong> = Picture Archiving and Communication System.
              The backbone of modern radiology — it stores, retrieves, and
              distributes medical images (X-ray, CT, MRI, Ultrasound) across
              hospitals and clinics.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-text-secondary text-base max-w-[720px] mb-12 leading-relaxed">
            I build and operate the entire infrastructure stack that connects
            these systems — cloud, networking, storage, security, CI/CD, and
            automation. Here are the key components:
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pacsComponents.map((item, i) => (
            <Reveal key={item.name} delay={i % 3}>
              <div className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-accent hover:-translate-y-0.5 transition-all h-full group">
                <div className="font-mono text-sm text-accent font-bold mb-2 group-hover:translate-x-0.5 transition-transform">
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
