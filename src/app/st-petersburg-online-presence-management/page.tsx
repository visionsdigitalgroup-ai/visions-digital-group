import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "St Petersburg Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in St Petersburg, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="St Petersburg"
      title="Online Presence Management In St Petersburg"
      description="VDG OS helps businesses in St Petersburg improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
