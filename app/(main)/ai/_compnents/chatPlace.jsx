"use client";
import { useState, useRef, useEffect } from "react";
import { responses } from "@/lib/response";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 0, sender: "bot", text: "Hello! I am your Smart Crop Advisor 🌾. Ask me anything about your wheat crops." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user's message
    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Reset input
    setInput("");

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { id: botResponse.id, sender: "bot", text: botResponse.message }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen p-5 bg-gray-100">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[70%] p-3 rounded-lg whitespace-pre-line break-words ${
              msg.sender === "user" ? "bg-emerald-500 text-white ml-auto" : "bg-white text-gray-800"
            } shadow`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="max-w-[60%] p-3 rounded-lg bg-white text-gray-800 shadow animate-pulse">
            Advisor is typing...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex gap-2 mt-3">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ask about your wheat crop..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
