// filepath: /home/xoity/Desktop/projects/openflow/app/dashboard/repository/[owner]/[repo]/page.tsx
import { getPullRequests, getIssues } from "@/lib/github";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitPullRequest, AlertCircle } from "lucide-react";
import Link from "next/link";

interface RepoPageParams {
  params: {
    owner: string;
    repo: string;
  };
}

export default async function SpecificRepositoryPage({ params }: RepoPageParams) {
  const { owner, repo } = params;
  const pullRequests = await getPullRequests(owner, repo);
  const issues = await getIssues(owner, repo);

  return (
    <div className="space-y-8\">
      <h1 className="text-3xl font-bold\">{owner}/{repo}</h1>

      <div className="grid md:grid-cols-2 gap-6\">
        {/* Pull Requests Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2\">
              <GitPullRequest className="h-5 w-5\" /> Open Pull Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pullRequests.length > 0 ? (
              <ul className="space-y-2\">
                {pullRequests.map((pr) => (
                  <li key={pr.id} className="border-b pb-2 last:border-b-0\">
                    <Link href={pr.html_url} target="_blank\" rel="noopener noreferrer" className="font-medium hover:underline\">
                      #{pr.number} {pr.title}
                    </Link>
                    <p className="text-sm text-muted-foreground\">
                      Opened by {pr.user?.login}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No open pull requests found.</p>
            )}
          </CardContent>
        </Card>

        {/* Issues Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2\">
              <AlertCircle className="h-5 w-5\" /> Open Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            {issues.length > 0 ? (
              <ul className="space-y-2\">
                {issues.map((issue) => (
                  <li key={issue.id} className="border-b pb-2 last:border-b-0\">
                    <Link href={issue.html_url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline\">
                       #{issue.number} {issue.title}
                    </Link>
                     <p className="text-sm text-muted-foreground\">
                      Opened by {issue.user?.login}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground\">No open issues found.</p>
            )}
          </CardContent>
        </Card>
      </div>
       {/* TODO: Add sections for code reviews, repository settings, etc. */}
    </div>
  );
}
