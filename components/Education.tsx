"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Building a strong foundation in computer science through academics,
            practical projects, and continuous learning.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="p-8 card-gradient rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-accent to-secondary">
              <GraduationCap size={32} className="text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Bachelor of Engineering
              </h3>

              <p className="text-xl text-accent font-medium">
                Computer Science and Engineering
              </p>

              <p className="text-gray-300 mt-2 font-medium">
                Rathinam Technical Campus
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                <span>Final Year</span>
                <span>•</span>
                <span>CGPA: 8.5 / 10</span>
              </div>

              <p className="text-gray-400 leading-relaxed mt-5">
                Pursuing a Bachelor of Engineering in Computer Science and
                Engineering with coursework in Data Structures & Algorithms,
                Operating Systems, Database Management Systems, Computer
                Networks, Artificial Intelligence, Machine Learning, and
                Software Engineering. Actively applying academic concepts
                through AI, data science, and full-stack development projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}