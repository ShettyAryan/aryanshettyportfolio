'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import type { Project } from '@/lib/projects'
import { projects } from '@/lib/projects'
import { FadeUp, Stagger, StaggerItem } from '@/components/ui/Motion'

function ProcessStepper({ steps }: { steps: Project['process'] }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Step nav */}
      <div className="flex gap-0 mb-10 border-b border-ink/[0.08] overflow-x-auto">
        {steps.map((s, i) => (
          <button
            key={s.step}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 flex items-center gap-2.5 px-5 py-3.5 font-sans text-[13px] font-medium border-b-2 transition-all duration-200 ${
              active === i
                ? 'border-ink text-ink'
                : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            <span className="font-mono-custom text-[10px] opacity-50">{s.step}</span>
            {s.title}
          </button>
        ))}
      </div>

      {/* Step content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-3">
              {steps[active].step} — {steps[active].title}
            </span>
            <p className="font-sans text-[15px] text-muted leading-[1.82]">
              {steps[active].body}
            </p>
          </div>
          {/* Placeholder image frame */}
          <div className="rounded-2xl bg-card border border-ink/[0.06] h-[220px] flex items-center justify-center">
            <div className="flex flex-col gap-3 p-8 w-4/5">
              <div className="h-2 rounded-full bg-ink/10 w-3/5" />
              <div className="h-2 rounded-full bg-ink/07 w-full" />
              <div className="h-2 rounded-full bg-ink/05 w-4/5" />
              <div className="flex-1 h-20 rounded-xl bg-ink/[0.04] mt-2" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function CaseStudyPage({ project }: { project: Project }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const nextProject = project.nextProject
    ? projects.find((p) => p.slug === project.nextProject)
    : null

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative pt-36 pb-24 px-6 md:px-10 overflow-hidden bg-paper">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-[1200px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-[10px] font-medium uppercase tracking-[0.1em] border border-ink/15 rounded-full px-4 py-1.5 text-ghost mb-8"
          >
            {project.industry}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[clamp(44px,7vw,80px)] leading-[1.05] tracking-[-0.03em] text-ink mb-6"
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="font-sans text-[17px] text-muted leading-[1.75] max-w-xl mx-auto mb-10"
          >
            {project.summary}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-8 text-center"
          >
            {[
              { label: 'Role', value: project.role },
              { label: 'Timeline', value: project.timeline },
              { label: 'Tools', value: project.tools.join(' · ') },
            ].map((m) => (
              <div key={m.label}>
                <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-1">{m.label}</span>
                <span className="font-sans text-[13px] text-muted">{m.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Hero mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`mx-6 md:mx-10 rounded-3xl overflow-hidden flex items-center justify-center py-16 px-10 mb-4 ${
          project.dark ? 'bg-ink' : 'bg-card'
        }`}
        style={{ minHeight: 340 }}
      >
        <div className={`w-full max-w-[600px] rounded-2xl border p-8 flex flex-col gap-4 ${
          project.dark ? 'bg-white/[0.05] border-white/10' : 'bg-paper border-ink/[0.08]'
        }`}>
          <div className={`h-3 rounded-full w-2/5 ${project.dark ? 'bg-white/20' : 'bg-ink/15'}`} />
          <div className={`h-3 rounded-full w-4/5 ${project.dark ? 'bg-white/10' : 'bg-ink/08'}`} />
          <div className={`h-3 rounded-full w-3/5 ${project.dark ? 'bg-white/07' : 'bg-ink/05'}`} />
          <div className={`flex-1 h-40 rounded-2xl mt-2 ${project.dark ? 'bg-white/[0.04]' : 'bg-ink/[0.04]'}`} />
          <div className="flex gap-3">
            <div className={`flex-1 h-10 rounded-xl ${project.dark ? 'bg-white/[0.06]' : 'bg-ink/[0.05]'}`} />
            <div className="w-28 h-10 rounded-xl bg-gold/40" />
          </div>
        </div>
      </motion.div>

      {/* ── Overview ── */}
      <section className="py-24 px-6 md:px-10 bg-paper">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <FadeUp>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-4">
                Project Overview
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-sans text-[16px] text-muted leading-[1.85]">
                {project.summary} The project spanned {project.timeline} working closely with stakeholders
                to deliver a polished, production-ready result that met every defined goal.
              </p>
            </FadeUp>
          </div>

          {/* Metadata cards */}
          <FadeUp delay={0.2} className="flex flex-col gap-3">
            {[
              { label: 'Role', value: project.role },
              { label: 'Timeline', value: project.timeline },
              { label: 'Year', value: project.year },
            ].map((m) => (
              <div key={m.label} className="bg-card rounded-2xl px-5 py-4">
                <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-1">{m.label}</span>
                <span className="font-sans text-[14px] font-medium text-ink">{m.value}</span>
              </div>
            ))}
            <div className="bg-card rounded-2xl px-5 py-4">
              <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-2">Tools</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span key={t} className="font-mono-custom text-[10px] text-ghost border border-ink/10 rounded-full px-2.5 py-1">{t}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 px-6 md:px-10 bg-card">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="mb-8">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost">The Problem</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <blockquote className="font-serif text-[clamp(24px,4vw,38px)] leading-[1.3] text-ink tracking-[-0.015em] max-w-3xl mb-8 italic">
              &ldquo;{project.problem}&rdquo;
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ── Goals ── */}
      <section className="py-24 px-6 md:px-10 bg-paper">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="mb-12">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">Goals</span>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-[-0.02em] text-ink">
              What we set out to <em className="font-serif-italic">achieve.</em>
            </h2>
          </FadeUp>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.goals.map((goal) => (
              <StaggerItem key={goal.title}>
                <div className="bg-card rounded-2xl p-8 h-full flex flex-col gap-4">
                  <span className="text-2xl">{goal.icon}</span>
                  <h3 className="font-sans text-[16px] font-medium text-ink">{goal.title}</h3>
                  <p className="font-sans text-[13px] text-muted leading-[1.65]">{goal.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 px-6 md:px-10 bg-card">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="mb-12">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">Process</span>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-[-0.02em] text-ink">
              How we got <em className="font-serif-italic">there.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ProcessStepper steps={project.process} />
          </FadeUp>
        </div>
      </section>

      {/* ── Final Design ── */}
      <section className="py-24 px-6 md:px-10 bg-paper">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="mb-12">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">Final Design</span>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-[-0.02em] text-ink">
              The finished <em className="font-serif-italic">product.</em>
            </h2>
          </FadeUp>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { label: 'Homepage — Desktop', dark: project.dark, wide: true },
              { label: 'Service Section', dark: !project.dark },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className={`rounded-2xl overflow-hidden ${item.dark ? 'bg-ink' : 'bg-card'} flex flex-col`}
              >
                <div className="flex items-center justify-center p-10 flex-1 min-h-[220px]">
                  <div className={`w-4/5 h-full rounded-xl border flex flex-col gap-3 p-5 ${
                    item.dark ? 'bg-white/[0.05] border-white/08' : 'bg-paper border-ink/[0.07]'
                  }`}>
                    <div className={`h-2 rounded-full w-2/5 ${item.dark ? 'bg-white/20' : 'bg-ink/12'}`} />
                    <div className={`h-2 rounded-full ${item.dark ? 'bg-white/10' : 'bg-ink/07'}`} />
                    <div className={`flex-1 rounded-lg ${item.dark ? 'bg-white/[0.04]' : 'bg-ink/[0.04]'}`} />
                    <div className={`h-7 rounded-lg w-1/3 bg-gold/35`} />
                  </div>
                </div>
                <div className="border-t border-ink/[0.06] px-5 py-3">
                  <span className={`font-mono-custom text-[10px] ${item.dark ? 'text-white/30' : 'text-ghost'}`}>{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile mockups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Mobile — Home', 'Mobile — Services', 'Mobile — Contact'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden"
              >
                <div className="flex items-center justify-center p-8 min-h-[180px]">
                  <div className="w-[80px] h-[140px] bg-paper rounded-xl border border-ink/[0.08] flex flex-col gap-1.5 p-2.5">
                    <div className="h-1.5 rounded-full bg-ink/10 w-3/5 mx-auto" />
                    <div className="h-1.5 rounded-full bg-ink/07" />
                    <div className="flex-1 rounded-lg bg-ink/[0.04]" />
                    <div className="h-4 rounded bg-gold/30" />
                  </div>
                </div>
                <div className="border-t border-ink/[0.06] px-5 py-3">
                  <span className="font-mono-custom text-[10px] text-ghost">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live Product ── */}
      <section className="py-32 px-6 md:px-10 bg-ink text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(200,169,122,0.08) 0%, transparent 65%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <FadeUp>
            <p className="font-mono-custom text-[11px] uppercase tracking-widest text-white/25 mb-5">Live Product</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-[clamp(36px,6vw,58px)] leading-[1.1] tracking-[-0.025em] text-white mb-10">
              See it <em className="font-serif-italic">live.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 bg-paper text-ink font-sans text-[14px] font-medium px-10 py-5 rounded-full hover:bg-white transition-colors duration-200"
            >
              Visit Live Website ↗
            </motion.a>
          </FadeUp>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="py-24 px-6 md:px-10 bg-paper">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="mb-12">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost block mb-3">Outcome</span>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-[-0.02em] text-ink">
              What we <em className="font-serif-italic">achieved.</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {['Improved Clarity', 'Stronger Brand', 'User Engagement'].map((metric, i) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center"
              >
                <span className="font-serif text-[48px] leading-none text-ink block mb-2">✓</span>
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ghost block mb-1">{metric}</span>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p className="font-sans text-[16px] text-muted leading-[1.85] max-w-2xl">
              {project.outcome}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Next Project ── */}
      {nextProject && (
        <section className="py-16 px-6 md:px-10 bg-card">
          <div className="max-w-[1200px] mx-auto">
            <Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-between gap-6 bg-paper rounded-3xl px-10 py-8 hover:bg-ink transition-colors duration-400 transition-all">
              <div>
                <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost group-hover:text-white/40 transition-colors block mb-2">Next Project</span>
                <h3 className="font-serif text-[28px] text-ink group-hover:text-white transition-colors">{nextProject.name}</h3>
              </div>
              <motion.span
                className="font-serif text-[32px] text-muted group-hover:text-white transition-colors"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
