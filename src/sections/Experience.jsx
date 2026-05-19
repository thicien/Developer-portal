import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
            A review of my recent corporate tenures, client contracts, and technical leadership roles.
          </p>
        </div>

        {/* Vertical Experience layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((job, idx) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#111827]/70 border border-gray-800 hover:border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center text-left relative group overflow-hidden"
            >
              {/* Backglow element */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon / Date Column */}
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2 md:w-48 flex-shrink-0">
                <div className="p-3 rounded-2xl bg-gray-800 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-[#8B5CF6] block uppercase tracking-wider mb-0.5">
                    {job.company}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{job.duration}</span>
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="flex-1 space-y-4">
                <h3 className="font-grotesk text-xl font-bold text-white group-hover:text-[#3B82F6] transition-colors duration-300">
                  {job.role}
                </h3>
                
                <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                  {job.desc}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-800 text-gray-300 font-mono text-xs px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
