import { Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-850 bg-[#0B0F19] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 select-none">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] text-white">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-grotesk font-bold text-lg text-white">
            Thicien<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">.Dev</span>
          </span>
        </div>

        {/* Copy */}
        <p className="font-poppins text-gray-500 text-sm flex items-center gap-1.5 select-none">
          <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1 text-gray-600 hidden sm:flex">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> in San Francisco
          </span>
        </p>

        {/* Quick Back to Top / Navigation links */}
        <div className="flex gap-6">
          <a
            href="#home"
            className="font-poppins text-xs font-semibold text-gray-500 hover:text-white transition-colors"
          >
            Back to Top
          </a>
          <a
            href="#projects"
            className="font-poppins text-xs font-semibold text-gray-500 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-poppins text-xs font-semibold text-gray-500 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
