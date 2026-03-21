import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WorkHero from '@/components/sections/WorkHero'
import CaseStudies from '@/components/sections/CaseStudies'
import OtherProjects from '@/components/sections/OtherProjects'

export const metadata = {
  title: 'Work — Aryan Shetty',
  description: 'A curated collection of design and development work spanning finance, real estate, startups, and beyond.',
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <CaseStudies />
        <OtherProjects />
      </main>
      <Footer />
    </>
  )
}
