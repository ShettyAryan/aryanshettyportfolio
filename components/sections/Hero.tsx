'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const industries = [
  'Financial Services', 'Real Estate', 'Architecture',
  'E-Commerce', 'Startups', 'Cosmetology', 'Hospitality',
  'Financial Services', 'Real Estate', 'Architecture',
  'E-Commerce', 'Startups', 'Cosmetology', 'Hospitality',
]

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % words.length)
    }

    setDisplay(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const lineVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const typed = useTypewriter(['FinanceBro.', 'Real Estate Sites.', 'AI Products.', 'Digital Systems.'])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Radial glow behind hero */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[640px] h-[640px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200,169,122,0.09) 0%, transparent 70%)' }}
      />

      {/* Hero text block */}
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Tag */}
        <motion.div variants={lineVariant} className="mb-9">
          <span className="inline-flex items-center gap-2 border border-ink/[0.12] rounded-full px-4 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ghost">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            Product Designer &amp; Developer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={lineVariant}
          className="font-serif text-[clamp(52px,9vw,82px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6"
        >
          Aryan<br />
          <em className="font-serif-italic">Shetty</em>
        </motion.h1>

        {/* Subline */}
        <motion.p variants={lineVariant} className="font-sans text-[17px] text-muted leading-[1.75] max-w-md mx-auto mb-3">
          I design and build digital products that are{' '}
          <span className="text-ink font-medium">simple, scalable,</span> and{' '}
          <span className="text-ink font-medium">conversion-focused.</span>
        </motion.p>

        {/* Typewriter */}
        <motion.p variants={lineVariant} className="font-mono-custom text-[12px] text-ghost mb-2 h-5">
          Currently building:{' '}
          <span className="text-muted">
            {typed}
            <span className="inline-block w-[2px] h-[13px] bg-gold ml-[1px] align-middle animate-pulse" />
          </span>
        </motion.p>

        {/* Meta */}
        <motion.p variants={lineVariant} className="font-mono-custom text-[11px] text-ghost mb-10">
          Founder @ ConstructDev
        </motion.p>

        {/* CTA */}
        <motion.div variants={lineVariant} className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="#work"
            className="arrow-link group inline-flex items-center gap-2 bg-ink text-paper font-sans text-[14px] font-medium px-8 py-4 rounded-full hover:opacity-85 transition-all duration-300 hover:-translate-y-[2px]"
          >
            View My Work
            <span className="arrow">→</span>
          </Link>
          <Link
            href="#cta"
            className="inline-flex items-center gap-2 border border-ink/20 text-ink font-sans text-[14px] font-medium px-8 py-4 rounded-full hover:border-ink/50 transition-all duration-300"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="relative z-10 w-full mt-20 overflow-hidden"
      >
        <p className="text-center font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-ghost mb-4">
          Worked with &amp; for
        </p>
        <div className="flex overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {industries.map((item, i) => (
              <span
                key={i}
                className="font-sans text-[13px] text-ghost flex items-center gap-3"
              >
                {item}
                <span className="w-1 h-1 rounded-full bg-ghost/40 inline-block" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-ghost/60 to-transparent"
        />
        <span className="font-mono-custom text-[9px] uppercase tracking-[0.12em] text-ghost/60">scroll</span>
      </motion.div>
    </section>
  )
}
