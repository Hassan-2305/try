import Image from "next/image";
import { storyImages, strengths } from "@/lib/content";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="lg:pt-6">
          <Reveal>
            <h2 id="story-title" className="max-w-[16ch] text-[clamp(2.4rem,8.5vw,4rem)] text-maroon">
              Some families remember a wedding by its feast.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-[36rem] space-y-5 text-[1.05rem] text-ink-soft">
            <p>
              Muhabath began in a Malabar kitchen, with recipes handed down the way good recipes are: by watching, by
              tasting, by being trusted with the pot. Today our cooks and servers travel to wedding halls, beach lawns
              and ancestral homes across Kerala and Tamil Nadu.
            </p>
            <p>
              Families call us South India&rsquo;s most renowned wedding caterer. We would rather you judge us by the
              last plate of the night, served as warm and as generously as the first.
            </p>
          </div>

          <ul className="mt-12 max-w-[36rem]">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="border-t border-gold/40 py-6 last:border-b">
                <h3 className="font-serif text-[1.65rem] leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Image pair: the wide stage under an arch, the quiet detail tucked against it */}
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-cream">
              <Image
                src={storyImages.main.src}
                alt={storyImages.main.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 left-0 w-[42%] border-[6px] border-ivory sm:-left-6 lg:-left-12">
              <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                <Image
                  src={storyImages.detail.src}
                  alt={storyImages.detail.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <p className="ml-[48%] mt-5 font-serif text-[1.2rem] italic leading-snug text-ink-soft sm:ml-[46%]">
            Every menu begins with a conversation about your family.
          </p>
        </div>
      </div>
    </section>
  );
}
