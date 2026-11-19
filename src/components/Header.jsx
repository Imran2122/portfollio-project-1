
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  X,
  Moon,
  Sun,
  Code2,
} from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-300 ${
      isActive
        ? "text-blue-600"
        : "text-slate-700 dark:text-slate-300 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">

      <nav className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Code2 className="text-blue-600" size={28} />

          <span className="text-2xl font-bold">
            Imran<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={22} />
            ) : (
              <Moon size={22} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-6 py-5 flex flex-col gap-5 bg-white dark:bg-slate-950">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      )}

    </header>
  );
};

export default Header;
