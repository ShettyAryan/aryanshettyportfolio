import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center px-6 text-center">
      <span className="font-serif text-[120px] leading-none text-ink/[0.06] select-none mb-0">404</span>
      <h1 className="font-serif text-[40px] text-ink tracking-[-0.02em] mb-4 -mt-4">
        Page not <em className="font-serif-italic">found.</em>
      </h1>
      <p className="font-sans text-[15px] text-muted mb-10 max-w-xs">
        This page doesn&apos;t exist — or it moved. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-ink text-paper font-sans text-[14px] font-medium px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
      >
        ← Back Home
      </Link>
    </div>
  )
}
