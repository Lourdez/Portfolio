import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
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
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-6 h-px bg-accent" />
        <span className="font-mono text-xs font-semibold text-accent uppercase tracking-[3px]">
          {children}
        </span>
      </div>
    </Reveal>
  );
}

export function SectionTitle({ children }) {
  return (
    <Reveal delay={1}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
        {children}
      </h2>
    </Reveal>
  );
}
