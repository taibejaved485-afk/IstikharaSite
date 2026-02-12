
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types.ts';
import { getIslamicAssistantResponse } from '../services/gemini.ts';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: "Assalamu Alaikum! I am Noori, your Islamic Assistant. How may I guide you through the sacred path today?" }] }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getIslamicAssistantResponse(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: aiResponse || '' }] }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-[#013220] w-[350px] md:w-[420px] h-[600px] rounded-[32px] border border-amber-900/50 shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in zoom-in-95 fade-in slide-in-from-bottom-10 duration-500">
          <div className="p-6 bg-[#013220] border-b border-amber-900/30 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-emerald-950 shadow-lg shadow-amber-500/20">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-title font-bold text-amber-100 tracking-wide">Noori Assistant</h3>
                <span className="text-[10px] text-amber-500 uppercase tracking-widest font-title flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span> Connected
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-amber-900/30 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide text-right">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-amber-500 text-emerald-950 font-medium rounded-br-none shadow-xl' 
                    : 'bg-emerald-900/40 text-amber-50 border border-amber-900/20 rounded-bl-none'
                }`}>
                  {m.parts[0].text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-emerald-900/40 p-4 rounded-3xl rounded-bl-none border border-amber-900/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-amber-900/20 bg-emerald-950/20">
            <div className="flex gap-3">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Seek spiritual guidance..."
                className="flex-1 bg-emerald-900/50 border border-amber-900/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-amber-500 transition-all text-amber-50 placeholder:text-amber-100/30 text-right"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-12 h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center text-emerald-950 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50 hover-shine"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-amber-500 hover:bg-amber-600 text-emerald-950 rounded-[28px] flex items-center justify-center shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all hover:scale-110 active:scale-95 group pulse-gold"
        >
          <svg className="w-9 h-9 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
