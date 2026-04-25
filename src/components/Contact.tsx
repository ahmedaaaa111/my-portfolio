"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faUser,
  faMessage,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  { icon: faEnvelope, label: "Email", value: "Ahmeedalaa630@gmail.com", color: "text-blue-400" },
  { icon: faPhone, label: "Phone", value: "+42073053744", color: "text-green-400" },
  { icon: faLocationDot, label: "Location", value: "Prague, Czech Republic", color: "text-pink-400" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Ahmeedalaa630@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 mr-3" />
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-xl ${item.color}`}
                />
                <div>
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>        
        </div>
      </div>
    </section>
  );
};

export default Contact;