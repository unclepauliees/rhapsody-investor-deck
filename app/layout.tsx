import type { Metadata } from "next";
import { Bodoni_Moda, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/chrome/navbar";
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
  title: "Project Rhapsody: Program Overview",
  description:
    "Nobody has played this before. Project Rhapsody is an orbital media studio program of Symphony Space.",
  robots: { index: false, follow: false },
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
