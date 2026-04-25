"use client";

import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front-End Developer 💻",
        2000,
        "React.js Enthusiast ⚛️",
        2000,
        "UI/UX Lover 🎨",
        2000,
        "Problem Solver 🧩",
        2000,
        "Based in Prague 🇨🇿",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
    />
  );
};

export default AnimatedText;