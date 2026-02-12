import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      // Reset form after a delay or just leave success message
      setFormData({ name: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-transparent reveal">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-xs font-bold mb-4">Direct Guidance</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gold font-title golden-glow">رابطہ فارم</h3>
          <div className="w-24 h-px bg-amber-500/30 mx-auto mt-6"></div>
        </div>

        <div className="w-full max-w-[500px] bg-[#013220] border-2 border-amber-900/40 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Arabesque Pattern inside */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] scale-110"></div>
          
          {submitted ? (
            <div className="relative z-10 text-center py-10 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl md:text-3xl font-urdu text-amber-100 leading-[2.8] pb-[10px] urdu-text">
                شکریہ! آپ کا سوال مل گیا ہے، ہم جلد رابطہ کریں گے۔
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-amber-500 text-xs font-title uppercase tracking-widest hover:text-amber-400 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="space-y-2">
                <label className="block text-xl font-urdu text-gold text-right pr-2 leading-[2.8] pb-[10px]">آپ کا نام</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="اپنا نام لکھیں..."
                  className="w-full bg-emerald-950/50 border border-amber-900/30 rounded-2xl px-6 py-4 text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all font-urdu text-right text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xl font-urdu text-gold text-right pr-2 leading-[2.8] pb-[10px]">واٹس ایپ نمبر</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="03xx-xxxxxxx"
                  className="w-full bg-emerald-950/50 border border-amber-900/30 rounded-2xl px-6 py-4 text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all text-left"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xl font-urdu text-gold text-right pr-2 leading-[2.8] pb-[10px]">آپ کا مسئلہ</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="اپنے مسئلے کی تفصیل لکھیں..."
                  className="w-full bg-emerald-950/50 border border-amber-900/30 rounded-2xl px-6 py-4 text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all font-urdu text-right text-lg resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-amber-500 hover:bg-gold-light text-emerald-950 font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/20 hover-shine transform hover:-translate-y-1 text-lg tracking-widest font-title flex items-center justify-center gap-3"
              >
                بھیجیں
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;