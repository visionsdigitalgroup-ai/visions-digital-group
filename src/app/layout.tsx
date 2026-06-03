import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://visionsdigitalgroup.com"
  ),

  title:
    "VDG OS | Online Presence & Business Operations Platform",

  description:
    "VDG OS helps service businesses manage websites, SEO, online reviews, local visibility, lead generation, customer management, automation, reporting, and business operations from one connected platform.",

  keywords: [
    "online presence management",
    "service business software",
    "local seo platform",
    "google business profile management",
    "reputation management software",
    "lead generation platform",
    "contractor marketing software",
    "business operations platform",
    "customer management software",
    "website management platform",
    "service business growth platform",
    "home service marketing",
    "online reputation management",
    "local business software",
  ],

  openGraph: {
    title:
      "VDG OS | Online Presence & Business Operations Platform",

    description:
      "Manage your website, SEO, reviews, lead generation, customer communication, automation, and business operations from one platform.",

    type: "website",

    locale: "en_US",

    siteName: "VDG OS",

    url:
      "https://visionsdigitalgroup.com",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "VDG OS | Online Presence & Business Operations Platform",

    description:
      "Own your entire online presence from one connected platform.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "SoftwareApplication",

  name: "VDG OS",

  applicationCategory:
    "BusinessApplication",

  operatingSystem: "Web",

  url:
    "https://visionsdigitalgroup.com",

  creator: {
    "@type": "Organization",
    name: "Visions Digital Group",
  },

  description:
    "VDG OS is an online presence and business operations platform that helps service businesses manage websites, SEO, online reviews, local visibility, lead generation, customer communication, automation, reporting, and operations from one connected system.",

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },

  audience: {
    "@type":
      "BusinessAudience",

    audienceType:
      "Service Businesses",
  },

  featureList: [
    "Website Management",
    "SEO Management",
    "Google Business Profile Management",
    "Review Management",
    "Lead Generation",
    "Customer CRM",
    "Business Automation",
    "Reporting Dashboard",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />

        {children}

      </body>
    </html>
  );
}