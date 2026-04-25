"use client";

import { motion } from "framer-motion";
import { experiences } from "@/src/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faBriefcase} className="text-blue-400 mr-3" />
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 border-l-2 border-blue-500/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
              />
              <motion.div
                className="absolute -left-[13px] -top-1 w-6 h-6 border-2 border-blue-500/50 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.div
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faBriefcase} className="text-blue-400 text-sm" />
                  {exp.role}
                </h3>
                <p className="text-blue-400 mb-1 flex items-center gap-2 mt-1">
                  <FontAwesomeIcon icon={faBuilding} className="text-xs" />
                  {exp.company}
                  <span className="text-gray-600">|</span>
                  <FontAwesomeIcon icon={faLocationDot} className="text-xs" />
                  {exp.location}
                </p>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                  {exp.startDate} – {exp.endDate}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 text-sm flex gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <span className="text-blue-400">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;