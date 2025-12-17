import { motion } from 'framer-motion';

export const Navbar = () => {
  const handleStoryClick = () => {
    const event = new CustomEvent('open-story');
    window.dispatchEvent(event);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4 bg-white/40 backdrop-blur-md border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="text-xs md:text-sm tracking-[0.5em] font-bold text-slate-700 uppercase">Dreenka.</div>
      <button 
        onClick={handleStoryClick} 
        className="bg-blue-600 hover:bg-blue-700 text-white text-[9px] md:text-[10px] tracking-[0.2em] font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-200 uppercase outline-none active:scale-95"
      >
        Story
      </button>
    </motion.nav>
  );
};