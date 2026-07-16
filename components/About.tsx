"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Trophy, Brain } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    label: "Final-Year CSE Student",
    gradient: "from-accent to-blue-600",
  },
  {
    icon: Trophy,
    label: "DSA & LeetCode",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code2,
    label: "AI & Full-Stack Projects",
    gradient: "from-secondary to-purple-600",
  },
  {
    icon: Brain,
    label: "Machine Learning",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Computer Science Engineering student with interests in software
            engineering, artificial intelligence, and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I'm a final-year Computer Science and Engineering student at
              <span className="text-white font-semibold">
                {" "}
                Rathinam Technical Campus
              </span>
              , with a CGPA of <span className="text-accent font-semibold">8.5/10</span>.
            </p>

            <p>
              I build AI-powered applications, backend systems, and modern web
              applications using Python, Java, React, Next.js, and FastAPI. My
              projects include Retrieval-Augmented Generation (RAG), machine
              learning, automation, and full-stack development.
            </p>

            <p>
              Currently, I'm focused on strengthening my problem-solving skills
              through Data Structures and Algorithms while building practical AI
              and software engineering projects. I'm actively seeking Software
              Engineering, AI, and Data Science opportunities where I can
              contribute, learn, and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 card-gradient rounded-xl border border-gray-800 hover:border-accent transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4`}
                >
                  <stat.icon size={24} className="text-white" />
                </div>

                <p className="text-sm text-gray-300 leading-snug font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}