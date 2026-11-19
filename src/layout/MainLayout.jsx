import { useEffect, useRef, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();
  const outlet = useOutlet(); // keeps the old page mounted while it animates out
  const reduceMotion = useReducedMotion();

  // No curtain on the very first load, only when navigating
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const ease = [0.76, 0, 0.24, 1];

  // The page swaps while the curtain fully covers the screen (at ~0.4s)
  const pageVariants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, y: 40, scale: 0.98 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
        },
        exit: { opacity: 0, transition: { duration: 0.01, delay: 0.4 } },
      };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Blue curtain: slides up, holds with the monogram, then lifts away */}
      {!isFirstRender.current && !reduceMotion && (
        <motion.div
          key={location.pathname}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-blue-600"
          initial={{ y: "100%" }}
          animate={{ y: ["100%", "0%", "0%", "-100%"] }}
          transition={{ duration: 1.1, times: [0, 0.4, 0.55, 1], ease }}
        >
          <motion.span
            className="select-none text-7xl font-extrabold tracking-tight text-white sm:text-8xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05] }}
            transition={{ duration: 1.1, times: [0.2, 0.45, 0.55, 0.8] }}
          >
            IH
          </motion.span>
        </motion.div>
      )}

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1"
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MainLayout;