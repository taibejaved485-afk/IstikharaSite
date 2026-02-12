
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize safely. If process.env.API_KEY is missing, it won't crash the whole module evaluation.
const getAIClient = () => {
  const apiKey = (window as any).process?.env?.API_KEY || "";
  return new GoogleGenAI({ apiKey });
};

export const getIslamicAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: m.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `You are the 'Noori Islamic Assistant' for an Islamic website. Your personality is humble, respectful, and wise.

Guidelines:
- Always greet with 'Assalam-o-Alaikum'.
- Use polite Urdu (Aap/Janab) and maintain a respectful tone.
- Answer questions regarding Marriage, Health, Wazaif, and Success only based on authentic Islamic teachings.
- If a user asks about complex 'Jadu' (magic) or 'Talisman' (taweez) issues, provide spiritual comfort but kindly advise them to consult a qualified local scholar (Mufti or Alim).
- Strictly avoid political or controversial sectarian debates.
- Keep answers concise and well-formatted using bullet points for readability.`,
        temperature: 0.6,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Assalam-o-Alaikum, mazrat chahtay hain, is waqt rabta nahi ho pa raha. Baraye karam thori der baad koshish karein.";
  }
};
