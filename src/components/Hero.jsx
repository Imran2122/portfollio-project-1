
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

const name = "Imran Hossain";

const nameContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center overflow-hidden px-6 py-20">

      {/* Background Decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500 blur-3xl"
      />

      <div className="relative grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Intro Section */}
        <div className="text-center lg:text-left">

          {/* Open to Work Badge */}
          <motion.p
            initial={{ opacity: 0, y: 25, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-950 dark:text-green-300"
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="h-2.5 w-2.5 rounded-full bg-green-500"
            />

            Open to internships and projects
          </motion.p>

          {/* Animated Name */}
          <motion.h1
            variants={nameContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            Hi, I'm{" "}

            <span className="inline-block">
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Developer Title */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-4 text-xl font-semibold text-blue-600 dark:text-blue-400 md:text-2xl"
          >
            MERN Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mx-auto mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-400 lg:mx-0"
          >
            I build full-stack web applications with React, Node.js and
            Next.js. I recently finished my degree in Computer Science and
            Engineering and I'm looking for a team where I can keep learning.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30"
              >
                View projects

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <Mail size={18} />
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Code Card Animation */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-md"
        >

          {/* Floating Border */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-blue-600/40 dark:border-blue-500/40"
          />

          {/* Code Window */}
          <motion.div
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
            className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-blue-600/20 ring-1 ring-slate-800"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <span className="text-sm text-slate-400">
                imran.js
              </span>
            </div>

            {/* Code Content */}
            <pre
              aria-label="A short code snippet describing Imran Hossain"
              className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-slate-300 sm:text-sm"
            >
              <code>
                <span className="text-blue-400">const</span> imran = {"{"}
                {"\n"}
                {"  "}role: <span className="text-green-400">"MERN Developer"</span>,
                {"\n"}
                {"  "}also: <span className="text-green-400">"Next.js"</span>,
                {"\n"}
                {"  "}degree: <span className="text-green-400">"B.Sc. in CSE"</span>,
                {"\n"}
                {"  "}lookingFor: <span className="text-green-400">"Internships"</span>,
                {"\n"}
                {"}"};
                {"\n\n"}

                <span className="text-slate-500">
                  // Let's build something
                </span>

                {"\n"}

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="inline-block h-4 w-2 translate-y-0.5 bg-blue-400"
                />
              </code>
            </pre>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
