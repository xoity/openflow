'use client'

import React from 'react';
import { CommitGraphBackground } from './CommitGraphBackground';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "For individual developers",
    features: [
      "5 repositories",
      "Basic code reviews",
      "Limited PR management",
      "Community support",
    ],
    buttonText: "Sign up",
    buttonLink: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per user/month",
    description: "For growing development teams",
    features: [
      "Unlimited repositories",
      "Advanced AI code reviews",
      "Full PR automation",
      "Team collaboration",
      "Priority support",
      "Analytics dashboard",
    ],
    buttonText: "Start free trial",
    buttonLink: "/trial/pro",
    highlight: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "per user/month",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Advanced security features",
      "Dedicated support",
      "Audit logs",
      "SSO/SAML",
    ],
    buttonText: "Start free trial",
    buttonLink: "/trial/business",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Add the commit graph background */}
      <CommitGraphBackground />
      
      {/* Rest of your pricing section content */}
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Choose the plan that's right for your team
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-8 ${
                plan.highlight
                  ? "border-accent shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <Link href={plan.buttonLink} className="block mb-8">
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
