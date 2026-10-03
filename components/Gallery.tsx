"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { contact, gallery } from "@/lib/content";
import { ChevronIcon, CloseIcon, InstagramIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const open = (i: number, el: HTMLButtonElement) => {
    lastTrigger.current = el;
    setDirection(0);
    setIndex(i);
  };
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => {
    setDirection(d);
    setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length));
  }, []);

  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      lastTrigger.current?.focus();
    };
  }, [isOpen, close, step]);

  const photo = index !== null ? gallery[index] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="gallery-title" className="text-[clamp(2.4rem,8.5vw,4rem)] text-maroon">
              Moments from the feast
            </h2>
            <p className="mt-4 max-w-[30rem] text-[1.05rem] text-ink-soft">
              Tap any photograph to see it larger.
            </p>
          </div>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-[0.98rem] text-maroon underline decoration-gold/60 underline-offset-[6px] hover:decoration-maroon sm:self-auto"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
            More on {contact.instagramHandle}
          </a>
        </Reveal>

        <ul className="mt-10 columns-2 gap-3 sm:gap-4 lg:mt-14 lg:columns-3 lg:gap-5">
          {gallery.map((p, i) => (
            <Reveal as="li" key={p.src} delay={(i % 3) * 0.06} className="mb-3 break-inside-avoid sm:mb-4 lg:mb-5">
              <button
                type="button"
                onClick={(e) => open(i, e.currentTarget)}
                className="group relative block w-full overflow-hidden rounded-sm bg-cream"
                aria-label={`View larger: ${p.alt}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="h-auto w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition duration-500 group-hover:ring-gold-soft/70"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {photo && index !== null && (
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[70] flex flex-col bg-wine/[0.97] text-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
            style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <p className="text-sm text-ivory/75" aria-live="polite">
                {index + 1} of {gallery.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-ivory/10"
                aria-label="Close photo viewer"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative flex-1" onClick={close}>
              <AnimatePresence initial={false} custom={direction}>
                <m.div
                  key={photo.src}
                  custom={direction}
                  className="absolute inset-0 px-3 sm:px-20"
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="100vw" quality={78} className="object-contain" />
                  </div>
                </m.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 hover:bg-ivory/10 sm:grid"
                aria-label="Previous photo"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 hover:bg-ivory/10 sm:grid"
                aria-label="Next photo"
              >
                <ChevronIcon />
              </button>
            </div>

            <div className="px-5 pb-6 pt-4 sm:px-6">
              <p className="mx-auto max-w-2xl text-center text-[0.95rem] text-ivory/80">{photo.alt}</p>
              <div className="mt-4 flex justify-center gap-3 sm:hidden">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30"
                  aria-label="Previous photo"
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30"
                  aria-label="Next photo"
                >
                  <ChevronIcon />
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
