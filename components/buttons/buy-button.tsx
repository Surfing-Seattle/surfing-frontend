'use client';

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface BuyButtonProps {
  className?: string;
  text?: string;
}

export function BuyButton({ className = "", text = "Buy Now" }: BuyButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "bg-kimchi-red hover:bg-kimchi-orange text-white text-lg transition-colors duration-300 cursor-chopsticks",
        className
      )}
    >
      <Wallet className="w-5 h-5 mr-2" />
      {text}
    </Button>
  );
}
