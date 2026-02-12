
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
    <div className="bg-[#012015] border-b border-amber-900/40 py-3 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto px-4">
        <div 
          className={`transition-opacity duration-500 text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-arabic text-amber-400 text-lg md:text-xl drop-shadow-[0_0_8px_rgba(251,191,36,0.3)] tracking-wide">
            {currentAyat.arabic}
          </span>
          <div className="hidden md:block w-px h-4 bg-amber-500/20"></div>
          <span className="font-urdu text-amber-100/70 text-sm md:text-base leading-relaxed max-w-2xl italic">
            {currentAyat.translation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AyatSlider;
