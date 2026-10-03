"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { contact, nav, whatsappLink } from "@/lib/content";
import { CloseIcon, FlameMark, MenuIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and support Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      menuButton.current?.focus();
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "bg-ivory/95 text-ink shadow-[0_1px_0_0_rgb(169_130_57/0.35)] backdrop-blur-sm" : "bg-transparent text-ivory"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="container-x flex h-16 items-center justify-between lg:h-[4.5rem]">
          <a href="#top" className="group flex items-center gap-2" aria-label="Muhabath Catering, back to top">
            <FlameMark className={`h-5 w-5 transition-colors duration-500 ${solid ? "text-maroon" : "text-gold-soft"}`} />
            <span className="font-serif text-[1.6rem] font-semibold leading-none tracking-[0.04em]">Muhabath</span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.95rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={`btn hidden min-h-0 px-5 py-2.5 text-sm sm:inline-flex ${solid ? "btn-primary" : "btn-ghost-light"}`}
            >
              Get a quote
            </a>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen(true)}
              className="-mr-2 grid h-11 w-11 place-items-center rounded-full lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-ivory text-ink lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="container-x flex h-16 items-center justify-between">
              <span className="flex items-center gap-2">
                <FlameMark className="h-5 w-5 text-maroon" />
                <span className="font-serif text-[1.6rem] font-semibold leading-none tracking-[0.04em]">Muhabath</span>
              </span>
              <button
                ref={closeButton}
                type="button"
                onClick={() => setOpen(false)}
                className="-mr-2 grid h-11 w-11 place-items-center rounded-full"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="kasavu-thin" aria-hidden />

            <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto pt-8">
              <ul className="space-y-1">
                {[...nav, { href: "#contact", label: "Contact" }].map((item, i) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.45 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 font-serif text-[2.1rem] leading-tight text-ink active:text-maroon"
                    >
                      {item.label}
                    </a>
                  </m.li>
                ))}
              </ul>
            </nav>

            <div className="container-x space-y-3 pb-6 pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Get a custom quote
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn w-full border border-ink/15">
                  <WhatsAppIcon className="h-5 w-5 text-[#1f7a4d]" />
                  WhatsApp
                </a>
                <a href={contact.phoneHref} className="btn w-full border border-ink/15">
                  <PhoneIcon className="h-5 w-5 text-maroon" />
                  Call
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
