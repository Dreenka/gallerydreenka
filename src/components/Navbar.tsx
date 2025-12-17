import { motion } from 'framer-motion';

export const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-8"
  >
    <div className="text-sm tracking-[0.5em] font-bold text-slate-600">M M R S.</div>
    <div className="flex items-center gap-10 text-[11px] tracking-[0.2em] font-semibold text-slate-500 uppercase">
      <a href="#" className="hover:text-blue-500 transition-all">Archive</a>
      <a href="#" className="hover:text-blue-500 transition-all">About</a>
      <a href="#" className="hover:text-blue-500 transition-all">Story</a>
      <button className="bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 shadow-sm hover:bg-white transition-all">
        Contact
      </button>
    </div>
  </motion.nav>
);