"use client"

import { Activity, Antenna, Brain, Cpu, HardHat, Laptop } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function ComponentsSection() {
  const [activeTab, setActiveTab] = useState("cs")

  return (
    <section id="components" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Project Components</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our project integrates hardware and software components across multiple engineering disciplines.
            </p>
          </div>
        </AnimatedSection>

        <Tabs defaultValue="cs" className="max-w-5xl mx-auto" onValueChange={(value) => setActiveTab(value)}>
          <AnimatedSection animation="fade-up" delay={200}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="cs"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 transition-all duration-300"
              >
                <Laptop className="h-4 w-4 mr-2" />
                Computer Science
              </TabsTrigger>
              <TabsTrigger
                value="ee"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 transition-all duration-300"
              >
                <Antenna className="h-4 w-4 mr-2" />
                Electrical Engineering
              </TabsTrigger>
              <TabsTrigger
                value="me"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 transition-all duration-300"
              >
                <HardHat className="h-4 w-4 mr-2" />
                Mechanical Engineering
              </TabsTrigger>
            </TabsList>
          </AnimatedSection>

          <TabsContent value="cs" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Radiologist Dashboard",
                  description:
                    "A professional interface designed specifically for radiologists to visualize brain scans, view AI-generated diagnoses, and monitor system status in real-time.",
                  delay: 300,
                },
                {
                  icon: Brain,
                  title: "AI Detection Model",
                  description:
                    "Machine learning algorithms trained to analyze microwave imaging data and identify patterns indicative of stroke, with automatic report generation capabilities.",
                  delay: 400,
                },
                {
                  icon: Cpu,
                  title: "Image Reconstruction",
                  description:
                    "Advanced algorithms that process S11 parameters from the antennas to reconstruct a detailed image of the brain, highlighting potential stroke regions.",
                  delay: 500,
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={item.delay}>
                  <Card className="border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-700 text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Radiologist Dashboard Interface"
                    width={1200}
                    height={600}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="text-center mt-4 text-slate-600">
                  The Radiologist Dashboard interface showing brain visualization and AI-assisted diagnosis
                </p>
              </div>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="ee" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Antenna,
                  title: "Custom Antenna Design",
                  description:
                    "Specialized antennas designed to emit and receive microwave signals at frequencies optimal for brain imaging, with minimal interference and maximum penetration.",
                  delay: 300,
                },
                {
                  icon: Activity,
                  title: "S11 Parameter Collection",
                  description:
                    "Precise measurement and collection of S11 parameters (reflection coefficients) from the head phantom, providing the raw data needed for image reconstruction.",
                  delay: 400,
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation={activeTab === "ee" ? "fade-up" : "none"} delay={item.delay}>
                  <Card className="border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-700 text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation={activeTab === "ee" ? "fade-left" : "none"} delay={500}>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Custom Antenna Design"
                      width={600}
                      height={600}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="text-center mt-4 text-slate-600">Custom-designed antenna for microwave imaging</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation={activeTab === "ee" ? "fade-right" : "none"} delay={600}>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="S11 Parameter Measurements"
                      width={600}
                      height={600}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="text-center mt-4 text-slate-600">
                    S11 parameter measurement results from the head phantom
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </TabsContent>

          <TabsContent value="me" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: HardHat,
                  title: "Adjustable Helmet Design",
                  description:
                    "An innovative helmet design with auto-sizing capabilities to fit different head shapes and sizes, ensuring optimal positioning of the antennas for accurate imaging.",
                  delay: 300,
                },
                {
                  icon: Brain,
                  title: "Head Phantom Development",
                  description:
                    "A specialized head phantom containing materials that mimic brain tissue properties, with a water-filled balloon simulating a stroke for testing and validation.",
                  delay: 400,
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation={activeTab === "me" ? "fade-up" : "none"} delay={item.delay}>
                  <Card className="border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-700 text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation={activeTab === "me" ? "fade-left" : "none"} delay={500}>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Adjustable Helmet Design"
                      width={600}
                      height={600}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="text-center mt-4 text-slate-600">
                    The adjustable helmet design with antenna mounting points
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation={activeTab === "me" ? "fade-right" : "none"} delay={600}>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Head Phantom"
                      width={600}
                      height={600}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="text-center mt-4 text-slate-600">
                    Head phantom with brain-mimicking material and simulated stroke
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
