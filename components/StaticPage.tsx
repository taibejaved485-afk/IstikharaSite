import React from 'react';
import { FOOTER_PAGES_DATA } from '../services/footerContent';

interface StaticPageProps {
  pageKey: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ pageKey }) => {
  const data = FOOTER_PAGES_DATA[pageKey];

  if (!data) return (
    <div className="py-40 text-center text-amber-200 font-title">
      Content is being written by our scholars. Please check back later.
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-24 animate-in fade-in slide-in-from-bottom-5 duration-1000">
      {/* Decorative Header */}
      <div className="text-center mb-20">
        <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-45">
           <div className="-rotate-45">
             <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
             </svg>
           </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-urdu text-gold mb-8 urdu-text leading-[2.2] pb-6 golden-glow">
          {data.title}
        </h1>
        <p className="text-xl text-amber-100/60 max-w-3xl mx-auto urdu-text leading-[2.2] pb-6">
          {data.content}
        </p>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mx-auto mt-12"></div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-4xl mx-auto space-y-16">
        {data.sections?.map((section, idx) => (
          <div key={idx} className="reveal bg-emerald-950/20 border-l-4 border-amber-500/50 p-8 md:p-12 rounded-r-3xl shadow-xl overflow-visible">
            <h2 className="text-2xl md:text-3xl font-urdu text-amber-200 mb-6 urdu-text text-right leading-[2.2] pb-6">
              {section.heading}
            </h2>
            <div className="w-12 h-0.5 bg-amber-900/30 mb-8 ml-auto"></div>
            {Array.isArray(section.body) ? (
              <ul className="space-y-4 text-right">
                {section.body.map((item, bidx) => (
                  <li key={bidx} className="text-lg md:text-xl text-gray-300 urdu-text leading-[2.2] pb-6 flex items-start justify-end gap-3">
                    <span>{item}</span>
                    <span className="text-amber-500 mt-2">•</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg md:text-xl text-gray-300 urdu-text leading-[2.2] pb-6 text-right">
                {section.body}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer Decoration */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-4 text-amber-500/30">
          <div className="w-24 h-px bg-current"></div>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12a1 1 0 112 0 1 1 0 01-2 0zm1-9a7 7 0 110 14 7 7 0 010-14z" />
          </svg>
          <div className="w-24 h-px bg-current"></div>
        </div>
      </div>
    </div>
  );
};

export default StaticPage;