import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footer, brand } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface-container-high">
      <div className="mx-auto max-w-7xl px-margin py-16 sm:px-margin-tablet lg:px-margin-desktop lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-space-sm lg:col-span-5">
            <div className="flex items-center gap-space-xs">
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-8 w-auto object-contain" />
              <span className="font-headline-sm uppercase tracking-wider text-secondary-fixed">
                {brand.shortName}
              </span>
            </div>
            <p className="max-w-sm text-sm text-surface-container-highest">
              {footer.brandDescription}
            </p>
            <span className="flex items-start gap-2 text-xs leading-relaxed text-secondary-fixed-dim">
              <MapPin className="mr-1 inline-block h-3.5 w-3.5" />
              {brand.address}
            </span>
            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-space-xs inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-fixed transition-colors hover:text-surface"
            >
              <InstagramIcon className="h-4 w-4" />
              {brand.instagramHandle}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-space-xs lg:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary-fixed">
                {column.title}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-surface-container-highest transition-colors hover:text-secondary-fixed"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-space-sm border-l border-surface/15 pl-5 lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary-fixed">
              Direct Contact
            </span>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-surface-container-highest transition-colors hover:text-secondary-fixed">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary-fixed" />
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-sm text-surface-container-highest transition-colors hover:text-secondary-fixed">
              <Mail className="h-4 w-4 shrink-0 text-secondary-fixed" />
              {brand.email}
            </a>
            <p className="mt-space-xs text-xs leading-relaxed text-surface-container-highest">
              Daily venue tours from 10 AM - 8 PM.
              <br />Prior RSVP recommended.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-surface/10 px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-on-primary-container sm:flex-row sm:items-center sm:justify-between">
          <p>© {footer.year} {brand.name}. {brand.legalName}. All rights reserved.</p>
          <p>
            Website designed &amp; developed by{" "}
            <a href="https://aniketwebdev.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary-fixed transition-colors hover:text-surface">
              aniketwebdev.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
