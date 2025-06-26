
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Globe, Building, Scale, DollarSign, Users, TrendingDown } from "lucide-react";

export const ImpactAssessment = () => {
  return (
    <section className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          Impact Assessment & Compliance
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Sectoral Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700">
              This breach had sector-wide ramifications, exposing sensitive medical, insurance, and identifying data for millions of people nationwide through Episource's extensive client network.
            </p>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-3">Impacted Sectors</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Healthcare Providers</span>
                    <span className="text-sm text-gray-600">High Impact</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Health Plans/Insurers</span>
                    <span className="text-sm text-gray-600">High Impact</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Medical Coding Services</span>
                    <span className="text-sm text-gray-600">Critical Impact</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Geographic Distribution</h4>
              <Badge variant="outline" className="w-full justify-center py-2">
                United States (Nationwide via affected clients)
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Regulatory Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Applicable Regulations</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="destructive" className="mr-2">Primary</Badge>
                  <span className="text-sm">HIPAA (Health Insurance Portability and Accountability Act)</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">Potential</Badge>
                  <span className="text-sm">GDPR (if EU citizens' data processed)</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">Various</Badge>
                  <span className="text-sm">State breach notification laws</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Compliance Gaps Identified</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <Badge variant="destructive" className="mr-2 mt-0.5 text-xs">Detection</Badge>
                  <span>Delayed incident detection over ten-day window</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="destructive" className="mr-2 mt-0.5 text-xs">Access</Badge>
                  <span>Insufficient privileged access controls</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="destructive" className="mr-2 mt-0.5 text-xs">Segmentation</Badge>
                  <span>Inadequate network segmentation</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Financial Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$9.77M</div>
              <div className="text-sm text-gray-600">Average healthcare breach cost (IBM 2024)</div>
            </div>
            <div className="text-xs text-gray-500 text-center">
              Episource's actual costs likely exceed industry average due to breach scale
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Supply Chain Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Affected Partners</h4>
              <ul className="text-sm space-y-1">
                <li>• Sharp Healthcare</li>
                <li>• Sharp Community Medical Group</li>
                <li>• Multiple unnamed providers</li>
                <li>• Dozens of insurance partners</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingDown className="w-5 h-5 mr-2" />
              Dark Web Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <div className="text-sm font-semibold text-green-800 mb-1">No Evidence Found</div>
              <div className="text-xs text-green-700">
                No credible dark web disclosures of Episource breach data as of June 2025
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Continuous monitoring of ransomware leak sites and underground forums shows no explicit data sales or listings
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
