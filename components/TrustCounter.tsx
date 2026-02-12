
import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  target: number;
  label: string;
  urduLabel: string;
  icon: React.ReactNode;
  suffix: string;
}

const stats: StatItem[] = [
  {
    target: 5000,
    label: "Happy Families",
    urduLabel: "خوشحال گھرانے",
    suffix: "+",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    target: 10,
    label: "Years Experience",
    urduLabel: "سال کا تجربہ",
    suffix: "+",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    target: 15000,
    label: "Istikhara Reports",
    urduLabel: "استخارہ رپورٹس",
    suffix: "+",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    target: 50,
    label: "Countries Served",
    urduLabel: "ملکوں میں خدمت",
    suffix: "+",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
      </svg>
    )
  }
];

const Counter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold text-gold golden-glow font-title mb-2">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const TrustCounter: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#011a10]">
      {/* Subtle Arch Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex justify-center items-center">
        <svg className="w-full h-full max-w-4xl" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C22.4 0 0 22.4 0 50 V100 H100 V50 C100 22.4 77.6 0 50 0 Z M50 10 C72.1 10 90 27.9 90 50 V90 H10 V50 C10 27.9 27.9 10 50 10 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="reveal flex flex-col items-center text-center p-8 border border-amber-900/10 rounded-[32px] bg-[#013220]/20 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-gold mb-6 shadow-lg shadow-amber-500/5">
                {stat.icon}
              </div>
              
              <Counter target={stat.target} suffix={stat.suffix} />
              
              <h4 className="text-xl font-urdu text-amber-500 mb-1 urdu-text leading-tight">
                {stat.urduLabel}
              </h4>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100/40 font-title font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top/Bottom divider lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
    </section>
  );
};

export default TrustCounter;
