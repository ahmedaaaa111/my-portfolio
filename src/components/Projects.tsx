"use client";

import { motion } from "framer-motion";
import { projects } from "@/src/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faArrowUpRightFromSquare,
  faLaptopCode,
  faClock,
  faLock,
  faUsers,
  faNewspaper,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Map project icons
const projectIcons: Record<number, IconDefinition> = {
  1: faNewspaper,      // Blog
  2: faUsers,          // Social App
  3: faWandMagicSparkles, // Future
};

// Features for real projects
const projectFeatures: Record<number, string[]> = {
  1: ["Responsive Design", "GSAP Animations", "Dynamic Content", "Clean UI"],
  2: [
    "User Auth (Sign up / Login)",
    "CRUD Posts & Comments",
    "User Profiles",
    "Change Password",
    "REST API Integration",
  ],
};

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faRocket} className="text-blue-400 mr-3" />
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Here are some of the projects I&apos;ve built. More coming soon! 🚀
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => {
            const isComingSoon = project.title === "Coming Soon";
            const features = projectFeatures[project.id] || [];

            return (
              <motion.div
                key={project.id}
                className={`rounded-xl overflow-hidden border transition-all duration-500 group ${
                  isComingSoon
                    ? "bg-gray-800/30 border-gray-700/50 border-dashed"
                    : "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={isComingSoon ? {} : { y: -10 }}
              >
                {/* Project Image / Placeholder */}
                <div
                  className={`h-48 flex items-center justify-center relative overflow-hidden ${
                    isComingSoon
                      ? "bg-gray-800/50"
                      : "bg-gradient-to-br from-blue-600/30 to-purple-600/30"
                  }`}
                >
                  {!isComingSoon && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}

                  {isComingSoon ? (
                    <div className="flex flex-col items-center gap-2">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-4xl text-gray-600 animate-pulse"
                      />
                      <span className="text-gray-600 text-sm font-medium">
                        In Development
                      </span>
                    </div>
                  ) : (
                    <FontAwesomeIcon
                      icon={projectIcons[project.id] || faLaptopCode}
                      className="text-5xl text-blue-400/60 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 flex items-center gap-2 ${
                      isComingSoon
                        ? "text-gray-500"
                        : "text-white group-hover:text-blue-400 transition-colors"
                    }`}
                  >
                    {isComingSoon && (
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-sm text-gray-600"
                      />
                    )}
                    {project.title}
                  </h3>

                  <p
                    className={`mb-4 text-sm ${
                      isComingSoon ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* ✅ Feature List for Real Projects */}
                  {features.length > 0 && (
                    <div className="mb-4 space-y-1">
                      {features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + idx * 0.05 }}
                        >
                          <span className="text-green-400">✓</span>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs border ${
                          isComingSoon
                            ? "bg-gray-800/50 text-gray-600 border-gray-700/50"
                            : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {!isComingSoon && (
                    <div className="flex gap-4">
                      {project.liveUrl && project.liveUrl !== "" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                          whileHover={{ x: 3 }}
                        >
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-xs"
                          />
                          Live Demo
                        </motion.a>
                      )}
                      {project.githubUrl && project.githubUrl !== "" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                          whileHover={{ x: 3 }}
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-xs"
                          />
                          GitHub
                        </motion.a>
                      )}

                      {/* If no links yet */}
                      {(!project.liveUrl || project.liveUrl === "") &&
                        (!project.githubUrl || project.githubUrl === "") && (
                          <div className="flex items-center gap-2 text-yellow-500/70 text-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            Deploying Soon...
                          </div>
                        )}
                    </div>
                  )}

                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                      </span>
                      Coming Soon...
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;