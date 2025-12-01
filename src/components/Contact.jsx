import { useState, useRef } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import SuccessPopup from "./SuccessPopup";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // EmailJS Values
  const SERVICE_ID = "service_yhbxvjw";
  const TEMPLATE_ID = "template_1hl1vub";
   const PUBLIC_KEY = "uUgOKo33UVdgBQ5x3";

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setShowPopup(true);
        e.target.reset();

        // Auto-close after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong 😢 Try again.");
        console.error(err);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 lg:px-32  text-textLight"
    >
      {/* Success Modal */}
      <SuccessPopup show={showPopup} />

      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-12">Get in Touch</h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <Reveal>
          <div>
            <h3 className="text-2xl font-semibold text-accent mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />
                <p>riczyrichard@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary text-2xl" />
                <p>+91 9360180593</p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <p>Chennai,India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">
              <a href="https://github.com/RICHARDKALVIN/" className="text-3xl text-primary hover:scale-110 duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/richard-kalvin-r/" className="text-3xl text-primary hover:scale-110 duration-300">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/itz_me_nobody_x?igsh=MXR0dWR6NDA5bnhsZg==" className="text-3xl text-primary hover:scale-110 duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE FORM */}
        <Reveal>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-card p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            {/* Name */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full p-3 rounded-lg bg-bgDark border border-white/10 focus:border-primary outline-none duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full p-3 rounded-lg bg-bgDark border border-white/10 focus:border-primary outline-none duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                className="w-full p-3 rounded-lg bg-bgDark border border-white/10 focus:border-primary outline-none duration-300"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-black font-bold shadow-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
