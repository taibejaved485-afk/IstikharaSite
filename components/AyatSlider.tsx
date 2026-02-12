import React, { useState, useEffect } from 'react';
import { AYATS } from '../constants';

const AyatSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % AYATS.length);
        setFade(true);
      }, 500); // Wait for fade out
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentAyat = AYATS[index];

  return (
    <div className="bg-[#012015] border-b border-amber-900/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]" style={{ padding: '10px 0', overflow: 'visible' }}>
      <div className="container mx-auto px-4 overflow-visible">
        <div 
          className={`transition-opacity duration-500 flex items-center justify-center gap-[20px] ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ overflow: 'visible' }}
        >
          {/* Arabic Text */}
          <span 
            className="font-arabic text-amber-400 text-lg md:text-xl drop-shadow-[0_0_8px_rgba(251,191,36,0.3)] tracking-wide whitespace-nowrap"
            style={{ 
              lineHeight: '2.5', 
              overflow: 'visible',
              display: 'inline-block'
            }}
          >
            {currentAyat.arabic}
          </span>

          {/* Vertical Separator */}
          <div className="w-px h-6 bg-amber-500/20 self-center shrink-0"></div>

          {/* Translation Text */}
          <span 
            className="font-urdu text-amber-100/70 text-sm md:text-base italic whitespace-normal md:whitespace-nowrap"
            style={{ 
              lineHeight: '2.5', 
              overflow: 'visible',
              display: 'inline-block'
            }}
          >
            {currentAyat.translation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AyatSlider;