// filepath: /home/xoity/Desktop/projects/openflow/lib/github.ts
import { Octokit } from "@octokit/rest";

// This is a placeholder. In a real app, you'd get the authenticated user's token.
// This might involve fetching it from your database after the user connects their GitHub account.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Ensure you have a way to securely manage tokens

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export async function getRepositories() {
  if (!GITHUB_TOKEN) {
    console.warn("GitHub token not configured. Cannot fetch repositories.");
    // In a real app, you might throw an error or return a specific state
    // indicating that the GitHub account is not connected.
    return []; 
  }
  try {
    // Fetch repositories for the authenticated user
    const { data } = await octokit.repos.listForAuthenticatedUser({
      type: 'owner', // or 'all', 'member' depending on what you need
      sort: 'updated',
      per_page: 10, // Adjust as needed
    });
    return data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    // Handle errors appropriately
    return [];
  }
}

export async function getPullRequests(owner: string, repo: string) {
   if (!GITHUB_TOKEN) {
    console.warn("GitHub token not configured. Cannot fetch pull requests.");
    return [];
  }
  try {
    const { data } = await octokit.pulls.list({
      owner,
      repo,
      state: 'open', // or 'closed', 'all'
      sort: 'updated',
      direction: 'desc',
      per_page: 10,
    });
    return data;
  } catch (error) {
    console.error(`Error fetching pull requests for ${owner}/${repo}:`, error);
    return [];
  }
}

export async function getIssues(owner: string, repo: string) {
   if (!GITHUB_TOKEN) {
    console.warn("GitHub token not configured. Cannot fetch issues.");
    return [];
  }
  try {
    // Note: GitHub considers Pull Requests as Issues, but the pulls.list method is specific to PRs.
    // Use issues.listForRepo and potentially filter if you only want non-PR issues.
    const { data } = await octokit.issues.listForRepo({
      owner,
      repo,
      state: 'open',
      sort: 'updated',
      direction: 'desc',
      per_page: 10,
    });
    // Filter out pull requests if necessary
    return data.filter(issue => !issue.pull_request);
  } catch (error) {
    console.error(`Error fetching issues for ${owner}/${repo}:`, error);
    return [];
  }
}

// Add functions for creating code review comments, interacting with PRs/Issues etc. as needed
// e.g., createReviewComment(owner, repo, pull_number, body, event, comments)
