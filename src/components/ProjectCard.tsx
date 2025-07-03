import { FC } from "react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    image?: string;
    githubUrl?: string;
  };
  onClick: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="cursor-pointer rounded-2xl shadow-md hover:shadow-lg transition p-4 bg-white dark:bg-zinc-800"
      onClick={onClick}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl w-full h-40 object-cover mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{project.shortDescription}</p>
    </div>
  );
};
