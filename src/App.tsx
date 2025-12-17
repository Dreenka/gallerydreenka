import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Music } from './components/Music';
import { FloatingParticles } from './components/FloatingParticles';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "021125") {
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="relative min-h-screen grain">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center bg-[#f0f4f8] px-6">
            <div className="glass-panel-heavy p-10 md:p-16 max-w-md w-full text-center shadow-[0_20px_50px_rgba(59,130,246,0.2)] border-2 border-blue-100">
              <div className="mb-10">
                <div className="text-blue-500 font-bold tracking-[0.5em] text-xs uppercase mb-3">Login jir</div>
                <h2 className="text-4xl font-serif italic text-slate-800">GalDreenka.</h2>
              </div>
              <form onSubmit={handleLogin} className="space-y-6">
                <input 
                  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Secret Code..."
                  className="w-full bg-white/60 backdrop-blur-sm border-2 border-blue-50 px-6 py-5 rounded-2xl outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-center tracking-[0.3em] font-bold text-slate-700"
                />
                {error && <p className="text-blue-600 text-xs font-bold italic">Salah lu, fix bukan pingkaaa.</p>}
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all uppercase tracking-widest text-xs active:scale-95">Unlock Memories</button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="fixed top-0 left-0 right-0 h-2 bg-blue-500 z-[200] origin-left shadow-[0_4px_15px_rgba(59,130,246,0.5)]" style={{ scaleX }} />
            
            <FloatingParticles />

            <Navbar />
            <main className="relative z-10 pt-10 px-4 md:px-0">
              <Hero />
              <Gallery />
            </main>

            <div className="fixed bottom-10 right-10 z-[150] flex flex-col gap-5 items-center">
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: 20 }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-14 h-14 bg-white/95 backdrop-blur-md border-2 border-blue-100 rounded-full shadow-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-blue-200">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </motion.button>
                )}
              </AnimatePresence>
              <Music />
            </div>

            <footer className="relative py-24 flex flex-col items-center justify-center">
              <div className="glass-panel-heavy px-14 py-12 rounded-[3rem] text-center border-2 border-blue-100 shadow-[0_20px_50px_rgba(59,130,246,0.15)]">
                <h3 className="text-3xl md:text-4xl font-serif italic text-slate-700 mb-3">Captured Forever.</h3>
                <p className="text-[11px] tracking-[0.6em] text-slate-400 uppercase font-bold">Gallery Dreenka.</p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;