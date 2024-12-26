'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { 
  BarChart3, 
  GitPullRequest, 
  Code2, 
  Github,
  Settings
} from "lucide-react";

const navItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart3
  },
  {
    title: "Code Reviews",
    href: "/dashboard/reviews",
    icon: Code2
  },
  {
    title: "Pull Requests",
    href: "/dashboard/pull-requests",
    icon: GitPullRequest
  },
  {
    title: "Repository",
    href: "/dashboard/repository",
    icon: Github
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-background h-screen flex flex-col">
      <div className="p-6 border-b">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="text-accent-foreground">OF</span>
          </div>
          OpenFlow
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map(({ title, href, icon: Icon }) => (
            <li key={href}>
              <Link 
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors
                  ${pathname === href 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                  }`}
              >
                <Icon className="h-4 w-4" />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <UserButton 
          afterSignOutUrl="/landing"
          appearance={{
            elements: { avatarBox: "h-8 w-8" }
          }}
        />
      </div>
    </div>
  );
}
