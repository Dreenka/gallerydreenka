import { motion } from 'framer-motion';
import { useState } from 'react';

const Particle = ({ type }: { type: 'star' | 'love' }) => {
  const [coords] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 10, // Delay lebih acak sampai 10 detik
    duration: 4 + Math.random() * 8, // Durasi acak 4-12 detik
    scale: 0.4 + Math.random() * 1.5 // Ukuran lebih variatif
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: `${coords.x}vw`, y: `${coords.y}vh` }}
      animate={{ 
        opacity: [0, 0.8, 0], 
        scale: [0, coords.scale, 0],
      }}
      transition={{
        duration: coords.duration,
        repeat: Infinity,
        delay: coords.delay,
        ease: "easeInOut"
      }}
      className="absolute pointer-events-none select-none z-[5]"
    >
      {type === 'star' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.81 8.62L22 9.24L16.55 13.97L18.18 21L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.62L12 2Z" fill="#60a5fa" fillOpacity="0.7"/>
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#3b82f6" fillOpacity="0.6"/>
        </svg>
      )}
    </motion.div>
  );
};

export const FloatingParticles = () => {
  // SEKARANG ADA 100 PARTIKEL BIAR RAME
  const [particles] = useState(() => Array.from({ length: 100 }, (_, i) => i));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((id) => (
        <Particle key={id} type={id % 2 === 0 ? 'star' : 'love'} />
      ))}
    </div>
  );
};