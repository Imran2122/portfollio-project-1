// import SectionTitle from "../components/SectionTitle";
// import { skillsData } from "../data/skills";

// import { Code2, Server, Database, Wrench } from "lucide-react";

// const icons = [Code2, Server, Database, Wrench];

// // Full class names so Tailwind can detect them
// const themes = [
//   {
//     gradient: "from-blue-500 to-cyan-500",
//     glow: "hover:shadow-blue-500/20",
//     border: "hover:border-blue-400 dark:hover:border-blue-500",
//     chip: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 dark:hover:bg-blue-950 dark:hover:text-blue-300 dark:hover:border-blue-800",
//     dot: "bg-blue-500",
//     number: "text-blue-500/10",
//   },
//   {
//     gradient: "from-emerald-500 to-teal-500",
//     glow: "hover:shadow-emerald-500/20",
//     border: "hover:border-emerald-400 dark:hover:border-emerald-500",
//     chip: "hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-300 dark:hover:border-emerald-800",
//     dot: "bg-emerald-500",
//     number: "text-emerald-500/10",
//   },
//   {
//     gradient: "from-violet-500 to-fuchsia-500",
//     glow: "hover:shadow-violet-500/20",
//     border: "hover:border-violet-400 dark:hover:border-violet-500",
//     chip: "hover:bg-violet-50 hover:text-violet-700 hover:border-violet-300 dark:hover:bg-violet-950 dark:hover:text-violet-300 dark:hover:border-violet-800",
//     dot: "bg-violet-500",
//     number: "text-violet-500/10",
//   },
//   {
//     gradient: "from-amber-500 to-orange-500",
//     glow: "hover:shadow-amber-500/20",
//     border: "hover:border-amber-400 dark:hover:border-amber-500",
//     chip: "hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 dark:hover:bg-amber-950 dark:hover:text-amber-300 dark:hover:border-amber-800",
//     dot: "bg-amber-500",
//     number: "text-amber-500/10",
//   },
// ];

// const Skills = () => {
//   return (
//     <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
//       {/* Background blobs */}
//       <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl" />

//       <div className="relative">
//         <SectionTitle
//           title="My Skills"
//           subtitle="Technologies and tools I use to develop applications."
//         />

//         <div className="grid sm:grid-cols-2 gap-8">
//           {skillsData.map((group, index) => {
//             const Icon = icons[index % icons.length];
//             const theme = themes[index % themes.length];

//             return (
//               <div
//                 key={group.id}
//                 className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme.glow} ${theme.border}`}
//               >
//                 {/* Big faded number */}
//                 <span
//                   className={`pointer-events-none absolute -top-4 right-4 text-8xl font-black select-none ${theme.number}`}
//                 >
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 {/* Corner gradient glow */}
//                 <div
//                   className={`pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-br ${theme.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
//                 />

//                 {/* Header */}
//                 <div className="relative flex items-center gap-4 mb-8">
//                   <div
//                     className={`bg-gradient-to-br ${theme.gradient} text-white p-3.5 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
//                   >
//                     <Icon size={26} />
//                   </div>

//                   <div>
//                     <h2 className="text-xl font-bold text-slate-900 dark:text-white">
//                       {group.category}
//                     </h2>
//                     <p className="text-sm text-slate-500 dark:text-slate-400">
//                       {group.skills.length} technologies
//                     </p>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                   className={`relative h-px w-full mb-6 bg-gradient-to-r ${theme.gradient} opacity-30`}
//                 />

//                 {/* Skills */}
//                 <div className="relative flex flex-wrap gap-2.5">
//                   {group.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:-translate-y-0.5 cursor-default ${theme.chip}`}
//                     >
//                       <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { skillsData } from "../data/skills";

import { Code2, Server, Database, Wrench } from "lucide-react";

const icons = [Code2, Server, Database, Wrench];

// Full class names so Tailwind can detect them
const themes = [
  {
    gradient: "from-blue-500 to-cyan-500",
    soft: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    ring: "hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-blue-500/20",
    glow: "bg-blue-500/20",
  },
  {
    gradient: "from-emerald-500 to-teal-500",
    soft: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    ring: "hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-emerald-500/20",
    glow: "bg-emerald-500/20",
  },
  {
    gradient: "from-violet-500 to-fuchsia-500",
    soft: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    ring: "hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-violet-500/20",
    glow: "bg-violet-500/20",
  },
  {
    gradient: "from-amber-500 to-orange-500",
    soft: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    ring: "hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-amber-500/20",
    glow: "bg-amber-500/20",
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  const activeGroup = skillsData[active];
  const ActiveIcon = icons[active % icons.length];
  const activeTheme = themes[active % themes.length];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Local animation */}
      <style>{`
        @keyframes skillFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-24 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and tools I use to develop applications."
        />

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Category tabs */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillsData.map((group, index) => {
              const Icon = icons[index % icons.length];
              const theme = themes[index % themes.length];
              const isActive = index === active;

              return (
                <button
                  key={group.id}
                  onClick={() => setActive(index)}
                  className={`group flex items-center gap-4 min-w-[220px] lg:min-w-0 text-left rounded-2xl border p-4 transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${theme.gradient} text-white border-transparent shadow-lg scale-[1.02]`
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? "bg-white/20 text-white" : theme.soft
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-bold leading-tight">{group.category}</p>
                    <p
                      className={`text-xs mt-0.5 ${
                        isActive ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {group.skills.length} technologies
                    </p>
                  </div>

                  <span
                    className={`text-xs font-black ${
                      isActive ? "text-white/70" : "text-slate-300 dark:text-slate-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 min-h-[320px]">
            {/* Corner glow */}
            <div
              className={`pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl ${activeTheme.glow}`}
            />

            {/* Panel header */}
            <div className="relative flex items-center gap-4 mb-8">
              <div
                className={`bg-gradient-to-br ${activeTheme.gradient} text-white p-4 rounded-2xl shadow-lg`}
              >
                <ActiveIcon size={30} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {activeGroup.category}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {activeGroup.skills.length} technologies I work with
                </p>
              </div>
            </div>

            {/* Skill tiles (key re-triggers the animation on tab change) */}
            <div
              key={activeGroup.id}
              className="relative grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {activeGroup.skills.map((skill, i) => (
                <div
                  key={skill}
                  style={{
                    animation: "skillFadeUp 0.5s ease both",
                    animationDelay: `${i * 70}ms`,
                  }}
                  className={`flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default ${activeTheme.ring}`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${activeTheme.gradient} text-white font-bold`}
                  >
                    {skill.charAt(0).toUpperCase()}
                  </span>

                  <span className="font-semibold text-sm text-slate-800 dark:text-slate-100">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;