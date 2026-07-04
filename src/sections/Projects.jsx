import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, projectFilters } from '../data/portfolioData';

/**
 * Featured projects section with optional category filters and project cards.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Featured Projects"
          description="A selection of projects I've built — from AI platforms to full-stack applications."
        />

        {/* Filter Tabs */}
        <div className="projects__filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter ${
                activeFilter === filter ? 'projects__filter--active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="projects__list">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
