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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleMobileNav = (page: Page, topic?: string) => {
    onPageChange(page, topic);
    setMobileMenuOpen(false);
  };

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
      <div className="w-full bg-[#001f15]/95 backdrop-blur-sm border-b border-amber-900/20 py-2 pointer-events-auto overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            className={`transition-opacity duration-500 flex flex-nowrap items-center justify-center gap-3 sm:gap-[25px] overflow-hidden ${
              ayatFade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span 
              className="font-arabic text-amber-400 text-[10px] sm:text-sm md:text-lg whitespace-nowrap drop-shadow-[0_0_8px_rgba(251,191,36,0.3)] shrink-0"
              style={{ lineHeight: '1.2', overflow: 'visible' }}
            >
              {currentAyat.arabic}
            </span>

            {/* Vertically Centered Separator */}
            <div className="w-[1px] h-4 bg-amber-500/20 self-center shrink-0"></div>

            <span 
              className="font-urdu text-amber-100/60 text-[8px] sm:text-[10px] md:text-sm italic truncate"
              style={{ lineHeight: '1.2', overflow: 'visible' }}
            >
              {currentAyat.translation}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV: Logo & Links (Glass-morphism) */}
      <div className={`w-full transition-all duration-500 pointer-events-auto ${
        scrolled ? 'bg-[#013220]/90 backdrop-blur-lg h-16 shadow-2xl border-b border-amber-900/10' : 'bg-[#013220]/60 backdrop-blur-md h-20 sm:h-24 border-b border-white/5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full gap-4">
            
            {/* Logo Section */}
            <div 
              className="flex items-center gap-3 sm:gap-4 cursor-pointer group shrink-0" 
              onClick={() => onPageChange(Page.Home)}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#013220] border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 transform group-hover:rotate-12 transition-all duration-500">
                <span className="text-sm sm:text-base md:text-xl font-bold text-gold font-title tracking-tighter">IS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-gold font-title tracking-[0.15em] leading-tight">ISTIKHARASITE</h1>
                <p className="text-[7px] sm:text-[8px] text-amber-200/40 uppercase tracking-[0.4em] font-title">Online Spiritual Portal</p>
              </div>
            </div>

            {/* Desktop Navigation Links with 30px gap (Hidden below 1024px) */}
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

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button 
                onClick={() => onPageChange(Page.Admin)}
                className="hidden lg:flex px-5 py-2 border border-amber-500/30 text-amber-500 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-emerald-950 transition-all duration-300 font-title"
              >
                Admin
              </button>
              
              {/* Golden Hamburger Icon (Visible below 1024px) */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-amber-500 bg-white/5 rounded-xl border border-white/10 hover:bg-amber-500/10 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] pointer-events-auto">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer Content */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-[#013220] border-l border-amber-900/40 shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 overflow-y-auto">
            <div className="p-6 border-b border-amber-900/20 flex justify-between items-center">
              <span className="text-gold font-bold tracking-widest text-sm font-title uppercase">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 text-amber-500 flex items-center justify-center hover:bg-amber-500/10 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-6 space-y-2">
              <button onClick={() => handleMobileNav(Page.Home)} className="w-full text-right text-gray-200 hover:text-amber-400 py-3 text-lg font-title uppercase tracking-widest border-b border-white/5">Home</button>
              <button onClick={() => handleMobileNav(Page.Blog)} className="w-full text-right text-gray-200 hover:text-amber-400 py-3 text-lg font-title uppercase tracking-widest border-b border-white/5">Blog</button>
              <button onClick={() => handleMobileNav(Page.Marriage)} className="w-full text-right text-gray-200 hover:text-amber-400 py-3 text-lg font-title uppercase tracking-widest border-b border-white/5">Marriage Service</button>
              <button onClick={() => handleMobileNav(Page.Pregnancy)} className="w-full text-right text-gray-200 hover:text-amber-400 py-3 text-lg font-title uppercase tracking-widest border-b border-white/5">Pregnancy</button>
              
              <div className="pt-4 pb-2">
                <span className="block text-amber-500/50 text-[10px] uppercase tracking-widest font-bold mb-2 text-right">Islamic Tawwez</span>
                {[
                  { label: 'Wazaif (وظائف)', key: 'wazaif' },
                  { label: 'Mohbat (محبت)', key: 'love_marriage' },
                  { label: 'Sehat (صحت)', key: 'health_shifa' },
                  { label: 'Jadu ka Tor (جادو کا توڑ)', key: 'protection_shield' },
                  { label: 'Kamyabi (کابیابی)', key: 'success_career' },
                  { label: 'Rizq (رزق)', key: 'business_rizq' },
                  { label: 'Hamal (حمل)', key: 'pregnancy' }
                ].map(item => (
                  <button 
                    key={item.key} 
                    onClick={() => handleMobileNav(Page.Tawwez, item.key)}
                    className="w-full text-right text-gray-200 hover:text-amber-400 py-2 text-base font-urdu leading-[3.0] pb-[20px] overflow-visible"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <span className="block text-amber-500/50 text-[10px] uppercase tracking-widest font-bold mb-2 text-right">Talismans</span>
                {[
                  { label: 'Protection (حفاظت)', key: 'protection_shield' },
                  { label: 'Home/Family (گھریلو سکون)', key: 'family_peace' },
                  { label: 'Mental Peace (ذہنی سکون)', key: 'talismans' }
                ].map(item => (
                  <button 
                    key={item.key} 
                    onClick={() => handleMobileNav(Page.Tawwez, item.key)}
                    className="w-full text-right text-gray-200 hover:text-amber-400 py-2 text-base font-urdu leading-[3.0] pb-[20px] overflow-visible"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button onClick={() => handleMobileNav(Page.Counselling)} className="w-full text-right text-gray-200 hover:text-amber-400 py-4 text-lg font-title uppercase tracking-widest border-t border-white/5 mt-4">Spiritual Counselling</button>
              <button onClick={() => handleMobileNav(Page.Admin)} className="w-full text-right text-amber-500 py-4 text-lg font-title uppercase tracking-widest border-t border-white/5">Admin Access</button>
            </nav>

            <div className="p-8 border-t border-amber-900/20 bg-black/20">
              <p className="text-[10px] text-amber-200/30 uppercase tracking-[0.3em] font-title text-center">© 2024 ISTIKHARASITE</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;