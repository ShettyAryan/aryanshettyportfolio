'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'
import { resolveScreenshotSrc } from '@/lib/projects'

function SkeletonMockup({
  dark,
  accent,
  className = '',
}: {
  dark?: boolean
  accent?: string
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border p-4 flex flex-col gap-2.5 shadow-lg ${
        dark ? 'bg-white/[0.05] border-white/10' : 'bg-paper border-ink/[0.08]'
      } ${className}`}
    >
      <div
        className={`h-2 rounded-full w-3/5 ${dark ? 'bg-white/20' : 'bg-ink/15'}`}
        style={accent ? { background: `${accent}66` } : undefined}
      />
      <div className={`h-2 rounded-full ${dark ? 'bg-white/10' : 'bg-ink/08'}`} />
      <div className={`h-2 rounded-full w-4/5 ${dark ? 'bg-white/08' : 'bg-ink/06'}`} />
      <div className={`flex-1 min-h-[48px] rounded-md mt-1 ${dark ? 'bg-white/[0.04]' : 'bg-ink/[0.04]'}`} />
      <div className="flex gap-2">
        <div className={`flex-1 h-7 rounded ${dark ? 'bg-white/[0.06]' : 'bg-ink/[0.06]'}`} />
        <div className="w-14 h-7 rounded bg-gold/35" />
      </div>
    </div>
  )
}

export type ProjectPreviewVariant = 'featuredHero' | 'featuredCard' | 'allWorkGrid'

type Props = {
  project: Project
  variant: ProjectPreviewVariant
  /** 0-based index for the large number on all-work grid cards */
  gridIndex?: number
  /** Enable hover scale on image (featured) */
  hoverScale?: boolean
}

export default function ProjectPreviewImage({ project, variant, gridIndex, hoverScale }: Props) {
  const src = resolveScreenshotSrc(project.screenshot)
  const isRemote = Boolean(src && /^https?:\/\//i.test(src))
  const dark = project.dark ?? false
  const accent = project.mockupAccent

  const sizes =
    variant === 'featuredHero'
      ? '(max-width: 768px) 100vw, 600px'
      : variant === 'featuredCard'
        ? '(max-width: 768px) 100vw, 560px'
        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px'

  const heroShell =
    'relative w-full min-h-[300px] md:min-h-[360px] border-l border-white/[0.06] bg-white/[0.04]'
  const cardShell = `relative w-full h-[220px] overflow-hidden ${dark ? 'bg-ink' : 'bg-card/60'}`
  const gridShell = `relative w-full h-[180px] overflow-hidden ${dark ? 'bg-ink' : 'bg-card/80'}`

  if (!src) {
    if (variant === 'featuredHero') {
      return (
        <div className={`${heroShell} flex items-center justify-center p-10`}>
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-[280px]"
          >
            <SkeletonMockup dark accent={accent} className="p-5 gap-3" />
          </motion.div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 60% 50%, ${accent ?? '#C8A97A'}12, transparent 65%)`,
            }}
          />
        </div>
      )
    }
    if (variant === 'featuredCard') {
      return (
        <div className={`${cardShell} flex items-center justify-center`}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-4/5 h-3/4"
          >
            <SkeletonMockup dark={dark} className="h-full flex flex-col gap-2.5 p-4" />
          </motion.div>
        </div>
      )
    }
    return (
      <div className={`${gridShell} flex items-center justify-center p-6`}>
        <motion.div
          className="w-[88%] max-w-[260px]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35 }}
        >
          <SkeletonMockup dark={dark} className="p-4 gap-2.5" />
        </motion.div>
        {gridIndex !== undefined ? (
          <span
            className={`absolute bottom-3 right-4 font-serif text-[40px] leading-none select-none pointer-events-none ${
              dark ? 'text-white/[0.06]' : 'text-ink/[0.07]'
            }`}
          >
            {String(gridIndex + 1).padStart(2, '0')}
          </span>
        ) : null}
      </div>
    )
  }

  const imageClass =
    hoverScale !== false
      ? 'object-cover transition-transform duration-500 group-hover:scale-[1.04]'
      : 'object-cover'

  const img = (
    <Image
      src={src}
      alt={`${project.name} preview`}
      fill
      className={imageClass}
      sizes={sizes}
      unoptimized={isRemote}
    />
  )

  if (variant === 'featuredHero') {
    return (
      <div className={heroShell}>
        <div className="absolute inset-0 overflow-hidden">{img}</div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/5 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 70% 20%, ${accent ?? '#fff'}18, transparent 55%)`,
          }}
        />
      </div>
    )
  }

  if (variant === 'featuredCard') {
    return (
      <div className={cardShell}>
        {img}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
            dark ? 'from-ink/30 to-transparent' : 'from-paper/40 to-transparent'
          }`}
        />
      </div>
    )
  }

  return (
    <div className={gridShell}>
      {img}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      {gridIndex !== undefined ? (
        <span
          className={`absolute bottom-3 right-4 font-serif text-[40px] leading-none select-none pointer-events-none z-[1] ${
            dark ? 'text-white/[0.12]' : 'text-ink/[0.08]'
          }`}
        >
          {String(gridIndex + 1).padStart(2, '0')}
        </span>
      ) : null}
    </div>
  )
}
