"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function ResultsSection() {
  const [isHovered, setIsHovered] = useState(false)

  const achievements = [
    "Successfully designed and fabricated custom antennas optimized for brain imaging frequencies",
    "Developed an adjustable helmet with precise antenna positioning for consistent measurements",
    "Created a realistic head phantom with brain-mimicking materials for accurate testing",
    "Implemented image reconstruction algorithms capable of detecting simulated strokes with 85% accuracy",
    "Developed an intuitive radiologist dashboard for real-time visualization and analysis",
    "Trained AI models to automatically generate diagnostic reports based on microwave imaging data",
  ]

  return (
    <section id="results" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Project Results</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our interdisciplinary approach has yielded promising results in the detection of brain strokes using
              microwave imaging technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimatedSection animation="fade-right" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={300 + index * 100}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5 animate-pulse" />
                      <span className="text-slate-700">{achievement}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>

              <AnimatedSection animation="fade-up" delay={900}>
                <div className="mt-8">
                  <Link href="#demo">
                    <Button className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 hover:scale-105">
                      View Demonstration
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={400}>
            <Card
              className="overflow-hidden border-none shadow-lg transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Brain Scan Results"
                    width={800}
                    height={800}
                    className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                  />
                  {isHovered && (
                    <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-white text-xl font-medium px-6 text-center">
                        Microwave imaging scan showing detected stroke region
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div id="demo" className="mt-20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">System Demonstration</h3>
            <div className="aspect-video bg-slate-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-slate-600">Video demonstration placeholder</p>
              </div>
            </div>
            <p className="text-center mt-4 text-slate-600">
              Demonstration of the complete microwave imaging system for brain stroke detection
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
