'use client'

import { motion } from "framer-motion";
import React from "react";

export function CodeReviewAnimation() {
  const codeLines = [
    "function authenticate() {",
    "  const secret = 'hardcoded'",
    "  return jwt.sign({}, secret)",
    "}",
    "",
    "async function getData() {",
    "  const results = []",
    "  for(let i = 0; i < items.length; i++)",
    "    results.push(await api.get(i))",
  ];

  const [activeIssue, setActiveIssue] = React.useState<number | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIssue(prev => (prev === null ? 1 : prev === 1 ? 6 : null));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[500px] bg-zinc-900 rounded-lg p-8">
      <div className="flex gap-6 h-full">
        {/* Code section */}
        <div className="flex-1 relative overflow-hidden">
          <div className="space-y-2">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className={`px-3 py-1 rounded-md ${
                  activeIssue === index ? 'bg-red-500/10' : ''
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-zinc-500 mr-3 select-none">{index + 1}</span>
                <span className="text-zinc-100">{line}</span>
                {activeIssue === index && (
                  <motion.div
                    className="absolute left-0 w-1 h-6 bg-red-500"
                    layoutId="activeIssue"
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Scanning effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
            animate={{
              y: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Issues panel */}
        <div className="w-80 shrink-0 border-l border-zinc-800 pl-6">
          <h4 className="text-zinc-400 mb-4 font-medium text-sm">Issues Found</h4>
          <div className="space-y-4 max-h-[calc(100%-2rem)] overflow-y-auto">
            <motion.div
              className={`p-3 rounded-lg ${
                activeIssue === 1 ? 'bg-red-500/20 border border-red-500/50' : 'bg-zinc-800/50'
              }`}
              animate={{
                scale: activeIssue === 1 ? 1.02 : 1,
              }}
            >
              <div className="text-red-400 font-medium text-xs mb-1">Security Risk</div>
              <div className="text-[11px] leading-tight text-zinc-400">
                Hardcoded secrets detected in authentication
              </div>
            </motion.div>

            <motion.div
              className={`p-3 rounded-lg ${
                activeIssue === 6 ? 'bg-yellow-500/20 border border-yellow-500/50' : 'bg-zinc-800/50'
              }`}
              animate={{
                scale: activeIssue === 6 ? 1.02 : 1,
              }}
            >
              <div className="text-yellow-400 font-medium text-xs mb-1">Performance Issue</div>
              <div className="text-[11px] leading-tight text-zinc-400">
                Sequential API calls should use Promise.all
              </div>
            </motion.div>

            <motion.div 
              className="text-[11px] text-zinc-500 pt-2"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scanning for issues...
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
