'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FadeUp, Stagger, StaggerItem } from '@/components/ui/Motion'

const contactLinks = [
  {
    label: "Email",
    value: "aryanshetty.dev@gmail.com",
    href: "mailto:aryanshetty.dev@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryandevelops",
    href: "https://www.linkedin.com/in/aryanshetty01/",
  },
  {
    label: "Twitter / X",
    value: "@AryanDevelops",
    href: "https://x.com/AryanDevelops",
  },
  { label: "Based in", value: "India · Available globally", href: null },
];

const projectTypes = [
  'Web Design',
  'Product Design',
  'AI Integration',
  'Full Website Build',
  'Brand Strategy',
  'Other',
]

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = (field: string) =>
    `w-full bg-paper font-sans text-[15px] text-ink px-5 py-3.5 rounded-xl border transition-all duration-200 outline-none placeholder:text-ghost ${
      focused === field
        ? 'border-ink shadow-[0_0_0_3px_rgba(28,27,24,0.06)]'
        : 'border-ink/[0.12] hover:border-ink/30'
    }`

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 bg-paper relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="pointer-events-none absolute right-2 top-6 sm:right-6 sm:top-8 md:right-8 md:top-8 font-serif text-[64px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-none text-ink/[0.025] select-none max-w-[50%] text-right"
        >
          04
        </motion.div>

        <div className="max-w-[1200px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-5"
          >
            Contact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[clamp(36px,9vw,76px)] leading-[1.05] tracking-[-0.025em] text-ink mb-5 text-balance"
          >
            Have a project or<br />
            collaboration in{' '}
            <em className="font-serif-italic">mind?</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="font-sans text-[17px] text-muted leading-[1.75]"
          >
            Let&apos;s connect.
          </motion.p>
        </div>
      </section>

      {/* Main grid */}
      <section className="pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6 md:px-10 bg-paper">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

          {/* Left — contact details */}
          <div>
            <Stagger className="flex flex-col gap-8">
              {contactLinks.map((link) => (
                <StaggerItem key={link.label}>
                  <div className="group">
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.09em] text-ghost block mb-1.5">
                      {link.label}
                    </span>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="font-sans text-[15px] sm:text-[16px] font-medium text-ink border-b border-ink/15 pb-0.5 hover:border-ink transition-colors duration-200 inline-block break-all sm:break-normal"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="font-sans text-[15px] text-muted">{link.value}</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Availability indicator */}
            <FadeUp delay={0.5} className="mt-14">
              <div className="inline-flex items-center gap-3 bg-card rounded-2xl px-6 py-4">
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-green-500 inline-block flex-shrink-0"
                />
                <span className="font-sans text-[13px] text-muted">Available for new projects</span>
              </div>
            </FadeUp>
          </div>

          {/* Right — form */}
          <FadeUp delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full bg-card rounded-3xl p-8 sm:p-12 md:p-16 min-h-[280px] sm:min-h-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                  className="w-14 h-14 rounded-full bg-ink flex items-center justify-center mb-6"
                >
                  <span className="text-paper text-xl">✓</span>
                </motion.div>
                <h3 className="font-serif text-[28px] text-ink mb-3">Message sent.</h3>
                <p className="font-sans text-[14px] text-muted">I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ghost block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ghost block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Project type */}
                <div>
                  <label className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ghost block mb-2">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <motion.button
                        key={type}
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, type })}
                        className={`font-sans text-[12px] px-4 py-2 rounded-full border transition-all duration-200 ${
                          formData.type === type
                            ? 'bg-ink text-paper border-ink'
                            : 'text-muted border-ink/[0.12] hover:border-ink/40'
                        }`}
                      >
                        {type}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ghost block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass('message')} resize-none`}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.87, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-ink text-paper font-sans text-[14px] font-medium py-4 rounded-xl flex items-center justify-center gap-2 mt-2 group"
                >
                  Send Message
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.button>

                <p className="font-mono-custom text-[10px] text-ghost text-center mt-1">
                  Or email directly at aryanshetty.dev@gmail.com
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </>
  )
}
