import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew G. Schulze — AI Strategy & Digital Innovation",
  description:
    "AI-focused biopharma leader who scales digital and data platforms, drives transformative compliant initiatives from startup through M&A, and builds high-impact teams that deliver business-critical outcomes.",
  openGraph: {
    title: "Matthew G. Schulze — AI Strategy & Digital Innovation",
    description:
      "AI-focused biopharma leader scaling digital and data platforms from startup through M&A.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
