"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { brand } from "@/data/siteContent";

export default function FloatingActions() {
  const whatsappHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hi Lotus Grace, I'd like to enquire about booking a venue."
  )}`;
  const callHref = `tel:${brand.phone.replace(/\s/g, "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href={callHref}
        aria-label="Call Lotus Grace"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Call Lotus Grace"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-primary text-secondary-fixed shadow-[0_10px_30px_-8px_rgba(21,34,24,0.6)]"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" strokeWidth={1.75} />
      </motion.a>

      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Lotus Grace on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Message Lotus Grace on WhatsApp"
        className="relative flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)]"
        style={{ height: 52, width: 52 }}
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
        <WhatsAppIcon className="h-6 w-6" />
      </motion.a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L.06 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.16-3.47-8.43Zm-8.45 18.3h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.87 9.87 0 0 1-1.52-5.26C2.18 6.46 6.61 2.03 12.07 2.03c2.64 0 5.12 1.03 6.98 2.9a9.81 9.81 0 0 1 2.89 6.99c0 5.46-4.43 9.9-9.87 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.89 1.21 3.09c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
