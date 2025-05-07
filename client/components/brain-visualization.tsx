"use client"

import { useEffect, useRef, useState } from "react"

interface BrainVisualizationProps {
  view: string
}

export function BrainVisualization({ view }: BrainVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set background
    ctx.fillStyle = "#0f172a"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Simulate loading
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
      drawBrainImage(ctx, canvas.width, canvas.height, view)
    }, 500)

    return () => clearTimeout(timer)
  }, [view])

  const drawBrainImage = (ctx: CanvasRenderingContext2D, width: number, height: number, view: string) => {
    // Draw brain outline based on view
    ctx.strokeStyle = "#94a3b8"
    ctx.lineWidth = 1

    // Center of canvas
    const centerX = width / 2
    const centerY = height / 2

    if (view === "axial") {
      // Draw oval for brain outline
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, width * 0.4, height * 0.3, 0, 0, 2 * Math.PI)
      ctx.stroke()

      // Draw some internal structures
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, width * 0.15, height * 0.1, 0, 0, 2 * Math.PI)
      ctx.stroke()

      // Draw ventricles
      ctx.beginPath()
      ctx.ellipse(centerX - width * 0.1, centerY, width * 0.05, height * 0.08, Math.PI / 4, 0, 2 * Math.PI)
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(centerX + width * 0.1, centerY, width * 0.05, height * 0.08, -Math.PI / 4, 0, 2 * Math.PI)
      ctx.stroke()

      // Draw anomaly (stroke area)
      ctx.fillStyle = "rgba(220, 38, 38, 0.5)"
      ctx.beginPath()
      ctx.ellipse(centerX - width * 0.25, centerY - height * 0.1, width * 0.08, height * 0.06, 0, 0, 2 * Math.PI)
      ctx.fill()

      // Highlight anomaly border
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2
      ctx.stroke()

      // Add arrow pointing to anomaly
      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.35, centerY - height * 0.2)
      ctx.lineTo(centerX - width * 0.28, centerY - height * 0.12)
      ctx.stroke()

      // Add text label
      ctx.fillStyle = "#ffffff"
      ctx.font = "12px sans-serif"
      ctx.fillText("Ischemic region", centerX - width * 0.45, centerY - height * 0.22)
    } else if (view === "coronal") {
      // Draw coronal view
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, width * 0.35, height * 0.35, 0, 0, 2 * Math.PI)
      ctx.stroke()

      // Draw some internal structures
      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.2, centerY - height * 0.1)
      ctx.lineTo(centerX + width * 0.2, centerY - height * 0.1)
      ctx.stroke()

      // Draw ventricles
      ctx.beginPath()
      ctx.ellipse(centerX - width * 0.08, centerY, width * 0.05, height * 0.1, 0, 0, 2 * Math.PI)
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(centerX + width * 0.08, centerY, width * 0.05, height * 0.1, 0, 0, 2 * Math.PI)
      ctx.stroke()

      // Draw anomaly
      ctx.fillStyle = "rgba(220, 38, 38, 0.5)"
      ctx.beginPath()
      ctx.ellipse(centerX - width * 0.2, centerY + height * 0.1, width * 0.1, height * 0.08, 0, 0, 2 * Math.PI)
      ctx.fill()

      // Highlight anomaly border
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2
      ctx.stroke()
    } else if (view === "sagittal") {
      // Draw sagittal view
      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.3, centerY + height * 0.3)
      ctx.bezierCurveTo(
        centerX - width * 0.4,
        centerY,
        centerX - width * 0.2,
        centerY - height * 0.4,
        centerX + width * 0.3,
        centerY - height * 0.2,
      )
      ctx.bezierCurveTo(
        centerX + width * 0.35,
        centerY,
        centerX + width * 0.3,
        centerY + height * 0.2,
        centerX - width * 0.3,
        centerY + height * 0.3,
      )
      ctx.stroke()

      // Draw some internal structures
      ctx.beginPath()
      ctx.moveTo(centerX, centerY - height * 0.1)
      ctx.bezierCurveTo(
        centerX + width * 0.1,
        centerY - height * 0.05,
        centerX + width * 0.2,
        centerY,
        centerX + width * 0.1,
        centerY + height * 0.1,
      )
      ctx.stroke()

      // Draw anomaly
      ctx.fillStyle = "rgba(220, 38, 38, 0.5)"
      ctx.beginPath()
      ctx.ellipse(centerX + width * 0.1, centerY - height * 0.05, width * 0.08, height * 0.06, 0, 0, 2 * Math.PI)
      ctx.fill()

      // Highlight anomaly border
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2
      ctx.stroke()
    } else if (view === "3d") {
      // Draw simplified 3D representation
      // Brain outline
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, width * 0.35, height * 0.3, 0, 0, 2 * Math.PI)
      ctx.stroke()

      // Add some depth lines
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2
        const x1 = centerX + Math.cos(angle) * width * 0.35
        const y1 = centerY + Math.sin(angle) * height * 0.3
        const x2 = x1 + Math.cos(angle) * 10
        const y2 = y1 + Math.sin(angle) * 10

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Draw anomaly
      ctx.fillStyle = "rgba(220, 38, 38, 0.5)"
      ctx.beginPath()
      ctx.ellipse(centerX - width * 0.15, centerY - height * 0.1, width * 0.1, height * 0.08, 0, 0, 2 * Math.PI)
      ctx.fill()

      // Highlight anomaly border
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2
      ctx.stroke()

      // Add 3D effect to anomaly
      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.15 + width * 0.1, centerY - height * 0.1)
      ctx.lineTo(centerX - width * 0.15 + width * 0.1 + 10, centerY - height * 0.1 + 10)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.15 - width * 0.1, centerY - height * 0.1)
      ctx.lineTo(centerX - width * 0.15 - width * 0.1 + 10, centerY - height * 0.1 + 10)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.15, centerY - height * 0.1 + height * 0.08)
      ctx.lineTo(centerX - width * 0.15 + 10, centerY - height * 0.1 + height * 0.08 + 10)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX - width * 0.15, centerY - height * 0.1 - height * 0.08)
      ctx.lineTo(centerX - width * 0.15 + 10, centerY - height * 0.1 - height * 0.08 + 10)
      ctx.stroke()
    }

    // Add grid lines for reference
    ctx.strokeStyle = "rgba(148, 163, 184, 0.1)"
    ctx.lineWidth = 1

    // Vertical grid lines
    for (let x = 0; x < width; x += 50) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Horizontal grid lines
    for (let y = 0; y < height; y += 50) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Add coordinates
    ctx.fillStyle = "rgba(148, 163, 184, 0.5)"
    ctx.font = "10px monospace"
    ctx.fillText(`${view.toUpperCase()} VIEW`, 10, 20)

    // Add scale
    ctx.fillRect(width - 110, height - 30, 100, 5)
    ctx.fillText("5 cm", width - 70, height - 15)
  }

  return (
    <div className="relative w-full h-[500px] bg-slate-900">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-500 border-t-slate-200"></div>
            <p className="mt-2 text-sm text-slate-400">Loading {view} view...</p>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} width={800} height={500} className="w-full h-full"></canvas>
    </div>
  )
}
