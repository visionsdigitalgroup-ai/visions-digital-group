import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Sarasota Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Sarasota, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Sarasota"
      title="Online Presence Management In Sarasota"
      description="VDG OS helps businesses in Sarasota improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
