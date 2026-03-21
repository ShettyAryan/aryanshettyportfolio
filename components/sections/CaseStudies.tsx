'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/projects'

function CaseStudyCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden ${project.dark ? 'bg-ink' : 'bg-card'}`}
    >
      {/* Mockup — swaps sides on even/odd */}
      <div
        className={`relative flex items-center justify-center p-12 min-h-[340px] ${
          isEven ? 'md:order-1' : 'md:order-2'
        } ${project.dark ? 'bg-white/[0.03]' : 'bg-paper/60'}`}
      >
        {/* Animated mockup */}
        <motion.div
          whileHover={{ rotate: isEven ? -2 : 2, scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-4/5 max-w-[300px] rounded-2xl border p-5 shadow-2xl flex flex-col gap-3 ${
            project.dark
              ? 'bg-white/[0.06] border-white/10'
              : 'bg-white border-ink/[0.08]'
          }`}
        >
          <div className={`h-2 rounded-full w-2/3 ${project.dark ? 'bg-white/25' : 'bg-ink/15'}`} />
          <div className={`h-2 rounded-full ${project.dark ? 'bg-white/12' : 'bg-ink/08'}`} />
          <div className={`h-2 rounded-full w-4/5 ${project.dark ? 'bg-white/08' : 'bg-ink/05'}`} />
          <div className={`h-28 rounded-xl mt-2 ${project.dark ? 'bg-white/[0.05]' : 'bg-ink/[0.04]'}`} />
          <div className="flex gap-2 mt-1">
            <div className={`flex-1 h-8 rounded-lg ${project.dark ? 'bg-white/[0.06]' : 'bg-ink/[0.05]'}`} />
            <div className="w-20 h-8 rounded-lg bg-gold/40" />
          </div>
        </motion.div>

        {/* Project number */}
        <span
          className={`absolute bottom-6 right-7 font-serif text-[64px] leading-none select-none ${
            project.dark ? 'text-white/[0.04]' : 'text-ink/[0.06]'
          }`}
        >
          0{index + 1}
        </span>
      </div>

      {/* Info */}
      <div
        className={`flex flex-col justify-center p-12 md:p-14 ${
          isEven ? 'md:order-2' : 'md:order-1'
        } ${project.dark ? 'border-l border-white/[0.06]' : 'border-l border-ink/[0.06]'}`}
      >
        <div className="flex items-center gap-3 mb-7">
          <span
            className={`font-sans text-[10px] font-medium uppercase tracking-[0.1em] border rounded-full px-3 py-1.5 ${
              project.dark
                ? 'text-white/40 border-white/15'
                : 'text-ghost border-ink/15'
            }`}
          >
            {project.industry}
          </span>
          <span className={`font-mono-custom text-[10px] ${project.dark ? 'text-white/25' : 'text-ghost'}`}>
            {project.year}
          </span>
        </div>

        <h2
          className={`font-serif text-[clamp(26px,3.5vw,34px)] leading-[1.15] tracking-[-0.02em] mb-4 ${
            project.dark ? 'text-white' : 'text-ink'
          }`}
        >
          {project.name}
        </h2>

        <p className={`font-sans text-[14px] leading-[1.75] mb-6 ${project.dark ? 'text-white/45' : 'text-muted'}`}>
          {project.summary}
        </p>

        <div className="flex flex-col gap-1 mb-8">
          <span className={`font-mono-custom text-[10px] uppercase tracking-widest ${project.dark ? 'text-white/25' : 'text-ghost'}`}>
            Role
          </span>
          <span className={`font-sans text-[13px] ${project.dark ? 'text-white/60' : 'text-muted'}`}>
            {project.role}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((t) => (
            <span
              key={t}
              className={`font-mono-custom text-[10px] px-3 py-1 rounded-full border ${
                project.dark
                  ? 'text-white/30 border-white/10'
                  : 'text-ghost border-ink/10'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className={`group inline-flex items-center gap-2 font-sans text-[13px] font-medium transition-opacity duration-200 hover:opacity-60 ${
            project.dark ? 'text-white' : 'text-ink'
          }`}
        >
          View Case Study
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.article>
  )
}

export default function CaseStudies() {
  const featured = projects.filter((p) => p.featured !== false).slice(0, 4)

  return (
    <section className="py-8 px-6 md:px-10 bg-paper">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-6">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.09em] text-ghost">
            Case Studies
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <CaseStudyCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
