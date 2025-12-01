import { timeline } from "../data/timeline";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 px-6 md:px-20 lg:px-32 text-textLight pt-24 pb-16"
    >
      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">My Journey</h2>
      </Reveal>

      <div className="relative max-w-4xl mx-auto">

        {/* GLOWING GRADIENT LINE */}
        <div
          className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 
                     w-1 h-full rounded-full bg-gradient-to-b 
                     from-primary via-accent to-primary opacity-80 
                     shadow-[0_0_25px_8px_rgba(0,234,255,0.25)]"
        ></div>

        <div className="space-y-16 mt-10">
          {timeline.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 
                  w-6 h-6 bg-primary rounded-full 
                  border-4 border-bgDark 
                  shadow-[0px_0px_25px_8px_rgba(0,234,255,0.4)]"
              ></div>

              {/* CARD WITH GLOW HOVER */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(0,234,255,0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 rounded-xl border border-white/10 shadow-lg md:w-[45%] mt-10 backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold text-accent">{item.year}</h3>
                <p className="text-xl font-semibold mt-1">{item.title}</p>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
