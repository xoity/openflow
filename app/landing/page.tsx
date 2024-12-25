import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { PricingSection } from "./_components/PricingSection";
import { CodeReviewAnimation } from "./_components/feature-animations/CodeReviewAnimation";
import { AnalyticsAnimation } from "./_components/feature-animations/AnalyticsAnimation";
import { PRAnimation } from "./_components/feature-animations/PRAnimation";

export default function Page() {
  return (
    <>
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Streamline Your DevOps Workflow
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Automate code reviews, manage pull requests, and get AI-powered insights
            for your development team.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-accent text-accent-foreground">
                Start Free Trial
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="bg-secondary/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features for Modern Development Teams
          </h2>
          <div className="max-w-7xl mx-auto space-y-12">
            {/* AI Code Review - Full width */}
            <div className="p-8 rounded-xl bg-background border shadow-sm">
              <div className="mb-8">
                <CodeReviewAnimation />
              </div>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-3">{features[0].title}</h3>
                <p className="text-lg text-muted-foreground">{features[0].description}</p>
              </div>
            </div>

            {/* Other features in a grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {features.slice(1).map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-8 rounded-xl bg-background border shadow-sm"
                >
                  <div className="mb-8">
                    {index === 0 ? <AnalyticsAnimation /> : <PRAnimation />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
    </>
  );
}

const features = [
  {
    title: "AI-Powered Code Reviews",
    description: "Get instant feedback on code quality, security vulnerabilities, and best practices.",
  },
  {
    title: "Analytics Dashboard",
    description: "Track team performance, code quality metrics, and development velocity.",
  },
  {
    title: "Automated PR Management",
    description: "Streamline your pull request workflow with automatic assignments and merging.",
  },
];