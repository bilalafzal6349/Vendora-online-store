# Chatbot API Setup Guide

This guide will help you set up the chatbot with either Google Gemini API or Grok API, including proper restrictions and security measures.

## Prerequisites

- Node.js and npm installed
- A Google Gemini API key OR a Grok API key

## API Key Setup

### Option 1: Google Gemini API (Recommended)

1. **Get API Key:**

   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy the generated API key

2. **Configure Environment:**
   Create a `.env` file in your project root:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_MAX_TOKENS=150
   VITE_TEMPERATURE=0.7
   VITE_MAX_REQUESTS_PER_MINUTE=30
   ```

### Option 2: Grok API

1. **Get API Key:**

   - Go to [X.AI Console](https://console.x.ai/)
   - Sign up or sign in
   - Navigate to API Keys section
   - Create a new API key
   - Copy the generated key

2. **Configure Environment:**
   Create a `.env` file in your project root:
   ```env
   VITE_GROK_API_KEY=your_grok_api_key_here
   VITE_MAX_TOKENS=150
   VITE_TEMPERATURE=0.7
   VITE_MAX_REQUESTS_PER_MINUTE=30
   ```

## Security Features Implemented

### 1. Input Validation & Sanitization

- Removes potentially harmful HTML/JavaScript content
- Limits message length to 1000 characters
- Validates input format and type

### 2. Rate Limiting

- Maximum 30 requests per minute per user
- Automatic rate limit reset every minute
- Graceful handling of rate limit exceeded

### 3. Content Restrictions

The chatbot is restricted to only answer:

- Shopping-related questions
- Product recommendations
- E-commerce assistance
- Store policies and procedures

**Explicitly blocked:**

- Personal, financial, medical, or legal advice
- Harmful or offensive content
- Coding or technical support beyond basic shopping questions
- Personal information sharing

### 4. Conversation Management

- Limited conversation history (10 messages)
- Automatic cleanup to prevent context overflow
- Fallback responses when API is unavailable

### 5. Error Handling

- Graceful degradation to fallback responses
- Comprehensive error logging
- User-friendly error messages

## Configuration Options

### Environment Variables

| Variable                       | Description               | Default | Required         |
| ------------------------------ | ------------------------- | ------- | ---------------- |
| `VITE_GEMINI_API_KEY`          | Google Gemini API key     | -       | Yes (for Gemini) |
| `VITE_GROK_API_KEY`            | Grok API key              | -       | Yes (for Grok)   |
| `VITE_MAX_TOKENS`              | Maximum response length   | 150     | No               |
| `VITE_TEMPERATURE`             | Response creativity (0-1) | 0.7     | No               |
| `VITE_MAX_REQUESTS_PER_MINUTE` | Rate limit                | 30      | No               |

### API Priority

The system will use APIs in this order:

1. Gemini API (if configured)
2. Grok API (if configured)
3. Fallback responses (if no API configured)

## Usage

The chatbot is already integrated into your application. Users can:

1. Click the robot icon in the bottom-right corner
2. Type their shopping-related questions
3. Receive AI-powered responses with restrictions

## Testing

To test the chatbot:

1. Start your development server: `npm run dev`
2. Open the application in your browser
3. Click the chatbot icon
4. Try asking shopping-related questions

### Test Questions:

- "What products do you have?"
- "Can you help me find electronics?"
- "What's in your fashion collection?"
- "How do I add items to my cart?"

## Troubleshooting

### Common Issues:

1. **"No API keys configured" warning**

   - Ensure your `.env` file is in the project root
   - Check that the API key variable names are correct
   - Restart your development server after adding the `.env` file

2. **API request failures**

   - Verify your API key is valid and active
   - Check your API usage limits
   - Ensure you have internet connectivity

3. **Rate limiting**
   - The chatbot will automatically handle rate limits
   - Wait a minute before trying again

### Debug Mode:

Check the browser console for detailed error messages and API response information.

## Security Best Practices

1. **Never commit API keys to version control**

   - The `.env` file is already in `.gitignore`
   - Use environment variables for all sensitive data

2. **Monitor API usage**

   - Check your API provider's dashboard regularly
   - Set up usage alerts if available

3. **Regular updates**
   - Keep your dependencies updated
   - Monitor for security patches

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify your API key configuration
3. Test with the fallback responses first
4. Check your API provider's status page

## Cost Considerations

- **Gemini API**: Free tier available, then pay-per-use
- **Grok API**: Pay-per-use pricing
- Monitor your usage to avoid unexpected charges

Both APIs offer generous free tiers for development and testing.
