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
    toast("coming soon!", {
      duration: 3000,
    });
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
