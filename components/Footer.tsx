import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const socialIcons = [
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
    { name: 'TikTok', icon: 'M9 12a1 1 0 000 2 1 1 0 000-2z M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 11.5a4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5 4.47 4.47 0 012.3.64 1 1 0 101-1.73 6.47 6.47 0 10-6.3 11.1 6.5 6.5 0 1012-6.5 1 1 0 10-2 0z' },
    { name: 'Pinterest', icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.27 2.67 7.9 6.46 9.39-.09-.8-.17-2.02.04-2.89.18-.79 1.18-5.02 1.18-5.02s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.86 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24.99.49 1.8 1.46 1.8 1.76 0 3.11-1.85 3.11-4.53 0-2.37-1.7-4.03-4.14-4.03-2.82 0-4.47 2.12-4.47 4.3 0 .85.33 1.77.74 2.27a.3.3 0 01.07.29c-.08.32-.25 1.03-.29 1.17-.05.21-.17.26-.4.15-1.48-.69-2.4-2.86-2.4-4.6 0-3.75 2.73-7.19 7.85-7.19 4.12 0 7.32 2.94 7.32 6.86 0 4.1-2.58 7.39-6.17 7.39-1.2 0-2.34-.63-2.73-1.37l-.74 2.83c-.27 1.03-.99 2.32-1.47 3.1A10 10 0 1012 2z' }
  ];

  const quickLinks = [
    { label: 'About Us', page: Page.About },
    { label: 'Contact Us', page: Page.Home, href: '#contact-section' },
    { label: 'FAQ', page: Page.FAQ },
    { label: 'Testimonials', page: Page.Testimonials },
    { label: 'Privacy Policy', page: Page.Privacy },
    { label: 'Disclaimer', page: Page.Disclaimer },
    { label: 'Return Policy', page: Page.Return },
    { label: 'Daily Azkar', page: Page.Counselling },
    { label: 'Quranic Shifa', page: Page.Counselling },
    { label: 'Our Scholars', page: Page.About },
    { label: 'Live Chat Support', page: Page.Home }
  ];

  const contactForms = [
    { label: 'ISTIKHARA FORM', email: 'quickistikha@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'ISME AZAM FORM', email: 'ismeazam1@gmail.com', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
    { label: 'TAWWEZ FORM', email: 'naqshorder@gmail.com', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'PRAY REQUEST', email: 'joinpray@gmail.com', icon: 'M12 21c-5.007 0-9-2.91-9-6.5 0-1.346.54-2.585 1.448-3.564a1 1 0 00.274-.836 4.965 4.965 0 01-.132-1.1c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .38-.053.748-.152 1.096a1 1 0 00.163.856C13.435 12.015 15 13.38 15 14.5c0 3.59-3.993 6.5-9 6.5z' }
  ];

  return (
    <footer className="bg-[#012015] pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          <div className="lg:pr-8 lg:border-r border-amber-900/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <svg className="w-8 h-8 text-emerald-950" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gold font-title tracking-[0.1em]">ISTIKHARASITE</h2>
                <p className="text-[10px] text-amber-200/50 uppercase tracking-[0.3em] font-title">Online Spiritual Portal</p>
              </div>
            </div>
            
            <p className="urdu-text text-amber-100/70 text-lg mb-10 leading-[2.2] pb-6">
              IstikharaSite ایک اسلامی روحانی ویب سائٹ ہے جو آپ کو قرآن و سنت کی روشنی میں روحانی مسائل کا حل فراہم کرتی ہے۔ ہماری ٹیم مستند علماء پر مشتمل ہے جو آپ کی زندگی کے ہر مرحلے پر روحانی رہنمائی کے لیے ہمہ وقت تیار ہیں۔
            </p>

            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="w-10 h-10 bg-amber-500 hover:bg-gold-light rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-amber-500/40"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-emerald-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:px-8 lg:border-r border-amber-900/20">
            <h3 className="text-xl font-bold text-gold font-title tracking-widest mb-10 uppercase">Quick Access</h3>
            <ul className="grid grid-cols-1 gap-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a 
                      href={link.href}
                      className="text-amber-100/50 hover:text-amber-400 transition-all duration-300 flex items-center gap-3 group text-sm font-title tracking-wide"
                    >
                      <span className="text-amber-500/50 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-transform">→</span>
                      {link.label}
                    </a>
                  ) : (
                    <button 
                      onClick={() => onPageChange(link.page)}
                      className="text-amber-100/50 hover:text-amber-400 transition-all duration-300 flex items-center gap-3 group text-sm font-title tracking-wide"
                    >
                      <span className="text-amber-500/50 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-transform">→</span>
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:px-8 lg:border-r border-amber-900/20">
            <h3 className="text-xl font-bold text-gold font-title tracking-widest mb-10 uppercase">Get In Touch</h3>
            <div className="space-y-6">
              {contactForms.map((item) => (
                <a key={item.label} href={`mailto:${item.email}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-emerald-950 border border-amber-900/30 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-500/60 uppercase tracking-widest font-title">{item.label}</p>
                    <p className="text-sm text-amber-100/80 group-hover:text-amber-400 transition-colors">{item.email}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-xl font-bold text-gold font-title tracking-widest mb-10 uppercase">Stay Connected</h3>
            <p className="text-amber-100/40 text-sm mb-8 leading-relaxed font-title italic">
              Join our spiritual circle to receive daily azkar and guidance directly in your inbox.
            </p>
            
            <div className="space-y-4">
              <p className="text-xs text-amber-500 font-title uppercase tracking-widest">Subscribe Newsletter</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-emerald-950 border border-amber-900/30 rounded-xl px-5 py-4 text-sm text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all shadow-inner"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-amber-500 hover:bg-gold-light text-emerald-950 font-bold rounded-lg text-xs tracking-widest transition-all hover-shine">
                  JOIN
                </button>
              </div>
            </div>

            <div className="mt-12 p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10">
              <p className="text-[10px] text-amber-500/60 uppercase tracking-[0.3em] font-title mb-2">Office Hours</p>
              <p className="text-sm text-amber-100/80">Mon - Sat: 9:00 AM - 10:00 PM</p>
              <p className="text-sm text-amber-100/80">Friday: Break for Jumu'ah</p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#001810] border-t border-amber-900/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] text-center md:text-left">
              © 2024 IstikharaSite. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-title">
              <button onClick={() => onPageChange(Page.Privacy)} className="text-amber-500/40 hover:text-amber-400 transition-colors">Privacy Policy</button>
              <button onClick={() => onPageChange(Page.Disclaimer)} className="text-amber-500/40 hover:text-amber-400 transition-colors">Terms of Service</button>
              <button onClick={() => onPageChange(Page.Disclaimer)} className="text-amber-500/40 hover:text-amber-400 transition-colors">Disclaimer</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;