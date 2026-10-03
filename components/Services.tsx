"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { services } from "@/lib/content";
import { PlusIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  // Desktop shows one feature image at a time; on phones each item opens
  // independently so nothing above the finger collapses and shifts the page.
  const [active, setActive] = useState(services[0].id);
  const [open, setOpen] = useState<string[]>([services[0].id]);
  const toggle = (id: string) => {
    setActive(id);
    setOpen((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  };
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section id="services" aria-labelledby="services-title" className="bg-cream py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 id="services-title" className="text-[clamp(2.4rem,8.5vw,4rem)] text-maroon">
            Feasts for every occasion
          </h2>
          <p className="mt-5 max-w-[34rem] text-[1.05rem] text-ink-soft">
            Four ways we cook for you. Each one is planned around your guests, your traditions and the way your family
            likes to eat.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ul className="border-t border-gold/45">
            {services.map((s) => {
              const isOpen = open.includes(s.id);
              const isActive = s.id === active;
              return (
                <li key={s.id} className="border-b border-gold/45">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(s.id)}
                      onMouseEnter={() => setActive(s.id)}
                      onFocus={() => setActive(s.id)}
                      aria-expanded={isOpen}
                      aria-controls={`service-${s.id}`}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span>
                        <span
                          className={`block font-serif text-[1.9rem] leading-tight transition-colors duration-500 sm:text-[2.2rem] ${
                            isOpen ? "text-maroon" : "text-ink group-hover:text-maroon"
                          } ${isActive ? "lg:text-maroon" : "lg:text-ink"
                          }`}
                        >
                          {s.title}
                        </span>
                        <span className="mt-1.5 block font-sans text-[0.98rem] font-normal leading-normal text-ink-soft">{s.short}</span>
                      </span>
                      <span
                        aria-hidden
                        className={`mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 lg:hidden ${
                          isOpen ? "rotate-45 border-maroon bg-maroon text-ivory" : "border-ink/25 text-ink"
                        }`}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  {/* Mobile & tablet: details open inline under the tapped item */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={`service-${s.id}`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55 }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-8">
                          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ivory">
                            <Image
                              src={s.image.src}
                              alt={s.image.alt}
                              fill
                              sizes="(min-width: 640px) 80vw, 100vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-5 text-ink-soft">{s.body}</p>
                          <p className="mt-3 font-serif text-lg italic text-maroon">{s.detail}</p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Desktop: one large image that crossfades as you move through the list */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[5/6] overflow-hidden rounded-sm bg-ivory">
                <AnimatePresence initial={false}>
                  <m.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image src={current.image.src} alt={current.image.alt} fill sizes="45vw" className="object-cover" />
                  </m.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="mt-6 max-w-[34rem]"
                >
                  <p className="text-ink-soft">{current.body}</p>
                  <p className="mt-3 font-serif text-lg italic text-maroon">{current.detail}</p>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
