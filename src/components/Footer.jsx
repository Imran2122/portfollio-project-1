
import { Link, NavLink } from "react-router-dom";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { motion } from "motion/react";

/* GitHub Icon */
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

/* LinkedIn Icon */
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/Imran2122",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/imran-hossain-web-developer",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-[#080d1a]">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Imran
              </span>
              <span className="text-blue-600">.</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base">
              I'm a MERN Stack Developer passionate about building
              modern, responsive and scalable web applications.
              Let's turn creative ideas into reality.
            </p>

            {/* Developer Tag */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
              <Code2 size={16} />
              Building for the web
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `group flex w-fit items-center gap-2 text-sm transition-all duration-300 ${
                      isActive
                        ? "font-semibold text-blue-600 dark:text-blue-400"
                        : "text-slate-600 hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Follow me on social media and let's connect.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -6, rotate: 5, scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  <Icon size={21} />
                </motion.a>
              ))}
            </div>

            <p className="mt-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              Let's build something amazing!
            </p>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-200 py-7 dark:border-slate-800 sm:flex-row">

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 sm:text-left">
            © {currentYear} Imran Hossain. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            Designed & Developed with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-flex text-red-500"
            >
              <Heart size={15} fill="currentColor" />
            </motion.span>
            by Imran
          </p>

          {/* Back To Top */}
          <motion.button
            type="button"
            onClick={handleScrollToTop}
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 transition-shadow hover:shadow-xl hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30"
          >
            <ArrowUp
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
