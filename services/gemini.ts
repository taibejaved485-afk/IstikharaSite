
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Always use new GoogleGenAI({apiKey: process.env.API_KEY}) to initialize the client.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getIslamicAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
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
- Strictly avoid political or controversial sectarian debates. If asked, politely decline to comment on such matters.
- Keep answers concise and well-formatted using bullet points for readability.
- Your primary goal is to provide guidance based on the Quran and Sunnah with humility.`,
        temperature: 0.6,
      }
    });
    
    // Direct access to .text property on response
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Assalam-o-Alaikum, mazrat chahtay hain, is waqt rabta nahi ho pa raha. Baraye karam thori der baad koshish karein.";
  }
};
