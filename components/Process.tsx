import { steps } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 id="process-title" className="text-[clamp(2.4rem,8.5vw,4rem)] text-maroon">
            From first call to final tray
          </h2>
          <p className="mt-5 max-w-[34rem] text-[1.05rem] text-ink-soft">
            Four unhurried steps. You will speak to the same planner at every one of them.
          </p>
        </Reveal>

        <ol className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {/* The thread that ties the steps together */}
          <span aria-hidden className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-gold/50 lg:hidden" />
          <span aria-hidden className="absolute left-6 right-6 top-[1.4rem] hidden h-px bg-gold/50 lg:block" />

          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative grid grid-cols-[2.8rem_1fr] gap-5 lg:block">
              <span className="relative z-10 grid h-[2.8rem] w-[2.8rem] place-items-center rounded-full border border-gold bg-ivory font-serif text-xl text-maroon">
                {i + 1}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-serif text-[1.75rem] leading-tight text-ink">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
