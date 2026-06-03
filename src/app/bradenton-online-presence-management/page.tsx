import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Bradenton Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Bradenton, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Bradenton"
      title="Online Presence Management In Bradenton"
      description="VDG OS helps businesses in Bradenton improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
