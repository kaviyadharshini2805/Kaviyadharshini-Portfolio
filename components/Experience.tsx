"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Adventure Technology Solutions Pvt. Ltd.",
    period: "2025",
    description:
      "Worked on data preprocessing, exploratory data analysis, machine learning workflows, and AI-driven applications using Python. Collaborated on real-world projects while strengthening software development and problem-solving skills.",
    gradient: "from-accent to-blue-600",
  },
  {
    role: "Data Science Intern",
    company: "InternBoot",
    period: "2025",
    description:
      "Built machine learning and data analysis projects using Python, Pandas, NumPy, Matplotlib, and Scikit-learn. Gained practical experience in data visualization, model development, and analytical problem solving.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    role: "AI & Data Science Intern",
    company: "Sabudh Foundation",
    period: "2025",
    description:
      "Contributed to AI and data science projects by working on data processing, machine learning concepts, and intelligent application development in a collaborative environment.",
    gradient: "from-secondary to-purple-600",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Internship experience focused on artificial intelligence, data
            science, and software development through real-world projects.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-secondary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                }}
                className="relative pl-20"
              >
                <motion.div
                  className={`absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-background`}
                  whileHover={{ scale: 1.5 }}
                />

                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 card-gradient rounded-xl border border-gray-800 hover:border-accent transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${exp.gradient}`}
                    >
                      <Briefcase size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        {exp.role}
                      </h3>

                      <p className="text-accent font-medium">
                        {exp.company}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}