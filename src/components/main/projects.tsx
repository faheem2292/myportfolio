import { PROJECTS } from "@/constants";
import Image from "next/image"; // Added from ProjectCard
import Link from "next/link";   // Added from ProjectCard

// ProjectCard component ka code ab yahan nahi hai
// import { ProjectCard } from "@/components/sub/project-card";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          // --- Start: ProjectCard ka JSX yahan paste kiya ---
          <Link
            key={project.title} // Key ko Link par move kar diya
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
          >
            <Image
              src={project.image} // Changed from src to project.image
              alt={project.title}   // Changed from title to project.title
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
            <div className="relative p-4">
              <h1 className="text-2xl font-semibold text-white">
                {project.title} {/* Changed from title to project.title */}
              </h1>
              <p className="mt-2 text-gray-300">
                {project.description} {/* Changed from description to project.description */}
              </p>
            </div>
          </Link>
          // --- End: ProjectCard ka JSX ---
        ))}
      </div>
    </section>
  );
};