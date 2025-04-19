import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { getRepositories } from "@/lib/github";
import Link from "next/link";

export default async function RepositoryPage() {
  const repositories = await getRepositories();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Repositories</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" /> Select a Repository
          </CardTitle>
        </CardHeader>
        <CardContent>
          {repositories.length > 0 ? (
            <ul className="space-y-2">
              {repositories.map((repo) => (
                <li key={repo.id} className="border-b pb-2 last:border-b-0">
                  <Link 
                    href={`/dashboard/repository/${repo.owner.login}/${repo.name}`} 
                    className="font-medium hover:underline"
                  >
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
