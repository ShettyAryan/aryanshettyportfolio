'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/Motion'

export default function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 md:px-10 bg-ink relative overflow-hidden">
      {/* Subtle radial bg glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,700px)] h-[min(70vh,500px)] sm:h-[500px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,122,0.12) 0%, transparent 70%)' }}
      />

      {/* Decorative number */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute right-2 top-6 sm:right-6 sm:top-8 md:right-10 md:top-10 font-serif text-[72px] sm:text-[120px] md:text-[160px] lg:text-[180px] leading-none text-white/[0.025] select-none"
      >
        04
      </motion.div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10 px-2 sm:px-0">
        <FadeUp className="mb-4">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-white/30">
            Let&apos;s Work Together
          </span>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-5">
          <h2 className="font-serif text-[clamp(38px,6vw,64px)] leading-[1.1] text-white tracking-[-0.025em]">
            Have a project<br />
            in <em className="font-serif-italic">mind?</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2} className="mb-10 sm:mb-12">
          <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] text-muted leading-relaxed max-w-lg mx-auto">
            Let&apos;s build something great together.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="mb-5">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex w-full max-w-sm sm:max-w-none justify-center"
          >
            <Link
              href="/contact"
              className="arrow-link group inline-flex items-center justify-center gap-3 bg-paper text-ink font-sans text-[15px] font-medium px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-white transition-colors duration-200 w-full sm:w-auto"
            >
              Contact Me
              <span className="arrow">→</span>
            </Link>
          </motion.div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <a
            href="mailto:aryanshetty.dev@gmail.com"
            className="font-mono-custom text-[10px] sm:text-[11px] text-ghost hover:text-white/50 transition-colors duration-200 block break-all sm:break-normal max-w-md mx-auto px-2"
          >
            or reach me directly at aryanshetty.dev@gmail.com
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
