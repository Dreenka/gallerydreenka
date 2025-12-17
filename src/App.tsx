import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Music } from './components/Music';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative min-h-screen grain">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-300 z-[100] origin-left" 
        style={{ scaleX }} 
      />

      {/* Decorative Blur Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-100/30 blur-[150px] rounded-full animate-float" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Gallery />
      </main>

      <Music />
      
      <footer className="py-40 text-center relative z-10">
        <div className="glass-card-inner inline-block px-12 py-5 rounded-full shadow-lg">
          <p className="text-[10px] tracking-[0.8em] text-slate-400 uppercase font-bold">
            Safe in our world.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;