import { SignedIn, UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SignedIn>
      <div className="min-h-screen bg-background">
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <h1 className="font-bold">OpenFlow</h1>
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/landing" />
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </SignedIn>
  );
}
