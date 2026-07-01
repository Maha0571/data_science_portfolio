import { AmbientBackground } from '@/components/portfolio/ambient-background'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { AboutTimeline } from '@/components/portfolio/about-timeline'
import { CoreStrengths } from '@/components/portfolio/core-strengths'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { WhyDataScience } from '@/components/portfolio/why-data-science'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutTimeline />
        <CoreStrengths />
        <Skills />
        <Projects />
        <WhyDataScience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
