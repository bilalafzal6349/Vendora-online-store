import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { X, Send } from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { ChatMessage } from "../ChatBot/ChatMessage";
import { chatService } from "../ChatBot/ChatService";
import { getActiveAPIConfig } from "../../config/api";
import { FaRobot } from "react-icons/fa";

export const ChatBot = () => {
  const { messages, isOpen, isTyping, addMessage, toggleChat, setTyping } =
    useChat();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage(userMessage, "user");

    setIsLoading(true);
    setTyping(true);

    try {
      const response = await chatService.sendMessage(userMessage);
      setTyping(false);
      addMessage(response, "bot");
    } catch (error) {
      setTyping(false);
      addMessage(
        "Sorry, I encountered an error. Please try again later.",
        "bot"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-28 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 animate-bounce hover:scale-110"
          title="lets chat with out chatbot"
        >
          <FaRobot className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-72 sm:w-80 h-80 sm:h-96 shadow-2xl border-0 bg-white/95 backdrop-blur-sm max-w-[calc(100vw-2rem)]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-xs sm:text-sm font-medium">
              Shopping Assistant
              {(() => {
                const activeConfig = getActiveAPIConfig();
                return activeConfig.type !== "fallback" ? (
                  <span className="text-xs text-blue-200 ml-1">
                    ({activeConfig.type.toUpperCase()})
                  </span>
                ) : null;
              })()}
            </CardTitle>
            <Button
              onClick={toggleChat}
              className="h-6 w-6 text-white hover:bg-blue-700 bg-transparent"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-64 sm:h-80">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-3 sm:p-4">
              <div className="space-y-3 sm:space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-3 sm:p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
