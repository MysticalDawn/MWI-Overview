import { AlertCircle, ArrowRight, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DiagnosisPanel() {
  return (
    <Card className="bg-slate-950 border-slate-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium">AI Diagnosis</CardTitle>
          <Badge className="bg-amber-900 hover:bg-amber-900 text-white">AI Assisted</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-900">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-red-400">Acute Ischemic Stroke</h4>
                  <p className="text-sm text-slate-400">Left middle cerebral artery (MCA) territory</p>
                </div>
              </div>
              <Separator className="bg-slate-800" />
              <div className="text-sm space-y-2">
                <p>
                  High confidence detection of an acute ischemic stroke in the left MCA territory. Estimated infarct
                  volume: 32cc.
                </p>
                <p className="text-slate-400">
                  Time is critical. Consider immediate thrombolytic therapy or mechanical thrombectomy evaluation.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="details" className="space-y-4 pt-4">
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium">Findings</h4>
                <ul className="list-disc pl-5 text-slate-300 space-y-1 mt-1">
                  <li>Hypodense area in left MCA territory</li>
                  <li>No evidence of hemorrhagic conversion</li>
                  <li>Mild mass effect without midline shift</li>
                  <li>ASPECTS score: 7</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Differential Diagnosis</h4>
                <ul className="list-disc pl-5 text-slate-300 space-y-1 mt-1">
                  <li>Acute ischemic stroke (95% confidence)</li>
                  <li>Tumor (3% confidence)</li>
                  <li>Infection (2% confidence)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-slate-800 pt-4">
        <Button variant="outline" size="sm" className="text-xs h-8">
          <FileText className="mr-1 h-3.5 w-3.5" />
          Full Report
        </Button>
        <Button size="sm" className="text-xs h-8">
          Treatment Protocol
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
