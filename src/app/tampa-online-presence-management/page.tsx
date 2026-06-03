import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title:
    "Tampa Online Presence Management",

  description:
    "Improve your online visibility, SEO, reputation, website performance, and lead generation with VDG OS in Tampa, Florida.",
};

export default function TampaPage() {
  return (
    <LocationTemplate
      city="Tampa"
      title="Online Presence Management In Tampa"
      description="VDG OS helps Tampa businesses improve local visibility, generate more leads, strengthen their reputation, and manage growth from one connected platform."
    />
  );
}