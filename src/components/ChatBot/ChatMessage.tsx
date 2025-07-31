import React from "react";
import { ChatMessage as ChatMessageType } from "../../context/ChatContext";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === "user";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`flex items-start space-x-2 max-w-xs ${
          isBot ? "" : "flex-row-reverse space-x-reverse"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            isBot ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          {isBot ? (
            <Bot className="w-4 h-4 text-blue-600" />
          ) : (
            <User className="w-4 h-4 text-gray-600" />
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`rounded-lg px-3 py-2 ${
            isBot ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          <p
            className={`text-xs mt-1 ${
              isBot ? "text-gray-500" : "text-blue-100"
            }`}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
