"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroImage } from "@/lib/content";
import Kasavu from "./Kasavu";
import { PinIcon } from "./Icons";

const line = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.35]);

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-wine text-ivory"
    >
      {/* Background photograph: slow settle on load, slow drift on scroll */}
      <m.div className="absolute inset-0 -z-10" style={{ y }}>
        <m.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            fetchPriority="high"
            quality={68}
            sizes="100vw"
            className="object-cover object-[58%_50%]"
          />
        </m.div>
      </m.div>

      {/* Wine wash so ivory type always reads, darkest where the words sit */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(61_16_25/0.6)_0%,rgb(61_16_25/0.25)_26%,rgb(52_13_21/0.78)_48%,rgb(46_11_18/0.92)_70%,rgb(46_11_18/0.97)_100%)] lg:bg-[linear-gradient(90deg,rgb(46_11_18/0.9)_0%,rgb(61_16_25/0.6)_45%,rgb(61_16_25/0.05)_80%)]"
      />

      <m.div style={{ opacity: fade }} className="container-x flex flex-1 flex-col justify-end pb-14 pt-28 sm:pb-20 lg:justify-center lg:pb-24">
        <m.p
          custom={0}
          variants={line}
          initial="hidden"
          animate="show"
          className="mb-5 flex items-start gap-2 text-[0.9rem] text-gold-soft [text-shadow:0_1px_12px_rgb(46_11_18/0.9)]"
        >
          <PinIcon className="mt-[0.2rem] h-4 w-4 shrink-0" />
          Serving weddings across Kerala &amp; Tamil Nadu
        </m.p>

        <h1 className="text-[clamp(2.5rem,12.2vw,6.4rem)] font-medium leading-[1] tracking-[0.01em]">
          <m.span custom={1} variants={line} initial="hidden" animate="show" className="block">
            A wedding feast,
          </m.span>
          <m.span custom={2} variants={line} initial="hidden" animate="show" className="block">
            laid with love.
          </m.span>
        </h1>

        <m.p
          custom={3}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-ivory/85 sm:text-lg"
        >
          Muhabath means love. We bring it to every wedding we cater: biryani sealed on slow dum, sadya laid leaf by
          leaf, and service so graceful your guests only notice the food.
        </m.p>

        <m.div
          custom={4}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#contact" className="btn btn-gold sm:min-w-[13rem]">
            Book your date
          </a>
          <a href="#gallery" className="btn btn-ghost-light sm:min-w-[13rem]">
            See our feasts
          </a>
        </m.div>
      </m.div>

      <Kasavu />
    </section>
  );
}
