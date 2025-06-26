
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, AlertTriangle, Target, Users, Database } from "lucide-react";

export const RecommendationsSection = () => {
  const recommendations = [
    {
      priority: "Critical",
      icon: Shield,
      title: "Network Segmentation Enhancement",
      description: "Strengthen network segmentation to isolate sensitive PHI and EHR systems from vendor or partner access.",
      implementation: "Immediate",
      effort: "High"
    },
    {
      priority: "Critical",
      icon: Users,
      title: "Third-Party Risk Management",
      description: "Implement comprehensive, frequent security auditing including of third-party vendor environments.",
      implementation: "Immediate",
      effort: "Medium"
    },
    {
      priority: "High",
      icon: CheckCircle,
      title: "Access Control Hardening",
      description: "Enforce multi-factor authentication, real-time behavioral analytics, and strict privilege management across all healthcare IT platforms.",
      implementation: "30 days",
      effort: "Medium"
    },
    {
      priority: "High",
      icon: Database,
      title: "Backup & Recovery",
      description: "Ensure regular, encrypted backups with immutable storage for disaster recovery.",
      implementation: "60 days",
      effort: "High"
    },
    {
      priority: "Medium",
      icon: Target,
      title: "Incident Response Training",
      description: "Expand mandatory incident response drills including scenarios for supply chain attacks.",
      implementation: "90 days",
      effort: "Low"
    },
    {
      priority: "Medium",
      icon: AlertTriangle,
      title: "Industry Collaboration",
      description: "Foster industry collaboration through ISACs and real-time intelligence sharing platforms.",
      implementation: "Ongoing",
      effort: "Low"
    }
  ];

  return (
    <section className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Mitigation Recommendations
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Recommendations Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Best practices emerging from analysis of the Episource breach and concurrent incidents emphasize the importance of segmentation, least-privilege access, resilience to ransomware, and regulatory audit readiness. Rapid detection, notification, and a layered defense posture are critical for reducing the scale and cost of breaches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">6</div>
              <div className="text-sm text-red-700">Critical & High Priority</div>
            </div>
            <div className="text-center bg-yellow-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">4</div>
              <div className="text-sm text-yellow-700">Immediate Action Required</div>
            </div>
            <div className="text-center bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-green-700">Implementation Target</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => {
          const IconComponent = rec.icon;
          return (
            <Card key={index} className={`border-l-4 ${
              rec.priority === 'Critical' ? 'border-l-red-500' : 
              rec.priority === 'High' ? 'border-l-orange-500' : 
              'border-l-yellow-500'
            }`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent className="w-5 h-5 mr-2" />
                    {rec.title}
                  </CardTitle>
                  <Badge variant={
                    rec.priority === 'Critical' ? 'destructive' : 
                    rec.priority === 'High' ? 'default' : 
                    'secondary'
                  }>
                    {rec.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">{rec.description}</p>
                
                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="flex items-center text-xs text-gray-600">
                    <span className="mr-3">
                      <strong>Timeline:</strong> {rec.implementation}
                    </span>
                    <span>
                      <strong>Effort:</strong> {rec.effort}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Phase 1: Immediate Actions (0-30 days)</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Implement emergency network segmentation for PHI systems</li>
                <li>• Conduct comprehensive third-party security assessments</li>
                <li>• Deploy enhanced access controls and MFA</li>
                <li>• Activate 24/7 security monitoring</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Phase 2: Short-term Improvements (30-90 days)</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Complete backup and recovery system overhaul</li>
                <li>• Implement behavioral analytics platforms</li>
                <li>• Launch incident response training programs</li>
                <li>• Establish vendor security governance framework</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Phase 3: Long-term Strategy (90+ days)</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Establish industry collaboration partnerships</li>
                <li>• Implement continuous compliance monitoring</li>
                <li>• Deploy advanced threat hunting capabilities</li>
                <li>• Create comprehensive security culture program</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
