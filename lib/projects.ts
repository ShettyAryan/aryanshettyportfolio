export interface Project {
  slug: string
  name: string
  summary: string
  industry: string
  year: string
  role: string
  liveUrl: string
  dark?: boolean
  /** Shown on the home page (three slots). */
  homeFeatured?: boolean
  homeOrder?: number
  mockupAccent?: string
  /** Full `https://` URL (e.g. Cloudinary) or path under `public`, e.g. `/images/projects/hero.jpg` */
  screenshot?: string
  timeline?: string
  tools?: string[]
  problem?: string
  goals?: { icon: string; title: string; desc: string }[]
  process?: { step: string; title: string; body: string }[]
  outcome?: string
}

/** Absolute URLs or paths relative to `public` (with or without leading `/`). */
export function resolveScreenshotSrc(raw?: string | null): string | undefined {
  const s = raw?.trim()
  if (!s) return undefined
  if (/^https?:\/\//i.test(s)) return s
  if (s.startsWith('/')) return s
  return `/${s.replace(/^\/+/, '')}`
}

export const projects: Project[] = [
  {
    slug: "elegance-bags",
    name: "Elegance Bags",
    summary:
      "A sleek, conversion-optimized D2C e-commerce platform focused on elevating brand perception and maximizing online sales.",
    industry: "D2C · E-commerce",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3–4 weeks",
    tools: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
    problem:
      "D2C brands often struggle with poor product discoverability and weak storytelling, leading to low conversion rates and high drop-offs.",
    outcome:
      "Delivered a streamlined shopping experience with improved navigation, resulting in stronger product engagement and a smoother checkout journey.",
    liveUrl: "https://elegancebags.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536129/elegancebags_ycnxnb.png",
    dark: true,
    homeFeatured: true,
    homeOrder: 3,
    mockupAccent: "#0033FF",
  },
  {
    slug: "studio-gifting",
    name: "Studio Gifting",
    summary:
      "A structured B2B corporate gifting website designed to attract and convert high-value bulk order clients.",
    industry: "B2B · Corporate Gifting",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Corporate gifting businesses lack structured digital funnels to attract and convert enterprise clients effectively.",
    outcome:
      "Built a trust-driven enquiry system with curated catalog browsing, improving inbound corporate leads.",
    liveUrl: "https://studiogifting.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536115/gifting_i6d6oq.png",
    dark: true,
    homeFeatured: true,
    homeOrder: 2,
    mockupAccent: "#0033FF",
  },
  {
    slug: "nonnas-bakery",
    name: "Nonna's Bakery",
    summary:
      "A premium, aesthetic landing page designed to showcase bakery products and drive conversions.",
    industry: "Food & Beverage",
    year: "2025",
    role: "Designer & Developer",
    timeline: "2 weeks",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    problem:
      "Local bakeries often lack strong online presence and branding, limiting their ability to attract new customers.",
    outcome:
      "Created a visually engaging and mobile-first experience that enhances brand identity and product appeal.",
    liveUrl: "https://nonnasbakery.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772817587/noonas_aupkfc.png",
    dark: false,
    homeFeatured: true,
    homeOrder: 1,
    mockupAccent: "#C8A97A",
  },
  {
    slug: "the-paradise",
    name: "The Paradise",
    summary:
      "A luxury hospitality website focused on creating an immersive and premium digital experience.",
    industry: "Hospitality",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3 weeks",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    problem:
      "Hospitality brands often fail to reflect their premium offline experience digitally.",
    outcome:
      "Delivered a design-forward website that enhances brand perception and drives reservations.",
    liveUrl: "https://theparadise.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536134/paradise_wjppcg.png",
    dark: true,
    homeFeatured: false,
    homeOrder: 4,
    mockupAccent: "#0033FF",
  },
  {
    slug: "sharma-enterprise",
    name: "Sharma Enterprise",
    summary:
      "A structured, professional multi-page website built for a chartered accountant firm to enhance credibility and generate client enquiries.",
    industry: "Finance · CA Firm",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3–4 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Chartered accountant firms often lack a strong digital presence that effectively communicates expertise and builds trust with potential clients.",
    outcome:
      "Delivered a credibility-focused platform with clear service breakdowns and strong trust signals, improving enquiry generation.",
    liveUrl: "https://sharmaenterprise.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1774456788/sharmaenterprise_babvrn.png",
    dark: false,
    homeFeatured: false,
    homeOrder: 4,
    mockupAccent: "#0033FF",
  },
  {
    slug: "quiet-quarters",
    name: "Quiet Quarters",
    summary:
      "A premium architect portfolio website built to increase credibility and consultation bookings.",
    industry: "Architecture · Real Estate",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Architects struggle to showcase their work in a way that builds trust and converts visitors into clients.",
    outcome:
      "Developed a credibility-focused platform with strong trust signals and improved enquiry flow.",
    liveUrl: "https://quietquarters.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1773571904/quietquarters_brqffb.png",
    dark: true,
    homeFeatured: false,
    homeOrder: 5,
    mockupAccent: "#0033FF",
  },
  {
    slug: "dr-shettys-cosmetology",
    name: "Dr. Shetty’s Cosmetology",
    summary:
      "A professional medical website designed to build patient trust and increase consultation bookings.",
    industry: "Healthcare · Cosmetology",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Medical clinics often lack credibility-focused digital experiences, reducing patient trust.",
    outcome:
      "Built a patient-centric platform with clear service communication and trust-building elements.",
    liveUrl: "https://drshettyscosmetology.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536140/drshettycosmetics_djt4cc.png",
    dark: false,
    homeFeatured: false,
    homeOrder: 6,
    mockupAccent: "#0033FF",
  },
  {
    slug: "bakerist-cafe",
    name: "Bakerist Cafe",
    summary:
      "An aesthetic, high-conversion landing page designed to showcase cafe offerings.",
    industry: "Food & Beverage",
    year: "2025",
    role: "Designer & Developer",
    timeline: "2 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Cafes struggle to present their offerings effectively online and attract new customers.",
    outcome:
      "Created a clean, engaging UI that improves product visibility and user experience.",
    liveUrl: "https://bakerist.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772787569/bakerist_oy6kvm.png",
    dark: false,
    homeFeatured: false,
    homeOrder: 7,
    mockupAccent: "#C8A97A",
  },
    {
    slug: "reddy-co",
    name: "Reddy & Co.",
    summary:
      "A minimalist financial advisory website designed to reflect trust, simplicity, and clarity.",
    industry: "Finance · Advisory",
    year: "2025",
    role: "Designer & Developer",
    timeline: "2–3 weeks",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    problem:
      "Financial advisory platforms often appear overly complex, making it difficult for users to trust and understand their offerings.",
    outcome:
      "Crafted a clean, intuitive interface with refined design elements that improve clarity and build user trust.",
    liveUrl: "https://reddyco.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dzq2acoyj/image/upload/v1774257678/reddyco_vkcuji.png",
    dark: true,
    homeFeatured: false,
    homeOrder: 6,
    mockupAccent: "#0033FF",
  },
  {
    slug: "summuro-ai",
    name: "Summuro AI",
    summary:
      "A SaaS web application that converts PDFs into short-form reels for easier understanding.",
    industry: "SaaS · AI",
    year: "2026",
    role: "Full Stack Developer",
    timeline: "4–5 weeks",
    tools: ["Next.js", "AI APIs", "FFmpeg"],
    problem:
      "Long-form content like PDFs is difficult to consume quickly, especially for modern users.",
    outcome:
      "Built an AI-powered system that transforms static content into engaging, digestible video formats.",
    liveUrl: "https://summuro-ai.vercel.app/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1770107029/Screenshot_2026-02-03_135239_rivftk.png",
    dark: true,
    homeFeatured: false,
    homeOrder: 2,
    mockupAccent: "#0033FF",
  },
  {
    slug: "milestones-child-clinic",
    name: "Milestones: Dr. Joshi's Child Clinic",
    summary:
      "A complete brand + web system with booking and patient management integration.",
    industry: "Healthcare",
    year: "2025",
    role: "Brand Designer & Developer",
    timeline: "5–6 weeks",
    tools: ["Next.js", "Google Sheets API", "Calendar API"],
    problem:
      "Clinics lack integrated digital systems for managing appointments and patient data efficiently.",
    outcome:
      "Delivered an end-to-end solution with booking automation and structured patient data handling.",
    liveUrl: "https://milestoneschildclinic.com/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767447370/www.milestoneschildclinic.com__2_y9i4kx.png",
    dark: false,
    homeFeatured: false,
    homeOrder: 3,
    mockupAccent: "#0033FF",
  },
  {
    slug: "aigenagentic",
    name: "AIGenAgentic Solutions",
    summary:
      "A full-stack web platform with a high-availability booking and reservation system.",
    industry: "Agency · SaaS",
    year: "2025",
    role: "Full Stack Developer",
    timeline: "6 weeks",
    tools: ["Next.js", "Node.js"],
    problem:
      "Agencies require scalable and reliable booking systems for client operations.",
    outcome:
      "Built a robust booking engine improving operational efficiency and user experience.",
    liveUrl: "https://aigenagentic.com/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632166/web1_gjxejd.png",
    dark: true,
    homeFeatured: false,
    homeOrder: 8,
    mockupAccent: "#0033FF",
  },
  {
    slug: "constructxr",
    name: "ConstructXR",
    summary:
      "A high-converting website showcasing services with integrated booking functionality.",
    industry: "Agency · PropTech",
    year: "2025",
    role: "Designer & Developer",
    timeline: "4 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Service-based agencies often lack structured websites that convert visitors into leads.",
    outcome:
      "Delivered a conversion-focused platform with clear CTAs and booking flows.",
    liveUrl: "https://www.constructxr.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web2_icgjig.png",
    dark: true,
    homeFeatured: false,
    homeOrder: 1,
    mockupAccent: "#0033FF",
  },
  {
    slug: "apex-builders",
    name: "Apex Builders",
    summary:
      "A modern real estate website focused on clarity, structure, and high-conversion user flows.",
    industry: "Real Estate",
    year: "2025",
    role: "Designer & Developer",
    timeline: "3 weeks",
    tools: ["Next.js", "Tailwind CSS"],
    problem:
      "Real estate websites are often cluttered, making it difficult for users to explore properties.",
    outcome:
      "Designed a minimal, structured platform that improves browsing and enquiry generation.",
    liveUrl: "https://apexbuilders.constructdev.in/",
    screenshot:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536112/apexbuilders_yxm3zl.png",
    dark: false,
    homeFeatured: false,
    homeOrder: 9,
    mockupAccent: "#0033FF",
  },
];

export function getHomeFeaturedProjects(): Project[] {
  return [...projects]
    .filter((p) => p.homeFeatured)
    .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0))
}
