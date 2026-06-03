import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://visionsdigitalgroup.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/roofing-marketing-platform`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/hvac-marketing-platform`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/plumbing-marketing-platform`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/electrical-marketing-platform`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/contractor-marketing-platform`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/agency-growth-platform`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}