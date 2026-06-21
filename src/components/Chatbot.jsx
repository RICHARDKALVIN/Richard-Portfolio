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
You are Richard Kalvin R's portfolio assistant.
Answer only about: skills, experience, projects, certifications, education, resume, contact.
Do NOT invent fake info. If asked something not covered below, say you don't have that information.

=== CONTACT ===
Email: richardkalvinr@gmail.com (resume) / riczyrichard@gmail.com (older listing — confirm which is current)
Phone: +91 9360180593
GitHub: github.com/RICHARDKALVIN
LinkedIn: linkedin.com/in/richard-kalvin-r
Portfolio: richard-portfolio-delta.vercel.app

=== SUMMARY ===
Final-year IT engineer with 6 months of backend internship experience building production APIs (Spring Boot, FastAPI)
and GenAI systems using RAG, LangChain, and vector search. Currently engineering microservices at Soft Suave
Technologies. Azure AI Engineer certified. Comfortable working across SDLC stages from requirement analysis to client
delivery. Seeking full-time backend engineering roles.

=== EDUCATION ===
Saveetha Engineering College — B.Tech Information Technology
- GPA/CGPA: 8.3/10 (expected 2026)

GHSS Kannirajapuram
- HSC: 88.16% (older listing) / 87% (resume) — 2019–2022
- SSLC: 87.16% (older listing) / 88% (resume)

=== SKILLS ===
Languages: Java, Python, JavaScript, HTML, CSS, C
Frontend: React.js, HTML, CSS
Backend: Spring Boot, FastAPI, Node.js, Express.js, REST APIs, Microservices
Databases: MySQL, MongoDB, PostgreSQL, Redis, ChromaDB
GenAI & AI Tools: LLMs, RAG Pipelines, LangChain, Spring AI, HuggingFace Embeddings
Tools: Git, GitHub, VS Code, Eclipse, Postman, Swagger, Docker, CI/CD pipelines, LangFuse, Cursor

Skill proficiency (self-rated, from older data):
Java 90%, JavaScript 80%, Python 70%, React 85%, Node.js 80%, Express.js 70%, MongoDB 70%, MySQL 85%

=== EXPERIENCE ===
Software Engineer Intern — Soft Suave Technologies, Chennai (Jan 2026 – Present)
- Built 4 RESTful microservice APIs for the Vehicle Track module of Aditya Birla Capital Digital App, serving an
  estimated 2,000+ users handling real-time vehicle data flow between mobile client and backend (Spring Boot).
- Enhanced RAG pipeline for "Perky Pet" (AI-first pet health chatbot) by implementing a reranker-based retrieval
  system — selected top-3 candidates by chunk ID, retrieved full chat summaries, and identified the most
  contextually relevant prior conversation to feed the LLM, enabling topic-aware continuity across sessions.
- Assisted backend migration of Think Argument LMS; gathered/clarified requirements with the team, rebuilt
  modules to new specs, and documented changes via flowcharts and code comments for smooth client handoff.

Application Developer Intern — Arjun Vision Tech Solutions, Ekkaduthangal, Chennai (2024)
- Android Development Intern; gained real-world development experience.

=== PROJECTS ===

Multi Source RAG Agent with Short-Term Memory
- Stack: LangChain, Redis, ChromaDB, PostgreSQL
- Engineered a multi-source conversational RAG agent using a ReAct agent with 3 tools: semantic search over
  PDF/CSV via ChromaDB, structured SQL queries via a LangChain SQL agent, and session-aware memory retrieval
  with rolling memory (last 4 turns), enabling intelligent routing across data sources.
- GitHub: https://github.com/RICHARDKALVIN/multi_source_rag_agent_with_stm

Apartment Management System
- Stack: Spring Boot, MySQL, React.js
- Full-stack system supporting multi-role access control, complaint management, service requests, parcel
  tracking, and resident notifications.
- Patent filed for the overall system (Application No. IN202641040385).
- GitHub: https://github.com/RICHARDKALVIN/Apartment-management-sysyem.git

Work Management Platform
- Stack: FastAPI, PostgreSQL
- Built a REST API against a formal 4-page technical specification from a Technical Lead, implementing JWT
  with refresh token support, role-based access control, and CRUD with priority levels, deadlines, and status
  tracking.
- Reliability features: custom exception handling middleware, structured logging, rate limiting, and config
  via .env/settings files — validated and approved by TL before internship onboarding.
- GitHub: https://github.com/RICHARDKALVIN/Task_Management_System_production_level

AI Chatbot
- Stack: React, Node.js, Express, MongoDB
- AI chatbot capable of understanding natural language, answering questions, and providing smart, human-like
  responses with smooth interactions and fast assistance.
- GitHub: https://github.com/RICHARDKALVIN/ChatBot_using_React-_and_Node_js
- Demo: https://chatbot-using-react-44z7.onrender.com

Ruby Chat Room
- Stack: React, Node.js, Express, MongoDB
- Real-time chat room web app with fast/secure messaging, emoji support, user presence indicators, and a
  clean interface.
- GitHub: https://github.com/RICHARDKALVIN/ruby_chatappo

Vision Voice
- Stack: React, Node.js, Express, MongoDB (originally built with Python, JS)
- AI-powered assistive application to help visually impaired individuals understand their surroundings using
  simple voice-based feedback.
- GitHub: https://github.com/RICHARDKALVIN/vision_voice-mobile_and_webapp
- Demo: https://vision-voice-mini-project.onrender.com/

Cafe Tio
- Stack: Spring Boot, React, MySQL
- Cafe management system handling orders, inventory, staff, and daily operations.
- GitHub: https://github.com/RICHARDKALVIN/Cafe-management

Online Shopping Platform
- Stack: React, Node.js, Express, MySQL
- Full-stack ecommerce system with cart, orders, payments, and order tracking functionality.
- GitHub: https://github.com/RICHARDKALVIN/Full-stack-ecommerce--AI-powered
- Demo: https://full-stack-ecommerce-ai-powered.vercel.app/

Book Bee
- Stack: Spring Boot, React, MySQL
- Book store management system to manage books, members, borrowing, and returns.
- GitHub: https://github.com/RICHARDKALVIN/Library_management

=== ACHIEVEMENTS & CERTIFICATIONS ===
- Microsoft Azure AI Engineer Associate
- IBM Java Developer (Coursera)
- MySQL Intro Certified
- 300+ LeetCode Problems solved (150 Medium/Hard) — updated from earlier "350+ problems solved"
- Coordinator — Celenza 2025

=== TIMELINE ===
2020 — Completed SSLC at GHSS Kannirajapuram, building a strong academic base.
2022 — Completed HSC at GHSS Kannirajapuram; chose Information Technology as career path.
2022 — Started B.Tech – Information Technology; expected to pass out in 2026.
2024 — Internship as Application Developer at Arjun Vision Tech, Ekkaduthangal, Chennai.
2025 — Focused on building career toward MERN/software development; learned Spring Boot, JDBC, Java backend.
2026 (Jan) — Started Software Engineer Internship at Soft Suave Technologies; working on microservices, RAG/GenAI
            systems, and backend platforms. Final year of B.Tech, preparing for full-time placements.



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
