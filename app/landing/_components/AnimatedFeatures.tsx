'use client'

import React from "react";
import { motion } from "framer-motion";
import { CodeReviewAnimation } from "./feature-animations/CodeReviewAnimation";
import { AnalyticsAnimation } from "./feature-animations/AnalyticsAnimation";
import { PRAnimation } from "./feature-animations/PRAnimation";
import { SnakeAnimation } from './SnakeAnimation';

interface FeaturesProps {
  features: {
    title: string;
    description: string;
  }[];
}

export function AnimatedFeatures({ features }: FeaturesProps) {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background with dots pattern */}
      <div 
        className="absolute inset-0 bg-secondary/50"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Snake animation layer */}
      <div className="absolute inset-0 z-0">
        <SnakeAnimation />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Modern Development Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your development workflow with our cutting-edge tools and features
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* AI Code Review - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-8">
              <CodeReviewAnimation />
            </div>
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">{features[0].title}</h3>
              <p className="text-lg text-muted-foreground">{features[0].description}</p>
            </div>
          </motion.div>

          {/* Other features in a grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(1).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-8 transform group-hover:scale-[1.02] transition-transform">
                  {index === 0 ? <AnalyticsAnimation /> : <PRAnimation />}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
