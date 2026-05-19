import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

const iconMap = {
  React: Lucide.Atom,
  Tailwind: Lucide.Layers,
  TS: Lucide.ShieldCheck,
  Three: Lucide.Box,
  Framer: Lucide.Zap,
  Node: Lucide.Server,
  Python: Lucide.Terminal,
  API: Lucide.Cpu,
  DevOps: Lucide.Workflow,
  DB: Lucide.Database,
  Redis: Lucide.Flame,
  AWS: Lucide.Cloud,
  Vercel: Lucide.SquareTerminal,
  Git: Lucide.GitBranch,
  Figma: Lucide.PenTool,
  Arch: Lucide.Network,
  Perf: Lucide.Gauge,
};

export default function SkillCard({ name, level, icon }) {
  const IconComponent = iconMap[icon] || Lucide.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-[#8B5CF6]/50 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-gray-800 text-gray-300 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-[#3B82F6] group-hover:to-[#8B5CF6] transition-all duration-300">
          <IconComponent className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-poppins font-semibold text-white text-base tracking-wide">{name}</h4>
          <span className="text-xs text-gray-400 font-mono">Expertise: {level}%</span>
        </div>
      </div>

      {/* Animated Skill progress bar */}
      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
        />
      </div>
    </motion.div>
  );
}
