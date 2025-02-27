import "./globals.css"
import { Montserrat, Merriweather, Noto_Sans_KR } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import { Toaster } from 'sonner'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  preload: false,
  weight: ["400"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "Kimchi Token | Seoul Food for Your Soul",
  description: "The spiciest meme token on Solana.",
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${merriweather.variable} ${notoSansKR.variable}`}>
      <head>
        <link rel="preload" href="/chopstick-cursor.png" as="image" type="image/png" />
        <link rel="preload" href="/chopstick-cursor-click-64.png" as="image" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              fontSize: '3rem',
              padding: '1.5rem',
              backgroundColor: '#000',
              color: '#FF8A3D', 
              minWidth: '400px',
              fontFamily: 'var(--font-montserrat)',
              textTransform: 'lowercase',
              fontWeight: 'normal',
              letterSpacing: '-0.02em',
              border: '1px solid rgba(255, 138, 61, 0.2)', 
              borderRadius: '0.75rem',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            },
          }}
        />
      </body>
    </html>
  )
}
