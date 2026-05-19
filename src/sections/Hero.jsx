import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Globe, Cpu, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Full Stack Architect',
    'Immersive UI Creator',
    'Open Source Maintainer',
    'Performance Optimization Expert',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (typedText.length < activeRole.length) {
        timer = setTimeout(() => {
          setTypedText(activeRole.slice(0, typedText.length + 1));
        }, 100);
      } else {
        // Pause at completion
        timer = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(activeRole.slice(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden select-none"
    >
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow delay-2000" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] font-mono text-xs font-semibold mb-6 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Available for Select Collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-grotesk font-extrabold text-5xl md:text-7xl leading-tight text-white mb-4"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-poppins text-2xl md:text-3xl text-gray-300 font-bold mb-6 h-10 flex items-center"
          >
            I am a <span className="text-[#8B5CF6] ml-2 border-r-2 border-[#8B5CF6] pr-1.5 animate-pulse">{typedText}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-poppins text-gray-400 text-lg leading-relaxed max-w-xl mb-8"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-initial text-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-poppins font-bold hover:scale-[1.03] transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-initial text-center px-8 py-4 rounded-2xl bg-gray-900 border border-gray-800 text-gray-300 font-poppins font-bold hover:bg-gray-800 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right column abstract floating graph representation */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            {/* Spinning background circles */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#8B5CF6]/20 animate-spin-slow" />
            <div className="absolute -inset-4 rounded-full border border-[#3B82F6]/10 animate-pulse-slow" />

            {/* Glowing Tech Orb */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#3B82F6]/5 via-[#8B5CF6]/5 to-[#06B6D4]/5 backdrop-blur-2xl border border-gray-850 flex items-center justify-center animate-float">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center shadow-inner">
                <Code2 className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] animate-pulse" />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 left-12 p-3.5 rounded-2xl bg-gray-900/90 border border-gray-800 text-[#3B82F6] shadow-xl"
            >
              <Globe className="w-6 h-6 animate-spin-slow" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-16 right-8 p-3.5 rounded-2xl bg-gray-900/90 border border-gray-800 text-[#8B5CF6] shadow-xl"
            >
              <Cpu className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-16 left-6 p-3.5 rounded-2xl bg-gray-900/90 border border-gray-800 text-[#06B6D4] shadow-xl"
            >
              <Database className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow link indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
}
