"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 3 === 0
                ? "#3b82f6"
                : p.id % 3 === 1
                ? "#a855f7"
                : "#06b6d4",
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, -15, 10, 0],
            opacity: [0.2, 0.5, 0.2, 0.4, 0.2],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Connection Lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="70%" y1="10%" x2="50%" y2="50%" stroke="#a855f7" strokeWidth="0.5" />
        <line x1="80%" y1="60%" x2="40%" y2="80%" stroke="#06b6d4" strokeWidth="0.5" />
        <line x1="20%" y1="70%" x2="60%" y2="30%" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="90%" y1="20%" x2="60%" y2="60%" stroke="#a855f7" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default ParticlesBackground;