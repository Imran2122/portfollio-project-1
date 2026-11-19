
import { motion } from "motion/react";

import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  Monitor,
  Server,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive user interfaces using React, Next.js and Tailwind CSS.",
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-blue-500/20",
    border: "hover:border-blue-400 dark:hover:border-blue-500",
    number: "text-blue-500/10",
  },
  {
    title: "Backend Development",
    description:
      "Creating secure APIs and server-side applications using Node.js and Express.js.",
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    glow: "hover:shadow-emerald-500/20",
    border: "hover:border-emerald-400 dark:hover:border-emerald-500",
    number: "text-emerald-500/10",
  },
  {
    title: "Database Management",
    description:
      "Working with MongoDB, Prisma and Mongoose to manage application data.",
    icon: Database,
    gradient: "from-violet-500 to-fuchsia-500",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-400 dark:hover:border-violet-500",
    number: "text-violet-500/10",
  },
];

// Card Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Hero />
      </motion.div>

      {/* ================= SERVICES SECTION ================= */}

      <section className="relative bg-slate-50 dark:bg-slate-900 py-24 overflow-hidden">

        {/* Background Animation */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Section Title */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title="What I Do"
              subtitle="I build modern and scalable web applications."
            />
          </motion.div>

          {/* Services Cards */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid md:grid-cols-3 gap-7"
          >
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 transition-all duration-300 hover:shadow-2xl ${item.glow} ${item.border}`}
                >

                  {/* Background Number */}

                  <span
                    className={`pointer-events-none absolute -top-3 right-4 text-7xl font-black select-none ${item.number}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Hover Glow */}

                  <div
                    className={`pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  {/* Icon Animation */}

                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`relative inline-flex bg-gradient-to-br ${item.gradient} text-white p-4 rounded-2xl shadow-lg mb-6`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Card Title */}

                  <h3 className="relative text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* Card Description */}

                  <p className="relative text-slate-500 dark:text-slate-400 leading-7">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
                  />

                </motion.div>
              );
            })}
          </motion.div>

          {/* About Button */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-block"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
              >
                More About Me

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Home;
