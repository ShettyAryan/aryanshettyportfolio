'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/Motion'
import ProjectPreviewImage from '@/components/ui/ProjectPreviewImage'
import { getHomeFeaturedProjects, type Project } from '@/lib/projects'

function HeroCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-ink rounded-3xl overflow-hidden mb-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
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
            <p className="font-sans text-[14px] text-white/45 leading-[1.75] max-w-sm">{project.summary}</p>
          </div>
          <div className="mt-8">
            <span className="font-mono-custom text-[10px] text-white/25 block mb-4">{project.role}</span>
            <Link
              href={`/work?project=${encodeURIComponent(project.slug)}`}
              className="arrow-link group/link inline-flex items-center gap-2 text-white font-sans text-[13px] font-medium hover:opacity-70 transition-opacity duration-200"
            >
              View project
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <ProjectPreviewImage project={project} variant="featuredHero" />
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl overflow-hidden bg-card flex flex-col"
    >
      <div className="project-img-wrap overflow-hidden rounded-t-3xl">
        <ProjectPreviewImage project={project} variant="featuredCard" />
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.09em] text-ghost border border-ink/10 rounded-full px-3 py-1">
            {project.industry}
          </span>
          <span className="font-mono-custom text-[10px] text-ghost">{project.year}</span>
        </div>
        <h3 className="font-sans text-[20px] font-medium text-ink mb-2 tracking-[-0.01em]">{project.name}</h3>
        <p className="font-sans text-[13px] text-muted leading-[1.65] mb-5 flex-1">{project.summary}</p>
        <Link
          href={`/work?project=${encodeURIComponent(project.slug)}`}
          className="arrow-link group/link inline-flex items-center gap-2 font-sans text-[13px] font-medium text-ink hover:text-muted transition-colors duration-200"
        >
          View project <span className="arrow">→</span>
        </Link>
      </div>
    </motion.div>
  )
}

export default function FeaturedWork() {
  const featured = getHomeFeaturedProjects()
  const [hero, ...rest] = featured

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

        {hero ? <HeroCard project={hero} /> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {rest[0] ? <ProjectCard project={rest[0]} delay={0.05} /> : null}
          {rest[1] ? <ProjectCard project={rest[1]} delay={0.15} /> : null}
        </div>

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
