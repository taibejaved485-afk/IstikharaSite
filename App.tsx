import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import ServicePage from './components/ServicePage.tsx';
import StaticPage from './components/StaticPage.tsx';
import TalismanSection from './components/TalismanSection.tsx';
import SpecializedGrid from './components/SpecializedGrid.tsx';
import BenefitsSection from './components/BenefitsSection.tsx';
import TrustCounter from './components/TrustCounter.tsx';
import StoryModal from './components/StoryModal.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { Page, Blog } from './types.ts';
import { SERVICES, SEED_BLOGS } from './constants.tsx';
import { getBlogs, saveBlog } from './services/db.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [activeTopic, setActiveTopic] = useState<string>('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedStory, setSelectedStory] = useState<Blog | null>(null);
  const [loadingBlogs, setLoadingBlogs] = useState(false);

  // Initial load on mount
  useEffect(() => {
    loadBlogsAndSeed();
  }, []);

  // Ensure blogs are available whenever we navigate back to home
  useEffect(() => {
    if (currentPage === Page.Home && blogs.length === 0 && !loadingBlogs) {
      loadBlogsAndSeed();
    }
  }, [currentPage]);

  // Handle scroll reveal on route/topic change
  useEffect(() => {
    const timeout = setTimeout(() => {
      if ((window as any).initScrollReveal) {
        (window as any).initScrollReveal();
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [currentPage, activeTopic]);

  const loadBlogsAndSeed = async () => {
    setLoadingBlogs(true);
    try {
      let data = await getBlogs();
      if (data.length === 0) {
        // Use for...of to await each save sequentially for better reliability in IndexedDB
        for (const story of SEED_BLOGS) {
          await saveBlog(story);
        }
        data = await getBlogs();
      }
      setBlogs(data);
    } catch (err) {
      console.error("Failed to load or seed blogs", err);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const handleNav = (page: Page, topic?: string) => {
    setCurrentPage(page);
    if (topic) {
      setActiveTopic(topic);
    } else {
      setActiveTopic('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    // Priority: Specialized sub-topic pages (Tawwez/Talismans dropdowns)
    if ((currentPage === Page.Tawwez || currentPage === Page.Counselling) && activeTopic) {
      return <ServicePage topic={activeTopic} />;
    }

    // Handle Static Footer Pages
    const staticPages = [Page.About, Page.FAQ, Page.Privacy, Page.Disclaimer, Page.Return, Page.Testimonials];
    if (staticPages.includes(currentPage)) {
      return <StaticPage pageKey={currentPage} />;
    }

    switch (currentPage) {
      case Page.Admin:
        return <AdminPanel />;
      
      case Page.Marriage:
        return <ServicePage topic="marriage" />;
      
      case Page.Pregnancy:
        return <ServicePage topic="pregnancy" />;
      
      case Page.Tawwez:
        return <ServicePage topic="wazaif" />;
      
      case Page.Counselling:
        return <ServicePage topic="talismans" />;

      case Page.Blog:
        return (
          <div className="container mx-auto px-4 py-20 mt-32">
            <div className="reveal text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-title font-bold text-gold golden-glow">The Spiritual Journal</h2>
              <div className="w-32 h-1 bg-amber-500 mx-auto mt-6 opacity-40"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog, idx) => (
                <article key={blog.id} className="reveal bg-[#013220]/60 border border-amber-900/30 rounded-[40px] overflow-hidden hover:border-amber-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl group" style={{ transitionDelay: `${idx * 100}ms` }}>
                  {blog.imageUrl && (
                    <div className="overflow-hidden h-64">
                      <img src={blog.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-amber-500 text-xs font-title font-bold mb-3 uppercase tracking-[0.3em]">{blog.date}</p>
                    <h3 className="text-3xl font-urdu text-amber-50 mb-6 urdu-text leading-[3.0] pb-[25px]" style={{ fontFamily: blog.titleFont }}>{blog.title}</h3>
                    <p className="text-amber-100/60 line-clamp-4 mb-8 urdu-text leading-[3.0] pb-[25px] flex-1" style={{ fontFamily: blog.bodyFont }}>{blog.content}</p>
                    <button 
                      onClick={() => setSelectedStory(blog)}
                      className="text-amber-400 font-bold font-title tracking-widest hover:text-amber-300 transition-all flex items-center gap-3 mt-auto group/btn"
                    >
                      READ FULL STORY
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      case Page.Home:
      default:
        return (
          <div className="mt-32">
            <Hero />
            
            <SpecializedGrid onPageChange={handleNav} />

            <BenefitsSection />

            <TalismanSection onPageChange={handleNav} />

            <TrustCounter />

            {/* Services Section */}
            <section className="py-24 relative overflow-visible">
              <div className="container mx-auto px-6">
                <div className="reveal text-center mb-16">
                  <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-xs font-bold mb-4">Divine Assistance</h2>
                  <h3 className="text-4xl md:text-6xl font-bold text-gold font-title golden-glow">Sacred Services</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                  {SERVICES.map((service, idx) => (
                    <div key={idx} className="reveal p-10 bg-emerald-950/20 border border-amber-900/10 rounded-[40px] hover:border-amber-500/40 transition-all duration-700 group hover:-translate-y-4 shadow-2xl" style={{ transitionDelay: `${idx * 150}ms` }}>
                      <div className="mb-8 w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        {service.icon}
                      </div>
                      <h4 className="text-3xl font-urdu text-gold mb-4 urdu-text leading-[3.0] pb-[25px]">{service.urduTitle}</h4>
                      <h5 className="text-xl font-bold text-amber-100 mb-6 font-title tracking-wide">{service.title}</h5>
                      <p className="text-amber-100/40 leading-relaxed mb-10 text-base font-light">{service.description}</p>
                      <button 
                        onClick={() => handleNav(service.title.includes('Marriage') ? Page.Marriage : (service.title.includes('Pregnancy') ? Page.Pregnancy : Page.Counselling))}
                        className="w-full py-3.5 border border-amber-500/20 text-amber-400 rounded-xl hover:bg-amber-500 hover:text-emerald-950 transition-all font-title tracking-widest text-[10px] hover-shine"
                      >
                        LEARN MORE
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Success Stories / Latest Journal Section */}
            <section className="py-24 bg-[#013220]/40 relative overflow-visible">
               <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
              <div className="container mx-auto px-6">
                <div className="reveal flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-xs font-bold mb-3">The Book of Hope</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gold font-title golden-glow">Success Stories</h3>
                  </div>
                  <button onClick={() => handleNav(Page.Blog)} className="px-8 py-3 bg-transparent border border-amber-500/40 text-amber-400 rounded-full hover:bg-amber-500 hover:text-emerald-950 transition-all font-title tracking-widest text-[10px]">VIEW ALL STORIES</button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
                  {blogs.length > 0 ? blogs.slice(0, 3).map((blog, idx) => (
                    <div key={blog.id} className="reveal group bg-[#013220]/80 p-8 rounded-[32px] border border-emerald-800/30 hover:border-amber-500/30 transition-all duration-500 shadow-xl overflow-visible h-full flex flex-col" style={{ transitionDelay: `${idx * 150}ms` }}>
                      <p className="text-amber-500 text-[10px] mb-3 uppercase tracking-[0.2em] font-title font-bold">{blog.author || 'Musaafir'}</p>
                      <h4 className="text-3xl font-urdu text-amber-100 mb-5 line-clamp-1 urdu-text leading-[3.0] pb-[25px] group-hover:text-gold transition-colors">{blog.title}</h4>
                      <p className="text-amber-100/40 text-xl leading-[3.0] pb-[25px] line-clamp-3 urdu-text mb-6 flex-1">{blog.content}</p>
                      <button 
                        onClick={() => setSelectedStory(blog)}
                        className="text-amber-400 text-[10px] font-bold tracking-[0.2em] hover:text-gold transition-all text-left uppercase"
                      >
                        Read Full Story →
                      </button>
                      <div className="w-10 h-px bg-amber-500/20 group-hover:w-20 transition-all mt-4"></div>
                    </div>
                  )) : (
                    <div className="col-span-full py-10 text-center text-amber-200/40 font-title italic">
                      {loadingBlogs ? "Loading success stories..." : "No stories available yet."}
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-emerald-950">
      <CustomCursor />
      <Header onPageChange={handleNav} currentPage={currentPage} />
      
      <main className="flex-1">
        {renderContent()}
        <ContactForm />
      </main>

      <Footer onPageChange={handleNav} />

      {/* Floating Buttons Grouping */}
      <WhatsAppButton />
      <ChatWidget />
      
      {/* Interactive Story Modal */}
      <StoryModal 
        blog={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />
    </div>
  );
};

export default App;