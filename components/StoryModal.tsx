import React from 'react';
import { Blog } from '../types';

interface StoryModalProps {
  blog: Blog | null;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Premium Backdrop Overlay */}
      <div 
        className="absolute inset-0 bg-[#00100a]/95 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* The Intricate Golden Framed Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#011a10] rounded-xl shadow-[0_0_80px_rgba(212,175,55,0.15)] flex flex-col animate-in zoom-in-95 duration-500 border border-amber-900/40">
        
        {/* Intricate Islamic SVG Border Overlays */}
        <div className="absolute inset-0 pointer-events-none p-2 md:p-4">
          <div className="w-full h-full border border-amber-500/20 rounded-lg relative">
            {/* Corner 1 (Top Left) */}
            <svg className="absolute -top-3 -left-3 w-16 h-16 text-gold" viewBox="0 0 100 100" fill="none">
              <path d="M0 50C0 22.3858 22.3858 0 50 0M0 50C0 77.6142 22.3858 100 50 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="10" cy="10" r="4" fill="currentColor" className="animate-pulse" />
              <path d="M10 10 L40 10 M10 10 L10 40" stroke="currentColor" strokeWidth="1" />
            </svg>
            {/* Corner 2 (Top Right) */}
            <svg className="absolute -top-3 -right-3 w-16 h-16 text-gold rotate-90" viewBox="0 0 100 100" fill="none">
              <path d="M0 50C0 22.3858 22.3858 0 50 0M0 50C0 77.6142 22.3858 100 50 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="10" cy="10" r="4" fill="currentColor" />
            </svg>
            {/* Corner 3 (Bottom Left) */}
            <svg className="absolute -bottom-3 -left-3 w-16 h-16 text-gold -rotate-90" viewBox="0 0 100 100" fill="none">
              <path d="M0 50C0 22.3858 22.3858 0 50 0M0 50C0 77.6142 22.3858 100 50 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="10" cy="10" r="4" fill="currentColor" />
            </svg>
            {/* Corner 4 (Bottom Right) */}
            <svg className="absolute -bottom-3 -right-3 w-16 h-16 text-gold rotate-180" viewBox="0 0 100 100" fill="none">
              <path d="M0 50C0 22.3858 22.3858 0 50 0M0 50C0 77.6142 22.3858 100 50 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="10" cy="10" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Modal Header */}
        <div className="relative z-10 p-8 flex justify-between items-center border-b border-amber-900/30 bg-emerald-950/40">
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-emerald-950 transition-all duration-300 shadow-lg group"
          >
            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h3 className="text-3xl md:text-5xl font-urdu text-gold golden-glow urdu-text leading-[2.2] pb-6 text-right pr-6">
            {blog.title}
          </h3>
        </div>

        {/* Structured Story Content */}
        <div className="relative z-10 flex-1 overflow-y-auto p-8 md:p-14 space-y-16 custom-scrollbar text-right overflow-visible">
          
          {/* Subtle Islamic Geometric Pattern Background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] scale-150" />

          {/* Section 1: The Struggle (آزمائش) */}
          <div className="relative reveal active">
            <div className="flex items-center justify-end gap-4 mb-8">
              <h4 className="text-2xl font-urdu text-amber-500 urdu-text leading-[2.2] pb-6">پہلا مرحلہ: آزمائش اور جدوجہد</h4>
              <div className="w-12 h-1 bg-amber-500/20" />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 leading-[2.2] pb-6 urdu-text" style={{ fontFamily: blog.bodyFont }}>
              {blog.struggle}
            </p>
          </div>

          {/* Section 2: The Spiritual Solution (روحانی حل) */}
          <div className="relative reveal active bg-amber-500/5 p-10 rounded-[40px] border border-amber-500/20 shadow-inner overflow-visible">
             <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#011a10] px-6 py-2 border border-amber-500/20 rounded-full">
               <h4 className="text-2xl font-urdu text-gold urdu-text leading-[2.2] pb-2">روحانی حل اور وظیفہ</h4>
             </div>
            <p className="text-xl md:text-2xl text-amber-100 leading-[2.2] pb-6 urdu-text" style={{ fontFamily: blog.bodyFont }}>
              {blog.solution}
            </p>
          </div>

          {/* Section 3: The Final Result (کامیابی) */}
          <div className="relative reveal active">
             <div className="flex items-center justify-end gap-4 mb-8">
              <h4 className="text-2xl font-urdu text-emerald-400 urdu-text leading-[2.2] pb-6">نتیجہ اور کامیابی</h4>
              <div className="w-12 h-1 bg-emerald-400/20" />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 leading-[2.2] pb-6 urdu-text" style={{ fontFamily: blog.bodyFont }}>
              {blog.result}
            </p>
          </div>

          {/* Ornamental Separator */}
          <div className="flex justify-center py-12 opacity-30">
            <svg className="w-48 h-12 text-gold" viewBox="0 0 200 50">
               <path d="M0 25 Q50 0 100 25 T200 25" stroke="currentColor" fill="none" />
               <circle cx="100" cy="25" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Modal Footer (Optional Actions) */}
        <div className="relative z-10 p-8 border-t border-amber-900/20 flex justify-center bg-emerald-950/20">
          <button 
            onClick={onClose}
            className="px-12 py-4 bg-amber-500 hover:bg-gold-light text-emerald-950 font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 hover-shine"
          >
            جزاک اللہ خیرا - بند کریں
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;