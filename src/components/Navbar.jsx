import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../data/portfolio";
import GithubIcon from "./GithubIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setScrolled(window.scrollY > heroHeight + 20);
      setVisible(window.scrollY > heroHeight);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl transition-shadow ${
            scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : ""
          }`}
          style={{ background: "rgba(10, 14, 23, 0.88)" }}
        >
          <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
            <a
              href="#hero"
              className="font-mono text-base font-bold text-accent hover:opacity-80 transition-opacity"
            >
              lp<span className="text-text-muted font-normal">@devops</span>:~$
            </a>

            {/* Desktop */}
            <ul className="hidden md:flex gap-7 list-none items-center">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      active === l.href.slice(1)
                        ? "text-accent"
                        : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              className="md:hidden bg-transparent border-none cursor-pointer text-text-secondary"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden flex flex-col gap-5 px-6 py-6 list-none border-b border-border overflow-hidden"
                style={{ background: "rgba(10, 14, 23, 0.97)" }}
              >
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`text-sm font-medium transition-colors ${
                        active === l.href.slice(1)
                          ? "text-accent"
                          : "text-text-secondary hover:text-accent"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
