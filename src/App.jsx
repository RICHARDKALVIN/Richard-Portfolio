import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import GlobalBackground from "./components/GlobalBackground";
import Certifications from "./components/Certifications";
import Chatbot from "./components/Chatbot";



export default function App() {
  return (
    <>
    
      <GlobalBackground /> 
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      {/* <SkillBars/> */}
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
