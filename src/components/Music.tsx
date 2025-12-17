import { useState, useRef } from 'react';
// BARIS INI YANG TADI KURANG:
import { motion } from 'framer-motion';

export const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(err => console.log("Autoplay blocked: ", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 right-10 z-40">
      <button 
        onClick={toggle}
        className="w-12 h-12 flex items-center justify-center glass rounded-full hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-blue-100/50"
      >
        <div className="flex items-end gap-[3px] h-4">
          <motion.span 
            animate={{ height: isPlaying ? [4, 12, 4] : 4 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="w-[2px] bg-blue-300 rounded-full" 
          />
          <motion.span 
            animate={{ height: isPlaying ? [8, 16, 8] : 8 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
            className="w-[2px] bg-blue-400 rounded-full" 
          />
          <motion.span 
            animate={{ height: isPlaying ? [6, 10, 6] : 6 }}
            transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
            className="w-[2px] bg-blue-300 rounded-full" 
          />
        </div>
      </button>
      {/* Link audio ini hanya contoh, kamu bisa ganti dengan file mp3 favoritmu di folder public */}
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
};