import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";

export default function RepositoryPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold">Connect Repository</h1>
      
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Connect your GitHub repository to start receiving AI-powered code reviews
          and analytics.
        </p>
        
        <div className="flex gap-4">
          <Input placeholder="username/repository" />
          <Button>
            <Github className="mr-2 h-4 w-4" />
            Connect Repository
          </Button>
        </div>
      </div>
    </div>
  );
}
