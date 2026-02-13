import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map(l => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`mx-auto transition-all duration-700 ease-out ${
        scrolled ? "mt-4 max-w-3xl px-2" : "mt-0 max-w-full px-0"
      }`}>
        <div className={`flex items-center justify-between transition-all duration-700 ease-out ${
          scrolled
            ? "rounded-full bg-background/70 backdrop-blur-2xl border border-border/50 shadow-lg shadow-foreground/[0.04] px-6 py-2.5"
            : "bg-transparent px-6 py-5 md:px-12 lg:px-20"
        }`}>
          <a href="#home" className="font-display text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">
            Dra. Claudia
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-body text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  activeSection === l.href
                    ? "text-foreground bg-muted/70"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-3 rounded-full bg-foreground px-5 py-2 text-[13px] font-medium text-background transition-all duration-300 hover:opacity-85"
            >
              Agendar
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 rounded-2xl bg-background/95 backdrop-blur-2xl border border-border/50 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm px-4 py-2.5 rounded-xl transition-colors ${
                    activeSection === l.href
                      ? "text-foreground bg-muted/60 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
              >
                Agendar Diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
