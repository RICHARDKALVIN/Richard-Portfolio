import { projects } from "../data/projects";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 lg:px-32  text-textLight pt-24 pb-16"
    >
      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">
          My Projects
        </h2>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-white/10 hover:border-primary duration-300 shadow-lg overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-accent">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* TECH BADGES */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-primary/20 border border-primary/40 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black duration-300 text-sm"
                >
                  Code
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-black font-semibold hover:scale-105 duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
