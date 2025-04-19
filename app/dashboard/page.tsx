import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, GitPullRequest, Code2, Clock, Github } from "lucide-react";
import { getRepositories } from "@/lib/github";
import Link from "next/link";

const stats = [
  {
    title: "Active Reviews",
    value: "12",
    change: "+2",
    icon: Code2
  },
  {
    title: "PRs Merged",
    value: "324",
    change: "+28",
    icon: GitPullRequest
  },
  {
    title: "Review Time",
    value: "45m",
    change: "-45%",
    icon: Clock
  },
  {
    title: "Code Quality",
    value: "94",
    change: "+2",
    icon: BarChart3
  }
];

export default async function DashboardPage() {
  const repositories = await getRepositories();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Existing stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ title, value, change, icon: Icon }) => (
          <Card key={title} className="p-6">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{title}</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{value}</span>
              <span className={`text-sm ${
                change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* New Repositories Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" /> Your Repositories
          </CardTitle>
        </CardHeader>
        <CardContent>
          {repositories.length > 0 ? (
            <ul className="space-y-2">
              {repositories.map((repo) => (
                <li key={repo.id} className="border-b pb-2 last:border-b-0">
                  <Link href={`/dashboard/repository/${repo.owner.login}/${repo.name}`} className="font-medium hover:underline">
                    {repo.full_name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {repo.description || "No description"}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">
              No repositories found. Connect your GitHub account in{' '}
              <Link href="/dashboard/settings" className="text-primary hover:underline">
                Settings
              </Link>
              .
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}