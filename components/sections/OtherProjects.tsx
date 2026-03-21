'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const others = [
  {
    name: 'Apex Builders',
    desc: 'Construction company website with project portfolio and lead capture.',
    tag: 'Marketing Site',
    url: '#',
  },
  {
    name: 'Elegance Bags',
    desc: 'Premium e-commerce brand website with editorial product presentation.',
    tag: 'E-Commerce',
    url: '#',
  },
  {
    name: 'Studio Gifting',
    desc: 'Gifting brand website with curated collection browsing and gifting guides.',
    tag: 'Brand Site',
    url: '#',
  },
  {
    name: 'The Paradise',
    desc: 'Hospitality and travel website designed to evoke aspiration and drive bookings.',
    tag: 'Hospitality',
    url: '#',
  },
  {
    name: "Dr. Shetty's Cosmetology",
    desc: 'Medical aesthetics website balancing clinical trust with premium brand feel.',
    tag: 'Healthcare',
    url: '#',
  },
  {
    name: 'ConstructDev Website',
    desc: 'Agency site for ConstructDev — designed to attract founders and SMB clients.',
    tag: 'Agency Site',
    url: '#',
  },
]

export default function OtherProjects() {
  return (
    <section className="py-24 px-6 md:px-10 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">
              Other Work
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] tracking-[-0.02em] leading-[1.2] text-ink">
              More <em className="font-serif-italic">Projects</em>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group bg-paper rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Minimal mockup thumbnail */}
              <div className="h-[160px] bg-ink/[0.04] relative overflow-hidden flex items-center justify-center p-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-paper rounded-xl border border-ink/[0.06] flex flex-col gap-2 p-4"
                >
                  <div className="h-1.5 rounded-full bg-ink/10 w-1/2" />
                  <div className="h-1.5 rounded-full bg-ink/07 w-4/5" />
                  <div className="flex-1 rounded-lg bg-ink/[0.04] mt-1" />
                  <div className="h-5 rounded bg-gold/30 w-1/3" />
                </motion.div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-sans text-[16px] font-medium text-ink leading-[1.3]">{project.name}</h3>
                  <span className="font-sans text-[9px] font-medium uppercase tracking-[0.08em] text-ghost border border-ink/10 rounded-full px-2.5 py-1 whitespace-nowrap flex-shrink-0 mt-0.5">
                    {project.tag}
                  </span>
                </div>
                <p className="font-sans text-[13px] text-muted leading-[1.65] mb-4 flex-1">{project.desc}</p>
                <Link
                  href={project.url}
                  className="group/link inline-flex items-center gap-1.5 font-sans text-[12px] font-medium text-ink/60 hover:text-ink transition-colors duration-200"
                >
                  Visit Live Site
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                    className="inline-block"
                  >
                    ↗
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
