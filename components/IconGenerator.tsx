import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const IconGenerator: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIcon = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = "Create a high-resolution, modern minimalist square icon. The background is a deep, luxurious forest green color. In the center, there is a circular golden frame. Inside the frame, the letters 'IS' are written in an elegant, clean, and bold sans-serif font in a metallic gold finish. The design should be centered, symmetrical, and look professional for a website favicon. No extra text or shadows.";

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("AI generated content but no image was found in the response.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate asset. Please ensure your API key is valid and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-emerald-950/30 border border-amber-900/20 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-title font-bold text-gold golden-glow mb-4">Sacred Design Studio</h3>
          <p className="text-amber-100/60 max-w-lg mx-auto italic font-title">
            Generate high-resolution branding assets consistent with the IstikharaSite visual identity.
          </p>
        </div>

        <div className="w-full max-w-sm aspect-square bg-emerald-950/50 rounded-[32px] border-2 border-dashed border-amber-900/40 flex items-center justify-center overflow-hidden mb-10 shadow-inner group">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
              <p className="text-xs text-amber-500 uppercase tracking-widest font-title animate-pulse">Illuminating Pixels...</p>
            </div>
          ) : imageUrl ? (
            <img src={imageUrl} alt="Generated Icon" className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-1000" />
          ) : (
            <div className="text-center p-8 opacity-40 group-hover:opacity-60 transition-opacity">
              <svg className="w-16 h-16 text-amber-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-title uppercase tracking-widest text-amber-200">No Asset Generated</p>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center">
            {error}
          </div>
        )}

        <button
          onClick={generateIcon}
          disabled={loading}
          className="px-12 py-5 bg-amber-500 hover:bg-gold-light text-emerald-950 font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/20 hover-shine disabled:opacity-50 flex items-center gap-3 uppercase tracking-widest text-sm font-title"
        >
          {loading ? 'Generating...' : 'Generate Branding Icon'}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IconGenerator;