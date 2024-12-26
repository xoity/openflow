'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Rocket } from "lucide-react"

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
  const router = useRouter()

  return (
    <Button 
      size={size}
      className={`hover:scale-105 transition-all ${className}`}
      onClick={() => router.push('/signup')}
    >
      Get Started
      {showIcon && <Rocket className="ml-2 h-4 w-4" />}
    </Button>
  )
}
