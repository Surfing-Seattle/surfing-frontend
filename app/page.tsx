'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Rocket, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BuyButton } from "@/components/buttons/buy-button"
import { WalletButton } from "@/components/buttons/wallet-button"
import { Button } from "@/components/ui/button"

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
                <div className="flex flex-col items-center space-y-4">
                  <h3 className="text-2xl font-display text-white lowercase text-center">fermentation = growth</h3>
                </div>
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
              <Link href="https://t.me/+9XF31DMSOUU3NzAx" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
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

      {/* Community Events Section */}
      <section className="relative bg-[#141414] overflow-hidden">
        {/* Background color overlay to cover any gaps */}
        <div className="absolute inset-0 bg-[#141414] z-0" />

        <div className="relative w-full z-10">
          {/* Background Images */}
          <div className="absolute inset-0 grid grid-cols-2">
            {/* Left Side Images */}
            <div className="relative h-full grid grid-rows-2">
              <div className="relative h-full">
                <Image
                  src="/sm-kimchi-on-stage.png"
                  alt="Kimchi Concert"
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#141414] to-transparent" />
              </div>
              <div className="relative h-full">
                <Image
                  src="/sm-kimchi-joy-on-stage-poster.png"
                  alt="Kimchi Joy Concert"
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#141414] to-transparent" />
              </div>
            </div>

            {/* Right Side Images */}
            <div className="relative h-full grid grid-rows-2">
              <div className="relative h-full">
                <Image
                  src="/sm-kimchi-joy-on-stage-poster.png"
                  alt="Kimchi Joy Concert"
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#141414] to-transparent" />
              </div>
              <div className="relative h-full">
                <Image
                  src="/sm-kimchi-on-stage.png"
                  alt="Kimchi Concert"
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#141414] to-transparent" />
              </div>
            </div>
          </div>

          {/* Torn Paper Effect Overlays */}
          {/* <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute left-1/2 top-0 w-px h-full bg-white/10 transform -translate-x-1/2" />
            <div className="absolute left-1/2 top-0 w-8 h-full bg-gradient-to-r from-black/20 to-transparent transform -translate-x-1/2" />
          </div> */}

          {/* Poster Content */}
          <div className="relative flex flex-col items-center justify-center text-white px-4">
            <div className="space-y-8 bg-[#1a1a1a]/80 p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
              {/* <div className="space-y-4">
                <h2 className="font-display text-4xl sm:text-5xl lowercase text-kimchi-orange text-center">
                  community
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-kimchi-red via-kimchi-orange to-kimchi-yellow rounded-full mx-auto" />
              </div> */}

              <div className="space-y-2">
                <h1 className="font-merriweather text-7xl md:text-8xl font-bold tracking-wider">2025</h1>
                <h2 className="font-merriweather text-6xl md:text-7xl font-bold tracking-wider leading-tight">
                  KIMCHI
                  <br />
                  EVENTS
                </h2>
              </div>

              {/* Event List */}
              <div className="space-y-6 mt-8">
                <div className="space-y-4">
                  {/* ETH Denver */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <div>
                      <h3 className=" text-sm tracking-[0.3em] uppercase">ETH Denver</h3>
                      {/* <p className="text-white/60 mt-1">Sign up for location</p> */}
                    </div>
                    <div className="text-right">
                      <p className=" text-sm tracking-wider">FEB 27, 2025</p>
                      <p className="font-montserrat text-white/60 mt-1">6 PM MST</p>
                    </div>
                  </div>

                  {/* NYC */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <div>
                      <h3 className=" text-sm tracking-[0.3em] uppercase">New York City</h3>
                      {/* <p className="text-white/60 mt-1">Sign up for location</p> */}
                    </div>
                    <div className="text-right">
                      <p className=" text-sm tracking-wider">MAR 1, 2025</p>
                      <p className="font-montserrat text-white/60 mt-1">6 PM EST</p>
                    </div>
                  </div>

                  {/* Seattle */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <div>
                      <h3 className="text-sm tracking-[0.3em] uppercase">Seattle</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm tracking-wider">MAR 2025</p>
                    </div>
                  </div>

                  {/* Washington, D.C. */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <div>
                      <h3 className="text-sm tracking-[0.3em] uppercase">Washington, D.C.</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm tracking-wider">MAY 2025</p>
                    </div>
                  </div>
                </div>

                {/* Toronto */}
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div>
                    <h3 className="text-sm tracking-[0.3em] uppercase">Toronto</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm tracking-wider">MAY 2025</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white/60 mt-1">Join our Telegram for location details.</p>
              </div>

              <div className="inline-block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-kimchi-red via-kimchi-orange to-kimchi-yellow hover:opacity-80 transition-opacity duration-300"
                  onClick={() => window.open("https://t.me/+9XF31DMSOUU3NzAx", "_blank")}
                >
                  GET ON THE LIST
                </Button>
              </div>

              <div>
                <p className="text-sm text-white/60 max-w-md">
                  Celebrate Korean culture and decentralized tech. More cities TBA. Join our Telegram for event details and announcements.
                </p>
              </div>

              {/* QR Code placeholder */}
              <div className="mt-8">
                <div className="inline-block transform -skew-x-12 bg-white/10 p-4">
                  <div className="h-24 w-24" />
                </div>
              </div>
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
