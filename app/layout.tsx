import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "TCS Courier Tracking App - Track Your Parcels Anytime, Anywhere",
  description:
    "Stay updated on your TCS parcels with our fast, reliable tracking app. Track documents, packages, and business shipments directly on your phone.",
  keywords: "TCS courier, parcel tracking, package tracking, TCS Express, courier service, delivery tracking",
  authors: [{ name: "Youth Empowerment Center" }],
  creator: "Youth Empowerment Center",
  publisher: "Youth Empowerment Center",
  robots: "index, follow",
  openGraph: {
    title: "TCS Courier Tracking App - Track Your Parcels Anytime, Anywhere",
    description:
      "Stay updated on your TCS parcels with our fast, reliable tracking app. Track documents, packages, and business shipments directly on your phone.",
    url: "https://tcscourier.vercel.app",
    siteName: "TCS Courier Tracking",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TCS Courier Tracking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCS Courier Tracking App - Track Your Parcels Anytime, Anywhere",
    description: "Stay updated on your TCS parcels with our fast, reliable tracking app.",
    images: ["/og-image.png"],
  },
icons: {
    icon: '/logo.ico',
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
