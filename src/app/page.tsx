import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import WhySwitch from "../components/WhySwitch";
import Features from "../components/Features";
import Industries from "../components/Industries";
import Workflow from "../components/Workflow";
import Stats from "../components/Stats";
import ConsultationRequest from "../components/ConsultationRequest";

export default function Home() {
  return (
    <main>

      {/* Positioning */}
      <Hero />

      {/* Proof */}
      <DashboardPreview />

      {/* Why businesses switch */}
      <WhySwitch />

      {/* Platform capabilities */}
      <Features />

      {/* Who it's built for */}
      <Industries />

      {/* How it works */}
      <Workflow />

      {/* Results */}
      <Stats />

      {/* Conversion */}
      <ConsultationRequest />
    </main>
  );
}
