import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
            Technical Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
            Comprehensive breakdown of languages, frameworks, systems, and design libraries.
          </p>
        </div>

        {/* Categories container */}
        <div className="space-y-12">
          {skillsData.map((categoryGroup) => (
            <div key={categoryGroup.category} className="space-y-6">
              <h3 className="text-left font-grotesk text-xl font-bold text-gray-300 tracking-wide border-l-4 border-[#8B5CF6] pl-4">
                {categoryGroup.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryGroup.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
