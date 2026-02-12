import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types.ts';
import { getIslamicAssistantResponse } from '../services/gemini.ts';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: "Assalamu Alaikum! IstikharaSite par khush amdeed. Hum aapki kis tarah madad kar sakte hain?" }] }
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
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    // Call the local logic function
    const aiResponse = await getIslamicAssistantResponse(messages, currentInput);
    
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: aiResponse || '' }] }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
      {isOpen ? (
        <div className="bg-[#013220] w-[90vw] md:w-[350px] h-[70vh] md:h-[550px] rounded-[28px] border border-amber-900/50 shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in zoom-in-95 fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-4 md:p-5 bg-[#013220] border-b border-amber-900/30 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-emerald-950 shadow-lg shadow-amber-500/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-title font-bold text-amber-100 text-sm tracking-wide">Noori Assistant</h3>
                <span className="text-[9px] text-amber-500 uppercase tracking-widest font-title flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>
            {/* Close Button - Explicitly visible and interactive */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 rounded-full bg-amber-900/30 hover:bg-amber-500 hover:text-emerald-950 flex items-center justify-center transition-all group z-10"
              title="Close Chat"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-5 space-y-6 scrollbar-hide">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-amber-500 text-emerald-950 font-medium rounded-br-none shadow-md' 
                    : 'bg-emerald-900/60 text-amber-50 border border-amber-900/20 rounded-bl-none font-urdu leading-[2.5] text-right'
                }`}>
                  {m.parts[0].text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-emerald-900/60 p-4 rounded-2xl rounded-bl-none border border-amber-900/20">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-amber-900/20 bg-emerald-950/20">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Aa..."
                className="flex-1 bg-emerald-900/50 border border-amber-900/20 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-all text-amber-50 placeholder:text-amber-100/30"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center text-emerald-950 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 bg-amber-500 hover:bg-amber-600 text-emerald-950 rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group"
          title="Open Assistant"
        >
          <svg className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;