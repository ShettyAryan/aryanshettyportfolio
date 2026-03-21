import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CaseStudyPage from '@/components/sections/CaseStudyPage'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — Aryan Shetty`,
    description: project.summary,
  }
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return (
    <>
      <Navbar />
      <main>
        <CaseStudyPage project={project} />
      </main>
      <Footer />
    </>
  )
}
