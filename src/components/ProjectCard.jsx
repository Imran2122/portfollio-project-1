import { GitBranch, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition">

      {/* Project Image Placeholder */}

      <div className="h-48 bg-blue-100 dark:bg-blue-950 flex items-center justify-center">

        <h2 className="text-4xl font-bold text-blue-600">
          {project.title.slice(0, 2).toUpperCase()}
        </h2>

      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
          {project.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-7">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.tech.map((technology) => (
            <span
              key={technology}
              className="text-xs bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Links */}

        <div className="flex gap-5 mt-6">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600"
          >
           
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;