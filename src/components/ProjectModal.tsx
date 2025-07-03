import { FC } from "react";
import { X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    fullDescription: string;
    image?: string;
    githubUrl?: string;
  };
}

export const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-t-2xl w-full h-60 object-cover"
          />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">{project.fullDescription}</p>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Ver no GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
