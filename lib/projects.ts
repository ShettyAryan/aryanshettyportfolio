export interface Project {
  slug: string
  name: string
  summary: string
  industry: string
  year: string
  role: string
  timeline: string
  tools: string[]
  problem: string
  goals: { icon: string; title: string; desc: string }[]
  process: { step: string; title: string; body: string }[]
  outcome: string
  liveUrl: string
  dark?: boolean
  featured?: boolean
  nextProject?: string
}

export const projects: Project[] = [
  {
    slug: 'financebro',
    name: 'FinanceBro',
    summary: 'A gamified finance learning platform designed to make investing education engaging and interactive.',
    industry: 'Finance · EdTech',
    year: '2024',
    role: 'Product Designer & Developer',
    timeline: '6 weeks',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    problem:
      'Most finance education platforms are dense, jargon-heavy, and boring — causing high drop-off before users build any real knowledge. FinanceBro needed to flip that experience entirely.',
    goals: [
      { icon: '🎯', title: 'Increase retention', desc: 'Keep users engaged through gamification and milestone systems' },
      { icon: '📐', title: 'Simplify complexity', desc: 'Make investing concepts digestible for complete beginners' },
      { icon: '📈', title: 'Drive conversion', desc: 'Convert free learners into premium subscribers' },
    ],
    process: [
      { step: '01', title: 'Research', body: 'Analysed 5 competitor apps, conducted user interviews with 8 first-time investors, and mapped where existing platforms lose users.' },
      { step: '02', title: 'Information Architecture', body: 'Redesigned the learning path into 3 progressive tracks. Users pick their level — eliminating the intimidation of an overwhelming course library.' },
      { step: '03', title: 'Wireframes', body: 'Low-fidelity wireframes focused on the core loop: read a concept, answer a quick quiz, earn XP. Tested with 4 users before moving to visual design.' },
      { step: '04', title: 'UI Design', body: 'Built a warm, approachable visual system — avoiding the cold green-and-charts aesthetic of traditional finance apps. Progress bars, streaks, and achievement badges designed at full fidelity in Figma.' },
      { step: '05', title: 'Development', body: 'Implemented in Next.js with Framer Motion for all interaction states. Custom XP system and streak logic built with local state and API calls.' },
    ],
    outcome:
      'Early user testing showed a 40% improvement in course completion rates compared to the previous format. Users described the experience as "actually fun" — a first for financial education feedback.',
    liveUrl: 'https://financebro.in',
    dark: true,
    featured: true,
    nextProject: 'rishil-enterprise',
  },
  {
    slug: 'rishil-enterprise',
    name: 'Rishil Enterprise',
    summary: 'Financial services website redesigned to simplify complex offerings and dramatically improve lead generation.',
    industry: 'Financial Services',
    year: '2024',
    role: 'UI/UX Designer & Developer',
    timeline: '4 weeks',
    tools: ['Figma', 'Webflow', 'Lottie'],
    problem:
      'The client offered multiple financial services but users struggled to understand what they actually did — and left before converting. The existing site had no clear hierarchy, mixed messaging, and zero trust signals.',
    goals: [
      { icon: '🗂️', title: 'Simplify navigation', desc: 'Make every service immediately understandable on first visit' },
      { icon: '🤝', title: 'Build trust', desc: 'Add social proof, certifications, and professional credibility signals' },
      { icon: '📬', title: 'Generate leads', desc: 'Place clear CTAs at every logical conversion point' },
    ],
    process: [
      { step: '01', title: 'Research', body: 'Audited the existing site against competitors. Identified 3 core trust signals missing: credentials, case numbers, and client testimonials.' },
      { step: '02', title: 'Information Architecture', body: 'Restructured services into 3 clear categories with a one-line description each — reducing the cognitive load on first-time visitors.' },
      { step: '03', title: 'Wireframes', body: 'Designed a clear above-the-fold value proposition, a services grid, and a trust section before the primary CTA.' },
      { step: '04', title: 'UI Design', body: 'Built a professional, conservative visual system with serif headlines, clean white space, and deep navy accents — communicating reliability without being cold.' },
      { step: '05', title: 'Development', body: 'Implemented in Webflow for easy client editing. Added subtle Lottie animations on service icons to add life without distraction.' },
    ],
    outcome:
      'The redesign significantly improved clarity — qualitative feedback showed visitors immediately understood the service offering. Lead form submissions increased in the weeks following launch.',
    liveUrl: '#',
    dark: false,
    nextProject: 'wishlist-tracker',
  },
  {
    slug: 'wishlist-tracker',
    name: 'Wishlist Price Tracker',
    summary: 'A product concept for tracking prices across platforms — designed to eliminate the pain of manual price checking.',
    industry: 'Productivity · E-Commerce',
    year: '2024',
    role: 'Product Designer',
    timeline: '3 weeks',
    tools: ['Figma', 'Principle'],
    problem:
      'Online shoppers manually check product prices across multiple platforms before buying — a tedious, unreliable process that causes decision fatigue and missed deals.',
    goals: [
      { icon: '⚡', title: 'Reduce friction', desc: 'Let users add products in under 10 seconds via browser extension or URL paste' },
      { icon: '🔔', title: 'Smart alerts', desc: 'Notify users exactly when a price drops to their target threshold' },
      { icon: '📊', title: 'Price history', desc: 'Show price trend charts to help users buy at the right moment' },
    ],
    process: [
      { step: '01', title: 'Research', body: 'Surveyed 20 online shoppers about their buying habits. 85% said they had missed deals they were tracking manually.' },
      { step: '02', title: 'Information Architecture', body: 'Designed the core app around 3 views: Wishlist, Alerts, and History — keeping navigation as flat as possible.' },
      { step: '03', title: 'Wireframes', body: 'Focused on the "add product" flow as the key moment of friction. Tested 3 different flows and landed on a URL-paste approach with instant preview.' },
      { step: '04', title: 'UI Design', body: 'Built a clean, data-forward design — price charts at the forefront, product cards minimal. Used green/red only for price movement to keep the visual language clear.' },
      { step: '05', title: 'Prototype', body: 'Delivered a full interactive prototype in Figma with transitions for the alert trigger, price drop animation, and product addition flow.' },
    ],
    outcome:
      'Concept validated through prototype testing. Users described the alert system as "the feature they had always wanted." The project is a candidate for development in 2025.',
    liveUrl: '#',
    nextProject: 'real-estate-builder',
  },
  {
    slug: 'real-estate-builder',
    name: 'Real Estate Builder',
    summary: 'High-impact marketing website for a property developer — built to convert visitors into qualified leads.',
    industry: 'Real Estate',
    year: '2024',
    role: 'UI/UX Designer & Developer',
    timeline: '5 weeks',
    tools: ['Figma', 'Webflow', 'GSAP'],
    problem:
      'The developer had a strong portfolio of properties but no website that reflected the premium quality of their work. Their digital presence was significantly behind competitors — costing them leads.',
    goals: [
      { icon: '💎', title: 'Elevate brand', desc: 'Create a premium visual presence that matches the quality of the properties' },
      { icon: '🏗️', title: 'Showcase portfolio', desc: 'Build a project gallery that makes properties aspirational, not just informational' },
      { icon: '📞', title: 'Capture leads', desc: 'Embed enquiry forms contextually throughout the site journey' },
    ],
    process: [
      { step: '01', title: 'Research', body: 'Analysed 8 premium real estate developer sites globally. Identified visual benchmarks: full-bleed photography, minimal typography, and slow deliberate animations.' },
      { step: '02', title: 'Information Architecture', body: 'Designed a narrative structure — Hero → About → Projects → Trust → Contact — that guides visitors through a considered journey.' },
      { step: '03', title: 'Wireframes', body: 'Built high-fidelity wireframes focusing on the project gallery interactions. Decided on a horizontal scroll gallery to feel different from standard grid layouts.' },
      { step: '04', title: 'UI Design', body: 'Dark, luxury aesthetic — deep charcoal backgrounds, gold accents, serif typography. Property photography as the hero asset throughout.' },
      { step: '05', title: 'Development', body: 'Implemented in Webflow with GSAP for the scroll-triggered reveal animations. Horizontal project gallery built with custom JS.' },
    ],
    outcome:
      'The client reported immediate positive feedback from prospective buyers — describing the website as "finally reflecting the standard of our properties." Enquiry form submissions tracked from launch.',
    liveUrl: '#',
    nextProject: 'financebro',
  },
]
