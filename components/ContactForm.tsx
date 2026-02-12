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
    <section id="contact-section" className="py-16 bg-transparent reveal">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center mb-10">
          <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-[10px] font-bold mb-3">Direct Guidance</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gold font-title golden-glow">رابطہ فارم</h3>
          <div className="w-16 h-px bg-amber-500/30 mx-auto mt-4"></div>
        </div>

        <div className="w-full max-w-[450px] bg-[#013220] border border-amber-900/40 rounded-[28px] p-6 md:p-8 shadow-2xl relative overflow-hidden mx-auto">
          {/* Subtle Arabesque Pattern inside */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] scale-110"></div>
          
          {submitted ? (
            <div className="relative z-10 text-center py-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-urdu text-amber-100 leading-[3.0] pb-[25px] urdu-text">
                شکریہ! آپ کا سوال مل گیا ہے، ہم جلد رابطہ کریں گے۔
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-2 text-amber-500 text-[10px] font-title uppercase tracking-widest hover:text-amber-400 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <div className="space-y-1">
                <label className="block text-lg font-urdu text-gold text-right pr-2 leading-[3.0] pb-[2px]">آپ کا نام</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="اپنا نام لکھیں..."
                  className="w-full bg-emerald-950/50 border border-amber-900/30 rounded-xl px-4 py-2.5 text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all font-urdu text-right text-base"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-lg font-urdu text-gold text-right pr-2 leading-[3.0] pb-[2px]">واٹس ایپ نمبر</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="03xx-xxxxxxx"
                  className="w-full bg-emerald-950/50 border border-amber-900/30 rounded-xl px-4 py-2.5 text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all text-left text-base"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-lg font-urdu text-gold text-right pr-2 leading-[3.0] pb-[2px]">آپ کا مسئلہ</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="اپنے مسئلے کی تفصیل لکھیں..."
                  className="w-full bg-emerald-950/50 border border-amber-900/30 rounded-xl px-4 py-2.5 text-amber-100 placeholder:text-amber-100/20 outline-none focus:border-amber-500 transition-all font-urdu text-right text-base resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-amber-500 hover:bg-gold-light text-emerald-950 font-bold rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/20 hover-shine transform hover:-translate-y-0.5 text-base tracking-widest font-title flex items-center justify-center gap-2 mt-4"
              >
                بھیجیں
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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