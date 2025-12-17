import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memories, type Memory } from '../data/memories';

export const Gallery = () => {
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 pb-60 relative">
      {/* Background Typography */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none z-0">
        <h2 className="text-[25vw] font-black leading-none -ml-20">TIME</h2>
        <h2 className="text-[25vw] font-black leading-none text-right -mr-20">LESS</h2>
      </div>

      {/* TAMBAHKAN 'items-start' di sini! 
         Ini kunci agar foto yang pendek tidak dipaksa setinggi foto yang panjang 
      */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-10 items-start relative z-10">
        {memories.map((item, i) => {
          const rowNumber = Math.floor(i / 2);
          const isEvenRow = rowNumber % 2 === 0;
          
          let colSpan = "";
          let aspectRatio = "";
          
          if (isEvenRow) {
            colSpan = i % 2 === 0 ? "md:col-span-4" : "md:col-span-8";
            aspectRatio = i % 2 === 0 ? "aspect-[4/5]" : "aspect-[16/9]";
          } else {
            colSpan = i % 2 === 0 ? "md:col-span-8" : "md:col-span-4";
            aspectRatio = i % 2 === 0 ? "aspect-[16/9]" : "aspect-[4/5]";
          }

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative group col-span-1 ${colSpan}`}
            >
              <div className="glass-panel-heavy p-2 md:p-4 flex flex-col shadow-xl">
                
                {/* Gunakan 'h-auto' dan 'max-w-full' agar rasio aslinya terjaga 
                */}
                <div className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] ${aspectRatio} w-full bg-slate-100`}>
                  <img 
                    src={item.url} 
                    className="w-full h-full object-cover" 
                    alt={item.title}
                  />
                </div>

                <div className="mt-3 md:mt-5 px-1 md:px-2 pb-1 md:pb-2 flex justify-between items-center gap-2">
                  <div className="max-w-[70%]">
                    <span className="text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] text-blue-400 font-bold uppercase block">
                      {item.date}
                    </span>
                    <h3 className="text-[11px] md:text-xl font-light italic font-serif text-slate-800 tracking-tight leading-tight truncate">
                      {item.title}
                    </h3>
                  </div>

                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(item)}
                    className="w-8 h-8 md:w-12 md:h-12 glass-card-inner rounded-xl md:rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-white flex-shrink-0"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-xl"
          >
             <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel-heavy max-w-xl w-full p-6 md:p-12 relative shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-300" />
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <h4 className="text-[8px] md:text-[10px] tracking-[0.5em] text-blue-400 font-bold uppercase">Archive</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs tracking-widest mt-1">{selected.location}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-slate-400">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="space-y-4 md:space-y-6 text-center">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img src={selected.url} className="w-full h-full object-cover" alt="" />
                </div>
                <p className="text-lg md:text-2xl text-slate-700 font-light italic font-serif">
                  "{selected.message}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};