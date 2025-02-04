import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "webx", // Unique app ID
  name: "WebX",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});