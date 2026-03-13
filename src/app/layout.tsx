import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew G. Schulze | AI Strategy & Digital Innovation Leader",
  description:
    "AI-focused biopharma leader who scales digital and data for Biotechnology platforms, drives transformative, compliant initiatives from startup through M&A.",
  openGraph: {
    title: "Matthew G. Schulze | AI Strategy & Digital Innovation Leader",
    description:
      "AI-focused biopharma leader scaling digital and data for Biotechnology platforms.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
