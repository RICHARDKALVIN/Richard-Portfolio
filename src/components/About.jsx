import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 lg:px-32 text-textLight overflow-hidden"
    >
      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center flex flex-col justify-center">

        
        {/* LEFT — TEXT */}
        <Reveal>
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              Hi, I’m <span className="text-primary font-semibold">Richard Kalvin R</span>,
              a passionate {" "}
              <span className="text-accent font-semibold">
                 B.Tech student 
              </span>{" "}
              with hands-on experience in web development, AI/ML projects, and  hackathons. With a strong academic foundation and a knack for solving complex problems, I aim to bridge the gap between technology and impactful solutions.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Moreover I am keenly interested in learning and looking forward to it.  My internships and certifications reflect a proactive learning approach and commitment to continuous growth.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Currently pursuing my degree in{" "}
              <span className="text-primary font-semibold">Information Technology</span>.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="font-semibold">Name</p>
                <p className="text-gray-500">Richard Kalvin</p>
              </div>
              <div>
                <p className="font-semibold">Age</p>
                <p className="text-gray-500">21</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-500">Chennai,India</p>
              </div>
              <div>
                <p className="font-semibold">Role</p>
                <p className="text-gray-500"> Developer</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — COUNTERS */}
        <Reveal>
  <div className="grid grid-cols-2 gap-6">
    {[
      { n: "20+", label: "Projects Completed", color: "text-primary" },
      { n: "3+", label: "Years of Learning", color: "text-accent" },
      { n: "15+", label: "Technologies Known", color: "text-primary" },
      { n: "∞", label: "Passion for Learning", color: "text-accent" },
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(0,234,255,0.4)",
          borderColor: "rgba(0,234,255,0.7)",
        }}
        transition={{ duration: 0.3 }}
        className="p-8 bg-card rounded-xl border border-primary/30 
                   shadow-lg text-center backdrop-blur-md 
                   hover:shadow-[0_0_25px_rgba(0,234,255,0.4)]"
      >
        <h3 className={`text-4xl font-bold ${item.color}`}>{item.n}</h3>
        <p className="mt-2 text-gray-400">{item.label}</p>
      </motion.div>
    ))}
  </div>
</Reveal>


      </div>
    </section>
  );
}
