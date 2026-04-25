"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowUp, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          className="text-gray-400 text-sm flex items-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Ahmed El Naggar. Made with{" "}
          <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xs" />{" "}
          and{" "}
          <FontAwesomeIcon icon={faCode} className="text-blue-400 text-xs" />
        </motion.p>
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/AhmedElnaggar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/AhmedElnaggar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        </div>
      </div>

      {/* Back to Top */}
      <motion.div className="text-center mt-4" whileHover={{ y: -3 }}>
        <a
          href="#home"
          className="text-gray-500 hover:text-blue-400 text-sm transition-colors inline-flex items-center gap-1"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
          Back to Top
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;