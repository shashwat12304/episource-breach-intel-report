
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Shield, TrendingUp } from "lucide-react";

export const ExecutiveSummary = () => {
  return (
    <section className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Executive Summary
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm font-medium text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              Affected Individuals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">5,418,866</div>
            <p className="text-xs text-gray-500 mt-1">Second largest U.S. healthcare breach of 2025</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm font-medium text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              Breach Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900">10 Days</div>
            <p className="text-xs text-gray-500 mt-1">Jan 27 - Feb 6, 2025</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm font-medium text-gray-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              Attack Vector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">Ransomware</div>
            <p className="text-xs text-gray-500 mt-1">With data exfiltration</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm font-medium text-gray-600">
              <Shield className="w-4 h-4 mr-2" />
              Data Misuse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">None</div>
            <p className="text-xs text-gray-500 mt-1">As of June 2025</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            In early 2025, Episource, a subsidiary of UnitedHealth Group's Optum that provides risk adjustment and medical coding services, suffered a significant ransomware-driven data breach compromising the protected health information (PHI) of more than 5.4 million individuals. The breach, which persisted from January 27 to February 6, 2025, represents the second-largest reported U.S. healthcare data breach of the year.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Key Findings</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-0.5">Impact</Badge>
                <span>The incident impacted 5,418,866 individuals across multiple health organizations using Episource's services.</span>
              </li>
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-0.5">Attack</Badge>
                <span>Detected as a ransomware attack with confirmed data exfiltration, but no evidence of misuse of the data as of June 2025.</span>
              </li>
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-0.5">Data</Badge>
                <span>The breach included highly sensitive personal and medical data: names, SSNs, medical records, insurance IDs, diagnoses, and more.</span>
              </li>
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-0.5">Cascade</Badge>
                <span>Affected healthcare providers such as Sharp Healthcare filed separate breach notifications covering tens of thousands more individuals.</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
