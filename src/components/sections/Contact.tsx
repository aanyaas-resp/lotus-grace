"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { contact, brand } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState(contact.eventTypes[0]);
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState(contact.guestOptions[1]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Hi Hotel Lotus Grace, I'd like to reserve a date.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      eventType && `Celebration type: ${eventType}`,
      eventDate && `Event date: ${eventDate}`,
      guests && `Estimated guests: ${guests}`,
      message && `Notes: ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${brand.whatsapp}?text=${text}`, "_blank");
  }

  return (
    <section id="contact" className="border-t border-primary/5 bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 sm:px-10 md:py-32 lg:grid-cols-5 lg:gap-8">
        <Reveal direction="left" className="lg:col-span-3">
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">
              {contact.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg leading-tight text-primary">
              {contact.headline}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-primary/80">{contact.body}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Sanghania"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98100 00000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="eventType">Celebration Type</Label>
                <select
                  id="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full border-0 border-b border-primary/20 bg-transparent py-3 text-primary outline-none transition-colors focus:border-secondary"
                >
                  {contact.eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="eventDate">Preferred Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Estimated Guest Count</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {contact.guestOptions.map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setGuests(g)}
                    className={cn(
                      "rounded-lg border px-2 py-2.5 text-xs sm:text-sm transition-colors",
                      guests === g
                        ? "border-primary bg-primary text-neutral"
                        : "border-primary/15 text-primary/60 hover:border-secondary hover:text-secondary"
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Celebration Preferences &amp; Requirements</Label>
              <Textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Pure-veg preferences, Mahurat/timing requirements, floral themes, or décor styles..."
              />
            </div>

            <Button type="submit" variant="primary" showArrow={false} className="mt-1 w-full sm:w-fit">
              {contact.submitLabel}
            </Button>
            <p className="text-sm text-primary/60">{contact.privacyNote}</p>
          </form>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex flex-col gap-5 rounded-xl bg-gradient-to-br from-primary via-primary-container to-tertiary-container p-space-lg text-surface">
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-container">
              {contact.cardBadge}
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl">{brand.name}</h3>

            <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-surface-container/85 transition-colors hover:text-secondary-container">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              {brand.address}
            </a>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-surface-container/85 transition-colors hover:text-secondary-container">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-sm text-surface-container/85 transition-colors hover:text-secondary-container">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {brand.email}
            </a>
            <p className="text-xs text-surface-container/60">{brand.hours}</p>

            <Button
              href={`https://wa.me/${brand.whatsapp}`}
              variant="whatsapp"
              showArrow={false}
              className="mt-1 w-full"
            >
              Chat With Us on WhatsApp
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-primary/10 bg-surface-container-low shadow-sm">
            <iframe
              title="Hotel Lotus Grace location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
              className="h-72 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="block px-space-md py-space-sm text-xs font-semibold uppercase tracking-[0.12em] text-secondary transition-colors hover:text-primary">
              View on Google Maps · Site 4, Sahibabad ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}