import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Richard's AI Assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const chatRef = useRef(null);     // detects outside click
  const scrollRef = useRef(null);   // auto-scroll reference

  // AUTO-SCROLL WHEN NEW MESSAGE ARRIVES
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);


  // CLOSE CHAT WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);


  // SEND MESSAGE
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");

    try {
      const prompt = `
You are Richard's portfolio assistant.
Answer only about: skills, experience, projects, certifications, education, resume, contact.
Do NOT invent fake info.

Portfolio data:
riczyrichard@gmail.com | +91 9360180593 | github.com/RICHARDKALVIN | linkedin.com/in/richard-kalvin-r

Education:
Saveetha Engineering College — B.Tech IT (GPA: 8.3/10)
GHSS Kannirajapuram — HSC: 88.16%, SSLC: 87.16%

Skills:
Java, Python, JavaScript, HTML, CSS, React.js
Spring Boot, Node.js, Express.js
MySQL, MongoDB
Git, VS Code, Eclipse, Postman

Internships & Projects:
• Arjun Vision Tech Solutions — Android Development Intern
• Vision Voice (AI for visually impaired) — Python, JS
• Ruby Chat App — MERN + AI Chatbot
• Amazon Clone — MERN

Achievements:
• IBM Java Developer (Coursera)
• MySQL Intro Certified
• Azure AI Engineer Associate
• LeetCode 350+ problems solved
• Coordinator — Celenza 2025
export const timeline = [
  {
    year: "2020",
    title: "Completed SSLC ",
    desc: "Finished my 10th grade at GHSS Kannirajapuram, building a strong base in academics.",
  },
  {
    year: "2022",
    title: "Completed HSC ",
    desc: "Graduated from GHSS Kannirajapuram and chose Information Technology as my career path.",
  },
  {
    year: "2022",
    title: "Started B.Tech – Information Technology",
    desc: "Joined B.Tech IT  to explore programming, networking, and software development. Expected to pass out in 2026.",
  },
  {
    year: "2024",
    title: "Internship – Application Developer",
    desc: "Completed an internship at Arjun Vision Tech, Ekkaduthangal,Chennai as an Application Developer, gaining real-world development experience.",
  },
  {
    year: "2025",
    title: "Focused on Building My Career",
    desc: "Working toward becoming a MERN stack developer / software developer. Learning Spring Boot, JDBC, and Java-based backend concepts.",
  },
  {
    year: "2026",
    title: "Final Year & Preparing for Placements",
    desc: "Completing my B.Tech IT degree while enhancing DSA, system design, and full-stack development skills for job placements.",
  },
];
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "React", icon: "/icons/react.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: "/icons/springboot.png" },
      { name: "Node.js", icon: "/icons/node.png" },
      { name: "Express", icon: "/icons/expressjs.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "My SQL", icon: "/icons/mysql.png" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Java", icon: "/icons/java.png" },
      // { name: "Java Script", icon: "/icons/js.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "C", icon: "/icons/c.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
      { name: "VS Code", icon: "/icons/vscode.png" },
      { name: "Postman", icon: "/icons/postman.png" },
            { name: "Cursor", icon: "/icons/cursor.png" },
    ],
  },
];
export const skillLevels = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 70 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "My SQL", level: 85 },
  
  ,
];
export const projects = [
 {
    title: "AI chatbot",
    desc: "An AI chatbot capable of understanding natural language, answering questions, and providing smart, human-like responses. Designed to offer smooth interactions and fast assistance for users.",
    image: "/projects/chat.jpg",
    tech: ["React", "Node.js", "Express","MongoDB"],
    github: "https://github.com/RICHARDKALVIN/ChatBot_using_React-_and_Node_js",
    demo: "https://chatbot-using-react-44z7.onrender.com",
  },
  {
    title: "Ruby Chat Room",
    desc: "A real-time chat room web application that enables fast and secure messaging with features like emoji support,  user presence indicators, and a clean  interface for an enhanced communication experience.",
    image: "/projects/rubychat.avif",
    tech: ["React", "Node.js","Express", "MongoDB"],
    github: "https://github.com/RICHARDKALVIN/ruby_chatappo",
    
  },
 
  {
    title: "Vision Voice",
    desc: "Vision Voice is an AI-powered assistive application designed to help visually impaired individuals understand their surroundings using simple voice-based feedback.",
    image: "/projects/visionvoicepro.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/RICHARDKALVIN/vision_voice-mobile_and_webapp",
    demo: "https://vision-voice-mini-project.onrender.com/",
  },
  {
    title: "Cafe tio",
    desc: "A cafe management system built with Spring Boot and MySQL to handle orders, inventory, staff, and daily operations efficiently.",
    image: "/projects/cafe.webp",
    tech: ["Spring Boot","React","My Sql"],
    github: "https://github.com/RICHARDKALVIN/Cafe-management",
    
  },
  {
    title: "Online shopping platform",
    desc: "Full-stack ecommerce system with cart, orders, payments and order tracking functionality",
    image: "/projects/x.jpg",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/RICHARDKALVIN/Full-stack-ecommerce--AI-powered",
    demo: "https://full-stack-ecommerce-ai-powered.vercel.app/",
  },
  
  {
    title: "Book bee",
    desc: "A Spring Boot and MySQL–based book store management system designed to manage books, members, borrowing, and returns.",
    image: "/projects/library.webp",
    tech: ["Spring Boot","React","My Sql"],
    github: "https://github.com/RICHARDKALVIN/Library_management",
    
  }
];




User: ${userMsg}
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await response.json();

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't respond.";

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error connecting to AI." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-primary text-black px-5 py-3 rounded-full shadow-xl hover:scale-105 duration-300 z-50"
      >
        <img src="icons/message.png" alt="Chat message icon" className="w-8 h-8" />
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-20 right-6 w-80 bg-[#0d0d0d]/90 backdrop-blur-xl 
                     border border-primary/30 rounded-xl shadow-2xl p-4 z-50"
        >
          {/* CHAT HISTORY */}
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto no-scrollbar mb-3 space-y-3 pr-1"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-primary/30 text-primary ml-auto"
                    : "bg-white/10 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}  
              className="flex-grow p-2 rounded-lg bg-black/30 border border-primary/20 text-white"
              placeholder="Ask something..."
            />

            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent duration-300"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
