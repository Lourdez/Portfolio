import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import GithubIcon from "./GithubIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : ""
      }`}
      style={{ background: "rgba(10, 14, 23, 0.85)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-base font-bold text-accent">
          lp<span className="text-text-muted font-normal">@devops</span>:~$
        </div>

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
      {open && (
        <ul className="md:hidden flex flex-col gap-5 p-6 list-none border-b border-border"
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
        </ul>
      )}
    </nav>
  );
}
