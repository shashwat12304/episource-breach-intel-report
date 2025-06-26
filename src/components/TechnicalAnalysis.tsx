
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Eye, Network, Database, Lock } from "lucide-react";

export const TechnicalAnalysis = () => {
  return (
    <section className="space-y-6">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
          <Network className="w-6 h-6 mr-2" />
          Technical Analysis & Indicators
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Indicators of Compromise (IOCs)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Limited IOC Disclosure</span>
              </div>
              <p className="text-sm text-yellow-700">
                No host-based or network-based IOCs (file hashes, IPs, domains) have been publicly disclosed for the Episource breach.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Behavioral Indicators</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <Badge variant="destructive" className="mr-2 mt-0.5 text-xs">Access</Badge>
                  <span>Unusual system access patterns detected February 6, 2025</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="destructive" className="mr-2 mt-0.5 text-xs">Session</Badge>
                  <span>Extended unauthorized sessions over ten-day period</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="destructive" className="mr-2 mt-0.5 text-xs">Login</Badge>
                  <span>Suspicious login activity and privilege escalation to PHI repositories</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Data Exfiltration Patterns</h4>
              <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                <ul className="text-sm space-y-1">
                  <li>• Bulk copying of structured health records</li>
                  <li>• Theft of PHI data between Jan 27 - Feb 6, 2025</li>
                  <li>• Systematic data extraction: names, DOB, SSNs, addresses, insurance records, medical documentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Malware & Vulnerabilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Malware Analysis</h4>
              <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Badge variant="outline" className="mr-2">Family</Badge>
                  <span className="font-mono text-sm">Unspecified Ransomware</span>
                </div>
                <p className="text-sm text-gray-700">
                  The breach involved ransomware deployment resulting in system encryption and data exfiltration. The specific strain remains unreported, but tactics are consistent with major ransomware-as-a-service operators.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Attack Progression</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-3">1</div>
                  <div>
                    <div className="font-semibold">Initial Access</div>
                    <div className="text-gray-600">Phishing or vulnerability exploitation (implied)</div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">2</div>
                  <div>
                    <div className="font-semibold">Lateral Movement</div>
                    <div className="text-gray-600">Systematic network traversal to PHI repositories</div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">3</div>
                  <div>
                    <div className="font-semibold">Data Exfiltration</div>
                    <div className="text-gray-600">Bulk copying of sensitive health records</div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">4</div>
                  <div>
                    <div className="font-semibold">Ransomware Deployment</div>
                    <div className="text-gray-600">System encryption and operational disruption</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="w-5 h-5 mr-2" />
            Compromised Data Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Personal Identifiers</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Full names</li>
                <li>• Social Security Numbers</li>
                <li>• Dates of birth</li>
                <li>• Home addresses</li>
                <li>• Phone numbers</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Medical Information</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Medical records</li>
                <li>• Diagnoses</li>
                <li>• Treatment information</li>
                <li>• Provider details</li>
                <li>• Medical history</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Insurance Data</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Insurance ID numbers</li>
                <li>• Policy information</li>
                <li>• Claims data</li>
                <li>• Coverage details</li>
                <li>• Billing records</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
