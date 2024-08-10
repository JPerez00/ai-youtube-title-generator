import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider"
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TubeTitles.AI",
  description: "Your AI-powered solution for generating unique and captivating YouTube titles.",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    className={cx(inter.className)}
    suppressHydrationWarning
    >
    <body className="text-black bg-zinc-100 dark:text-white dark:bg-zinc-900 antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
      <ThemeProvider>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
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