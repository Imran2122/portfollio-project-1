
// import { useState } from "react";

// import SectionTitle from "../components/SectionTitle";
// import ProjectCard from "../components/ProjectCard";
// import { projectsData } from "../data/projects";

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = ["All", "React", "Next.js"];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projectsData
//       : projectsData.filter(
//           (project) => project.category === activeFilter
//         );

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">

//       <SectionTitle
//         title="My Projects"
//         subtitle="Explore some of my recent development projects."
//       />

//       {/* Filter Buttons */}
//       <div className="flex justify-center flex-wrap gap-3 mb-12">
//         {filters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${
//               activeFilter === filter
//                 ? "bg-blue-600 text-white shadow-md"
//                 : "bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700"
//             }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Project Cards */}
//       {filteredProjects.length > 0 ? (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//           {filteredProjects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-slate-500 py-10">
//           No projects found.
//         </p>
//       )}

//     </section>
//   );
// };

// export default Projects;

import { useState } from "react";
import { FolderOpen } from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "Next.js"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // Number of projects behind each filter, shown inside the button
  const countFor = (filter) =>
    filter === "All"
      ? projectsData.length
      : projectsData.filter((project) => project.category === filter).length;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="My Projects"
        subtitle="Explore some of my recent development projects."
      />

      {/* Filter Buttons */}
      <div className="mb-12 flex justify-center">
        <div
          role="group"
          aria-label="Filter projects by technology"
          className="inline-flex flex-wrap justify-center gap-1 rounded-2xl border border-slate-200 bg-slate-100 p-1.5 dark:border-slate-800 dark:bg-slate-900"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                }`}
              >
                {filter}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  }`}
                >
                  {countFor(filter)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="mx-auto flex max-w-md flex-col items-center rounded-3xl border border-dashed border-slate-300 px-6 py-14 text-center dark:border-slate-700">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950">
            <FolderOpen size={26} />
          </div>

          <p className="font-semibold text-slate-900 dark:text-slate-100">
            No {activeFilter} projects yet
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className="mt-4 rounded-xl text-sm font-semibold text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 dark:text-blue-400"
          >
            Show all projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
