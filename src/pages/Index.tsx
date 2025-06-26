
import { Header } from "@/components/Header";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { BreachOverview } from "@/components/BreachOverview";
import { TechnicalAnalysis } from "@/components/TechnicalAnalysis";
import { ImpactAssessment } from "@/components/ImpactAssessment";
import { RecommendationsSection } from "@/components/RecommendationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <ExecutiveSummary />
        <BreachOverview />
        <TechnicalAnalysis />
        <ImpactAssessment />
        <RecommendationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
