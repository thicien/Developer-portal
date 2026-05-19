import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, ShieldAlert, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-x-hidden overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F19]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[85vh] flex flex-col"
          >
            {/* Top Image Panel */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden flex-shrink-0 select-none">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-95" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/80 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6">
                <span className="bg-[#3B82F6]/90 text-white font-mono text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                  {project.category}
                </span>
                <h2 className="font-grotesk text-3xl md:text-4xl font-extrabold text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Scrollable details area */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Project description and primary links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="font-poppins font-bold text-lg text-white mb-2">Project Overview</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                    {project.desc}
                  </p>
                </div>
                <div className="bg-[#0B0F19]/60 border border-gray-850 p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="font-poppins font-semibold text-sm text-gray-300 mb-3">Technologies Built With</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span key={t} className="bg-gray-800 text-gray-300 font-mono text-xs px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all font-poppins font-medium text-sm border border-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Repository
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:opacity-90 transition-all font-poppins font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h3 className="font-poppins font-bold text-lg text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Key Implementation Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-400 font-poppins">
                      <span className="text-[#3B82F6] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & Engineering Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-800/80 pt-6">
                <div>
                  <h3 className="font-poppins font-bold text-lg text-white mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-500" />
                    Engineering Challenge
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-white mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#8B5CF6]" />
                    Optimized Solution
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                    {project.solutions}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
