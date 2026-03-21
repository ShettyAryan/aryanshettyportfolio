import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
