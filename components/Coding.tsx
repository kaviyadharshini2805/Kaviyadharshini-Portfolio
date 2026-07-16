"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Code2, TrendingUp, Star } from "lucide-react";

const codingStats = [
  {
    icon: Code2,
    label: "LeetCode",
    value: "kvz07",
    link: "https://leetcode.com/u/kvz07/",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "kaviyadharshini2805",
    link: "https://github.com/kaviyadharshini2805",
    gradient: "from-accent to-blue-600",
  },
  {
    icon: TrendingUp,
    label: "Primary Languages",
    value: "Python • Java",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    label: "Focus Areas",
    value: "AI • Full Stack • DSA",
    gradient: "from-secondary to-purple-600",
  },
];

export default function Coding() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="coding" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding Profiles
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I enjoy solving algorithmic problems, building AI-powered
            applications, and continuously improving my software engineering
            skills through hands-on projects and coding practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {stat.link ? (
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 card-gradient rounded-xl border border-gray-800 hover:border-accent transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon size={24} className="text-white" />
                  </div>

                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>

                  <p className="text-xl font-bold">{stat.value}</p>
                </a>
              ) : (
                <div className="p-6 card-gradient rounded-xl border border-gray-800">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4`}
                  >
                    <stat.icon size={24} className="text-white" />
                  </div>

                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>

                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              )}

              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 card-gradient rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-center mb-3">
            GitHub Activity
          </h3>

          <p className="text-center text-gray-400 mb-8">
            Consistently building projects and expanding my software engineering
            skills.
          </p>

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=kaviyadharshini2805&theme=github-dark&hide_border=true"
            alt="GitHub Activity Graph"
            className="w-full rounded-lg"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <img
              src="https://github-readme-stats.vercel.app/api?username=kaviyadharshini2805&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />

            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaviyadharshini2805&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}