import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  title: {
    default:
      "VDG OS | Online Presence Management Platform",
    template:
      "%s | VDG OS",
  },

  description:
    "VDG OS helps service businesses manage websites, SEO, Google Business Profiles, online reviews, lead generation, customer communication, automation, reporting, and business operations from one connected platform.",

  keywords: [
    "online presence management",
    "local seo",
    "google business profile",
    "review management",
    "lead generation",
    "service business software",
    "contractor marketing",
    "website management",
    "business automation",
    "crm",
    "online reputation management",
    "service business growth",
  ],

  category: "Business Software",

  authors: [
    {
      name: "Visions Digital Group",
    },
  ],

  creator:
    "Visions Digital Group",

  publisher:
    "Visions Digital Group",

  alternates: {
    canonical:
      "https://visionsdigitalgroup.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url:
      "https://visionsdigitalgroup.com",

    siteName: "VDG OS",

    title:
      "VDG OS | Online Presence Management Platform",

    description:
      "Manage websites, SEO, reviews, visibility, lead generation, customer communication, automation, and operations from one connected platform.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "VDG OS Online Presence Management Platform",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "VDG OS | Online Presence Management Platform",

    description:
      "Websites • SEO • Reviews • Lead Generation",

    images: [
      "/og-image.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Organization",

  name:
    "Visions Digital Group",

  url:
    "https://visionsdigitalgroup.com",

  logo:
    "https://visionsdigitalgroup.com/logo.png",

  description:
    "Visions Digital Group helps service businesses improve online visibility, SEO, reputation, lead generation, automation, and business operations.",

  sameAs: [],
};

const softwareSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "SoftwareApplication",

  name: "VDG OS",

  applicationCategory:
    "BusinessApplication",

  operatingSystem: "Web",

  creator: {
    "@type":
      "Organization",

    name:
      "Visions Digital Group",
  },

  description:
    "VDG OS combines website management, SEO, Google Business Profile management, reviews, lead generation, CRM, automation, reporting, and business operations into one platform.",

  featureList: [
    "Website Management",
    "SEO Management",
    "Google Business Profile Management",
    "Review Management",
    "Lead Generation",
    "CRM",
    "Automation",
    "Reporting",
  ],

  offers: {
    "@type":
      "Offer",

    price: "0",

    priceCurrency:
      "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-white">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              softwareSchema
            ),
          }}
        />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}