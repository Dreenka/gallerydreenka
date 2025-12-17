import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memories, type Memory } from '../data/memories';

export const Gallery = () => {
  const [selected, setSelected] = useState<Memory | null>(null);
  const [isFromNavbar, setIsFromNavbar] = useState(false);

  // Reverse data: Data terakhir di file muncul pertama di web
  const displayMemories = [...memories].reverse();

  useEffect(() => {
    const handleOpenStory = () => {
      setSelected(displayMemories[0]);
      setIsFromNavbar(true);
    };
    window.addEventListener('open-story', handleOpenStory);
    return () => window.removeEventListener('open-story', handleOpenStory);
  }, [displayMemories]);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* DIVIDER ATAS - GLOW BLUE TEGAS */}
      <div className="absolute top-0 left-0 w-full h-px z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[3px] shadow-[0_0_25px_rgba(59,130,246,0.9)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-10">
          {displayMemories.map((item, i) => {
            const isEvenRow = Math.floor(i / 2) % 2 === 0;
            let colSpan = i % 2 === 0 ? (isEvenRow ? "md:col-span-4" : "md:col-span-8") : (isEvenRow ? "md:col-span-8" : "md:col-span-4");
            let desktopAspect = i % 2 === 0 ? (isEvenRow ? "md:aspect-[4/5]" : "md:aspect-[16/9]") : (isEvenRow ? "md:aspect-[16/9]" : "md:aspect-[4/5]");

            return (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`col-span-1 ${colSpan}`}>
                <div className="glass-panel-heavy p-2 md:p-4 h-full flex flex-col border-2 border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-blue-400/60 transition-all duration-500 rounded-[1.5rem] md:rounded-[2.5rem] group/card">
                  <div 
                    onClick={() => { setSelected(item); setIsFromNavbar(false); }} 
                    className={`relative overflow-hidden rounded-[1.2rem] md:rounded-[2rem] aspect-square ${desktopAspect} w-full bg-slate-100 cursor-zoom-in group`}
                  >
                    <img src={item.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                    <div className="absolute inset-0 bg-white/20 backdrop-brightness-110 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
                  </div>
                  
                  {/* FOOTER CARD - TEXT SIZE ADJUSTED */}
                  <div className="mt-3 md:mt-5 flex justify-between items-center px-1 md:px-2 pb-1 md:pb-2">
                    <div className="truncate pr-3">
                      <p className="text-[7px] md:text-[10px] text-blue-500 font-extrabold uppercase tracking-[0.2em]">
                        {item.date} • {item.location}
                      </p>
                      <h3 className="text-[10px] md:text-xl font-serif italic text-slate-800 truncate mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                    <button onClick={() => setSelected(item)} className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-600 border-2 border-blue-200 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex-shrink-0">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="md:w-7 md:h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[3px] shadow-[0_0_25px_rgba(59,130,246,1)]" />
      </div>

      {/* POP-UP MODAL - TEXT SIZE ADJUSTED FOR ALL DEVICES */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-10 bg-white/80 backdrop-blur-3xl">
             <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={(e) => e.stopPropagation()} className="glass-panel-heavy w-[95vw] max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative border-2 border-blue-100 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden">
              <div className="aspect-[4/5] md:aspect-auto relative bg-slate-200">
                <img src={selected.url} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90" />
              </div>
              
              <div className="p-6 md:p-16 lg:p-20 flex flex-col justify-center relative bg-white/40 text-center md:text-left">
                <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-blue-600 hover:scale-110 transition-transform">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="md:w-9 md:h-9"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                
                <span className="text-[9px] md:text-xs text-blue-500 font-extrabold uppercase tracking-[0.3em]">
                  {selected.date} • {selected.location}
                </span>
                
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-serif italic text-slate-800 my-3 md:my-6 leading-tight">
                  {selected.title}
                </h2>
                
                <div className="w-12 md:w-20 h-[1.5px] md:h-[2px] bg-blue-400 mx-auto md:mx-0 mb-5 md:mb-10" />
                
                {/* MESSAGE TEXT SIZE: MD ON MOBILE, 2XL-3XL ON DESKTOP */}
                <p className="text-base md:text-2xl lg:text-3xl text-slate-600 font-light italic leading-relaxed md:leading-snug">
                  "{selected.message}"
                </p>
                
                {isFromNavbar && (
                  <button onClick={() => setSelected(null)} className="mt-8 md:mt-12 bg-blue-600 text-white px-8 md:px-12 py-3 md:py-5 rounded-full text-[10px] md:text-sm font-bold shadow-2xl shadow-blue-300 self-center md:self-start hover:bg-blue-700 transition-all uppercase tracking-widest active:scale-95">
                    Lanjut Lihat Foto
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};