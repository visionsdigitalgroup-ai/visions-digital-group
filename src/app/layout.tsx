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
    "https://VISIONSDIGITALGROUP.COM"
  ),

  title:
    "VDG OS | Operating System for Service Businesses",

  description:
    "VDG OS helps service businesses manage leads, customers, jobs, communication, automation, reporting, and growth from a single platform.",

  keywords: [
    "operating system for service businesses",
    "service business software",
    "contractor management software",
    "business automation platform",
    "crm for service businesses",
    "workflow automation",
    "operations management software",
    "business operating system",
    "service company software",
  ],

  openGraph: {
    title:
      "VDG OS | Operating System for Service Businesses",

    description:
      "Manage leads, customers, jobs, communication, automation, reporting, and growth from one platform.",

    type: "website",

    locale: "en_US",

    siteName: "VDG OS",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "VDG OS | Operating System for Service Businesses",

    description:
      "Run your entire business from one platform.",
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

  description:
    "VDG OS is an operating system for service businesses that combines CRM, automation, communication, reporting, workflow management, and business operations into one platform.",

  url:
    "https://VISIONSDIGITALGROUP.COM",

  creator: {
    "@type":
      "Organization",

    name:
      "Visions Digital Group",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                organizationSchema
              ),
          }}
        />

        {children}

      </body>
    </html>
  );
}