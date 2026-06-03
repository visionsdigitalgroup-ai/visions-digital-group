import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Brandon Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Brandon, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Brandon"
      title="Online Presence Management In Brandon"
      description="VDG OS helps businesses in Brandon improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
