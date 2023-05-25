import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/utils';
import ProjectView from './ProjectView';

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map(project => {
          return (
            <ProjectView
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              githubLink={project.github}
              liveLink={project.liveLink}
              tools={project.tools}
            />
          );
        })}
      </div>
    </section>
  );
}
