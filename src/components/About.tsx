"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLocationDot,
  faBriefcase,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const infoCards = [
  { label: "Degree", value: "BSc Informatics", icon: faGraduationCap, color: "text-blue-400" },
  { label: "Location", value: "Prague, CZ", icon: faLocationDot, color: "text-pink-400" },
  { label: "Status", value: "Freelancer", icon: faBriefcase, color: "text-yellow-400" },
  { label: "Available", value: "Yes!", icon: faCircleCheck, color: "text-green-400" },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="text-blue-400 mr-3" />
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-gray-300 leading-relaxed mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            🎓 I&apos;m a fresh graduate with a Bachelor&apos;s degree in
            Informatics from the Czech University of Life Sciences Prague
            (2022-2025). I have solid knowledge of React, JavaScript, HTML, CSS,
            Bootstrap, and Tailwind CSS.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            🎯 I specialize in translating design concepts into fully functional
            web applications, ensuring both performance and aesthetic quality.
            Experienced in building responsive layouts and dynamic components
            that enhance user experience across devices.
          </motion.p>

          {/* Info Cards with FA Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infoCards.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-2xl ${item.color} mb-2 group-hover:scale-110 transition-transform`}
                />
                <p className="text-blue-400 font-semibold text-sm mt-2">
                  {item.value}
                </p>
                <p className="text-gray-500 text-xs mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;