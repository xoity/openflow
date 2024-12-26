'use client'

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function NavBar() {
  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto px-4 h-16 flex items-center">
        <Link className="font-medium" href="/dashboard">
          Dashboard
        </Link>
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/landing" />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;