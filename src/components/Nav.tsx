import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Seal from "./Seal";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#ledger", label: "Career" },
  { href: "#houses", label: "Companies" },
  { href: "#awards", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const lightHeader = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        lightHeader ? "bg-limestone/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(107,79,48,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="container-dossier flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Seal size={40} spin={false} tone={lightHeader ? "bronze" : "limestone"} />
          <span
            className={`hidden sm:block whitespace-nowrap font-display text-lg tracking-tight transition-colors duration-500 ${
              lightHeader ? "text-ink" : "text-limestone"
            }`}
          >
            Raed Hamze
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`eyebrow whitespace-nowrap transition-colors ${
                lightHeader ? "text-ink/70 hover:text-bronze" : "text-limestone/85 hover:text-sand"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`eyebrow whitespace-nowrap rounded-full border px-5 py-2.5 transition-colors ${
              lightHeader
                ? "border-bronze text-bronze hover:bg-bronze hover:text-limestone"
                : "border-limestone/60 text-limestone hover:bg-limestone hover:text-ink"
            }`}
          >
            Book a Consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              lightHeader ? "bg-ink" : "bg-limestone"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              lightHeader ? "bg-ink" : "bg-limestone"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-limestone border-t border-bronze/25"
          >
            <nav className="container-dossier flex flex-col gap-1 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-display text-2xl text-ink hover:text-bronze transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="eyebrow mt-4 rounded-full border border-bronze px-5 py-3 text-center text-bronze"
              >
                Book a Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
