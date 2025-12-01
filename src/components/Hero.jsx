import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 pt-32"
    >
      {/* LEFT SIDE TEXT */}
      <div className="max-w-xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-primary">Richard</span>
        </motion.h1>

        <ReactTyped
          strings={[
            "Aspiring Software Developer",
            "MERN Stack Developer",
            "Problem Solver"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-xl md:text-2xl text-accent mt-3 block"
        />

        <p className="max-w-xl mt-4 text-gray-400 text-lg leading-relaxed">
          I build fast, scalable and powerful applications using React, Node,
          MongoDB, SQL & Java. Passionate about backend engineering and system
          design.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full shadow-xl hover:scale-105 duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-primary rounded-full hover:bg-primary hover:text-black duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-72 h-72 md:w-80 md:h-80"
      >
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/40 shadow-[0_0_80px_20px_rgba(0,234,255,0.2)] animate-pulse"></div>

        <Tilt
          options={{ max: 25, scale: 1.05, speed: 400 }}
          className="relative w-full h-full rounded-full overflow-hidden shadow-xl"
        >
          <img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </Tilt>
      </motion.div>
    </section>
  );
}
