import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(err => console.log("Music error: ", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggle}
        className="w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md border border-white rounded-full hover:scale-110 transition-transform active:scale-95 shadow-xl text-blue-500"
      >
        <div className="flex items-end gap-[3px] h-4">
          <motion.span animate={{ height: isPlaying ? [4, 12, 4] : 4 }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] bg-blue-300 rounded-full" />
          <motion.span animate={{ height: isPlaying ? [8, 16, 8] : 8 }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-[2px] bg-blue-400 rounded-full" />
          <motion.span animate={{ height: isPlaying ? [6, 10, 6] : 6 }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-[2px] bg-blue-300 rounded-full" />
        </div>
      </button>
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
};