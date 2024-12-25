'use client'

import { motion } from "framer-motion";
import React from "react";

export function AnalyticsAnimation() {
  return (
    <div className="h-[400px] bg-zinc-900 rounded-lg p-6">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <div className="h-2 w-20 bg-zinc-800 rounded" />
            <div className="h-2 w-16 bg-zinc-800/50 rounded" />
          </div>
          <div className="flex gap-2">
            {['D', 'W', 'M', 'Y'].map((period) => (
              <div 
                key={period}
                className={`px-2 py-1 rounded text-xs ${
                  period === 'M' ? 'bg-accent text-accent-foreground' : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {period}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-7 gap-3 items-end pb-6 border-b border-zinc-800">
          {[0.6, 0.4, 0.8, 0.5, 0.7, 0.3, 0.9].map((height, i) => (
            <motion.div
              key={i}
              className="bg-accent/20 rounded-t-sm w-full"
              initial={{ height: 0 }}
              animate={{ height: `${height * 100}%` }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>
        
        <div className="pt-4 grid grid-cols-2 gap-4">
          {[
            { label: 'PRs Merged', value: '324' },
            { label: 'Review Time', value: '-45%' },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              className="p-3 bg-zinc-800/50 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-xs text-zinc-400">{label}</div>
              <div className="text-lg font-medium text-white">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
