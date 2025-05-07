import { Activity, Brain, Clock, Cpu, Gauge, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function ProjectOverview() {
  return (
    <section id="overview" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Project Overview</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our senior project aims to develop a non-invasive, portable, and cost-effective solution for early stroke
              detection using microwave imaging technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Rapid Detection",
              description:
                "Early detection of strokes is crucial for treatment. Our system aims to provide rapid results, potentially saving lives through faster intervention.",
              delay: 100,
            },
            {
              icon: Gauge,
              title: "Non-Invasive",
              description:
                "Unlike traditional methods, our microwave imaging approach is completely non-invasive, making it more comfortable and accessible for patients.",
              delay: 200,
            },
            {
              icon: Cpu,
              title: "AI-Powered",
              description:
                "Our system leverages advanced AI algorithms to analyze microwave signals and detect anomalies that may indicate a stroke with high accuracy.",
              delay: 300,
            },
            {
              icon: Brain,
              title: "Specialized Hardware",
              description:
                "Custom-designed antennas and a specialized helmet ensure optimal signal transmission and reception for accurate brain imaging.",
              delay: 400,
            },
            {
              icon: Activity,
              title: "Real-time Analysis",
              description:
                "Our radiologist dashboard provides real-time visualization and analysis of brain scans, helping medical professionals make informed decisions quickly.",
              delay: 500,
            },
            {
              icon: Zap,
              title: "Interdisciplinary Approach",
              description:
                "Our project combines expertise from electrical engineering, computer science, mechanical, and Control engineering to create a comprehensive solution.",
              delay: 600,
            },
          ].map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={item.delay}>
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-[#210F38]">
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
      </div>
    </section>
  )
}
