'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

// ── Variants ──────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

// ── Components ────────────────────────────────────────────

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function FadeUp({ children, delay = 0, className = '', once = true }: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      custom={delay}
      variants={fadeUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  once?: boolean
}

export function Stagger({ children, className = '', once = true }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

export function ScaleFade({ children, delay = 0, className = '', once = true }: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      custom={delay}
      variants={scaleVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
