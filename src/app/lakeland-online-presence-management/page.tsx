import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Lakeland Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Lakeland, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Lakeland"
      title="Online Presence Management In Lakeland"
      description="VDG OS helps businesses in Lakeland improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
