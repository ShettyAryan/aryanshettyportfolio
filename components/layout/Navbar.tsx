'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-10 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-paper/85 backdrop-blur-md border-b border-ink/[0.08]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-ink text-paper rounded-[7px] flex items-center justify-center font-serif text-[13px] leading-none transition-transform duration-200 group-hover:scale-95">
            AS
          </div>
          <span className="font-sans font-medium text-[14px] text-ink tracking-[-0.01em]">
            Aryan Shetty
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none ml-20">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-sans text-[13px] text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link href="#" className="hidden md:block font-sans text-[12px] text-ghost hover:text-ink transition-colors duration-200">
            LinkedIn
          </Link>
          <Link href="#" className="hidden md:block font-sans text-[12px] text-ghost hover:text-ink transition-colors duration-200">
            Twitter
          </Link>
          <Link
            href="#cta"
            className="hidden md:flex items-center gap-1.5 bg-ink text-paper font-sans text-[13px] font-medium px-5 py-2.5 rounded-full hover:opacity-80 transition-all duration-200 hover:-translate-y-[1px] group"
          >
            Let&apos;s Talk
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-ink transition-all duration-300"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-ink"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-ink"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="list-none flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-5xl text-paper hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 flex gap-6"
            >
              <Link href="#" className="text-ghost text-sm font-mono-custom hover:text-paper transition-colors">LinkedIn</Link>
              <Link href="#" className="text-ghost text-sm font-mono-custom hover:text-paper transition-colors">Twitter</Link>
              <Link href="#" className="text-ghost text-sm font-mono-custom hover:text-paper transition-colors">Dribbble</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
