"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, X, Bot } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I can help you find government schemes. Ask me anything!",
      sender: "bot",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    setTimeout(() => {
      const responses = [
        "Based on your query, I recommend checking financial support schemes.",
        "For that need, subsidy schemes might be helpful.",
        "I suggest looking at both central and state government schemes.",
        "Many farmers qualify for agricultural subsidies.",
        "For technology-related assistance, check the 'Technology' category.",
      ];

      const aiResponse = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
      };

      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-16 right-4 md:bottom-8 rounded-full w-12 h-12 p-0 bg-emerald-600 hover:bg-emerald-700 shadow-lg z-40"
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card
          className="
            fixed bottom-20 right-4
            w-[16rem] h-[16rem]
            md:w-[20rem] md:h-[24rem]
            lg:w-[24rem] lg:h-[28rem]
            max-w-full max-h-[90vh]
            flex flex-col z-50 shadow-xl
          "
        >
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-2 flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <h3 className="font-semibold text-sm md:text-base">
                Scheme Assistant
              </h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-2 overflow-y-auto space-y-1 bg-gray-50 text-xs md:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[12rem] md:max-w-[15rem] p-1.5 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-emerald-100 text-emerald-900"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input area */}
            <div className="p-1 border-t flex gap-1 bg-white">
              <Input
                placeholder="Ask..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 text-xs md:text-sm h-7 md:h-8"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                size="sm"
                className="h-7 w-7 md:h-8 md:w-8 p-0"
              >
                <Send className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
