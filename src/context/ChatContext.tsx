import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatContextType {
  messages: ChatMessage[];
  isOpen: boolean;
  isTyping: boolean;
  addMessage: (content: string, sender: "user" | "bot") => void;
  toggleChat: () => void;
  setTyping: (typing: boolean) => void;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your shopping assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (content: string, sender: "user" | "bot") => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const setTyping = (typing: boolean) => {
    setIsTyping(typing);
  };

  const clearMessages = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hello! I'm your shopping assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isOpen,
        isTyping,
        addMessage,
        toggleChat,
        setTyping,
        clearMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
