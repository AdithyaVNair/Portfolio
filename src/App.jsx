import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import WyrmCursor from './components/WyrmCursor';
import ScrollWyrm from './components/ScrollWyrm';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initialize Lenis only after loading is complete to prevent scrolling during load
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Handle internal anchor links
      const handleAnchorClick = (e) => {
        const target = e.target.closest('a');
        if (target && target.hash && target.origin === window.location.origin) {
          e.preventDefault();
          const targetElement = document.querySelector(target.hash);
          if (targetElement) {
            lenis.scrollTo(targetElement);
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      return () => {
        lenis.destroy();
        document.removeEventListener('click', handleAnchorClick);
      };
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="app">
          <WyrmCursor />
          <ScrollWyrm />

          {/* Scroll Progress Bar */}
          <motion.div
            style={{
              scaleX,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'var(--accent-primary)',
              transformOrigin: '0%',
              zIndex: 9999
            }}
          />

          <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '0.8rem 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            backgroundColor: 'rgba(2, 12, 27, 0.7)', // Darker glassy background to match new theme
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderBottom: '1px solid rgba(100, 255, 218, 0.05)',
            color: 'var(--text-primary)', // Light text
            opacity: scrollYProgress.get() > 0.1 ? 1 : 0, // Fade in as we scroll away from hero
            pointerEvents: scrollYProgress.get() > 0.1 ? 'auto' : 'none',
            transition: 'opacity 0.3s ease'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              AVN<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#hero" style={{ color: '#000', textDecoration: 'none' }}>Home</a>
              <a href="#skills" style={{ color: '#000', textDecoration: 'none' }}>Skills</a>
              <a href="#projects" style={{ color: '#000', textDecoration: 'none' }}>Work</a>
              <a href="#contact" style={{ color: '#000', textDecoration: 'none' }}>Contact</a>
            </div>
          </nav>

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
