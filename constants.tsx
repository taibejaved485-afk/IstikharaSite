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
    title: "کاروبار میں برکت",
    content: "میں اپنے کاروبار کی وجہ سے بہت پریشان تھا، ہر کام میں رکاوٹ آ رہی تھی۔",
    struggle: "میرا کاروبار کافی عرصے سے زوال کا شکار تھا اور میں ہر ممکن کوشش کے باوجود اسے سنبھال نہیں پا رہا تھا۔ ہر طرف سے رکاوٹیں نظر آ رہی تھیں۔",
    solution: "استخارہ سائٹ سے رابطہ کیا اور بتائے گئے مسنون عمل اور استخارہ کی مدد سے اللہ نے راستے کھول دیے۔ مجھے مخصوص وظائف اور صدقہ کی تلقین کی گئی۔",
    result: "آج میرا کاروبار پہلے سے بہت بہتر ہے اور اللہ کے فضل سے تمام رکاوٹیں دور ہو گئی ہیں۔ یہ سب اللہ کے کلام کی برکت ہے۔",
    author: "محمد بلال (لاہور)",
    date: new Date().toLocaleDateString(),
    titleFont: "'Noto Nastaliq Urdu', serif",
    bodyFont: "'Noto Nastaliq Urdu', serif",
    imageUrl: "https://images.unsplash.com/photo-1578922746465-3a805228b223?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "seed-2",
    title: "شادی کے مسائل کا حل",
    content: "شادی کے لیے بہت سے رشتے آ رہے تھے لیکن بات نہیں بن رہی تھی۔",
    struggle: "شادی کے معاملات میں مسلسل رکاوٹیں آ رہی تھیں اور کوئی بھی بات حتمی طور پر طے نہیں ہو پا رہی تھی جس کی وجہ سے پورا خاندان پریشان تھا۔",
    solution: "یہاں سے استخارہ کروایا تو صحیح فیصلہ کرنے میں بہت مدد ملی۔ استخارہ کی روشنی میں ہمیں صحیح سمت دکھائی گئی اور مخصوص دعائیں بتائی گئیں۔",
    result: "اللہ کا شکر ہے کہ اب میری شادی ایک اچھی جگہ طے ہو گئی ہے اور ہم سب بہت خوش ہیں۔",
    author: "سارہ خان (کراچی)",
    date: new Date().toLocaleDateString(),
    titleFont: "'Noto Nastaliq Urdu', serif",
    bodyFont: "'Noto Nastaliq Urdu', serif",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "seed-3",
    title: "ذہنی سکون اور صحت",
    content: "گھر میں ہر وقت ناچاقی اور ذہنی دباؤ رہتا تھا۔",
    struggle: "ہمارے گھر کا سکون برباد ہو چکا تھا اور معمولی باتوں پر جھگڑے معمول بن گئے تھے۔ ذہنی دباؤ کی وجہ سے میری صحت بھی گر رہی تھی۔",
    solution: "میں نے یہاں سے 'جادو کا توڑ' والا وظیفہ لیا اور ان کی بتائی ہوئی دعاؤں پر عمل کیا۔ روحانی رہنمائی نے میرے دل کو اطمینان بخشا۔",
    result: "الحمد اللہ، اب گھر کا ماحول بہت پرسکون ہے اور مجھے ذہنی سکون کے ساتھ ساتھ صحت میں بھی بہتری محسوس ہو رہی ہے۔",
    author: "احمد رضا (اسلام آباد)",
    date: new Date().toLocaleDateString(),
    titleFont: "'Noto Nastaliq Urdu', serif",
    bodyFont: "'Noto Nastaliq Urdu', serif",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
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