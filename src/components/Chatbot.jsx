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
