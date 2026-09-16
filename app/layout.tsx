import type { Metadata } from "next";
import { Bodoni_Moda, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/chrome/navbar";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pr-preseed-investor-deck.project-rhapsody.com"),
  title: "Project Rhapsody | Pre-Seed",
  description:
    "Nobody has played this before. Project Rhapsody is an orbital media studio program of Symphony Space.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Project Rhapsody | Pre-Seed",
    description: "Nobody has played this before. An orbital media studio program of Symphony Space.",
    url: "https://pr-preseed-investor-deck.project-rhapsody.com",
    siteName: "Project Rhapsody",
    images: [{ url: "/social/deck-preview.png", width: 1200, height: 630, alt: "Project Rhapsody - Orbital Media Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Rhapsody | Pre-Seed",
    description: "Nobody has played this before. An orbital media studio program of Symphony Space.",
    images: ["/social/deck-preview.png"],
  },
  icons: {
    icon: [{ url: withBasePath("/favicon.png"), type: "image/png", sizes: "256x256" }],
    apple: [{ url: withBasePath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="bg-paper text-ink font-didone">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
