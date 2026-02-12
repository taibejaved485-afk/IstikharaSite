import React from 'react';
import { Page } from '../types';

interface TalismanSectionProps {
  onPageChange: (page: Page, topic: string) => void;
}

const talismans = [
  {
    title: "Success & Career",
    urduTitle: "کامیابی اور روزگار",
    topic: "success_career",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    title: "Love & Marriage",
    urduTitle: "محبت اور ازدواجی زندگی",
    topic: "love_marriage",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Protection",
    urduTitle: "حفاظت اور جادو کا توڑ",
    topic: "protection_shield",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Business & Rizq",
    urduTitle: "کاروبار اور رزق میں برکت",
    topic: "business_rizq",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

const TalismanSection: React.FC<TalismanSectionProps> = ({ onPageChange }) => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#012015] urdu-container">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-gold golden-glow uppercase tracking-[0.2em] mb-12 urdu-text" style={{ paddingBottom: '40px !important' }}>
            Popular Talismans & Taweezat
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {talismans.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => onPageChange(Page.Tawwez, item.topic)}
              className="reveal relative group bg-[#111111] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-amber-900/30 cursor-pointer"
              style={{ transitionDelay: `${idx * 150}ms`, height: 'auto', overflow: 'visible' }}
            >
              {/* Golden Corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Bismillah Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none font-arabic text-6xl group-hover:opacity-[0.06] transition-opacity">
                بسم اللہ
              </div>

              <div className="relative z-10 text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h4 className="relative z-10 text-2xl font-bold text-amber-100 font-title mb-6 group-hover:text-gold transition-colors">
                {item.title}
              </h4>
              <p className="relative z-10 text-2xl font-urdu text-amber-500/80 mb-12 urdu-text leading-[3.2]" style={{ paddingBottom: '35px !important' }}>
                {item.urduTitle}
              </p>

              {/* Hover Button */}
              <div className="relative z-10 mt-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button className="bg-amber-500 text-emerald-950 px-6 py-3 rounded-lg font-bold text-xs tracking-widest hover-shine shadow-lg shadow-amber-500/20">
                  REQUEST VIA AI
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalismanSection;