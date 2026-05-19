import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const startAutoScroll = () => {
    timerRef.current = setInterval(slideNext, 6000);
  };

  const stopAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  };

  const current = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#0B0F19] relative select-none"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
            Kind words from technical leaders, business founders, and UI collaborators.
          </p>
        </div>

        {/* Carousel Slider Card frame */}
        <div className="relative bg-[#111827]/70 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
          <Quote className="absolute top-6 left-8 w-16 h-16 text-[#8B5CF6]/10" />

          {/* Animate sliding content */}
          <div className="relative flex-1 flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6 text-left"
              >
                <p className="font-poppins text-gray-300 text-base md:text-lg leading-relaxed italic pr-2">
                  "{current.feedback}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-800/60 pt-6">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#3B82F6]"
                  />
                  <div>
                    <h4 className="font-grotesk font-bold text-white text-base">
                      {current.name}
                    </h4>
                    <span className="font-poppins text-gray-400 text-xs">
                      {current.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls and Indicator circles */}
          <div className="flex items-center justify-between border-t border-gray-800/30 pt-6 mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'bg-[#3B82F6] w-6' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={slidePrev}
                className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={slideNext}
                className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
