'use client'

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { smoothScroll } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b bg-background/80 shadow-[0_2px_9px_0_rgb(0,0,0,0.05)]">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="text-accent-foreground">OF</span>
          </div>
          <span>OpenFlow</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#features" 
              onClick={(e) => smoothScroll(e, 'features')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => smoothScroll(e, 'pricing')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Pricing
            </a>
            
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Log in
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          <SignedIn>
            <Link href="/dashboard">
              <Button 
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm mr-4"
              >
                Dashboard
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/landing" />
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button 
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm"
              >
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}