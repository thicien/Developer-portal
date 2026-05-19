import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Terminal from './components/Terminal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Timeline from './sections/Timeline';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Add/remove dark class from root element for Tailwind theme targeting
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
      darkMode ? 'bg-[#0B0F19] text-[#F9FAFB]' : 'bg-[#F9FAFB] text-[#0B0F19]'
    }`}>
      {/* Background canvas effects */}
      <InteractiveBackground darkMode={darkMode} />

      {/* Spring custom glowing cursor (disabled on mobile) */}
      <CustomCursor />

      {/* Dynamic Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content page sections */}
      <main className="relative w-full overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Timeline achievements */}
        <Timeline />

        {/* Testimonials social proof */}
        <Testimonials />

        {/* Premium Developer terminal section */}
        <section className="py-24 bg-[#0B0F19]/50 relative px-6 border-t border-b border-gray-900/60">
          <div className="max-w-7xl mx-auto text-center space-y-12">
            <div>
              <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
                Interactive Terminal
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
              <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
                Execute low-level commands, explore system metrics, or trigger diagnostic scripts.
              </p>
            </div>
            <Terminal />
          </div>
        </section>

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}

export default App;
