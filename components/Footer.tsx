import { contact, nav } from "@/lib/content";
import Kasavu from "./Kasavu";
import { FlameMark, InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[#2e0b12] text-ivory/80">
      <Kasavu />
      <div className="container-x pb-28 pt-14 sm:pb-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-ivory">
              <FlameMark className="h-5 w-5 text-gold-soft" />
              <span className="font-serif text-[1.9rem] font-semibold leading-none tracking-[0.04em]">Muhabath</span>
            </p>
            <p className="mt-3 max-w-xs text-[0.95rem]">
              Luxury wedding &amp; event catering across {contact.regions}.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[0.95rem]">
              {[...nav, { href: "#contact", label: "Contact" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-gold-soft">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-[0.95rem] hover:text-gold-soft"
          >
            <InstagramIcon className="h-5 w-5" />
            {contact.instagramHandle}
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Muhabath Catering</p>
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-gold-soft/50 px-3.5 py-1.5 text-xs text-gold-soft sm:self-auto">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold-soft" />
            Demo concept for Muhabath Catering. Photography from Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
