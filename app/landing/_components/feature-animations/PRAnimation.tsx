'use client'

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { GitPullRequest, Check, GitBranch } from "lucide-react";

export function PRAnimation() {
  const [typing, setTyping] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTyping(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[400px] bg-zinc-900 rounded-lg p-6 font-mono text-sm text-white/80">
      <div className="flex flex-col h-full">
        {/* PR Header */}
        <div className="flex items-center gap-2 text-emerald-500 mb-6">
          <GitPullRequest className="h-4 w-4" />
          <span className="text-xs">feature/auth-improvements → main</span>
          <motion.div
            className="ml-auto flex items-center gap-1 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Check className="h-3 w-3" />
            <span>Ready to merge</span>
          </motion.div>
        </div>

        {/* PR Title */}
        <div className="mb-6">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-8 bg-zinc-800 rounded-md overflow-hidden flex items-center px-3"
          >
            <span>Implement OAuth authentication flow</span>
            {typing && (
              <motion.div
                className="w-2 h-4 bg-white/50 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.div>
        </div>

        {/* PR Description */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <AnimatePresence>
              {!typing && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 text-xs text-zinc-500"
                  >
                    <GitBranch className="h-3 w-3" />
                    <span>3 files changed</span>
                    <span className="text-emerald-500">+48</span>
                    <span className="text-red-500">-12</span>
                  </motion.div>
                  <motion.div
                    className="h-20 bg-zinc-800/50 rounded border border-zinc-700/50 p-2 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-zinc-400">• Add OAuth provider integration</div>
                    <div className="text-zinc-400">• Implement token refresh logic</div>
                    <div className="text-zinc-400">• Update user authentication flow</div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          
          <motion.div 
            className="mt-auto pt-4 border-t border-zinc-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span>Created 2m ago</span>
              <span>2 reviewers assigned</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
