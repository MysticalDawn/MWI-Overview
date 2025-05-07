"use client"

import { useState } from "react"
import { Activity, AlertCircle, Battery, Brain, Clock, Home, Signal, User } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { BrainVisualization } from "./brain-visualization"
import { DiagnosisPanel } from "./diagnosis-panel"
import { StatusIndicator } from "./status-indicator"

export function BrainDashboard() {
  const [currentView, setCurrentView] = useState("axial")

  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-200">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center space-x-4">
            <Brain className="h-6 w-6 text-slate-200" />
            <h1 className="text-lg font-semibold">NeuroScan Pro</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-1 px-3 py-2 rounded-md bg-slate-900">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/history"
              className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-slate-900 transition-colors"
            >
              <Clock className="h-4 w-4" />
              <span>History</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-slate-900 text-xs">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
              LIVE
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User settings</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dr. Sarah Chen</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Patient Info */}
        <Card className="bg-slate-950 border-slate-800 md:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Patient: John Doe, 58</CardTitle>
                <CardDescription>ID: 12345678 • Admitted: Today, 10:45 AM • Urgent</CardDescription>
              </div>
              <Badge className="bg-red-900 hover:bg-red-900 text-white">Stroke Alert</Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Brain Visualization */}
        <Card className="bg-slate-950 border-slate-800 md:col-span-2 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>Brain Visualization</CardTitle>
              <div className="flex space-x-2">
                <Button
                  variant={currentView === "axial" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentView("axial")}
                  className="h-7 px-2 text-xs"
                >
                  Axial
                </Button>
                <Button
                  variant={currentView === "coronal" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentView("coronal")}
                  className="h-7 px-2 text-xs"
                >
                  Coronal
                </Button>
                <Button
                  variant={currentView === "sagittal" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentView("sagittal")}
                  className="h-7 px-2 text-xs"
                >
                  Sagittal
                </Button>
                <Button
                  variant={currentView === "3d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentView("3d")}
                  className="h-7 px-2 text-xs"
                >
                  3D
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <BrainVisualization view={currentView} />
          </CardContent>
          <CardFooter className="border-t border-slate-800 bg-slate-900/50 py-2 px-4 text-xs text-slate-400">
            <div className="flex justify-between w-full">
              <span>Scan completed at 11:03 AM</span>
              <span>MRI T2-weighted sequence</span>
            </div>
          </CardFooter>
        </Card>

        {/* Right Side Panels */}
        <div className="space-y-6">
          {/* AI Diagnosis */}
          <DiagnosisPanel />

          {/* System Status */}
          <Card className="bg-slate-950 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <StatusIndicator
                icon={Activity}
                label="Scan Progress"
                value="100%"
                status="complete"
                showProgress
                progressValue={100}
              />
              <StatusIndicator
                icon={Battery}
                label="Power Output"
                value="95%"
                status="optimal"
                showProgress
                progressValue={95}
              />
              <StatusIndicator icon={AlertCircle} label="Antenna Status" value="Operational" status="optimal" />
              <StatusIndicator
                icon={Signal}
                label="Signal Quality"
                value="High"
                status="optimal"
                showProgress
                progressValue={92}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
