"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { contact, brand } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState(contact.eventTypes[0]);
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState(contact.guestOptions[1]);
  const [message, setMessage] = useState("");

  const nameValid = name.trim().length > 1;
  const phoneValid = /^\d{10}$/.test(phone);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `Hi ${brand.name}, I'd like to reserve a date.`,
      name && `Name: ${name}`,
      phone && `Phone: +91 ${phone}`,
      eventType && `Celebration type: ${eventType}`,
      eventDate && `Event date: ${eventDate}`,
      guests && `Estimated guests: ${guests}`,
      message && `Notes: ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${brand.whatsapp}?text=${text}`, "_blank");
  }

  const todayISO = new Date().toISOString().split("T")[0];

  return (
    <section
      id="contact"
      className="border-t border-primary/5 bg-gradient-to-br from-surface via-surface-container-low to-surface-container"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 sm:px-10 md:py-20 lg:grid-cols-5 lg:gap-8">
        {/* Info + map: left on desktop, second on mobile */}
        <Reveal
          direction="left"
          delay={0.1}
          className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-2"
        >
          <div className="flex flex-col gap-3 rounded-xl bg-gradient-to-br from-primary via-primary-container to-tertiary-container p-6 text-surface">
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-container">
              {contact.cardBadge}
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl">{brand.name}</h3>

            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-surface-container/85 transition-colors hover:text-secondary-container"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              {brand.address}
            </a>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-surface-container/85 transition-colors hover:text-secondary-container"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-sm text-surface-container/85 transition-colors hover:text-secondary-container"
            >
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {brand.email}
            </a>
            <p className="text-xs text-surface-container/60">{brand.hours}</p>

            <Button href={`https://wa.me/${brand.whatsapp}`} variant="whatsapp" showArrow={false} className="mt-1 w-full">
              Chat With Us on WhatsApp
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-primary/10 bg-surface-container-low shadow-sm">
            <iframe
              title="Hotel Lotus Grace location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
              className="h-48 w-full border-0 sm:h-56"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-secondary transition-colors hover:text-primary"
            >
              View on Google Maps · Site 4, Sahibabad ↗
            </a>
          </div>
        </Reveal>

        {/* Form: right on desktop, first on mobile */}
        <Reveal direction="right" className="order-1 lg:order-2 lg:col-span-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-secondary">
              {contact.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg leading-tight text-primary">
              {contact.headline}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-primary/80">{contact.body}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4" noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="name"
                label="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                valid={nameValid}
                placeholder="e.g. Rajesh Sanghania"
              />
              <Field
                id="phone"
                label="Mobile Number"
                type="tel"
                inputMode="numeric"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                valid={phoneValid}
                prefix="+91"
                placeholder="98100 00000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary/70">Celebration Type</span>
              <ChipGroup options={contact.eventTypes} value={eventType} onChange={setEventType} columns={3} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="eventDate"
                label="Preferred Date"
                type="date"
                min={todayISO}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                valid={Boolean(eventDate)}
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-primary/70">Estimated Guest Count</span>
                <ChipGroup options={contact.guestOptions} value={guests} onChange={setGuests} columns={4} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-primary/70">
                Celebration Preferences &amp; Requirements
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Pure-veg preferences, Mahurat/timing requirements, floral themes, or décor styles..."
                className="w-full resize-none rounded-lg border border-primary/15 bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-primary/35 focus:border-secondary"
              />
            </div>

            <Button type="submit" variant="primary" showArrow={false} className="mt-1 w-full sm:w-fit">
              {contact.submitLabel}
            </Button>
            <p className="text-sm text-primary/60">{contact.privacyNote}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Self-built form fields ---------- */

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  valid,
  prefix,
  inputMode,
  min,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  valid?: boolean;
  prefix?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  min?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-primary/70">
        {label}
        {required && " *"}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-primary/40">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type={type}
          inputMode={inputMode}
          min={min}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-lg border border-primary/15 bg-surface py-2.5 pr-10 text-sm text-primary outline-none transition-colors placeholder:text-primary/35 focus:border-secondary",
            prefix ? "pl-14" : "pl-4"
          )}
        />
        {valid && (
          <Check
            className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

function ChipGroup({
  options,
  value,
  onChange,
  columns = 3,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  columns?: number;
}) {
  const colClass =
    columns === 4 ? "grid-cols-2 sm:grid-cols-4" : columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2";
  return (
    <div className={cn("grid gap-2", colClass)}>
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={active}
            className={cn(
              "rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors sm:text-sm",
              active
                ? "border-primary bg-primary text-neutral"
                : "border-primary/15 text-primary/60 hover:border-secondary hover:text-secondary"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}