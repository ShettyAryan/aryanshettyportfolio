'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function PageLoader() {
  return (
    <div
      className="fixed inset-0 z-[9990] flex min-h-[100dvh] flex-col items-center justify-center bg-paper/92 backdrop-blur-[10px] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <motion.div
        className="flex flex-col items-center gap-8 px-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
      >
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-ink text-paper font-serif text-[22px] leading-none shadow-lg shadow-ink/10"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
        >
          AS
        </motion.div>

        <div className="flex flex-col items-center gap-3">
          <div className="relative h-[2px] w-[min(200px,55vw)] overflow-hidden rounded-full bg-ink/[0.08]">
            <motion.div
              className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-gradient-to-r from-gold/20 via-gold to-gold/20"
              initial={{ x: '-100%' }}
              animate={{ x: '280%' }}
              transition={{
                repeat: Infinity,
                duration: 1.35,
                ease: 'easeInOut',
                repeatDelay: 0.15,
              }}
            />
          </div>
          <motion.p
            className="font-mono-custom text-[10px] uppercase tracking-[0.14em] text-ghost"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Loading
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
