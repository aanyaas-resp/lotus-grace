export const brand = {
  name: "Lotus Grace",
  shortName: "Lotus Grace",
  legalName: "7 Lotus Elevenses Private Limited",
  tagline: "Luxury Banquets & Events",
  logo: "/images/logo.png",
  location: "Ghaziabad",
  phone: "+91 93554 70701",
  phoneAlt: "+91 88010 34890",
  whatsapp: "919355470701",
  email: "celebrations@lotusgrace.in",
  address:
    "7/1, Site-4, Industrial Area, Sahibabad, Ghaziabad, Uttar Pradesh 201010",
  hours: "Open daily, 9:00 AM – 10:00 PM",
  instagramUrl: "https://instagram.com/_lotusgrace",
  instagramHandle: "@_lotusgrace",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Lotus+Grace+Sahibabad+Ghaziabad",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Lotus+Grace+Sahibabad+Ghaziabad",
};

export const ribbon =
  "Now booking weddings, engagements and events for the coming season — call us to check your date";

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Celebrations", href: "#celebrations" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#contact" },
];

export const hero = {
  badge: "A Banquet Venue in Sahibabad",
  headline: "A Beautiful Setting for",
  headlineAccent: "Your Big Celebration",
  body: "Sahibabad's go-to venue for weddings, engagements and corporate events — spacious halls, good food, and a team that takes care of the details.",
  ctaPrimary: { label: "Enquire Now", href: "#contact" },
  ctaSecondary: {
    label: "WhatsApp Us",
    href: `https://wa.me/${brand.whatsapp}?text=Hi%20Lotus%20Grace%2C%20I%27d%20like%20to%20enquire%20about%20booking.`,
  },
  conciergeBadge: "Quick Response Team",
  stats: [
    { value: "1,200+", label: "Guest Capacity" },
    { value: "4", label: "Banquet Halls" },
    { value: "500+", label: "Parking Spaces" },
    { value: "In-House", label: "Catering Team" },
  ],
};

export const about = {
  eyebrow: "A Venue Sahibabad Trusts",
  headline: "More Than a Venue.",
  headlineAccent: "A Place Your Family Will Remember.",
  paragraphs: [
    "Hotel Lotus Grace has hosted weddings, engagements and family celebrations in Sahibabad, Ghaziabad for years. We keep things simple: spacious halls, genuine hospitality, and a team that handles the details so you don't have to.",
    "Set inside Sahibabad's Industrial Area Site 4, the venue offers easy access, ample parking and fully soundproofed halls — so your celebration stays private and peaceful, whatever's happening outside.",
  ],
  features: [
    {
      icon: "column",
      title: "Spacious Halls",
      description:
        "24-foot ceilings and grand interiors, comfortable for both intimate gatherings and large celebrations.",
    },
    {
      icon: "utensils",
      title: "Multi-Cuisine Catering",
      description:
        "Our in-house chefs prepare Indian, Continental and regional menus tailored to your guests.",
    },
    {
      icon: "concierge",
      title: "Personal Event Manager",
      description:
        "One dedicated coordinator with you from the first meeting to the final toast.",
    },
  ],
  quoteImageCaption: "Every celebration here becomes a memory worth keeping.",
};

export const milestones = {
  eyebrow: "One Venue, Every Occasion",
  headline: "A Grand Stage for Every Milestone",
  intro:
    "From wedding baraats to birthday parties, our pillarless halls adapt to whatever you're celebrating — with the space and staff to do it properly.",
  tabs: [
    {
      id: "weddings",
      label: "Weddings",
      kicker: "For Your Big Day",
      title: "Traditional Rituals,",
      titleAccent: "Handled With Care",
      description:
        "We take care of the baraat welcome, set up the mandap under our 24-foot ceilings, and offer a private bridal suite for getting ready. Our halls seat up to 1,200 guests for the reception dinner.",
      tags: ["Baraat & Aarti Welcome", "Seats up to 1,200"],
      linkLabel: "Get Our Wedding Brochure & Check Dates",
    },
    {
      id: "engagements",
      label: "Engagements & Roka",
      kicker: "The First Celebration",
      title: "A Smaller Occasion,",
      titleAccent: "Just as Special",
      description:
        "For ring ceremonies and roka functions, we set up an intimate staging area, candlelit décor, and a private lounge for family. Our team also arranges a photographer to capture the moment.",
      tags: ["Ring Ceremony Staging", "Private Family Lounge"],
      linkLabel: "Get Our Engagement Brochure & Check Dates",
    },
    {
      id: "parties",
      label: "Birthdays & Parties",
      kicker: "Any Occasion Worth Marking",
      title: "Birthdays, Anniversaries,",
      titleAccent: "and Everything In Between",
      description:
        "Choose a décor theme, add a live chaat or dessert counter, and let our team handle the planning and setup — for birthdays, anniversaries, or any celebration you have in mind.",
      tags: ["Themed Décor", "Live Food Counters"],
      linkLabel: "Get Our Party Brochure & Check Dates",
    },
    {
      id: "corporate",
      label: "Corporate Events",
      kicker: "For Business Gatherings",
      title: "Conferences and Galas,",
      titleAccent: "Run Smoothly",
      description:
        "Our pillarless hall comes with AV and sound equipment built in, plus separate breakout rooms for meetings. We handle catering and hospitality so your team can focus on the event.",
      tags: ["AV & Sound Included", "Breakout Meeting Rooms"],
      linkLabel: "Get Our Corporate Brochure & Check Dates",
    },
  ],
};

export const experience = {
  eyebrow: "What's Included",
  headline: "What You Can Expect",
  intro:
    "From the space itself to the food and the service, here's what goes into every event we host.",
  cards: [
    {
      chapter: "The Halls",
      title: "Spacious, Pillar-Free Halls",
      dark: false,
      description:
        "Three pillar-free halls with clear sightlines from every seat, so no one misses the ceremony. Each hall has its own foyer where guests can arrive and settle in before moving inside.",
      stats: [
        { value: "14 ft", label: "Ceiling Height" },
        { value: "Zero", label: "Pillars" },
        { value: "35,000", label: "sq. ft. Total" },
      ] as { value: string; label: string }[] | undefined,
      list: undefined as string[] | undefined,
    },
    {
      chapter: "The Food",
      title: "Food People Actually Talk About",
      dark: true,
      description:
        "Our kitchen team serves everything from classic North Indian and Awadhi dishes to live grill counters, fresh tandoor breads, and a dessert counter guests remember.",
      stats: undefined as { value: string; label: string }[] | undefined,
      list: [
        "Separate kitchen for pure vegetarian catering",
        "Live chaat and tandoor counters",
        "Menus customised to your region and preferences",
      ] as string[] | undefined,
    },
    {
      chapter: "The Service",
      title: "Attentive, Not Overbearing Staff",
      dark: false,
      description:
        "Our service staff are trained to be attentive without hovering — topping up drinks, clearing plates, and helping guests find their way, so you don't have to think about it.",
      stats: undefined as { value: string; label: string }[] | undefined,
      list: undefined as string[] | undefined,
    },
    {
      chapter: "The Comfort",
      title: "Comfort for the Host's Family Too",
      dark: false,
      description:
        "Hosting a big event is tiring enough without worrying about your own comfort. We provide air-conditioned family suites with proper mirrors and lighting, a separate entry for close family, and valet parking that keeps things moving outside.",
      stats: [
        { value: "500+", label: "Valet Capacity" },
        { value: "Air-Conditioned", label: "Family Suites" },
      ] as { value: string; label: string }[] | undefined,
      list: undefined as string[] | undefined,
    },
  ],
};

export const gallery = {
  eyebrow: "See It For Yourself",
  headline: "A Look Around the Venue",
  tabs: ["All", "Weddings", "Engagements & Parties", "Food & Catering"],
  images: [
    { id: "gallery-1", tab: "Weddings", size: "wide" },
    { id: "gallery-2", tab: "Weddings", size: "tall" },
    { id: "gallery-3", tab: "Engagements & Parties", size: "tall" },
    { id: "gallery-4", tab: "Engagements & Parties", size: "wide" },
    { id: "gallery-5", tab: "Food & Catering", size: "wide" },
    { id: "gallery-6", tab: "Weddings", size: "wide" },
    { id: "gallery-7", tab: "Food & Catering", size: "wide" },
  ],
  linkLabel: "Follow Us on Instagram",
};

export const whyChooseUs = {
  eyebrow: "Why Choose Us",
  headline: "Why Families Choose Lotus Grace",
  intro:
    "We know how much these days matter, so we focus on getting the details right — from the first meeting to the last guest leaving.",
  features: [
    {
      icon: "sparkle",
      title: "Great Ambience",
      description:
        "24-foot ceilings, warm lighting, and fresh floral décor that make every event feel special.",
      linkLabel: "Learn More",
    },
    {
      icon: "wifi",
      title: "Reliable Tech & Power",
      description:
        "Good sound and lighting equipment, full power backup, and live streaming for guests who can't make it in person.",
      linkLabel: "Learn More",
    },
    {
      icon: "hands",
      title: "A Dedicated Event Manager",
      description:
        "One person from our team stays with you from the first meeting through to the event itself, so you always know who to call.",
      linkLabel: "Learn More",
    },
    {
      icon: "location",
      title: "Prime Location",
      description:
        "Easy to reach from Anand Vihar, Vaishali and Indirapuram — usually 10–15 minutes away — with plenty of valet parking on site.",
      linkLabel: "Learn More",
    },
  ],
};

export const testimonials = {
  eyebrow: "What Our Guests Say",
  headline: "Reviews From Real Guests",
  body: "A few words from families and companies who've celebrated with us.",
  rating: "4.4",
  reviewCount: "2,347 Google reviews",
  reviews: [
    {
      quote:
        "Our daughter's wedding went beautifully. People are still talking about the chaat counter.",
      body: "The team managed the pheras ceremony smoothly and the flowers stayed fresh throughout the day. We didn't have to worry about a thing.",
      name: "Mr. & Mrs. Gupta",
      context: "Anand Vihar, Delhi — Daughter's Wedding",
    },
    {
      quote:
        "Every guest had a clear view of the pheras — no one had to crane their neck to see.",
      body: "The team coordinated everything so well that we barely had to think about logistics on the day. Would recommend for a stress-free wedding.",
      name: "Dr. Rohan & Neha Verma",
      context: "Indirapuram, Ghaziabad — Wedding",
    },
    {
      quote:
        "We held our annual leadership summit here. The AV setup and sound were spot on.",
      body: "Staff handled 500-plus attendees without any hiccups. A solid option for corporate events in the NCR area.",
      name: "Director of Operations",
      context: "Regional FMCG Company — Annual Summit",
    },
  ],
  linkLabel: "Read More Reviews on Google",
};

export const contact = {
  eyebrow: "Get In Touch",
  headline: "Check Availability for Your Date",
  body: "Book a venue tour and food tasting session with our events team.",
  eventTypes: [
    "Wedding",
    "Engagement / Roka",
    "Birthday / Social Event",
    "Corporate Event",
  ],
  guestOptions: ["0–100", "100–300", "300–600", "600+"],
  submitLabel: "Request a Quote",
  privacyNote: "We'll get back to you within 24 hours. No spam, ever.",
  cardBadge: "Call Us Directly",
  cta2: {
    label: "Chat With Us on WhatsApp",
    href: `https://wa.me/${brand.whatsapp}?text=Hi%20Lotus%20Grace%2C%20I%27d%20like%20to%20enquire%20about%20booking.`,
  },
};

export const footer = {
  brandDescription:
    "A banquet venue in Sahibabad, Ghaziabad, hosting weddings, engagements and corporate events.",
  tagline: "A venue for weddings, celebrations and corporate events.",
  subtagline: "Come see the space for yourself — book a visit anytime.",
  year: new Date().getFullYear(),
  columns: [
    {
      title: "Celebrations",
      links: [
        { label: "Weddings", href: "#celebrations" },
        { label: "Engagements & Roka", href: "#celebrations" },
        { label: "Birthdays & Parties", href: "#celebrations" },
        { label: "Corporate Events", href: "#celebrations" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Halls & Facilities", href: "#experience" },
        { label: "Reviews", href: "#reviews" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ],
  directConnect: {
    title: "Contact & Tours",
    googleBadge: "Highly Rated on Google",
  },
  bottomNote: "A trusted venue for weddings and events in Ghaziabad.",
};