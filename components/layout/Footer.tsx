import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.06] px-8 md:px-10 py-7">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/30 text-xs font-sans">
          <span>Aryan Shetty</span>
          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
          <span>ConstructDev</span>
        </div>
        <div className="flex gap-6">
          {['LinkedIn', 'Twitter'].map((s) => (
            <Link key={s} href="/contact" className="text-white/30 text-xs font-sans hover:text-white/70 transition-colors duration-200">
              {s}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 text-white/20 text-xs font-sans">
          <span>© 2024 All rights reserved.</span>
          <span className="hidden md:block opacity-60">Designed &amp; built by Aryan Shetty</span>
        </div>
      </div>
    </footer>
  )
}
