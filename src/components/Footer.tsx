
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Calendar } from "lucide-react";

export const Footer = () => {
  const references = [
    "https://www.hipaaguide.net/episource-data-breach/",
    "https://www.techtarget.com/healthtechsecurity/news/366626048/Episource-data-breach-affects-54M-individuals",
    "https://www.healthcaredive.com/news/episource-healthcare-data-breach-impacts-5-4-million/751103/",
    "https://www.rubrik.com/insights/healthcare-cybersecurity-challenges-threats-2025"
  ];

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Report Information
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2 text-xs">ID</Badge>
                <span className="font-mono">episource-2025-breach-report</span>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2 text-xs">Version</Badge>
                <span>2.1</span>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2 text-xs">Created</Badge>
                <span>2025-06-26T19:19:27Z</span>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2 text-xs">Modified</Badge>
                <span>2025-06-26T19:20:56Z</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              References & Sources
            </h3>
            <div className="space-y-2">
              {references.map((ref, index) => (
                <div key={index} className="text-sm">
                  <a 
                    href={ref} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-100 flex items-center"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {ref.split('/')[2]}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">∞</span>
              </div>
              <span className="text-xl font-bold">Transilience</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Published June 26, 2025</span>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            This report is provided for informational and educational purposes only. 
            All information is based on publicly available sources and threat intelligence as of the publication date.
          </div>
        </div>
      </div>
    </footer>
  );
};
