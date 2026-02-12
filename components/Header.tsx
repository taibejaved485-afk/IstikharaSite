import React, { useState, useEffect } from 'react';
import { Page } from '../types.ts';
import { AYATS } from '../constants.tsx';

interface HeaderProps {
  onPageChange: (page: Page, topic?: string) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onPageChange, currentPage }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [ayatIndex, setAyatIndex] = useState(0);
  const [ayatFade, setAyatFade] = useState(true);

  // Scroll effect for glass-morphism intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ayat sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      setAyatFade(false);
      setTimeout(() => {
        setAyatIndex((prev) => (prev + 1) % AYATS.length);
        setAyatFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentAyat = AYATS[ayatIndex];

  const NavItem = ({ label, page, dropdownItems }: { label: string, page: Page, dropdownItems?: { label: string, key: string }[] }) => {
    const isActive = currentPage === page;
    const hasDropdown = !!dropdownItems;

    return (
      <div 
        className="relative group h-full flex items-center"
        onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
        onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
      >
        <button
          onClick={() => !hasDropdown && onPageChange(page)}
          className={`relative px-1 py-2 text-[11px] md:text-[13px] font-title uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
            isActive ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-300'
          }`}
        >
          <span className="relative">
            {label}
            {/* Golden Underline Effect */}
            <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : ''}`}></span>
          </span>
          {hasDropdown && (
            <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === label ? 'rotate-180 text-amber-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>

        {hasDropdown && activeDropdown === label && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#012a1b]/95 backdrop-blur-2xl border border-amber-900/40 rounded-b-2xl shadow-[0_25px_50px_rgba(0,0,0,0.7)] z-[100] overflow-hidden py-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            {dropdownItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onPageChange(page, item.key);
                  setActiveDropdown(null);
                }}
                className="w-full text-right px-6 py-3 text-[15px] text-gray-200 hover:bg-amber-500 hover:text-emerald-950 transition-all font-urdu leading-[2.8] overflow-visible"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col pointer-events-none">
      {/* 1. TOP BAR: Quranic Ayat (Thin & Professional) */}
      <div className="w-full bg-[#001f15]/90 backdrop-blur-sm border-b border-amber-900/20 py-1.5 pointer-events-auto overflow-visible">
        <div className="container mx-auto px-6 overflow-visible">
          <div 
            className={`transition-opacity duration-500 flex items-center justify-center gap-[25px] overflow-visible ${
              ayatFade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span 
              className="font-arabic text-amber-400 text-sm md:text-lg whitespace-nowrap drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
              style={{ lineHeight: '2.8 !important', overflow: 'visible' }}
            >
              {currentAyat.arabic}
            </span>

            {/* Vertically Centered Separator */}
            <div className="w-[1px] h-4 bg-amber-500/20 self-center shrink-0"></div>

            <span 
              className="font-urdu text-amber-100/60 text-[10px] md:text-sm italic whitespace-nowrap"
              style={{ lineHeight: '2.8 !important', overflow: 'visible' }}
            >
              {currentAyat.translation}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV: Logo & Links (Glass-morphism) */}
      <div className={`w-full transition-all duration-500 pointer-events-auto ${
        scrolled ? 'bg-[#013220]/85 backdrop-blur-lg h-16 shadow-2xl border-b border-amber-900/10' : 'bg-[#013220]/40 backdrop-blur-md h-24 border-b border-white/5'
      }`}>
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full gap-8">
            
            {/* Logo Section */}
            <div 
              className="flex items-center gap-4 cursor-pointer group shrink-0" 
              onClick={() => onPageChange(Page.Home)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#013220] border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 transform group-hover:rotate-12 transition-all duration-500">
                <span className="text-lg md:text-xl font-bold text-gold font-title tracking-tighter">IS</span>
              </div>
              <div className="hidden xl:block">
                <h1 className="text-lg font-bold text-gold font-title tracking-[0.15em] leading-tight">ISTIKHARASITE</h1>
                <p className="text-[8px] text-amber-200/40 uppercase tracking-[0.4em] font-title">Online Spiritual Portal</p>
              </div>
            </div>

            {/* Navigation Links with 30px gap */}
            <nav className="hidden lg:flex items-center justify-center gap-[30px] h-full overflow-visible">
              <NavItem label="Home" page={Page.Home} />
              <NavItem label="Blog" page={Page.Blog} />
              <NavItem label="Marriage Service" page={Page.Marriage} />
              <NavItem label="Pregnancy" page={Page.Pregnancy} />
              <NavItem 
                label="Islamic Tawwez" 
                page={Page.Tawwez} 
                dropdownItems={[
                  { label: 'Wazaif (وظائف)', key: 'wazaif' },
                  { label: 'Mohbat (محبت)', key: 'love_marriage' },
                  { label: 'Sehat (صحت)', key: 'health_shifa' },
                  { label: 'Jadu ka Tor (جادو کا توڑ)', key: 'protection_shield' },
                  { label: 'Kamyabi (کامیابی)', key: 'success_career' },
                  { label: 'Rizq (رزق)', key: 'business_rizq' },
                  { label: 'Hamal (حمل)', key: 'pregnancy' }
                ]} 
              />
              <NavItem 
                label="Talismans" 
                page={Page.Tawwez} 
                dropdownItems={[
                  { label: 'Protection (حفاظت)', key: 'protection_shield' },
                  { label: 'Home/Family (گھریلو سکون)', key: 'family_peace' },
                  { label: 'Mental Peace (ذہنی سکون)', key: 'talismans' }
                ]} 
              />
              <NavItem label="Spiritual Counselling" page={Page.Counselling} />
            </nav>

            {/* Portal Action */}
            <div className="flex items-center gap-4 shrink-0">
              <button 
                onClick={() => onPageChange(Page.Admin)}
                className="hidden md:flex px-5 py-2 border border-amber-500/30 text-amber-500 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-emerald-950 transition-all duration-300 font-title"
              >
                Admin Access
              </button>
              
              {/* Mobile Menu Trigger */}
              <button className="lg:hidden w-10 h-10 flex items-center justify-center text-amber-500 bg-white/5 rounded-xl border border-white/10 hover:bg-amber-500/10 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;