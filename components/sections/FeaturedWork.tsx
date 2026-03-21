'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp, Stagger, StaggerItem } from '@/components/ui/Motion'

const projects = [
  {
    id: 'financebro',
    name: 'FinanceBro',
    industry: 'Finance · EdTech',
    year: '2024',
    desc: 'A gamified finance learning platform designed to make investing education engaging and interactive. Built to transform complex financial concepts into digestible, rewarding experiences.',
    role: 'Product Design · Development',
    featured: true,
    dark: true,
    mockupAccent: '#C8A97A',
  },
  {
    id: 'rishil',
    name: 'Rishil Enterprise',
    industry: 'Financial Services',
    year: '2024',
    desc: 'Financial services website redesigned to simplify complex offerings and dramatically improve lead generation.',
    role: 'UI/UX Design · Webflow',
    dark: true,
  },
  {
    id: 'real-estate',
    name: 'Real Estate Builder',
    industry: 'Real Estate',
    year: '2024',
    desc: 'High-impact marketing website for a property developer — built to convert visitors into qualified leads.',
    role: 'UI/UX Design · Development',
    dark: false,
  },
]

function HeroCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-ink rounded-3xl overflow-hidden mb-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Info */}
        <div className="p-12 md:p-14 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-white/40 border border-white/15 rounded-full px-3 py-1.5">
                {project.industry}
              </span>
              <span className="font-mono-custom text-[10px] text-white/25">{project.year}</span>
            </div>
            <h3 className="font-serif text-[34px] leading-[1.1] text-white mb-4 tracking-[-0.02em]">
              {project.name}
            </h3>
            <p className="font-sans text-[14px] text-white/45 leading-[1.75] max-w-sm">
              {project.desc}
            </p>
          </div>
          <div className="mt-8">
            <span className="font-mono-custom text-[10px] text-white/25 block mb-4">{project.role}</span>
            <Link
              href={`/work/${project.id}`}
              className="arrow-link group/link inline-flex items-center gap-2 text-white font-sans text-[13px] font-medium hover:opacity-70 transition-opacity duration-200"
            >
              View Case Study
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative bg-white/[0.04] flex items-center justify-center p-10 min-h-[300px] md:min-h-[360px] border-l border-white/[0.06]">
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-[280px] bg-white/[0.05] border border-white/10 rounded-xl p-5 flex flex-col gap-3 shadow-2xl"
          >
            <div className="h-2 rounded-full w-16" style={{ background: project.mockupAccent ?? 'rgba(255,255,255,0.2)' }} />
            <div className="h-2 rounded-full bg-white/15 w-full" />
            <div className="h-2 rounded-full bg-white/10 w-4/5" />
            <div className="flex-1 h-28 rounded-lg bg-white/[0.05] mt-1 flex items-end p-3 gap-2">
              <div className="flex-1 h-16 rounded bg-white/10" />
              <div className="flex-1 h-10 rounded" style={{ background: `${project.mockupAccent}33` }} />
              <div className="flex-1 h-20 rounded bg-white/10" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-8 rounded-lg bg-white/[0.06]" />
              <div className="w-20 h-8 rounded-lg" style={{ background: `${project.mockupAccent}40` }} />
            </div>
          </motion.div>
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(circle at 60% 50%, ${project.mockupAccent}12, transparent 65%)` }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl overflow-hidden bg-card flex flex-col"
    >
      {/* Mockup area */}
      <div className={`project-img-wrap relative h-[220px] flex items-center justify-center overflow-hidden ${project.dark ? 'bg-ink' : 'bg-card/60'}`}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-4/5 h-3/4 rounded-lg border flex flex-col gap-2.5 p-4 ${
            project.dark ? 'bg-white/[0.05] border-white/10' : 'bg-paper border-ink/[0.08]'
          }`}
        >
          <div className={`h-2 rounded-full w-3/5 ${project.dark ? 'bg-white/20' : 'bg-ink/15'}`} />
          <div className={`h-2 rounded-full ${project.dark ? 'bg-white/10' : 'bg-ink/08'}`} />
          <div className={`h-2 rounded-full w-4/5 ${project.dark ? 'bg-white/08' : 'bg-ink/06'}`} />
          <div className={`flex-1 rounded-md mt-1 ${project.dark ? 'bg-white/[0.04]' : 'bg-ink/[0.04]'}`} />
          <div className="flex gap-2">
            <div className={`flex-1 h-7 rounded ${project.dark ? 'bg-white/[0.06]' : 'bg-ink/[0.06]'}`} />
            <div className="w-16 h-7 rounded bg-gold/40" />
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.09em] text-ghost border border-ink/10 rounded-full px-3 py-1">
            {project.industry}
          </span>
          <span className="font-mono-custom text-[10px] text-ghost">{project.year}</span>
        </div>
        <h3 className="font-sans text-[20px] font-medium text-ink mb-2 tracking-[-0.01em]">{project.name}</h3>
        <p className="font-sans text-[13px] text-muted leading-[1.65] mb-5 flex-1">{project.desc}</p>
        <Link
          href={`/work/${project.id}`}
          className="arrow-link group/link inline-flex items-center gap-2 font-sans text-[13px] font-medium text-ink hover:text-muted transition-colors duration-200"
        >
          View Case Study <span className="arrow">→</span>
        </Link>
      </div>
    </motion.div>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-paper">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="mb-3">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost">
            Selected Work
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="mb-14">
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] leading-[1.2] text-ink tracking-[-0.02em]">
            Projects that move{' '}
            <em className="font-serif-italic">the needle.</em>
          </h2>
        </FadeUp>

        {/* Hero featured card */}
        <HeroCard project={projects[0]} />

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <ProjectCard project={projects[1]} delay={0.05} />
          <ProjectCard project={projects[2]} delay={0.15} />
        </div>

        {/* See all */}
        <FadeUp className="flex justify-end">
          <Link
            href="/work"
            className="arrow-link group inline-flex items-center gap-2 font-sans text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200"
          >
            See All Work <span className="arrow">→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
