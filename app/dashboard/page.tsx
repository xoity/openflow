import { Card } from "@/components/ui/card";
import { BarChart3, GitPullRequest, Code2, Clock } from "lucide-react";

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

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
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
    </div>
  );
}