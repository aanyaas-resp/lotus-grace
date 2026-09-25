import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/ui/FloatingActions";
import SmoothScroll from "@/components/layout/SmoothScroll";

const siteUrl = "https://lotusgrace.vercel.app";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: "/images/logo.png",
  },
  title: {
    default: "Lotus Grace | Luxury Banquets & Events in Ghaziabad",
    template: "%s | Lotus Grace",
  },
  description:
    "Hotel Lotus Grace is a luxury banquet and event venue in Sahibabad, Ghaziabad for weddings, engagements, social celebrations and corporate galas.",
  keywords: [
    "luxury banquet hall in Ghaziabad",
    "wedding venue in Sahibabad",
    "banquet hall near Anand Vihar",
    "corporate event venue Ghaziabad",
    "Lotus Grace Sahibabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Hotel Lotus Grace",
    title: "Lotus Grace | Luxury Banquets & Events in Ghaziabad",
    description:
      "A distinguished banquet venue in Sahibabad for royal weddings, milestone celebrations and corporate galas.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luxury banquet hall at Hotel Lotus Grace in Sahibabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Grace | Luxury Banquets & Events in Ghaziabad",
    description:
      "Luxury weddings, celebrations and corporate events at Hotel Lotus Grace, Sahibabad.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface font-[family-name:var(--font-body)] text-on-surface">
        {children}
        <SmoothScroll />
        <FloatingActions />
      </body>
    </html>
  );
}
