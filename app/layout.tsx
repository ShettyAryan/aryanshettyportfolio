import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import GrainOverlay from '@/components/ui/GrainOverlay'

export const metadata: Metadata = {
  title: 'Aryan Shetty — Product Designer & Developer',
  description: 'I design and build digital products that are simple, scalable, and conversion-focused. Founder at ConstructDev.',
  keywords: ['Product Designer', 'UI/UX Designer', 'Web Developer', 'ConstructDev', 'Aryan Shetty'],
  openGraph: {
    title: 'Aryan Shetty — Product Designer & Developer',
    description: 'I design and build digital products that are simple, scalable, and conversion-focused.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-paper text-ink antialiased overflow-x-hidden">
        <GrainOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
