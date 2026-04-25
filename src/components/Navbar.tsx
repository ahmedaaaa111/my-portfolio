"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faRocket,
  faBriefcase,
  faEnvelope,
  faBars,
  faXmark,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Home", href: "#home", icon: faHouse },
  { name: "About", href: "#about", icon: faUser },
  { name: "Skills", href: "#skills", icon: faCode },
  { name: "Projects", href: "#projects", icon: faRocket },
  { name: "Experience", href: "#experience", icon: faBriefcase },
  { name: "Contact", href: "#contact", icon: faEnvelope },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-lg shadow-lg shadow-blue-500/5 border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faCode} className="text-blue-500 text-lg" />
          Ahmed.dev
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm ${
                activeSection === link.href.replace("#", "")
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              <FontAwesomeIcon icon={link.icon} className="text-xs" />
              {link.name}
            </motion.a>
          ))}

          {/* ✅ CV Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/cv"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              <FontAwesomeIcon icon={faFileLines} className="text-xs" />
              CV
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={link.icon} className="w-4" />
                {link.name}
              </motion.a>
            ))}

            {/* ✅ CV Button in Mobile Menu */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="px-4 py-3"
            >
              <Link
                href="/cv"
                className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faFileLines} className="w-4" />
                View CV
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;