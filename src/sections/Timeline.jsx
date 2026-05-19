import { motion } from 'framer-motion';
import { Award, Compass, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#0B0F19]/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
            Achievement Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
            A visual overview of my career milestones, academic breakthroughs, and technical growth.
          </p>
        </div>

        {/* Timeline Path container */}
        <div className="relative max-w-4xl mx-auto py-10">
          {/* Vertical central timeline guide rule (hidden on mobile, visible on md) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] hidden md:block" />

          {/* Cards mapping */}
          <div className="space-y-12 md:space-y-16">
            {achievementsData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left spacer block (hidden on mobile) */}
                  <div className="w-full md:w-1/2" />

                  {/* Bullet center marker (hidden on mobile, visible on md) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-[#8B5CF6] z-10 flex items-center justify-center hidden md:flex shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>

                  {/* Card Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="w-full md:w-[45%] p-6 rounded-2xl bg-[#111827]/70 border border-gray-800 hover:border-[#8B5CF6]/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 relative text-left"
                  >
                    {/* Glowing highlight indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-mono font-bold text-[#8B5CF6]">
                      <Star className="w-3.5 h-3.5 fill-[#8B5CF6]/20" />
                      <span>{item.date}</span>
                    </div>

                    <div className="flex items-start gap-4 mt-2">
                      <div className="p-2.5 rounded-xl bg-gray-800 text-[#06B6D4] flex-shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-grotesk text-lg font-bold text-white mb-2 pr-12">
                          {item.title}
                        </h3>
                        <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
