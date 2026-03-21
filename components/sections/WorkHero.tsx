'use client'
import { motion } from 'framer-motion'

export default function WorkHero() {
  return (
    <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 bg-paper relative overflow-hidden">
      {/* Decorative number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="pointer-events-none absolute right-2 top-8 sm:right-6 sm:top-10 md:right-10 font-serif text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none text-ink/[0.025] select-none"
      >
        02
      </motion.div>

      <div className="max-w-[1200px] mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-4"
        >
          All Work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
          className="font-serif text-[clamp(36px,8vw,72px)] leading-[1.1] tracking-[-0.025em] text-ink mb-6 text-balance"
        >
          All <em className="font-serif-italic">Work</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.16 }}
          className="font-sans text-[15px] sm:text-[16px] text-muted leading-[1.75] max-w-lg"
        >
          Every project in one place — open a card for the full story, a screenshot, and a link to the live site when
          available.
        </motion.p>
      </div>
    </section>
  )
}
