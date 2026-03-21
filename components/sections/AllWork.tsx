'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Project } from '@/lib/projects'
import { projects, resolveScreenshotSrc } from '@/lib/projects'
import ProjectPreviewImage from '@/components/ui/ProjectPreviewImage'

function ScreenshotPlaceholder({ dark }: { dark?: boolean }) {
  return (
    <div
      className={`relative aspect-[16/10] rounded-2xl border overflow-hidden flex items-center justify-center p-8 ${
        dark ? 'bg-white/[0.04] border-white/10' : 'bg-ink/[0.03] border-ink/[0.08]'
      }`}
    >
      <div
        className={`w-full max-w-[280px] rounded-xl border p-5 flex flex-col gap-3 shadow-lg ${
          dark ? 'bg-white/[0.06] border-white/10' : 'bg-paper border-ink/[0.08]'
        }`}
      >
        <div className={`h-2 rounded-full w-2/3 ${dark ? 'bg-white/20' : 'bg-ink/12'}`} />
        <div className={`h-2 rounded-full ${dark ? 'bg-white/10' : 'bg-ink/08'}`} />
        <div className={`h-2 rounded-full w-4/5 ${dark ? 'bg-white/08' : 'bg-ink/06'}`} />
        <div className={`h-32 rounded-lg mt-1 ${dark ? 'bg-white/[0.05]' : 'bg-ink/[0.04]'}`} />
        <div className="flex gap-2">
          <div className={`flex-1 h-8 rounded-lg ${dark ? 'bg-white/[0.06]' : 'bg-ink/[0.05]'}`} />
          <div className="w-20 h-8 rounded-lg bg-gold/35" />
        </div>
      </div>
    </div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const hasLive = project.liveUrl && project.liveUrl !== '#'

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const src = resolveScreenshotSrc(project.screenshot)
  const showPlaceholder = !src
  const isRemoteScreenshot = Boolean(src && /^https?:\/\//i.test(src))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[720px] max-h-[min(92vh,880px)] bg-paper rounded-t-3xl sm:rounded-3xl border border-ink/[0.08] shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="flex-shrink-0 flex items-start sm:items-center justify-between gap-3 px-4 sm:px-6 pt-5 pb-4 border-b border-ink/[0.06]">
          <div className="min-w-0 flex-1">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-ghost block mb-1 break-words">
              {project.industry}
            </span>
            <h2 className="font-serif text-[20px] sm:text-[26px] leading-tight text-ink tracking-[-0.02em] pr-2">
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center font-sans text-muted hover:text-ink hover:bg-card transition-colors"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-5 sm:py-6 space-y-6 sm:space-y-8 overscroll-contain">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
            <div>
              <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-0.5">
                Year
              </span>
              <span className="font-sans text-muted">{project.year}</span>
            </div>
            <div>
              <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-0.5">
                Role
              </span>
              <span className="font-sans text-muted">{project.role}</span>
            </div>
            {project.timeline ? (
              <div>
                <span className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost block mb-0.5">
                  Timeline
                </span>
                <span className="font-sans text-muted">{project.timeline}</span>
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost mb-2">Overview</h3>
            <p className="font-sans text-[15px] text-muted leading-[1.75]">{project.summary}</p>
          </div>

          {project.problem ? (
            <div>
              <h3 className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost mb-2">Context</h3>
              <p className="font-sans text-[15px] text-muted leading-[1.75]">{project.problem}</p>
            </div>
          ) : null}

          {project.outcome ? (
            <div>
              <h3 className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost mb-2">Outcome</h3>
              <p className="font-sans text-[15px] text-muted leading-[1.75]">{project.outcome}</p>
            </div>
          ) : null}

          {project.tools && project.tools.length > 0 ? (
            <div>
              <h3 className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono-custom text-[10px] px-3 py-1 rounded-full border border-ink/10 text-ghost"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <h3 className="font-mono-custom text-[10px] uppercase tracking-widest text-ghost mb-3">Screenshot</h3>
            {showPlaceholder ? (
              <ScreenshotPlaceholder dark={project.dark} />
            ) : (
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-ink/[0.08] bg-card">
                <Image
                  src={src}
                  alt={`${project.name} — project screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 720px) 100vw, 720px"
                  unoptimized={isRemoteScreenshot}
                />
              </div>
            )}
          </div>

          <div className="pt-2 pb-2">
            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-paper font-sans text-[14px] font-medium px-6 py-3 rounded-full hover:opacity-85 transition-opacity"
              >
                Visit live site
                <span aria-hidden>↗</span>
              </a>
            ) : (
              <span className="font-sans text-[13px] text-ghost">Live site link coming soon.</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function WorkCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (p: Project) => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.04 }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group w-full text-left bg-paper rounded-2xl overflow-hidden border border-ink/[0.06] shadow-sm hover:border-ink/[0.12] hover:-translate-y-1 transition-all duration-300 flex flex-col"
      >
        <ProjectPreviewImage project={project} variant="allWorkGrid" gridIndex={index} hoverScale={false} />

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-sans text-[16px] font-medium text-ink leading-snug group-hover:text-ink/90">
              {project.name}
            </h3>
            <span className="font-mono-custom text-[10px] text-ghost flex-shrink-0">{project.year}</span>
          </div>
          <p className="font-sans text-[13px] text-muted leading-[1.6] line-clamp-2 mb-3">{project.summary}</p>
          <span className="font-sans text-[12px] font-medium text-ink/70 group-hover:text-ink inline-flex items-center gap-1.5 mt-auto">
            View details
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </button>
    </motion.article>
  )
}

export default function AllWork() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selected, setSelected] = useState<Project | null>(null)

  const clearQuery = useCallback(() => {
    router.replace('/work', { scroll: false })
  }, [router])

  const openProject = useCallback(
    (p: Project) => {
      setSelected(p)
      router.replace(`/work?project=${encodeURIComponent(p.slug)}`, { scroll: false })
    },
    [router]
  )

  const closeModal = useCallback(() => {
    setSelected(null)
    clearQuery()
  }, [clearQuery])

  useEffect(() => {
    const slug = searchParams.get('project')
    if (!slug) {
      setSelected(null)
      return
    }
    const p = projects.find((x) => x.slug === slug)
    setSelected(p ?? null)
  }, [searchParams])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <section className="pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 md:px-10 bg-paper">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} onOpen={openProject} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected ? <ProjectModal project={selected} onClose={closeModal} /> : null}
      </AnimatePresence>
    </>
  )
}
