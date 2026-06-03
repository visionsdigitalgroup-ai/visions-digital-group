import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Riverview Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Riverview, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Riverview"
      title="Online Presence Management In Riverview"
      description="VDG OS helps businesses in Riverview improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
