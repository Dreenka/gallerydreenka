import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center px-6 pt-24 pb-10 overflow-hidden">
    <div className="text-center z-10">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[9px] md:text-xs tracking-[0.6em] text-blue-500 font-bold uppercase mb-4 block"
      >
        Digital Archive — Vol. 01
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-8xl font-serif italic text-slate-800 leading-tight"
      >
        Pieces of <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-slate-400">
          Our Journey.
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-slate-400 font-light tracking-widest text-[9px] md:text-xs uppercase max-w-xs md:max-w-md mx-auto leading-relaxed"
      >
        Captured in time, preserved in heart.
      </motion.p>
    </div>
  </section>
);