import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/portfolioData';

/**
 * Skills section with categorized skill cards.
 */
export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Technologies & Tools"
          description="Technologies and tools I work with across the stack."
        />

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              items={skill.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
