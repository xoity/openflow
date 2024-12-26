'use client'

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { SignUpButton } from "@clerk/nextjs"

interface GetStartedButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
}

export function GetStartedButton({ 
  className, 
  size = "default",
  showIcon = false 
}: GetStartedButtonProps) {
  return (
    <SignUpButton mode="modal">
      <Button 
        size={size}
        className={`hover:scale-105 transition-all ${className}`}
      >
        Get Started
        {showIcon && <Rocket className="ml-2 h-4 w-4" />}
      </Button>
    </SignUpButton>
  );
}
