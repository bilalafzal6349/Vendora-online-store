// API Configuration
// This file manages API keys and settings for the chatbot

export const API_CONFIG = {
  // Google Gemini API Configuration
  GEMINI: {
    baseUrl:
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
    apiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
    maxTokens: parseInt(import.meta.env.VITE_MAX_TOKENS || "150"),
    temperature: parseFloat(import.meta.env.VITE_TEMPERATURE || "0.7"),
    maxRequestsPerMinute: parseInt(
      import.meta.env.VITE_MAX_REQUESTS_PER_MINUTE || "30"
    ),
  },

  // Grok API Configuration (Alternative)
  GROK: {
    baseUrl: "https://api.x.ai/v1/chat/completions",
    apiKey: import.meta.env.VITE_GROK_API_KEY || "",
    model: "grok-beta",
    maxTokens: parseInt(import.meta.env.VITE_MAX_TOKENS || "150"),
    temperature: parseFloat(import.meta.env.VITE_TEMPERATURE || "0.7"),
    maxRequestsPerMinute: parseInt(
      import.meta.env.VITE_MAX_REQUESTS_PER_MINUTE || "30"
    ),
  },
};

// Environment validation
export const validateEnvironment = (): boolean => {
  const hasGeminiKey = !!API_CONFIG.GEMINI.apiKey;
  const hasGrokKey = !!API_CONFIG.GROK.apiKey;

  if (!hasGeminiKey && !hasGrokKey) {
    console.warn(
      "No API keys configured. Chatbot will use fallback responses."
    );
    return false;
  }

  return true;
};

// Get active API configuration
export const getActiveAPIConfig = () => {
  // Prefer Gemini if available, otherwise use Grok
  if (API_CONFIG.GEMINI.apiKey) {
    return { type: "gemini", config: API_CONFIG.GEMINI };
  }

  if (API_CONFIG.GROK.apiKey) {
    return { type: "grok", config: API_CONFIG.GROK };
  }

  return { type: "fallback", config: null };
};
