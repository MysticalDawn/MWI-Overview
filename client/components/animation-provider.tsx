"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type AnimationContextType = {
  prefersReducedMotion: boolean
  isLoaded: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  isLoaded: false,
})

export function useAnimation() {
  return useContext(AnimationContext)
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    // Set loaded state after a short delay to allow for initial animations
    const timer = setTimeout(() => setIsLoaded(true), 100)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      clearTimeout(timer)
    }
  }, [])

  return <AnimationContext.Provider value={{ prefersReducedMotion, isLoaded }}>{children}</AnimationContext.Provider>
}
