"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js"
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "FAISS",
    ],
  },
  {
    title: "AI / Data Science",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Sentence Transformers",
      "Streamlit",
      "RAG",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "n8n",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Object-Oriented Programming",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Technologies, frameworks, and core computer science concepts I use
            to build AI-powered and full-stack applications.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: categoryIndex * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="p-6 card-gradient rounded-xl border border-gray-800 hover:border-accent transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay:
                        categoryIndex * 0.1 +
                        skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-lg text-sm text-gray-300 hover:border-accent hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}