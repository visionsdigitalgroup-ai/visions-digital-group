import type { Metadata } from "next";
import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata: Metadata = {
  title:
    "HVAC Marketing Platform | HVAC SEO & Lead Generation",

  description:
    "Generate more HVAC leads with SEO, Google Business Profile optimization, review management, websites, automation, and online presence management.",
};

export default function HVACPage() {
  return (
    <IndustryTemplate
      badge="HVAC Growth Platform"
      title="Generate More HVAC Leads"
      subtitle="And Grow Your Service Business"
      description="Improve local visibility, increase service calls, strengthen your online reputation, and automate customer communication."
      industry="HVAC Companies"
      seoKeyword="HVAC services"
    />
  );
}