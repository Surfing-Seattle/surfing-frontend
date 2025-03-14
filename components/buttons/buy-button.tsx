'use client';

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';

interface BuyButtonProps {
  className?: string;
  text?: string;
}

export function BuyButton({ className = "", text = "Buy Now" }: BuyButtonProps) {
  const handleClick = () => {
    window.open("https://raydium.io/swap/?inputMint=sol&outputMint=9ZjZXsUYiridcWV4DjtMCHiKVPKFk3jxswmjA2jgizUG", "_blank");
  };

  return (
    <Button
      size="lg"
      className={cn(
        "bg-kimchi-red hover:bg-kimchi-orange text-white text-lg transition-colors duration-300 cursor-chopsticks",
        className
      )}
      onClick={handleClick}
    >
      <Wallet className="w-5 h-5 mr-2" />
      {text}
    </Button>
  );
}
