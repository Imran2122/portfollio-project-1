
import SectionTitle from "../components/SectionTitle";

import { GraduationCap, Code, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Sc. in Computer Science and Engineering",
  },
  {
    icon: Code,
    title: "Development",
    text: "MERN Stack & Next.js Development",
  },
  {
    icon: Briefcase,
    title: "Career Goal",
    text: "Full Stack Software Developer",
  },
];

const stack = ["MongoDB", "Express", "React", "Node.js", "Next.js"];

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="About Me"
        subtitle="Get to know more about my background and journey."
      />

      <div className="grid items-center gap-14 md:grid-cols-2 lg:gap-20">
        {/* Profile */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Offset outline sitting behind the card */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-blue-600/40 dark:border-blue-500/40"
          />

          <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-blue-600 shadow-xl shadow-blue-600/25">
            <h2
              aria-label="Imran Hossain"
              className="select-none text-8xl font-extrabold tracking-tight text-white sm:text-9xl"
            >
              IH
            </h2>
          </div>
        </div>

        {/* Information */}
        <div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            I'm Imran Hossain
          </h2>

          <p className="max-w-xl leading-8 text-slate-600 dark:text-slate-400">
            I recently completed my Bachelor's degree in Computer Science and
            Engineering. I am passionate about full-stack web development and
            enjoy building real-world applications using modern technologies.
          </p>

          <p className="mt-4 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
            My goal is to become a skilled software engineer and contribute to
            meaningful projects while continuously improving my development
            skills.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25">
                  <Icon size={22} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech I work with */}
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;