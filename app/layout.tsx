import "./globals.css"
import { Montserrat, Merriweather } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Kimchi Token | Seoul Food for Your Soul",
  description: "The spiciest meme token on Solana.",
  icons: {
    icon: "/kimchi-logo-1-no-bg.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/chopsticks-cursor.png" as="image" />
      </head>
      <body className={`${montserrat.variable} ${merriweather.variable}`}>{children}</body>
    </html>
  )
}
