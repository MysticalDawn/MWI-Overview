"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { useAnimation } from "@/components/animation-provider"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up" | "none"
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { prefersReducedMotion, isLoaded } = useAnimation()

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before triggering the animation
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          // Unobserve after animation is triggered
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [delay, prefersReducedMotion, threshold, isLoaded])

  // Define animation classes based on the animation type
  const getAnimationClasses = () => {
    if (prefersReducedMotion || animation === "none") return ""

    const baseClasses = "transition-all duration-700 ease-out"
    const animationClasses = {
      "fade-up": `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`,
      "fade-in": `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`,
      "fade-left": `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`,
      "fade-right": `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`,
      "scale-up": `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
    }

    return animationClasses[animation]
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
