import { AnimatedHero } from "./_components/AnimatedHero";
import { AnimatedFeatures } from "./_components/AnimatedFeatures";
import { PricingSection } from "./_components/PricingSection";

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

export default function Page() {
  return (
    <>
      <AnimatedHero />
      <AnimatedFeatures features={features} />
      <PricingSection />
    </>
  );
}