// Grok API Service for handling AI interactions
// Alternative to Gemini API with similar restrictions and security measures

import { API_CONFIG } from "../../config/api";
import { PRODUCTS, CATEGORIES, getProductsOnSale } from "../../data/products";

interface GrokRequest {
  model: string;
  messages: Array<{
    role: string;
    content: string;
  }>;
  max_tokens: number;
  temperature: number;
}

interface GrokResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

class GrokService {
  private config = API_CONFIG.GROK;
  private conversationHistory: Array<{ role: string; content: string }> = [];
  private maxHistoryLength = 10;
  private rateLimitCount = 0;
  private rateLimitReset = Date.now();
  private maxRequestsPerMinute = 30;

  constructor() {
    this.maxRequestsPerMinute = this.config.maxRequestsPerMinute;
  }

  // Rate limiting function
  private checkRateLimit(): boolean {
    const now = Date.now();
    if (now - this.rateLimitReset > 60000) {
      this.rateLimitCount = 0;
      this.rateLimitReset = now;
    }

    if (this.rateLimitCount >= this.maxRequestsPerMinute) {
      return false;
    }

    this.rateLimitCount++;
    return true;
  }

  // Input validation and sanitization
  private validateAndSanitizeInput(message: string): string {
    if (!message || typeof message !== "string") {
      throw new Error("Invalid message format");
    }

    const sanitized = message
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+\s*=/gi, "")
      .substring(0, 1000);

    if (sanitized.length === 0) {
      throw new Error("Message cannot be empty after sanitization");
    }

    return sanitized;
  }

  // System prompt with restrictions
  private getSystemPrompt(): string {
    const productData = this.getProductDataForPrompt();

    return `You are a helpful shopping assistant for an e-commerce website called "Layyah Online Store". 

IMPORTANT RESTRICTIONS:
- ONLY answer questions related to shopping, products, and e-commerce
- DO NOT provide personal, financial, medical, or legal advice
- DO NOT generate harmful, offensive, or inappropriate content
- DO NOT share personal information or make up facts
- DO NOT help with coding, hacking, or technical support beyond basic shopping questions
- Keep responses under 150 words
- Be friendly and helpful but professional

Your role is to help customers with:
- Product recommendations
- Shopping cart assistance
- Information about product categories (electronics, fashion, books, sports, toys, home & garden)
- General shopping questions
- Store policies and procedures
- Product pricing information

PRODUCT DATA (Use this information to provide accurate responses):
${productData}

PRICING INFORMATION:
When customers ask about product prices, provide helpful and polite responses such as:
- "Our products have competitive prices starting from [category-specific ranges]"
- "You can find great deals in our Sale section with discounts up to [percentage]"
- "For specific pricing, please browse our product categories or check our current promotions"
- "We offer various price ranges to suit different budgets"
- "Prices may vary by category - electronics typically range from $50-$2000, fashion from $20-$500, books from $10-$100, etc."
- "We regularly update our prices and offer seasonal discounts"

Always be polite, helpful, and encourage customers to explore the store for detailed pricing. If asked about specific product prices, guide them to browse the relevant category or check our current offers.

If asked about anything outside these topics, politely redirect to shopping-related assistance.`;
  }

  // Get product data for the prompt
  private getProductDataForPrompt(): string {
    const saleItems = getProductsOnSale();
    const categories = Object.values(CATEGORIES);

    let productData = "CATEGORIES:\n";
    categories.forEach((cat) => {
      productData += `- ${cat.name}: ${cat.description} (${cat.productCount} products, $${cat.priceRange.min}-$${cat.priceRange.max})\n`;
    });

    productData += "\nSAMPLE PRODUCTS:\n";
    PRODUCTS.slice(0, 8).forEach((product) => {
      const saleInfo = product.originalPrice
        ? ` (Sale: $${product.originalPrice} → $${product.price})`
        : "";
      productData += `- ${product.name}: $${product.price}${saleInfo} - ${product.description}\n`;
    });

    if (saleItems.length > 0) {
      productData += "\nCURRENT SALES:\n";
      saleItems.slice(0, 5).forEach((product) => {
        const discount = Math.round(
          ((product.originalPrice! - product.price) / product.originalPrice!) *
            100
        );
        productData += `- ${product.name}: ${discount}% off ($${product.originalPrice} → $${product.price})\n`;
      });
    }

    return productData;
  }

  // Add message to conversation history with limits
  private addToHistory(role: string, content: string): void {
    this.conversationHistory.push({ role, content });

    if (this.conversationHistory.length > this.maxHistoryLength) {
      this.conversationHistory = this.conversationHistory.slice(
        -this.maxHistoryLength
      );
    }
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Rate limiting check
      if (!this.checkRateLimit()) {
        return "I'm receiving too many requests right now. Please wait a moment and try again.";
      }

      // Input validation
      const sanitizedMessage = this.validateAndSanitizeInput(message);

      // Check if API key is configured
      if (!this.config.apiKey) {
        return this.getFallbackResponse(sanitizedMessage);
      }

      // Add user message to history
      this.addToHistory("user", sanitizedMessage);

      // Prepare request for Grok API
      const requestBody: GrokRequest = {
        model: this.config.model,
        messages: [
          {
            role: "system",
            content: this.getSystemPrompt(),
          },
          ...this.conversationHistory,
        ],
        max_tokens: this.config.maxTokens,
        temperature: this.config.temperature,
      };

      // Make API call
      const response = await fetch(this.config.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: GrokResponse = await response.json();

      if (!data.choices || data.choices.length === 0) {
        throw new Error("No response from AI model");
      }

      const aiResponse = data.choices[0].message.content;

      // Add AI response to history
      this.addToHistory("assistant", aiResponse);

      return aiResponse;
    } catch (error) {
      console.error("GrokService Error:", error);
      return this.getFallbackResponse(message);
    }
  }

  // Fallback responses when API is not available
  private getFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("product") || lowerMessage.includes("item")) {
      const categories = Object.values(CATEGORIES);
      const categoryList = categories.map((cat) => cat.name).join(", ");
      return `I can help you find products! We have ${categories.length} categories: ${categoryList}. What are you looking for?`;
    }

    if (lowerMessage.includes("cart") || lowerMessage.includes("add")) {
      const popularProducts = PRODUCTS.slice(0, 3)
        .map((p) => p.name)
        .join(", ");
      return `I can help you with your shopping cart! You can add items by browsing our product categories. Some popular items include: ${popularProducts}. Would you like me to recommend more products?`;
    }

    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      const saleItems = getProductsOnSale();
      const saleInfo =
        saleItems.length > 0
          ? ` We currently have ${saleItems.length} items on sale with discounts up to 70% off.`
          : "";
      return `Our products have competitive prices! We offer various price ranges to suit different budgets. Electronics typically range from $50-$2000, fashion from $20-$500, books from $10-$100, sports equipment from $30-$800, toys from $15-$300, and home & garden items from $25-$1000.${saleInfo} Would you like me to guide you to specific categories or current promotions?`;
    }

    if (lowerMessage.includes("electronics")) {
      return "Great choice! Our electronics section has smartphones, laptops, headphones, and more. Check out our latest tech deals!";
    }

    if (lowerMessage.includes("fashion") || lowerMessage.includes("clothes")) {
      return "Our fashion collection includes trendy clothing for all occasions. From casual wear to formal attire, we have something for everyone!";
    }

    if (lowerMessage.includes("books")) {
      return "Love reading? Our book collection spans fiction, non-fiction, educational, and children's books. What genre interests you?";
    }

    if (lowerMessage.includes("sports") || lowerMessage.includes("fitness")) {
      return "Stay active with our sports equipment! We have gear for various sports, fitness equipment, and outdoor activities.";
    }

    if (lowerMessage.includes("toys") || lowerMessage.includes("kids")) {
      return "Our toy collection is perfect for kids of all ages! From educational toys to fun games, we have everything to keep children entertained.";
    }

    if (lowerMessage.includes("home") || lowerMessage.includes("garden")) {
      return "Transform your living space! Our home & garden section has furniture, decor, gardening tools, and everything for your home.";
    }

    if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
      return "I'm here to help! I can assist you with product recommendations, answer questions about our categories, help with your cart, or connect you with customer support.";
    }

    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! Welcome to our store! I'm your shopping assistant. How can I help you find what you're looking for today?";
    }

    if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with today?";
    }

    return "I'm here to help you with your shopping experience! You can ask me about our products, categories, or anything else related to our store. What would you like to know?";
  }

  // Method to clear conversation history
  clearHistory(): void {
    this.conversationHistory = [];
  }

  // Method to get current conversation length
  getHistoryLength(): number {
    return this.conversationHistory.length;
  }
}

export const grokService = new GrokService();
