/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  readonly VITE_GROK_API_KEY: string;
  readonly VITE_MAX_TOKENS: string;
  readonly VITE_TEMPERATURE: string;
  readonly VITE_MAX_REQUESTS_PER_MINUTE: string;
  // Allow any other VITE_ environment variables
  readonly [key: string]: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
