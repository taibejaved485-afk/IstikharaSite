import { ChatMessage } from "../types";

/**
 * Custom local chat logic to provide specific Urdu answers without using an external API.
 */
export const getIslamicAssistantResponse = async (history: ChatMessage[], message: string) => {
  // Simulate a small delay for a more natural feel
  await new Promise(resolve => setTimeout(resolve, 600));

  const input = message.toLowerCase();

  // Salam ka Jawab
  if (input.includes('salam') || input.includes('hi') || input.includes('hello')) {
    return 'Walaikum Assalam! IstikharaSite par khush amdeed. Hum aapki kis tarah madad kar sakte hain?';
  }

  // Privacy/Data
  if (input.includes('privacy') || input.includes('data') || input.includes('makhfi') || input.includes('raaz')) {
    return 'IstikharaSite aapki makhfi malomat (privacy) ka pura khayal rakhti hai. Aapka data kisi teesre shakhs ko nahi diya jata.';
  }

  // Time/Timing
  if (input.includes('time') || input.includes('timing') || input.includes('kab tak') || input.includes('waqt')) {
    return 'Istikhara ka jawab aam taur par 24 se 48 ghanton mein de diya jata hai.';
  }

  // Method/Tariqa
  if (input.includes('tariqa') || input.includes('method') || input.includes('process')) {
    return 'Hum Quran-o-Sunnat ke mutabiq masnoon tariqa-e-istikhara ikhtiyar karte hain.';
  }

  // Istikhara Query
  if (input.includes('istikhara') || input.includes('help') || input.includes('madad')) {
    return 'Istikhara ke liye aap apna naam aur masla yahan likhein ya hamare WhatsApp button par click karke direct rabta karein.';
  }

  // Fees/Hadiya
  if (input.includes('fees') || input.includes('hadiya') || input.includes('pay') || input.includes('paisa')) {
    return 'Hamari zyadatar malomat muft hain, lekin makhsoos amliyat ke liye aap WhatsApp par rabta kar sakte hain.';
  }

  // Default Response
  return 'Mohtaram saarif, aapka sawal mil gaya hai. Behtar rehnumayi ke liye hamare WhatsApp par rabta karein.';
};