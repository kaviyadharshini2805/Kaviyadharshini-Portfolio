"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Candidate Data Parser",
    description:
      "An AI-powered candidate intelligence platform that consolidates data from resumes, ATS exports, recruiter notes, CSV files, and GitHub into a unified candidate profile using entity resolution, confidence scoring, provenance tracking, and configurable conflict resolution.",
    tech: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Pandas",
      "Pydantic",
      "Plotly",
    ],
    github:
      "https://github.com/kaviyadharshini2805/Candidate-Intelligence-Platform",
    demo:
      "https://candidate-data-parser-ccfmmpvpcegjxybexrnxgs.streamlit.app/",
    gradient: "from-accent to-blue-600",
  },
  {
    title: "AI Research Agent",
    description:
      "An intelligent research assistant that performs structured company and topic research through a conversational interface with authentication, personalized dashboards, optimized token usage, and PDF export.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "LLMs",
      "Authentication",
      "PDF Export",
    ],
    github: "https://github.com/kaviyadharshini2805",
    demo: "",
    gradient: "from-secondary to-purple-600",
  },
  {
    title: "Resume RAG System",
    description:
      "A Retrieval-Augmented Generation (RAG) application that answers questions about resumes using semantic search, FAISS vector indexing, Sentence Transformers, and Gemini/OpenAI models.",
    tech: [
      "Python",
      "FAISS",
      "Sentence Transformers",
      "Gemini",
      "OpenAI",
      "RAG",
    ],
    github: "https://github.com/kaviyadharshini2805/ResumeRAG",
    demo: "",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Pothole Detector System",
    description:
      "An AI-powered web application that detects potholes from uploaded images, enables public reporting, and provides real-time dashboards with authentication, image management, and administrative controls.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Machine Learning",
    ],
    github:
      "https://github.com/kaviyadharshini2805/Pothole-Detector-System",
    demo: "",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Equity for Everyone",
    description:
      "A Progressive Web Application that improves transparency in Direct Benefit Transfer (DBT) schemes using Aadhaar/OTP authentication, AI-assisted issue resolution, and real-time analytics.",
    tech: [
      "React",
      "Express.js",
      "PostgreSQL",
      "PWA",
      "AI",
      "Analytics",
    ],
    github: "https://github.com/kaviyadharshini2805",
    demo: "",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            A selection of AI, software engineering, and full-stack projects
            focused on solving real-world problems.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group relative p-6 card-gradient rounded-xl border border-gray-800 hover:border-gray-700 transition-all overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-lg text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    Code
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              <div
                className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}