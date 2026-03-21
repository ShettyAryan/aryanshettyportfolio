import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Contact — Aryan Shetty',
  description: 'Have a project or collaboration in mind? Let\'s connect.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
