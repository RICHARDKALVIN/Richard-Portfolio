import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Best Project Award",
      desc: "Won Best Project in college symposium for an innovative MERN stack application."
    },
    {
      icon: <FaMedal />,
      title: "Hackathon Finalist",
      desc: "Reached finals in a national-level hackathon with 300+ participating teams."
    },
    {
      icon: <FaAward />,
      title: "Top Performer",
      desc: "Recognized as top performer in academic year for consistent excellence."
    },
    {
      icon: <FaStar />,
      title: "Open Source Contributor",
      desc: "Successfully contributed to open-source repositories and community projects."
    }
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-20 lg:px-32 text-textLight"
    >
      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">
          Achievements
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {achievements.map((item, index) => (
          <Reveal key={index}>
            <motion.div
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 25px rgba(0,234,255,0.4)",
                borderColor: "rgba(0,234,255,0.7)"
              }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-card rounded-xl border border-primary/30 
                         shadow-lg backdrop-blur-md text-center 
                         hover:shadow-[0_0_25px_rgba(0,234,255,0.4)]"
            >
              <div className="text-5xl text-accent flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          </Reveal>
        ))}

      </div>
    </section>
  );
}
