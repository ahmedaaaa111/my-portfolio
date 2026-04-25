"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faPalette,
  faBolt,
  faBook,
  faServer,
  faLink,
  faMobileScreen,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

interface SkillItem {
  name: string;
  icon: IconDefinition;
  level: number;
  color: string;
}

const skillsData: SkillItem[] = [
  { name: "HTML5", icon: faHtml5, level: 90, color: "text-orange-500" },
  { name: "CSS3", icon: faCss3Alt, level: 85, color: "text-blue-500" },
  { name: "JavaScript", icon: faJs, level: 85, color: "text-yellow-400" },
  { name: "TypeScript", icon: faCode, level: 75, color: "text-blue-400" },
  { name: "React.js", icon: faReact, level: 80, color: "text-cyan-400" },
  { name: "Next.js", icon: faServer, level: 70, color: "text-white" },
  { name: "Tailwind CSS", icon: faPalette, level: 85, color: "text-teal-400" },
  { name: "Bootstrap", icon: faBootstrap, level: 80, color: "text-purple-500" },
  { name: "Git & GitHub", icon: faGitAlt, level: 80, color: "text-orange-400" },
  { name: "REST APIs", icon: faLink, level: 75, color: "text-green-400" },
  { name: "Responsive", icon: faMobileScreen, level: 90, color: "text-pink-400" },
  { name: "DevTools", icon: faWrench, level: 80, color: "text-yellow-300" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faCode} className="text-blue-400 mr-3" />
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              }}
            >
              {/* FA Icon */}
              <motion.div
                className={`text-4xl mb-3 ${skill.color}`}
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </motion.div>

              <h3 className="text-white font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;