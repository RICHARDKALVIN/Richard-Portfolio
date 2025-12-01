import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About","Timeline", "Skills","Certifications", "Projects", "Contact"];

  // Detect Scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section while scrolling
  useEffect(() => {
  const handleScroll = () => {
    const sections = links.map((l) => l.toLowerCase());
    let current = active;

    const scrollCenter = window.scrollY + window.innerHeight / 2;

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollCenter >= top && scrollCenter < bottom) {
          current = id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 border-b border-white/10 ${
        scrolled ? "bg-bgDark/30 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-primary cursor-pointer hover:text-accent duration-300"
        >
          RICHARD KALVIN R
        </motion.h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-8">
          {links.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id} className="relative group">
                <a
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                  className={`duration-300 ${
                    active === id ? "text-accent font-semibold" : "hover:text-primary"
                  }`}
                >
                  {item}
                </a>

                {/* Underline Animation */}
                {active === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent rounded-full"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-bgDark/60 backdrop-blur-xl p-6 space-y-4 border-t border-white/10"
          >
            {links.map((item) => {
              const id = item.toLowerCase();
              return (
                <motion.li
                  key={id}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => {
                      setActive(id);
                      setOpen(false);
                    }}
                    className={`block py-2 ${
                      active === id ? "text-accent font-semibold" : "hover:text-primary"
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
