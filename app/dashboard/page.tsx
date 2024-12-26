import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <nav className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <UserButton afterSignOutUrl="/"/>
      </nav>
      <div>
        {/* Your dashboard content */}
      </div>
    </div>
  );
}
