
import { Shield, AlertTriangle } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-red-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">∞</span>
            </div>
            <h1 className="text-3xl font-bold">Transilience</h1>
          </div>
          <div className="bg-white text-purple-900 px-6 py-2 rounded-lg font-bold text-lg">
            SECURITY ADVISORY
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight">
            Episource Healthcare Data Breach (2025): Analytical Intelligence Report
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive analytical report covering the scope, impact, and mitigation of the Episource healthcare data breach compromising 5.4 million records in early 2025.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm text-purple-200 uppercase tracking-wide mb-1">Report ID</div>
            <div className="text-white font-mono text-sm">episource-2025-breach-report</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm text-purple-200 uppercase tracking-wide mb-1">Created</div>
            <div className="text-white font-mono text-sm">2025-06-26</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm text-purple-200 uppercase tracking-wide mb-1">Threat Actor</div>
            <div className="text-white font-mono text-sm">Unknown Ransomware</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm text-purple-200 uppercase tracking-wide mb-1">Classification</div>
            <div className="text-red-400 font-bold text-sm flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Critical Severity
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
