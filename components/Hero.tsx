import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 lg:py-32 overflow-hidden">
      {/* Premium Back Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="reveal">
            <span className="text-amber-500 font-medium tracking-[0.5em] mb-6 block uppercase text-xs md:text-sm font-title">
              Bismillah-ir-Rahman-ir-Rahim
            </span>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-6xl lg:text-9xl font-urdu leading-tight mb-8 text-gold golden-glow urdu-text animate-float">
              روحانی سکون اور نورِ ہدایت
            </h2>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <p className="text-xl md:text-3xl text-amber-100/80 max-w-3xl font-title italic mb-12 leading-relaxed">
              Experience the divine radiance of wisdom. Your sanctuary for spiritual healing, 
              Islamic guidance, and sacred traditions.
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-6" style={{ transitionDelay: '600ms' }}>
            <a 
              href="#contact-section"
              className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-full transition-all duration-300 shadow-2xl shadow-amber-500/30 transform hover:-translate-y-1 hover-shine flex items-center justify-center"
            >
              Rabta Karein
            </a>
            <a 
              href="#contact-section"
              className="px-10 py-5 bg-transparent border-2 border-amber-500/50 hover:border-amber-500 text-amber-500 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md flex items-center justify-center"
            >
              Get Guidance
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#013220] to-transparent"></div>
    </section>
  );
};

export default Hero;