import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider"
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import clsx from 'clsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TubeTitles",
  description:
    "Your AI-powered solution for generating unique and captivating YouTube titles.",
  openGraph: {
    title: "TubeTitles",
    description:
      "Your AI-powered solution for generating unique and captivating YouTube titles.",
    url: "https://tube-titles-ai.vercel.app/", 
    siteName: "TubeTitles",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeTitles",
    description:
      "Your AI-powered solution for generating unique and captivating YouTube titles.",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
      className={clsx(inter.className)}
      suppressHydrationWarning
    >
    <body className="text-black bg-zinc-100 dark:text-white dark:bg-zinc-900 antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
      <ThemeProvider>
        <main className="flex-auto mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
        <Analytics />
      </ThemeProvider>
      <Footer />
    </body>
    </html>
  );
}