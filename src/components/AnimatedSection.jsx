import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)", scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.12,
    },
  }),
};

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-accent" />
        <span className="font-mono text-[0.7rem] font-bold text-accent uppercase tracking-[4px]">
          {children}
        </span>
      </div>
    </Reveal>
  );
}

export function SectionTitle({ children }) {
  return (
    <Reveal delay={1}>
      <h2
        className="font-extrabold leading-[1.05] mb-14 text-text-primary"
        style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
      >
        {children}
      </h2>
    </Reveal>
  );
}
