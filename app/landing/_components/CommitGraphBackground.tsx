'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Dot {
  x: number;
  y: number;
  intensity: number;
  id: number;
}

export function CommitGraphBackground() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const newDots = Array.from({ length: 100 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      intensity: Math.random(),
      id: i
    }));
    setDots(newDots);
    setIsMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute h-3 w-3 rounded-sm ${
            dot.intensity > 0.7 ? 'bg-green-500/40' :
            dot.intensity > 0.4 ? 'bg-green-400/30' : 'bg-green-300/20'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isMounted ? {
            scale: 1,
            opacity: dot.intensity
          } : {}}
          transition={{
            duration: 1,
            delay: dot.id * 0.01
          }}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
}
