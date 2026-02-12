import React, { useState, useEffect } from 'react';
import { Page } from '../types.ts';

interface HeaderProps {
  onPageChange: (page: Page, topic?: string) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onPageChange, currentPage }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ label, page, dropdownItems }: { label: string, page: Page, dropdownItems?: { label: string, key: string }[] }) => {
    const isActive = currentPage === page;
    const hasDropdown = !!dropdownItems;

    return (
      <div 
        className="relative group"
        onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
        onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
      >
        <button
          onClick={() => !hasDropdown && onPageChange(page)}
          className={`px-4 py-2 text-xs md:text-sm font-title uppercase tracking-widest transition-all duration-300 flex items-center gap-1 ${
            isActive ? 'text-amber-400 font-bold' : 'text-gray-300 hover:text-amber-300'
          }`}
        >
          {label}
          {hasDropdown && (
            <svg className={`w-3 h-3 transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>

        {hasDropdown && activeDropdown === label && (
          <div className="absolute left-0 mt-0 w-60 bg-[#013220]/95 backdrop-blur-xl border border-amber-900/40 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden py-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {dropdownItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onPageChange(page, item.key)}
                className="w-full text-left px-5 py-2.5 text-sm text-gray-200 hover:bg-amber-500 hover:text-emerald-950 transition-all font-title"
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
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#013220]/80 backdrop-blur-md border-b border-amber-900/30 h-16 shadow-lg' : 'bg-transparent h-24'
    }`}>
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onPageChange(Page.Home)}>
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 transform group-hover:rotate-[360deg] transition-transform duration-700">
              <span className="text-2xl font-bold text-emerald-950 font-title">IS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gold font-title tracking-[0.1em]">ISTIKHARASITE</h1>
              <p className="text-[9px] text-amber-200/60 uppercase tracking-[0.3em] -mt-1 font-title">Online Spiritual Portal</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            <NavItem label="Home" page={Page.Home} />
            <NavItem label="Blog" page={Page.Blog} />
            <NavItem label="Marriage" page={Page.Marriage} />
            <NavItem label="Pregnancy" page={Page.Pregnancy} />
            <NavItem 
              label="Tawwez" 
              page={Page.Tawwez} 
              dropdownItems={[
                { label: 'Wazaif', key: 'wazaif' },
                { label: 'Mohbat', key: 'love_marriage' },
                { label: 'Sehat', key: 'health_shifa' },
                { label: 'Jadu ka Tor', key: 'protection_shield' },
                { label: 'Kamyabi', key: 'success_career' },
                { label: 'Rizq', key: 'business_rizq' },
                { label: 'Hamal', key: 'pregnancy' }
              ]} 
            />
            <NavItem 
              label="Talismans" 
              page={Page.Tawwez} 
              dropdownItems={[
                { label: 'Protection', key: 'protection_shield' },
                { label: 'Family Peace', key: 'family_peace' },
                { label: 'Mental Peace', key: 'talismans' }
              ]} 
            />
            <NavItem label="Counselling" page={Page.Counselling} />
          </nav>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onPageChange(Page.Admin)}
              className="text-[10px] text-amber-500/50 hover:text-amber-500 transition-colors uppercase tracking-widest font-title hidden md:block"
            >
              Access Portal
            </button>
            <button className="lg:hidden text-amber-500 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;