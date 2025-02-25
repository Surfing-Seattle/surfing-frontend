'use client'

import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

export function WalletButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://phantom.app/download"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label="Download Phantom Wallet"
      title="Get Phantom Wallet for Solana"
    >
      <Button
        size="lg"
        className={cn(
          "bg-gradient-to-r from-kimchi-red via-kimchi-orange to-kimchi-yellow hover:from-kimchi-orange hover:via-kimchi-yellow hover:to-kimchi-red text-white text-lg transition-all duration-300 cursor-chopsticks",
          className
        )}
      >
        <Wallet className="w-5 h-5 mr-2" />
        Need a Solana Wallet?
      </Button>
    </a>
  )
}
