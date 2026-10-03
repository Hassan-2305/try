"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

/**
 * A thumb-reach action bar for phones. It appears once the hero has scrolled
 * away and steps aside when the contact form or footer is on screen.
 */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["top", "contact", "site-footer"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const onScreen = new Map<string, boolean>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => onScreen.set(e.target.id, e.isIntersecting));
        const heroVisible = onScreen.get("top") ?? true;
        const endVisible = onScreen.get("contact") || onScreen.get("site-footer");
        setVisible(!heroVisible && !endVisible);
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          className="fixed inset-x-0 bottom-0 z-40 px-3 lg:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-gold/40 bg-ivory/95 p-1.5 backdrop-blur-sm">
            <a href="#contact" className="btn btn-primary min-h-12 flex-1 py-3">
              Get a custom quote
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#1f7a4d] text-white transition-transform active:scale-95"
            >
              <WhatsAppIcon className="h-6 w-6" />
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
