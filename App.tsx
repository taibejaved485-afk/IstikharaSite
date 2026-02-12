import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AyatSlider from './components/AyatSlider.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import ServicePage from './components/ServicePage.tsx';
import StaticPage from './components/StaticPage.tsx';
import TalismanSection from './components/TalismanSection.tsx';
import SpecializedGrid from './components/SpecializedGrid.tsx';
import BenefitsSection from './components/BenefitsSection.tsx';
import TrustCounter from './components/TrustCounter.tsx';
import StoryModal from './components/StoryModal.tsx';
import Footer from './components/Footer.tsx';
import { Page, Blog } from './types.ts';
import { SERVICES, SEED_BLOGS } from './constants.tsx';
import { getBlogs, saveBlog } from './services/db.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [activeTopic, setActiveTopic] = useState<string>('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedStory, setSelectedStory] = useState<Blog | null>(null);

  useEffect(() => {
    loadBlogsAndSeed();
    const timeout = setTimeout(() => {
      if ((window as any).initScrollReveal) {
        (window as any).initScrollReveal();
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentPage, activeTopic]);

  const loadBlogsAndSeed = async () => {
    let data = await getBlogs();
    if (data.length === 0) {
      for (const story of SEED_BLOGS) {
        await saveBlog(story);
      }
      data = await getBlogs();
    }
    setBlogs(data);
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
        // Default page for Tawwez if no specific topic is selected
        return <ServicePage topic="wazaif" />;
      
      case Page.Counselling:
        return <ServicePage topic="talismans" />;

      case Page.Blog:
        return (
          <div className="container mx-auto px-4 py-20">
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
                    <h3 className="text-3xl font-urdu text-amber-50 mb-6 urdu-text leading-[2.2] pb-6" style={{ fontFamily: blog.titleFont }}>{blog.title}</h3>
                    <p className="text-amber-100/60 line-clamp-4 mb-8 urdu-text leading-[2.2] pb-6 flex-1" style={{ fontFamily: blog.bodyFont }}>{blog.content}</p>
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
          <>
            <Hero />
            
            <SpecializedGrid onPageChange={handleNav} />

            <BenefitsSection />

            <TalismanSection onPageChange={handleNav} />

            <TrustCounter />

            {/* Services Section */}
            <section className="py-32 relative">
              <div className="container mx-auto px-6">
                <div className="reveal text-center mb-20">
                  <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-xs font-bold mb-4">Divine Assistance</h2>
                  <h3 className="text-5xl md:text-7xl font-bold text-gold font-title golden-glow">Sacred Services</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                  {SERVICES.map((service, idx) => (
                    <div key={idx} className="reveal p-12 bg-emerald-950/20 border border-amber-900/10 rounded-[48px] hover:border-amber-500/40 transition-all duration-700 group hover:-translate-y-4 shadow-2xl" style={{ transitionDelay: `${idx * 150}ms` }}>
                      <div className="mb-10 w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        {service.icon}
                      </div>
                      <h4 className="text-3xl font-urdu text-gold mb-4 urdu-text leading-[2.2] pb-6">{service.urduTitle}</h4>
                      <h5 className="text-2xl font-bold text-amber-100 mb-6 font-title tracking-wide">{service.title}</h5>
                      <p className="text-amber-100/40 leading-relaxed mb-10 text-lg font-light">{service.description}</p>
                      <button 
                        onClick={() => handleNav(service.title.includes('Marriage') ? Page.Marriage : (service.title.includes('Pregnancy') ? Page.Pregnancy : Page.Counselling))}
                        className="w-full py-4 border border-amber-500/20 text-amber-400 rounded-2xl hover:bg-amber-500 hover:text-emerald-950 transition-all font-title tracking-widest text-sm hover-shine"
                      >
                        LEARN MORE
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Success Stories / Latest Journal Section */}
            <section className="py-32 bg-[#013220]/40 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
              <div className="container mx-auto px-6">
                <div className="reveal flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-amber-500 font-title uppercase tracking-[0.4em] text-xs font-bold mb-4">The Book of Hope</h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-gold font-title golden-glow">Success Stories</h3>
                  </div>
                  <button onClick={() => handleNav(Page.Blog)} className="px-10 py-4 bg-transparent border border-amber-500/40 text-amber-400 rounded-full hover:bg-amber-500 hover:text-emerald-950 transition-all font-title tracking-widest text-sm">VIEW ALL CHRONICLES</button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.slice(0, 3).map((blog, idx) => (
                    <div key={blog.id} className="reveal group bg-[#013220]/80 p-10 rounded-[40px] border border-emerald-800/30 hover:border-amber-500/30 transition-all duration-500 shadow-xl" style={{ transitionDelay: `${idx * 150}ms` }}>
                      <p className="text-amber-500 text-[10px] mb-4 uppercase tracking-[0.2em] font-title font-bold">{blog.date}</p>
                      <h4 className="text-3xl font-urdu text-amber-100 mb-6 line-clamp-1 urdu-text leading-[2.2] pb-6 group-hover:text-gold transition-colors">{blog.title}</h4>
                      <p className="text-amber-100/40 text-lg leading-[2.2] pb-6 line-clamp-3 urdu-text mb-8">{blog.content}</p>
                      <button 
                        onClick={() => setSelectedStory(blog)}
                        className="text-amber-400 text-xs font-bold tracking-[0.2em] hover:text-gold transition-all"
                      >
                        READ FULL STORY →
                      </button>
                      <div className="w-12 h-px bg-amber-500/20 group-hover:w-24 transition-all mt-4"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-emerald-950">
      <AyatSlider />
      <Header onPageChange={handleNav} currentPage={currentPage} />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer onPageChange={handleNav} />

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