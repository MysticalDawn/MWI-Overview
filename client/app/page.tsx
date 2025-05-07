import { ArrowDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProjectOverview } from "@/components/project-overview"
import { TeamSection } from "@/components/team-section"
import { ComponentsSection } from "@/components/components-section"
import { ResultsSection } from "@/components/results-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <div className="container mx-auto px-4 py-8 flex justify-center">
        <Link href="#overview">
          <Button variant="ghost" size="lg" className="rounded-full animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <ProjectOverview />
      <TeamSection />
      <ComponentsSection />
      <ResultsSection />
      <Footer />
    </div>
  )
}
