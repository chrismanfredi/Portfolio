import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AboutMe from "@/app/about/page";
import Education from "@/app/education/page";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = localFont({
  src: "../../public/fonts/TT.ttf",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Manfredi",
  description:
    "Portfolio of Chris Manfredi - a developer and designer crafting digital products with a focus on usability, performance, and brand storytelling.",
  metadataBase: new URL("https://cmanfredi.dev"),
  openGraph: {
    title: "Chris Manfredi | Web Developer & Designer",
    description:
      "Explore selected work, experience, and ways to collaborate with Chris Manfredi.",
    url: "https://cmanfredi.dev",
    siteName: "cmanfredi",
    images: [
      {
        url: "/hero-2.svg",
        width: 1200,
        height: 630,
        alt: "Abstract dark-blue gradient artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Manfredi",
    description:
      "Design-led engineering for ambitious teams. Explore the cmanfredi portfolio.",
    images: ["/hero-2.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${headingFont.variable} min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-6 pb-20">
            <div className="mx-auto w-full max-w-6xl">{children}
              <AboutMe />
              <Education />
            </div>
            
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
