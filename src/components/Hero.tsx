import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-44 pb-20 flex flex-col items-center px-6">
      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card-inner px-4 py-1.5 rounded-full mb-8"
      >
        <span className="text-[10px] tracking-[0.4em] font-bold text-blue-400/80 uppercase">
          Private Archive 01
        </span>
      </motion.div>

      {/* Main Glass Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel-heavy p-12 md:p-16 max-w-3xl w-full text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-[1.1] text-slate-800 mb-8">
          Collecting <br />
          <span className="italic font-serif text-blue-500/60 text-glow">timeless</span> whispers.
        </h1>
        
        <p className="max-w-md mx-auto text-slate-500 font-light text-base leading-relaxed">
          Sebuah ruang tenang untuk menyimpan jejak cerita yang tak ingin kita biarkan memudar oleh waktu.
        </p>
      </motion.div>
    </section>
  );
};