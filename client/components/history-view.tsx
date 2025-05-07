import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Filter,
  Home,
  Search,
  SlidersHorizontal,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function HistoryView() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-200">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-1">
              <Home className="h-5 w-5" />
            </Link>
            <Separator orientation="vertical" className="h-6 bg-slate-800" />
            <h1 className="text-lg font-semibold">Patient History</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-slate-900 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              Last updated: 2 min ago
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center text-sm text-slate-400 hover:text-slate-300">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Apr 2025</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="bg-slate-950 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle>Scan History</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                  <Input
                    type="search"
                    placeholder="Search patients..."
                    className="pl-8 h-9 bg-slate-900 border-slate-800 text-sm"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filter</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Sort</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-slate-900/50">
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Scan Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-800 hover:bg-slate-900/50">
                  <TableCell className="font-medium">12345678</TableCell>
                  <TableCell>John Doe, 58</TableCell>
                  <TableCell>MRI T2</TableCell>
                  <TableCell>Today, 11:03 AM</TableCell>
                  <TableCell>
                    <Badge className="bg-red-900 hover:bg-red-900 text-white">Acute Ischemic Stroke</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-red-400 border-red-400">
                      Urgent
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/50">
                  <TableCell className="font-medium">12345677</TableCell>
                  <TableCell>Jane Smith, 72</TableCell>
                  <TableCell>CT Angiogram</TableCell>
                  <TableCell>Today, 10:15 AM</TableCell>
                  <TableCell>
                    <Badge className="bg-amber-900 hover:bg-amber-900 text-white">Carotid Stenosis</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-amber-400 border-amber-400">
                      Follow-up
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/50">
                  <TableCell className="font-medium">12345676</TableCell>
                  <TableCell>Robert Johnson, 65</TableCell>
                  <TableCell>MRI FLAIR</TableCell>
                  <TableCell>Yesterday, 3:45 PM</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-900 hover:bg-blue-900 text-white">Multiple Sclerosis</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-blue-400 border-blue-400">
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/50">
                  <TableCell className="font-medium">12345675</TableCell>
                  <TableCell>Sarah Williams, 42</TableCell>
                  <TableCell>CT Perfusion</TableCell>
                  <TableCell>Yesterday, 1:30 PM</TableCell>
                  <TableCell>
                    <Badge className="bg-green-900 hover:bg-green-900 text-white">Normal</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/50">
                  <TableCell className="font-medium">12345674</TableCell>
                  <TableCell>Michael Brown, 61</TableCell>
                  <TableCell>MRI DWI</TableCell>
                  <TableCell>Apr 27, 2:15 PM</TableCell>
                  <TableCell>
                    <Badge className="bg-purple-900 hover:bg-purple-900 text-white">Tumor</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-purple-400 border-purple-400">
                      Follow-up
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-4">
            <div className="text-sm text-slate-400">Showing 5 of 42 scans</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
