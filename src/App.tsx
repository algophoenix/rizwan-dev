import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Education } from './components/education/Education';
import { Achievements } from './components/achievements/Achievements';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">

      <div className="fixed inset-0 -z-10 h-full w-full bg-background dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-none pointer-events-none opacity-50" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Footer />
    </main>
  );
}

export default App;
