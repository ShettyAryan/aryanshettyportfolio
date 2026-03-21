'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/Motion'
import Image from 'next/image'

const skills = ['UI/UX Design', 'Product Strategy', 'Web Development', 'AI Integration']
const tools = ['Figma', 'Webflow', 'Framer', 'WordPress', 'Next.js']

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 bg-paper">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Photo col */}
          <FadeUp className="order-2 md:order-1">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-card"
            >
              {/* Gold accent left bar */}
              <div className="absolute left-0 top-[20%] bottom-[20%] w-[2px] bg-gold rounded-full z-10" />

              {/* Placeholder */}
              <Image
                src="https://res.cloudinary.com/dsvgadc5d/image/upload/v1774088848/Profile_pictutre_idvmfc.jpg"
                alt="Aryan Shetty"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-white text-black rounded-2xl px-5 py-4 shadow-2xl"
              >
                <p className="font-mono-custom text-[10px] text-black/40 uppercase tracking-widest mb-1">
                  Projects Built
                </p>
                <p className="font-serif text-[32px] leading-none text-black">
                  10+
                </p>
              </motion.div>
            </motion.div>
          </FadeUp>

          {/* Text col */}
          <div className="order-1 md:order-2">
            <FadeUp className="mb-3">
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost">
                About
              </span>
            </FadeUp>

            <FadeUp delay={0.1} className="mb-6">
              <h2 className="font-serif text-[clamp(36px,5vw,44px)] leading-[1.15] text-ink tracking-[-0.02em]">
                Hi, I&apos;m <em className="font-serif-italic">Aryan.</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2} className="mb-9">
              <p className="font-sans text-[15px] text-muted leading-[1.82]">
                I&apos;m a product designer and developer focused on building
                digital systems that combine great design, technology, and
                business strategy. Currently an engineering student and founder
                of ConstructDev.
              </p>
            </FadeUp>

            {/* Skills */}
            <FadeUp delay={0.3} className="mb-2">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{
                      backgroundColor: "#1C1B18",
                      color: "#F4F2EE",
                    }}
                    transition={{ duration: 0.2 }}
                    className="font-sans text-[12px] text-muted bg-card px-4 py-1.5 rounded-full cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </FadeUp>

            {/* Tools */}
            <FadeUp delay={0.4} className="mb-10 mt-5">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">
                Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono-custom text-[11px] text-ghost border border-ink/[0.1] px-3.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Link
                href="/about"
                className="arrow-link group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink border-b border-ink/20 pb-0.5 hover:border-ink transition-colors duration-200"
              >
                Read More About Me <span className="arrow">→</span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
