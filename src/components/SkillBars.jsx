import { skillLevels } from "../data/skillLevels";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SkillBars() {
  return (
    <section
      id="skillbars"
      className="py-24 px-6 md:px-20 lg:px-32  text-textLight"
    >
      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">
          Skill Progress
        </h2>
      </Reveal>

      {/* 2 Column Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {skillLevels.map((skill, index) => (
          <div key={index}>
            {/* Skill Name + Percentage */}
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{skill.name}</p>
              <p className="text-primary font-bold">{skill.level}%</p>
            </div>

            {/* Bar Background */}
            <div className="w-full bg-card h-4 rounded-full overflow-hidden border border-white/10">
              {/* Animated Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-xl"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
