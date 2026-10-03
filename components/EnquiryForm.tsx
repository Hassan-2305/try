"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

type Fields = { name: string; phone: string; date: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", date: "", message: "" };

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (!f.name.trim()) errors.name = "Enter your name so we know who to ask for.";
  const digits = f.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  if (digits.length !== 10) errors.phone = "Enter a 10-digit mobile number.";
  if (!f.date) errors.date = "Choose your event date. An approximate date is fine.";
  return errors;
}

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function EnquiryForm() {
  const id = useId();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Fields | null>(null);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    // Demo only: no backend. The real site would post this to email/CRM.
    setSent(fields);
  };

  // Set after mount so server and browser render the same markup.
  const [today, setToday] = useState<string>();
  useEffect(() => {
    const d = new Date();
    setToday(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().split("T")[0]);
  }, []);

  const input =
    "mt-2 block w-full rounded-sm border bg-white/70 px-4 py-3.5 text-[1rem] text-ink placeholder:text-ink-soft/60 transition-colors focus:border-maroon focus:bg-white focus:outline-none";

  const field = (key: keyof Fields) => ({
    id: `${id}-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined,
    className: `${input} ${errors[key] ? "border-maroon" : "border-ink/20"}`,
  });

  const errorText = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-1.5 text-sm text-maroon">
        {errors[key]}
      </p>
    ) : null;

  return (
    <div className="relative bg-ivory text-ink">
      <div className="kasavu absolute inset-x-0 top-0" aria-hidden />
      <div className="px-5 pb-8 pt-12 sm:px-9 sm:pb-10 sm:pt-14">
        <AnimatePresence mode="wait" initial={false}>
          {sent ? (
            <m.div
              key="thanks"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              role="status"
            >
              <h3 className="font-serif text-[2.2rem] leading-tight text-maroon">
                Thank you, {sent.name.trim().split(" ")[0]}.
              </h3>
              <p className="mt-4 text-ink-soft">
                Your enquiry for {formatDate(sent.date)} is with us. A planner will call you on {sent.phone} within a
                day.
              </p>
              <p className="mt-6 text-ink-soft">Prefer WhatsApp? Send the same details there now.</p>
              <a
                href={whatsappLink(
                  `Hello Muhabath, I'm ${sent.name.trim()}. Our event date is ${formatDate(sent.date)}. ${
                    sent.message.trim() ? sent.message.trim() + " " : ""
                  }Please call me on ${sent.phone}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-full sm:w-auto"
              >
                <WhatsAppIcon />
                Send on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setFields(empty);
                  setSent(null);
                }}
                className="mt-4 block text-sm text-ink-soft underline underline-offset-4 hover:text-maroon"
              >
                Send another enquiry
              </button>
            </m.div>
          ) : (
            <m.form
              key="form"
              noValidate
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              aria-labelledby={`${id}-title`}
            >
              <h3 id={`${id}-title`} className="font-serif text-[2rem] leading-tight text-ink">
                Request a quote
              </h3>
              <p className="mt-2 text-[0.95rem] text-ink-soft">We reply within a day. No obligation.</p>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor={`${id}-name`} className="text-[0.95rem] font-medium">
                    Your name
                  </label>
                  <input type="text" autoComplete="name" placeholder="e.g. Fathima Rahman" {...field("name")} />
                  {errorText("name")}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${id}-phone`} className="text-[0.95rem] font-medium">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="98470 12345"
                      {...field("phone")}
                    />
                    {errorText("phone")}
                  </div>
                  <div>
                    <label htmlFor={`${id}-date`} className="text-[0.95rem] font-medium">
                      Event date
                    </label>
                    <input type="date" min={today} {...field("date")} />
                    {errorText("date")}
                  </div>
                </div>

                <div>
                  <label htmlFor={`${id}-message`} className="text-[0.95rem] font-medium">
                    Tell us about your event <span className="font-normal text-ink-soft">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Venue, number of guests, the dishes you're dreaming of…"
                    {...field("message")}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-7 w-full">
                Request a quote
              </button>
              <p className="mt-4 text-center text-xs text-ink-soft">
                Concept demo: nothing is sent or stored from this form.
              </p>
            </m.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
