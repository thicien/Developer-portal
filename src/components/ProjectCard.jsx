import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col h-full bg-[#111827]/70 border border-gray-800 rounded-3xl overflow-hidden hover:border-[#3B82F6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
    >
      {/* Project Image Panel */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
        
        {/* Category tag */}
        <span className="absolute top-4 left-4 bg-[#8B5CF6]/90 text-white font-mono text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm tracking-wide">
          {project.category}
        </span>
      </div>

      {/* Details Area */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-grotesk text-xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm font-poppins leading-relaxed mb-6 flex-1">
          {project.shortDesc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-800/60 text-gray-300 font-mono text-xs px-2.5 py-1 rounded-md border border-gray-750"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button Strip */}
        <div className="flex items-center justify-between border-t border-gray-800/60 pt-4 mt-auto">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-1.5 text-sm font-semibold font-poppins text-[#3B82F6] hover:text-[#8B5CF6] transition-colors duration-300 group/btn cursor-pointer"
          >
            Case Study
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
