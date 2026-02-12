import React from 'react';

interface Benefit {
  title: string;
  urduTitle: string;
  description: string;
  urduDescription: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "100% Privacy",
    urduTitle: "مکمل رازداری",
    description: "Your data and secrets are our top priority.",
    urduDescription: "آپ کی مواد اور رازداری ہماری اولین ترجیح ہے۔",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Fast Response",
    urduTitle: "فوری جواب",
    description: "Istikhara reports and spiritual advice within 24 hours.",
    urduDescription: "24 گھنٹے کے اندر استخارہ رپورٹ اور روحانی مشورہ۔",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Quranic Guidance",
    urduTitle: "قرآنی رہنمائی",
    description: "All solutions based on Quran and Sunnah.",
    urduDescription: "تمام مسائل کا حل قرآن اور سنت کی روشنی میں۔",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Expert Scholars",
    urduTitle: "مستند علماء کرام",
    description: "Under the supervision of experienced and certified scholars.",
    urduDescription: "تجرُبہ کار اور مستند علماءِ کرام کی زیرِ نگرانی۔",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Fi-Sabilillah",
    urduTitle: "فی سبیل اللہ",
    description: "Most services are provided free of charge for humanity.",
    urduDescription: "زیادہ تر خدمت فی سبیل اللہ فراہم کی جاتی ہیں۔",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-20L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Global Reach",
    urduTitle: "عالمی رسائی",
    description: "Connect with us from anywhere in the world.",
    urduDescription: "دنیا بھر سے کہیں بھی رابطہ کر کے رہنمائی حاصل کریں۔",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
      </svg>
    )
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#011a10]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-gold font-title golden-glow mb-6">
            ہماری خدمت کی خصوصیات
          </h2>
          <p className="text-2xl md:text-3xl font-urdu text-amber-100/70 urdu-text">
            قرآن و سنت کی روشنی میں آپ کی بہترین رہنمائی
          </p>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="reveal group bg-[#012518]/60 p-10 rounded-[48px] border border-amber-900/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-emerald-950 rounded-3xl border border-amber-900/30 flex items-center justify-center text-amber-500 mb-8 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-inner shadow-black">
                  {benefit.icon}
                </div>

                <h4 className="text-3xl font-urdu text-gold mb-4 urdu-text group-hover:text-amber-300 transition-colors">
                  {benefit.urduTitle}
                </h4>
                
                <h5 className="text-xs font-bold text-amber-500/40 uppercase tracking-[0.3em] font-title mb-6">
                  {benefit.title}
                </h5>

                <div className="w-12 h-px bg-amber-900/30 mb-6 group-hover:w-24 group-hover:bg-amber-500/50 transition-all duration-500"></div>

                <p className="text-2xl font-urdu text-amber-100/60 leading-relaxed urdu-text mb-2">
                  {benefit.urduDescription}
                </p>
                <p className="text-[10px] text-gray-500 font-title uppercase tracking-widest italic">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ornamental Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
    </section>
  );
};

export default BenefitsSection;