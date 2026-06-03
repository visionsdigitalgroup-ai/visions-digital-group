import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Orlando Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Orlando, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Orlando"
      title="Online Presence Management In Orlando"
      description="VDG OS helps businesses in Orlando improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
