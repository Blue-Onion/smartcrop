"use client";
import { useState, useRef, useEffect } from "react";
import { responses } from "@/lib/response";
import { Send, Mic } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { 
      id: 0, 
      sender: "bot", 
      text: "Hello! I'm your Smart Crop Advisor 🌾. I can help with wheat diseases, planting techniques, soil health, and more. What would you like to know today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user's message
    const userMessage = { 
      id: Date.now(), 
      sender: "user", 
      text: input,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);

    // Reset input
    setInput("");

    // Simulate bot typing
    setIsTyping(true);
    
    // Simple keyword matching
    const userInput = input.toLowerCase();
    let botResponse;
    
    if (userInput.includes("disease") || userInput.includes("sick") || userInput.includes("problem")) {
      botResponse = responses.find(r => r.message.includes("disease") || r.message.includes("fungus"));
    } else if (userInput.includes("water") || userInput.includes("irrigation")) {
      botResponse = responses.find(r => r.message.includes("water") || r.message.includes("irrigation"));
    } else if (userInput.includes("soil") || userInput.includes("fertilizer")) {
      botResponse = responses.find(r => r.message.includes("soil") || r.message.includes("nutrient"));
    } else {
      botResponse = responses[Math.floor(Math.random() * responses.length)];
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { 
        id: botResponse.id, 
        sender: "bot", 
        text: botResponse.message,
        timestamp: new Date()
      }]);
      setIsTyping(false);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000 + (Math.random() * 1000));
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[80vh] min-h-[400px] max-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-emerald-600 text-white p-4 flex items-center space-x-2">
        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        <h2 className="font-semibold">Crop Advisor</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div className="flex items-end space-x-2 max-w-[85%]">
              <div
                className={`p-3 rounded-2xl whitespace-pre-line break-words ${
                  msg.sender === "user" 
                    ? "bg-emerald-600 text-white rounded-br-none" 
                    : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                } shadow-sm`}
              >
                {msg.text}
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-1 px-1">
              {formatTime(msg.timestamp)}
            </span>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              className="w-full p-3 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              placeholder="Ask about your crops..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-emerald-600"
            >
              <Mic size={18} />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 text-center">
          Try: "How to treat wheat rust?" or "When to fertilize wheat?"
        </div>
      </div>
    </div>
  );
}
