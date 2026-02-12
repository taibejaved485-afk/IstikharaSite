
import React from 'react';
import { Blog } from './types';

export interface AyatItem {
  arabic: string;
  translation: string;
}

export const AYATS: AyatItem[] = [
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    translation: "Aur jo Allah se darta hai, Allah us ke liye raasta nikal deta hai. Aur usay aisi jagah se rizq deta hai jahan us ka guman bhi nahi hota."
  },
  {
    arabic: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    translation: "Aur jab main bimar hota hoon toh wahi (Allah) mujhe shifa deta hai."
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Beshak mushkil ke sath asani hai."
  },
  {
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    translation: "Hamein seedha raasta dikha."
  }
];

export const FONTS = [
  { name: 'Default Sans', value: 'inherit' },
  { name: 'Jameel Noori (Nastaliq)', value: "'Noto Nastaliq Urdu', serif" },
  { name: 'Amiri (Arabic)', value: "'Amiri', serif" },
  { name: 'Playfair (Title Style)', value: "'Playfair Display', serif" }
];

export const SEED_BLOGS: Blog[] = [
  {
    id: "seed-1",
    title: "تنگی سے فراخی تک: ایک تاجر کی کہانی",
    content: "میرا کاروبار مکمل طور پر ٹھپ ہو چکا تھا اور میں لاکھوں کے قرض میں ڈوبا ہوا تھا۔",
    struggle: "میرا کاروبار کئی سالوں سے زوال کا شکار تھا، اور قرض خواہ روز میرے دروازے پر آ کھڑے ہوتے تھے۔ مجھے اپنی اولاد کا مستقبل اندھیرے میں نظر آ رہا تھا اور ذہنی دباؤ اس قدر بڑھ گیا تھا کہ میں خودکشی کے بارے میں سوچنے لگا تھا۔",
    solution: "میں نے پورٹل سے رابطہ کیا تو مجھے 'سورہ واقعہ' کا مخصوص وقت پر تلاوت کرنے اور روزانہ نمازِ فجر کے بعد 313 مرتبہ 'یا رزاق' پڑھنے کا مشورہ دیا گیا۔ میں نے مکمل یقین کے ساتھ یہ عمل شروع کیا اور اپنی کمائی کا ایک حصہ صدقہ کرنا شروع کیا۔",
    result: "اللہ کی قسم! تین ماہ کے اندر ہی مجھے ایک پرانے دوست سے ایسی ڈیل ملی جس نے میرے تمام نقصانات پورے کر دیے۔ آج میرا کاروبار پہلے سے دس گنا زیادہ بڑا ہے اور میں نے اپنے تمام قرض ادا کر دیے ہیں۔",
    author: "نور الہدیٰ ٹیم",
    date: new Date().toLocaleDateString(),
    titleFont: "'Noto Nastaliq Urdu', serif",
    bodyFont: "'Noto Nastaliq Urdu', serif",
    imageUrl: "https://images.unsplash.com/photo-1578922746465-3a805228b223?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "seed-2",
    title: "لاعلاج بیماری اور قرآن سے شفاء",
    content: "مجھے ایک ایسی بیماری لاحق تھی جس کا ڈاکٹروں کے پاس کوئی حتمی علاج نہیں تھا۔",
    struggle: "ڈاکٹروں نے مجھے جواب دے دیا تھا اور میں بستر سے لگ چکی تھی۔ ہر گزرتا دن میری تکلیف میں اضافہ کر رہا تھا اور میرے گھر والے میری حالت دیکھ کر ناامید ہو چکے تھے۔",
    solution: "علماء کی ہدایت پر میں نے روزانہ باقاعدگی سے سورہ فاتحہ 41 مرتبہ پڑھ کر پانی پر دم کر کے پینا شروع کیا۔ ساتھ ہی 'یا سلام' کا ذکر دن بھر جاری رکھا اور گناہوں سے توبہ کی۔",
    result: "اللہ کے فضل سے آہستہ آہستہ میری رپورٹس نارمل آنے لگیں اور چھ ماہ بعد ڈاکٹر حیران رہ گئے کہ میری بیماری کا نام و نشان مٹ چکا تھا۔ یہ صرف کلامِ الٰہی کا معجزہ ہے۔",
    author: "نور الہدیٰ ٹیم",
    date: new Date().toLocaleDateString(),
    titleFont: "'Noto Nastaliq Urdu', serif",
    bodyFont: "'Noto Nastaliq Urdu', serif",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
  }
];

export const SERVICES = [
  {
    title: "Marriage Service",
    urduTitle: "نکاح کی خدمات",
    description: "Spiritual guidance and matchmaking based on Islamic principles.",
    icon: (
      <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Pregnancy Support",
    urduTitle: "دورانِ حمل روحانی رہنمائی",
    description: "Specialized wazaif and spiritual care for expectant mothers.",
    icon: (
      <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Spiritual Counselling",
    urduTitle: "روحانی مشاورت",
    description: "One-on-one sessions for mental peace and spiritual growth.",
    icon: (
      <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  }
];
