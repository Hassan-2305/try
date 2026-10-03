import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="overflow-hidden bg-cream py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <Reveal>
          <h2 id="reviews-title" className="max-w-[16ch] text-[clamp(2.4rem,8.5vw,4rem)] text-maroon">
            In the words of our families
          </h2>
        </Reveal>
      </div>

      {/* Phones: a swipeable row that snaps card by card. Larger screens: a grid. */}
      <ul
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 md:mx-auto md:mt-14 md:max-w-[72rem] md:px-8 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:gap-8"
        aria-label="Client reviews"
      >
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="relative flex w-[86%] shrink-0 snap-center flex-col bg-ivory px-6 pb-7 pt-10 sm:w-[62%] md:w-auto md:px-9 md:pb-9 md:pt-12"
          >
            <div className="kasavu-thin absolute inset-x-0 top-0" aria-hidden />
            <span aria-hidden className="block h-8 font-serif text-[4.5rem] leading-[0.7] text-gold">
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 font-serif text-[1.4rem] leading-[1.4] text-ink sm:text-[1.5rem]">
              <p>{t.quote}</p>
            </blockquote>
            <footer className="mt-7 border-t border-gold/35 pt-5 text-[0.95rem]">
              <p className="font-medium text-ink">{t.name}</p>
              <p className="text-ink-soft">
                {t.occasion}, {t.place}
              </p>
            </footer>
          </li>
        ))}
        <li aria-hidden className="w-1 shrink-0 md:hidden" />
      </ul>
      <p className="container-x mt-4 text-sm text-ink-soft md:hidden">Swipe to read more</p>
    </section>
  );
}
