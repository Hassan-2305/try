import { contact, whatsappLink } from "@/lib/content";
import EnquiryForm from "./EnquiryForm";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-wine py-20 text-ivory sm:py-28 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <h2 id="contact-title" className="max-w-[12ch] text-[clamp(2.6rem,10vw,4.6rem)] text-ivory">
            Let&rsquo;s plan your feast.
          </h2>
          <p className="mt-6 max-w-[30rem] text-[1.05rem] text-ivory/80">
            Wedding-season dates are booked months ahead. Send us your date today and a planner will call you back
            within a day, or message us directly.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-9 w-full sm:w-auto"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>

          <ul className="mt-10 max-w-[30rem] divide-y divide-ivory/15 border-y border-ivory/15">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-4 py-4 hover:text-gold-soft">
                <PhoneIcon className="h-5 w-5 shrink-0 text-gold-soft" />
                <span>
                  <span className="block text-sm text-ivory/65">Call us</span>
                  {contact.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 hover:text-gold-soft"
              >
                <InstagramIcon className="h-5 w-5 shrink-0 text-gold-soft" />
                <span>
                  <span className="block text-sm text-ivory/65">Follow our feasts</span>
                  {contact.instagramHandle}
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 py-4">
              <PinIcon className="h-5 w-5 shrink-0 text-gold-soft" />
              <span>
                <span className="block text-sm text-ivory/65">Where we cater</span>
                Across {contact.regions}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
