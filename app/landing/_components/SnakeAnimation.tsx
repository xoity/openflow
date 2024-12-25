'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function SnakeAnimation() {
  const snakeControl = useAnimation();
  const [dots, setDots] = useState<Array<{ x: number; y: number; intensity: number }>>([]);

  useEffect(() => {
    // Generate contribution-like dots
    const newDots = [];
    for (let i = 0; i < 100; i++) {
      newDots.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        intensity: Math.random()
      });
    }
    setDots(newDots);

    // Animate snake in a figure-8 pattern
    const animate = async () => {
      await snakeControl.start({
        x: ['0%', '50%', '100%', '50%', '0%'],
        y: ['50%', '0%', '50%', '100%', '50%'],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    animate();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Contribution dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute h-3 w-3 rounded-sm ${
            dot.intensity > 0.7 ? 'bg-green-500/40' :
            dot.intensity > 0.4 ? 'bg-green-400/30' : 'bg-green-300/20'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.01 }}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
        />
      ))}

      {/* Snake */}
      <motion.div
        animate={snakeControl}
        className="absolute z-10"
        style={{ left: '0%', top: '50%' }}
      >
        <div className="relative">
          {/* Snake body segments */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-500/80 rounded-full"
              style={{
                width: i === 0 ? '16px' : '12px',
                height: i === 0 ? '16px' : '12px',
                left: -i * 8,
                marginLeft: '-8px',
                marginTop: '-8px',
              }}
              animate={{
                opacity: 1 - (i * 0.05),
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
