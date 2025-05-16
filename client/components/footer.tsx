import { Brain, Github, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <AnimatedSection animation="fade-right" delay={100}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold">Brain Stroke Detection</h3>
              </div>
              <p className="text-slate-400 mb-6">
                An interdisciplinary senior project combining electrical engineering, computer science, and mechanical
                engineering to revolutionize stroke detection.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 text-blue-400 hover:text-blue-300 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 text-blue-400 hover:text-blue-300 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { href: "#overview", label: "Project Overview" },
                  { href: "#team", label: "Our Team" },
                  { href: "#components", label: "Project Components" },
                  { href: "#results", label: "Results" },
                  { href: "#demo", label: "Demonstration" },
                ].map((link, index) => (
                  <li key={index} className="transform-gpu transition-transform duration-300 hover:translate-x-2">
                    <Link href={link.href} className="text-slate-400 hover:text-blue-300 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    King Fahd University of Petroleum and Minerals
                    <br />
                    Dhahran, Saudi Arabia
                    <br />
                    31261
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    s202043800@kfupm.edu.sa
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    +966 56 452 7117
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© {new Date().getFullYear()} Microwave Imaging for Brain Stroke Detection. All rights reserved.</p>
            <p className="mt-2 text-sm">Senior Project</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
