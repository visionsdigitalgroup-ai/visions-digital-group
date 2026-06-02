import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Industries from "../components/Industries";
import WhySwitch from "../components/WhySwitch";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import Roadmap from "../components/Roadmap";
import FoundingMembers from "../components/FoundingMembers";
import Waitlist from "../components/Waitlist";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Industries />
      <WhySwitch />
      <Stats />
      <Features />
      <Workflow />
      <Roadmap />
      <FoundingMembers />
      <Waitlist />
    </main>
  );
}