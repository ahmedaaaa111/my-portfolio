"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import AnimatedText from "./AnimatedText";
import ParticlesBackground from "./ParticlesBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faRocket, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FloatingModel = dynamic(() => import("./FloatingModel"), { ssr: false });

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gray-950 overflow-hidden"
    >
      <ParticlesBackground />

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-400 text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ahmed{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              El Naggar
            </span>
          </motion.h1>

          <div className="mb-6 h-8">
            <AnimatedText />
          </div>

          <motion.p
            className="text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about creating clean, responsive, and user-friendly web
            interfaces. Turning ideas into pixel-perfect reality ✨
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#contact"
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faRocket} />
              View Projects
            </a>
          </motion.div>

          {/* Social Links with FA Icons */}
          <motion.div
            className="flex gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/AhmedElnaggar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/AhmedElnaggar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Model */}
        <motion.div
          className="flex-1 h-[300px] md:h-[400px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FloatingModel />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-gray-400 text-sm flex flex-col items-center gap-1 hover:text-blue-400 transition-colors">
          <span>Scroll Down</span>
          <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;