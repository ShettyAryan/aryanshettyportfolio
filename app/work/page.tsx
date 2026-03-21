import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WorkHero from '@/components/sections/WorkHero'
import AllWork from '@/components/sections/AllWork'

export const metadata = {
  title: 'All Work — Aryan Shetty',
  description:
    'Design and development projects spanning finance, real estate, e-commerce, and more — with details and live links.',
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <Suspense fallback={<div className="min-h-[50vh] bg-paper" aria-hidden />}>
          <AllWork />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
