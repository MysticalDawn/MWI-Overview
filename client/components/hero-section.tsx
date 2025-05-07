"use client"

import { Brain, Zap } from "lucide-react"
import Link from "next/link"
import { useAnimation } from "@/components/animation-provider"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  const { prefersReducedMotion } = useAnimation()

  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        {!prefersReducedMotion && (
          <>
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-300 opacity-50 animate-pulse"></div>
            <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-blue-200 opacity-30 animate-ping animation-delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-40 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-blue-300 opacity-30 animate-ping animation-delay-3000"></div>

            {/* Wave effect */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-950 opacity-30 animate-wave"></div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-blue-900 opacity-20 animate-wave animation-delay-1000"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection animation="scale-up" delay={300}>
            <div className="flex items-center justify-center mb-6 bg-blue-800/50 p-4 rounded-full">
              <Brain className="h-10 w-10 text-blue-200 animate-pulse" />
              <Zap className="h-8 w-8 text-blue-200 -ml-2" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Microwave Imaging for
              <span className="text-blue-300"> Brain Stroke Detection</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={700}>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl">
              An interdisciplinary senior project combining electrical engineering, computer science, and mechanical
              engineering to revolutionize stroke detection.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#components">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  Explore Project
                </Button>
              </Link>
              <Link href="#team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-100 hover:bg-blue-800/50 transition-all duration-300 hover:scale-105"
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
