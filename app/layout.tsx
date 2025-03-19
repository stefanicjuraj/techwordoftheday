import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Word of the Day",
  description: "Daily tech word with definition.",
  keywords: ["Tech Word of the Day", "Tech Words", "Word of the Day"],
  openGraph: {
    title: "Tech Word of the Day",
    description: "Daily tech word with definition.",
    url: "",
    siteName: "Tech Word of the Day",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/icons/techwordoftheday.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
