'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Rocket, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BuyButton } from "@/components/buttons/buy-button"
import { WalletButton } from "@/components/buttons/wallet-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-body bg-primary text-primary-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-white">
        <div className="container relative flex flex-col items-center max-w-6xl gap-8 mx-auto text-center z-10">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-kimchi-red via-kimchi-orange to-kimchi-yellow opacity-50" />
            <Image
              src="/kimchi-logo-1-no-bg.png"
              alt="Kimchi Token Logo"
              width={480}
              height={480}
              priority
              className="relative animate-wave"
            />
          </div>
          <h1 className="font-display text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary lowercase">
            kimchi token
          </h1>
          <p className="max-w-[600px] text-primary md:text-xl">The spiciest meme token on Solana.</p>
          <div className="flex flex-col gap-4">
            <BuyButton />
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center w-full p-4">
          <ChevronDown className="w-6 h-6 animate-bounce text-primary" />
        </div>
      </section>

      {/* Why Kimchi Token Section */}
      <section className="px-4 py-32 relative bg-[#141414] overflow-hidden" id="why">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-kimchi-red/10 via-transparent to-kimchi-yellow/10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHMtOC45NTQgMjAtMjAgMjBTMCAzMS4wNDYgMCAyMCA4Ljk1NCAwIDIwIDB6bTAgMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTBzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTAtNC40NzctMTAtMTAtMTB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] animate-slow-pulse opacity-[0.08]" />
        </div>
        <div className="container relative max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl text-center lowercase mb-6 text-kimchi-red/80">
                why kimchi token?
              </h2>
              <h2 className="font-display text-4xl sm:text-5xl text-center lowercase mb-6 text-white absolute inset-0 animate-slow-pulse mix-blend-overlay">
                why kimchi token?
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-kimchi-red/80 via-kimchi-orange/80 to-kimchi-yellow/80 rounded-full" />
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <Card className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-white/10 hover:border-kimchi-red/30 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-kimchi-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-4 bg-gradient-to-br from-kimchi-red/90 to-kimchi-orange/90 rounded-full transform group-hover:scale-105 transition-transform duration-500">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display text-white lowercase">fermentation = growth</h3>
                <p className="text-center text-white/80 relative z-10">
                  We believe in steady growth and building lasting value. Kimchi token matures with time, just like Korea&apos;s favorite dish.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-white/10 hover:border-kimchi-orange/30 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-kimchi-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-4 bg-gradient-to-br from-kimchi-orange/90 to-kimchi-yellow/90 rounded-full transform group-hover:scale-105 transition-transform duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-white lowercase">spice = strength</h3>
                <p className="text-center text-white/80 relative z-10">
                  From mild to face-melting spicy, we embrace all levels of crypto enthusiasm. We are bringing the heat to DeFi! 🌶️
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-white/10 hover:border-kimchi-yellow/30 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-kimchi-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-4 bg-gradient-to-br from-kimchi-yellow/90 to-kimchi-red/90 rounded-full transform group-hover:scale-105 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display text-white lowercase">community = power</h3>
                <p className="text-center text-white/80 relative z-10">
                  We are kimchi lovers and crypto enthusiasts spreading Korean culture one token at a time. 🇰🇷
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become Kimchi Section */}
      <section className="px-4 py-32 relative bg-black overflow-hidden">
        <div className="container relative max-w-6xl mx-auto">
          <h2 className="mb-20 font-display text-4xl sm:text-5xl text-center text-white lowercase">become kimchi</h2>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col items-center justify-center">
              <video className="w-full max-w-md rounded-lg shadow-lg" autoPlay loop muted playsInline>
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi-crowned-gYVsPTfpIJvUdnxR2QLd2c8Gu1oQSo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-white space-y-8">
              <p className="text-2xl font-display lowercase">
                
              </p>
              <p className="text-3xl font-bold text-kimchi-red">SEOUL FOOD FOR YOUR SOUL.</p>
              <div className="space-y-8 text-white/80">
                <p>
                  Some things in life transcend, and Kimchi is one of them. For generations, this fiery,
                  fermented staple has been more than just food—it&apos;s a symbol of resilience, transformation, and
                  unapologetic boldness. It&apos;s the spice that fuels Korean spirit, a dish so unique it&apos;s been passed down
                  through centuries.
                </p>
                <p>
                  Kimchi Token brings that same spicy energy into Web3. Korean founder &quot;made in
                  America&quot; with a husband &quot;made in Korea,&quot; this meme coin is more than just crypto—it&apos;s a movement. A
                  celebration.
                </p>
                <p>
                  From K-Pop domination to Samsung&apos;s tech empire, from Hyundai &amp; Kia reshaping the auto industry to
                  K-beauty setting the skincare gold standard—Korea isn&apos;t just thriving, it&apos;s leading.
                </p>
                <p>
                  And at the center of it all? Kimchi. The OG superfood. The lifeblood of Korean meals. A dish
                  universally loved!!!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-12">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* Solana Wallet Section */}
      <section className="relative px-4 py-32 bg-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute left-0 w-1/3 blur-3xl bg-gradient-to-r from-kimchi-red via-kimchi-orange to-transparent opacity-50" />
            <div className="absolute right-0 w-1/3 blur-3xl bg-gradient-to-l from-kimchi-yellow via-kimchi-orange to-transparent opacity-50" />
          </div>

        <div className="container relative max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-12">
              <h2 className="font-display text-4xl sm:text-5xl lowercase text-primary">
                The future is Fermented
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-kimchi-red via-kimchi-orange to-kimchi-yellow rounded-full" />
              <div className="space-y-8 max-w-[600px]">
                <p className="text-primary/80 text-xl font-display">
                  Kimchi is timeless. So is Kimchi Token. Whether you&apos;re here for the culture, the crypto, or the 🔥 memes, you&apos;re in the right place.
                </p>
              </div>
              {/* Social Media Icons */}
              <div className="flex flex-col items-center gap-8 my-16">
                <Link href="https://x.com/kimchitoken" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <Image src="/X-icon.png" alt="X (Twitter)" width={48} height={48} className="opacity-90 hover:opacity-100" />
                </Link>
                <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <Image src="/telegram-icon.png" alt="Telegram" width={48} height={48} className="opacity-90 hover:opacity-100" />
                </Link>
              </div>

              <div className="flex flex-col gap-6">
                <BuyButton text="Buy Kimchi Token" />
                <WalletButton />
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-[#141414] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <Image
              src="/kimchi-logo-1-no-bg.png"
              alt="Kimchi Token Logo"
              width={120}
              height={120}
              className="animate-float opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-white/60 text-sm text-center">
              &copy; 2025 Kimchi Token. Stay spicy, stay decentralized. #KimchitotheMoon
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
