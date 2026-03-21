'use client'
import { motion } from 'framer-motion'
import { FadeUp, Stagger, StaggerItem } from '@/components/ui/Motion'

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="6" width="24" height="18" rx="3" />
        <path d="M10 14h12M10 18h8" />
        <circle cx="8.5" cy="10.5" r="1" fill="currentColor" stroke="none" opacity="0.5" />
      </svg>
    ),
    name: 'Product Design',
    desc: 'End-to-end product thinking, from user research to pixel-perfect UI that achieves real business outcomes.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" />
        <circle cx="16" cy="16" r="3.5" fill="currentColor" stroke="none" opacity="0.2" />
      </svg>
    ),
    name: 'UI/UX Design',
    desc: 'Interfaces that are intuitive, beautiful, and purposeful — designed for real human behaviour at scale.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="10 20 4 16 10 12" />
        <polyline points="22 20 28 16 22 12" />
        <line x1="16.5" y1="8" x2="14.5" y2="24" />
      </svg>
    ),
    name: 'Web Development',
    desc: 'Bringing designs to life with clean, performant code. Webflow, Framer, Next.js, and custom builds.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M8 24c0-7 3-11 8-11s8 4 8 11" />
        <circle cx="16" cy="9" r="3" />
        <path d="M4 28h24" />
        <path d="M11 17l-2 5M21 17l2 5" />
      </svg>
    ),
    name: 'AI Integration',
    desc: 'Adding intelligent automation to digital products — making software smarter and measurably more useful.',
  },
]

const industries = [
  'Financial Services', 'Real Estate', 'Architecture',
  'Startups', 'E-Commerce', 'Healthcare',
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-10 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="mb-3">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost">
            Services
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="mb-16">
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] leading-[1.2] text-ink tracking-[-0.02em]">
            Design. Build.{' '}
            <em className="font-serif-italic">Launch.</em>
          </h2>
        </FadeUp>

        {/* Services grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-16">
          {services.map((service, i) => (
            <StaggerItem key={service.name}>
              <motion.div
                whileHover={{ backgroundColor: '#F4F2EE' }}
                transition={{ duration: 0.2 }}
                className="bg-paper p-10 h-full flex flex-col gap-5 group cursor-default"
                style={{
                  borderRadius:
                    i === 0 ? '22px 2px 2px 22px' :
                    i === 3 ? '2px 22px 22px 2px' : '2px',
                }}
              >
                <motion.div
                  className="text-muted group-hover:text-ink transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ duration: 0.25 }}
                >
                  {service.icon}
                </motion.div>
                <div>
                  <h3 className="font-sans text-[16px] font-medium text-ink mb-2">{service.name}</h3>
                  <p className="font-sans text-[13px] text-muted leading-[1.65]">{service.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Industries */}
        <FadeUp>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-4">
            Industries
          </span>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ borderColor: 'rgba(28,27,24,0.4)', color: '#1C1B18' }}
                className="font-sans text-[12px] text-muted border border-ink/[0.12] px-5 py-2 rounded-lg cursor-default transition-colors duration-200"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
