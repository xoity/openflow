import { NavBar } from "./_components/NavBar";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen selection:bg-[hsla(320,65%,53%,0.63)]">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}