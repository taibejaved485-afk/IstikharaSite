import React from 'react';
import { Page } from '../types';

interface CategoryCard {
  title: string;
  urduTitle: string;
  topic: string;
  icon: string;
}

const categories: CategoryCard[] = [
  {
    title: "Business & Wealth",
    urduTitle: "کاروباری بندش اور رزق میں برکت",
    topic: "business_rizq",
    icon: "💼"
  },
  {
    title: "Family & Peace",
    urduTitle: "اولاد کی بندش اور گھریلو سکون",
    topic: "family_peace",
    icon: "👨‍👩‍👧"
  },
  {
    title: "Health & Healing",
    urduTitle: "روحانی شفاء اور پرانی بیماریوں کا حل",
    topic: "health_shifa",
    icon: "🏥"
  },
  {
    title: "Travel & Visa",
    urduTitle: "سفر کی رکاوٹ اور ویزا کے مسائل",
    topic: "safar",
    icon: "✈️"
  }
];

interface SpecializedGridProps {
  onPageChange: (page: Page, topic: string) => void;
}

const SpecializedGrid: React.FC<SpecializedGridProps> = ({ onPageChange }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#011a10]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
      
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-20">
          <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-xs font-bold mb-4">Specialized Guidance</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-gold font-title golden-glow">مخصوص مسائل کا حل</h3>
          <div className="w-32 h-1 bg-amber-500/20 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="reveal group relative bg-[#012015] p-10 rounded-[40px] border border-amber-900/10 transition-all duration-700 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col items-center text-center cursor-default"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="w-24 h-24 bg-emerald-950/50 rounded-full border border-amber-900/20 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 group-hover:bg-amber-500/5 transition-all duration-500 shadow-inner">
                <span className="grayscale-[0.5] group-hover:grayscale-0 transition-all">{cat.icon}</span>
              </div>

              {/* Title Section */}
              <h4 className="text-xl font-bold text-amber-100 font-title mb-4 tracking-wide group-hover:text-gold transition-colors">
                {cat.title}
              </h4>
              
              <p className="text-2xl font-urdu text-amber-500/90 leading-relaxed mb-10 urdu-text h-[120px] flex items-center justify-center">
                {cat.urduTitle}
              </p>

              {/* Decorative line */}
              <div className="w-12 h-px bg-amber-900/30 group-hover:w-24 group-hover:bg-amber-500/50 transition-all duration-500 mb-8"></div>

              {/* Action Button */}
              <button 
                onClick={() => onPageChange(Page.Tawwez, cat.topic)}
                className="px-8 py-3 bg-emerald-950 border border-amber-500/20 text-gold rounded-2xl font-bold text-xs tracking-widest hover:bg-amber-500 hover:text-emerald-950 transition-all duration-300 hover-shine"
              >
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
    </section>
  );
};

export default SpecializedGrid;