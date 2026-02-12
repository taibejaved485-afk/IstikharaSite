
export interface Blog {
  id: string;
  title: string;
  content: string; // Brief intro
  struggle: string;
  solution: string;
  result: string;
  author: string;
  date: string;
  imageUrl?: string;
  titleFont: string;
  bodyFont: string;
}

export enum Page {
  Home = 'home',
  Blog = 'blog',
  Marriage = 'marriage',
  Pregnancy = 'pregnancy',
  Tawwez = 'tawwez',
  Counselling = 'counselling',
  Admin = 'admin',
  About = 'about',
  FAQ = 'faq',
  Privacy = 'privacy',
  Disclaimer = 'disclaimer',
  Return = 'return',
  Testimonials = 'testimonials'
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
