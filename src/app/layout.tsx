

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { serverFetch } from "@/lib/server-fetch";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const res = await serverFetch.get("/site-info", ["SITEINFO"]);
  const data = await res.json();
  const siteInfo = data.data;

  return {
    metadataBase: new URL("https://saa-accounting.co.nz"),
    title: siteInfo?.siteTitle || "SAA-Accounting Business Ltd",
    description:
      siteInfo?.siteTagline ||
      "Strategic financial clarity for small to medium-sized businesses.",
    icons: {
      icon: siteInfo?.favicon || "/favicon.ico",
      apple: siteInfo?.favicon || "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <main>
          {children}
          <Toaster richColors position="top-center" />
        </main>
      </body>
    </html>
  );
}
