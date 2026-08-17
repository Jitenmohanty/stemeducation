import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/shell";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stemeducation.in"),
  title: { default: "STEM Education India | Practical learning, measurable impact", template: "%s | STEM Education India" },
  description: "STEM Education India partners with schools, CSR organizations and communities to make science and technology learning practical, inclusive and future-ready.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: "STEM Education India", images: [{ url: "/stem-classroom.png", width: 1536, height: 1024, alt: "Students collaborating on a practical STEM activity" }] },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "STEM Education India", url: "https://stemeducation.in", logo: "https://stemeducation.in/brand-mark.svg", description: "Practical and inclusive STEM education programs for schools, teachers and communities in India." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}><body><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd)}}/></body></html>; }
