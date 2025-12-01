import { skills } from "../data/skills";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import SkillBars from "./SkillBars";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 lg:px-32  text-textLight pt-24 pb-16">
      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">
          Skills & Technologies
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card p-6 rounded-2xl border border-white/10 shadow-xl hover:border-primary duration-300"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-accent mb-4">
              {group.category}
            </h3>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {group.items.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16  rounded-xl border border-white/10 flex items-center justify-center shadow-lg hover:shadow-primary/30 duration-300">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-gray-300 text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <SkillBars/>
    </section>
  );
}
