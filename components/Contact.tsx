"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Code2,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kaviyadharshini.works@gmail.com",
    link: "mailto:kaviyadharshini.works@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "kaviyadharshini-works",
    link: "https://www.linkedin.com/in/kaviyadharshini-works",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "kaviyadharshini2805",
    link: "https://github.com/kaviyadharshini2805",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "kvz07",
    link: "https://leetcode.com/u/kvz07/",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace this with EmailJS/Formspree/Resend later
    console.log(formData);

    alert("Thank you! Your message has been recorded.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently seeking Software Engineering, AI, and Data Science
            opportunities. Whether you'd like to discuss a project,
            internship, or full-time role, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-accent rounded-lg font-medium text-white hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                target={info.link?.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 card-gradient rounded-xl border border-gray-800 hover:border-accent transition-all group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-transform">
                  <info.icon size={24} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-lg font-medium group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}