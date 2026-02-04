
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#FFFEEC] to-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 staggered-reveal">
          <h1 className="text-2xl md:text-6xl font-extrabold leading-tight text-black">
            Don't Search.<span className="text-[#FF4000]">Explore</span> Words
          </h1>
          <h2 className="text-xl md:text-2xl text-black/80 font-medium max-w-2xl">
            Dock the translucent widget on your screen, type what you thinking and get grid of smarter options in seconds—without breaking your flow.
          </h2>
          <ul className="space-y-4">
            {['Expand vocabulary 10x faster', 'Perfect for writers & creators', 'Get definitions'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#FF4000] flex items-center justify-center text-white text-xs">✓</div>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#demo" className="cta-primary px-12 py-5 rounded-xl text-xl font-bold text-center">
              Add to my screen
            </a>
            <a 
              href="https://youtu.be/kO6D03vpw3I" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-xl text-xl font-bold border-2 border-black hover:bg-black hover:text-white transition-all text-center"
            >
              Watch How It Works
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative float-animation">
          <div className="glass p-4 rounded-3xl border-4 border-[#FF4000]/20 shadow-2xl bg-white/40">
            <div className="bg-white rounded-2xl overflow-hidden shadow-inner p-2">
              <iframe 
                className="w-full rounded-xl aspect-video"
                src="https://www.youtube.com/embed/kO6D03vpw3I" 
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                  <div key={n} className="h-2 bg-[#FF4000]/10 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF4000]/10 blur-3xl rounded-full"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF4000]/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
