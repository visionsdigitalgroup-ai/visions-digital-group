import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";

export const metadata: Metadata = {
  title: "Wesley Chapel Online Presence Management",
  description: "Improve SEO, reviews, websites, and lead generation in Wesley Chapel, Florida.",
};

export default function Page() {
  return (
    <LocationTemplate
      city="Wesley Chapel"
      title="Online Presence Management In Wesley Chapel"
      description="VDG OS helps businesses in Wesley Chapel improve visibility, generate leads, strengthen reputation, and streamline growth."
    />
  );
}
