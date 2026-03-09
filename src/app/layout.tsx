

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
  let siteInfo: any = null;

  try {
    const res = await serverFetch.get("/site-info", ["SITEINFO"]);
    const data = await res.json();
    siteInfo = data?.data;
  } catch (error) {
    console.error("Metadata fetch error:", error);
  }

  const title = siteInfo?.siteTitle || "SAA Accounting Business Ltd";
  const description =
    siteInfo?.siteTagline ||
    "Strategic financial clarity for small to medium-sized businesses.";
  const favicon = siteInfo?.favicon || "/favicon.ico";

  return {
    metadataBase: new URL("https://saa-accounting.co.nz"),

    title: {
      default: title,
      template: `%s | ${title}`,
    },

    description,

    keywords: [
      "Accounting services",
      "Business accounting",
      "Tax services NZ",
      "Bookkeeping",
      "Payroll services",
      "Business advisory",
      "SAA Accounting",
    ],

    authors: [
      { name: "SAA Accounting" },
      { name: "Ar Rafi Fayez Joy", url: "https://ar-rafi-fayez-joy.vercel.app" }
    ],
    creator: "Ar Rafi Fayez Joy",
    publisher: "SAA Accounting",

    icons: {
      icon: favicon,
      apple: favicon,
    },

    openGraph: {
      title,
      description,
      url: "https://saa-accounting.co.nz",
      siteName: "SAA Accounting",
      locale: "en_NZ",
      type: "website",
      images: [
        {
          url: favicon,
          width: 512,
          height: 512,
          alt: "SAA Accounting",
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
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
