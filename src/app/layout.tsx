import type { Metadata } from "next";
import { Commissioner, Playfair_Display } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "UNBOUND — Go beyond your bounds.",
    template: "%s | UNBOUND",
  },
  description:
    "Discover outdoor hobbies, learn how to start, find places and people, and document your adventures with UNBOUND.",
  keywords: [
    "outdoor",
    "adventure",
    "community",
    "hiking",
    "climbing",
    "surfing",
    "paragliding",
    "camping",
    "discover",
  ],
  authors: [{ name: "UNBOUND" }],
  creator: "UNBOUND",
  publisher: "UNBOUND",
  alternates: {
    canonical: "https://gounbound.app",
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
  openGraph: {
    title: "UNBOUND — Go beyond your bounds.",
    description:
      "Discover outdoor hobbies, learn how to start, find places and people, and document your adventures with UNBOUND.",
    url: "https://gounbound.app",
    siteName: "UNBOUND",
    images: [
      {
        url: "https://gounbound.app/og-image.jpg", // Make sure to add a real og-image.jpg
        width: 1200,
        height: 630,
        alt: "UNBOUND - Go beyond your bounds",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNBOUND — Go beyond your bounds.",
    description:
      "Discover outdoor hobbies, learn how to start, find places and people, and document your adventures with UNBOUND.",
    creator: "@gounbound", // Replace with actual Twitter handle if exists
    images: ["https://gounbound.app/og-image.jpg"],
  },
  metadataBase: new URL("https://gounbound.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UNBOUND",
    url: "https://gounbound.app",
    description: "Discover outdoor hobbies, learn how to start, find places and people, and document your adventures with UNBOUND.",
  };

  return (
    <html
      lang="en"
      className={`${commissioner.variable} ${playfair.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
