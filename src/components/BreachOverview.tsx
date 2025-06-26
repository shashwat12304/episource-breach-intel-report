
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Calendar, AlertCircle } from "lucide-react";

export const BreachOverview = () => {
  return (
    <section className="space-y-6">
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
          <Clock className="w-6 h-6 mr-2" />
          Breach Campaign Overview
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Campaign Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Campaign Name</h4>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded">Episource 2025 Ransomware and Data Exfiltration Breach</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Timeline</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Badge variant="destructive" className="mr-2">Breach Window</Badge>
                  <span>January 27 - February 6, 2025</span>
                </div>
                <div className="flex items-center text-sm">
                  <Badge variant="outline" className="mr-2">Public Notification</Badge>
                  <span>April 23, 2025</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Primary Targets</h4>
              <ul className="text-sm space-y-1">
                <li>• Health insurance plans</li>
                <li>• Healthcare providers utilizing Episource services</li>
                <li>• Patient populations managed by Episource clients</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Healthcare Breach Landscape
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700">
              The healthcare sector faced an unprecedented surge in data breaches during 2024–2025, with ransomware dominating the threat landscape.
            </p>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">2024-2025 Statistics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <div className="font-bold text-red-900">1,710</div>
                  <div className="text-red-700">Total Incidents</div>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <div className="font-bold text-orange-900">1,542</div>
                  <div className="text-orange-700">Confirmed Disclosures</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Top Breaches (2024-2025)</h4>
              <ul className="text-sm space-y-1">
                <li>• Change Healthcare: 190M individuals (2024)</li>
                <li>• Yale New Haven Health: 5.6M patients (2025)</li>
                <li>• <strong>Episource: 5.4M individuals (2025)</strong></li>
                <li>• Blue Shield of California: 4.7M people</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Threat Actor Attribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Actor Profile</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> Unknown Ransomware Operator</div>
                <div><strong>Attribution:</strong> Not Publicly Identified</div>
                <div><strong>Motivation:</strong> Financial extortion</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Attack Techniques</h4>
              <ul className="text-sm space-y-1">
                <li>• Ransomware deployment</li>
                <li>• Unauthorized system access</li>
                <li>• Data exfiltration</li>
                <li>• Network traversal</li>
                <li>• Privilege escalation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">MITRE ATT&CK Tactics</h4>
              <div className="flex flex-wrap gap-1">
                {["Initial Access", "Execution", "Persistence", "Privilege Escalation", "Defense Evasion", "Credential Access", "Discovery", "Lateral Movement", "Collection", "Exfiltration", "Impact"].map((tactic) => (
                  <Badge key={tactic} variant="secondary" className="text-xs">{tactic}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
