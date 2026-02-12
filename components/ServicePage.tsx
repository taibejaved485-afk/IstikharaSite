import React from 'react';
import { SACRED_DATA } from '../services/sacredContent';

interface ServicePageProps {
  topic: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ topic }) => {
  const data = SACRED_DATA[topic];

  if (!data) return (
    <div className="py-20 text-center text-amber-200 font-title">
      <div className="text-6xl mb-6">⚠️</div>
      <h2 className="text-2xl font-bold">Content Not Found</h2>
      <p className="mt-2 opacity-60 italic">Please select a valid service from the menu.</p>
    </div>
  );

  // Helper to render bold headers in the paragraph text
  const renderParagraph = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-gold block mb-4 text-2xl md:text-3xl font-urdu tracking-wide leading-[2.2] pb-6">{part.slice(2, -2)}</strong>;
      }
      return <span key={i} className="block mb-6 leading-[2.2] pb-6">{part}</span>;
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 animate-in fade-in duration-700">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-urdu text-gold mb-6 urdu-text leading-[2.2] pb-6 golden-glow">
          {data.title}
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto opacity-50"></div>
      </div>

      {/* Premium Ayat Card */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="bg-[#111111] border-2 border-amber-900/50 rounded-[40px] p-10 md:p-20 shadow-2xl relative overflow-hidden group">
          {/* Golden Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold opacity-40"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold opacity-40"></div>

          {/* Bismillah Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none font-arabic text-[120px] md:text-[180px] group-hover:opacity-[0.05] transition-opacity duration-1000">
            بسم اللہ
          </div>
          
          <div className="relative text-center z-10">
            <p className="text-4xl md:text-6xl font-arabic text-amber-200 mb-12 leading-[2.2] pb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              {data.ayat}
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12"></div>
            <p className="text-2xl md:text-3xl text-amber-400 font-urdu urdu-text italic leading-[2.2] pb-6">
              {data.translation}
            </p>
          </div>
        </div>
      </div>

      {/* Content Paragraphs with increased line-height for Urdu */}
      <div className="max-w-4xl mx-auto space-y-16 text-right pb-24">
        {data.paragraphs.map((p, idx) => (
          <div key={idx} className="reveal flex gap-8 items-start justify-end group">
            <div className="text-xl md:text-2xl text-gray-300 urdu-text leading-[2.2] pb-6 flex-1">
              {renderParagraph(p)}
            </div>
            <div className="w-4 h-4 bg-amber-500 rounded-full mt-10 shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.6)] group-hover:scale-125 transition-transform"></div>
          </div>
        ))}
      </div>

      {/* Footer Call to Action */}
      <div className="mt-12 text-center border-t border-amber-900/20 pt-20">
        <h4 className="text-2xl font-urdu text-amber-100 mb-8 urdu-text leading-[2.2] pb-6">کیا آپ کو کسی مخصوص روحانی مدد کی ضرورت ہے؟</h4>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#contact-section"
            className="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-full transition-all shadow-2xl shadow-amber-500/30 hover-shine transform hover:-translate-y-1 flex items-center justify-center"
          >
            ہمارے ماہرین سے رابطہ کریں
          </a>
          <a 
            href="#contact-section"
            className="px-12 py-5 bg-transparent border-2 border-amber-500 text-amber-500 font-bold rounded-full transition-all hover:bg-amber-500/10 transform hover:-translate-y-1 flex items-center justify-center"
          >
            مفت استخارہ فارم
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;