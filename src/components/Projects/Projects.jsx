import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/utils';
import ProjectView from './ProjectView';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center"
    >
      <h2>Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map(project => {
          return (
            <ProjectView
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              githubLink={project.github}
              liveLink={project.live}
              tools={project.tools}
            />
          );
        })}
      </div>
    </section>
  );
}
