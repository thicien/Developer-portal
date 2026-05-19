import { motion } from 'framer-motion';
import { User, Compass, Flame, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const cards = [
    {
      title: "Who I Am",
      icon: User,
      desc: personalInfo.bio,
      color: "text-[#3B82F6] bg-[#3B82F6]/10",
    },
    {
      title: "Career Journey",
      icon: Compass,
      desc: "Starting with simple automated scripting, I evolved into a Senior Architect building ultra-fast React systems, managing large spatial databases, and organizing high-throughput backend services. Committed to continuous learning.",
      color: "text-[#8B5CF6] bg-[#8B5CF6]/10",
    },
    {
      title: "My Passion",
      icon: Flame,
      desc: "I am deeply obsessed with pixel perfection, modern UI trends, real-time animation performance, clean architecture models, and contributing robust systems to open source communities.",
      color: "text-[#06B6D4] bg-[#06B6D4]/10",
    },
    {
      title: "Vision & Goals",
      icon: Eye,
      desc: "Building intuitive systems that abstract high complexities. Specializing in WebGL frameworks, scalable server environments, next-generation AI agents, and modular clean design APIs.",
      color: "text-emerald-400 bg-emerald-400/10",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0F19]/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
            Get to know the developer, architect, and creative behind the code.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-[#111827]/70 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className={`p-4 rounded-2xl ${card.color} mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-grotesk font-bold text-xl text-white mb-3">
                  {card.title}
                </h3>
                <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
