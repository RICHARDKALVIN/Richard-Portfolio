import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  { title: " IBM Java Developer", issuer: "Coursera" },
  { title: "Azure AI Engineer Associate", issuer: "Microsoft" },
  { title: "MySql certification", issuer: "HackerRank" },
  { title: "Introduction to Public Speaking", issuer: "University of washington" },
  { title: "Generative AI for Everyone", issuer: "Coursera" },
  { title: "Data Structures and Algorithms", issuer: "University of california san diego" },
  { title: "Introduction to Artificial Intelligence", issuer: "Great Learning" },
  { title: "Introduction to MongoDB for students", issuer: "MongoDB" },
  { title: "Introduction to Programming with MATLAB", issuer: "Coursera" },
  { title: "Architecting Smart IoT Devices", issuer: "Coursera" },
   { title: "Crash Course on Figma", issuer: "LetsUpgrade" },
  { title: "Intro to prompt Engineering", issuer: "SimpliLearn" },
 
 
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-20 lg:px-32 text-textLight">

      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">Certifications</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <Reveal key={index}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,234,255,0.4)",
                borderColor: "rgba(0,234,255,0.7)",
              }}
              className="bg-card p-6 rounded-xl border border-primary/30 shadow-lg
                         backdrop-blur-md text-center hover:shadow-[0_0_25px_rgba(0,234,255,0.4)]"
            >
              {/* <div className="text-5xl text-accent mb-4 flex justify-center">
                <FaCertificate />
              </div> */}

              <h3 className="text-xl font-semibold text-primary">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-1">{cert.issuer}</p>

            </motion.div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
