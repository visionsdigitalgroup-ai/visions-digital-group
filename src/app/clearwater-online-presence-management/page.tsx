import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Clearwater Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Clearwater, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Clearwater"
      title="Online Presence Management In Clearwater"
      description="VDG OS helps businesses in Clearwater improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
