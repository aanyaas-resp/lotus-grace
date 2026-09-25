import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Celebrations from "@/components/sections/Celebrations";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

const siteUrl = "https://lotusgrace.vercel.app";

const venueStructuredData = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Hotel Lotus Grace",
  description:
    "Luxury banquet and event venue in Sahibabad, Ghaziabad for weddings, engagements, social celebrations and corporate galas.",
  url: siteUrl,
  image: `${siteUrl}/images/herobg.png`,
  logo: `${siteUrl}/images/logo.png`,
  telephone: "+91 93554 70701",
  email: "celebrations@lotusgrace.in",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot Alpha, Sahibabad Industrial Area Site 4",
    addressLocality: "Sahibabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201010",
    addressCountry: "IN",
  },
  areaServed: ["Ghaziabad", "Sahibabad", "Delhi NCR"],
  sameAs: ["https://instagram.com/_lotusgrace"],
};

export default function Home() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueStructuredData) }}
      />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Celebrations />
        <Experience />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
