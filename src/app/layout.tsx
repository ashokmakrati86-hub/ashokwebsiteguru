import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free 1:1 Digital Marketing Consultation",
  description:
    "Get a clear marketing plan to grow your business and get more customer inquiries. Book a free 1:1 consultation and receive a customized marketing strategy.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Free 1:1 Digital Marketing Consultation",
    description:
      "Get a clear marketing plan to grow your business and get more customer inquiries.",
    type: "website",
    images: [{ url: "/logo.png", alt: "Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation",
    description:
      "Get a clear marketing plan to grow your business and get more customer inquiries.",
    images: ["/logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950">
        {children}
      </body>
    </html>
  );
}
