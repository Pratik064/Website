
import React, { useState } from 'react';
import Hero from './components/Hero';
import WordWidget from './components/WordWidget';
import { PRICING_PLANS, FAQ_DATA } from './constants';
import siteIcon from './Views/siteIcon.png';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string; step: string }> = ({ title, desc, icon, step }) => (
  <div className="glass p-8 rounded-3xl group hover:border-[#FF4000] transition-all">
    <div className="text-[#FF4000] text-sm font-black mb-4">{step}</div>
    {/*<div className="text-4xl mb-6">{icon}</div>*/}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-black/70 font-medium leading-relaxed">{desc}</p>
  </div>
);

const PricingCard: React.FC<{ plan: any; isAnnual: boolean }> = ({ plan, isAnnual }) => (
  <div className={`glass p-8 rounded-3xl flex flex-col h-full relative ${plan.popular ? 'border-2 border-[#FF4000]' : ''}`}>
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF4000] text-white px-4 py-1 rounded-full text-sm font-bold">
        POPULAR
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black">{isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
        <span className="text-black/60 font-bold">{isAnnual ? '/yr' : '/mo'}</span>
      </div>
    </div>
    <ul className="space-y-4 mb-10 flex-1">
      {plan.features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 font-semibold text-black/80">
          <span className={f.startsWith('✗') ? 'text-black/20' : 'text-[#FF4000]'}>✓</span>
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.popular ? 'cta-primary' : 'border-2 border-black hover:bg-black hover:text-white'}`}>
      {plan.cta}
    </button>
  </div>
);

const App: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={siteIcon} alt="LexiGrid" className="w-10 h-10 rounded-xl" />
            <span className="text-2xl font-black tracking-tighter">LEXIGRID</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold">
            <a href="#features" className="hover:text-[#FF4000]">Features</a>
            <a href="#pricing" className="hover:text-[#FF4000]">Pricing</a>
            <a href="#faq" className="hover:text-[#FF4000]">FAQ</a>
            <a href="#demo" className="cta-primary px-6 py-2.5 rounded-lg">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black">Floating Word Guide - Just a Chat Away</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Grid', 'Instant AI', 'Writers First', 'Pure Inspiration'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-[#FF4000]/10 text-[#FF4000] font-bold text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <WordWidget />
        </div>
      </section>

      {/* How it Works Section */}
      <section id="features" className="py-24 px-6 bg-[#FFFEEC]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">Write Better in 3 Seconds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              step="STEP 1"
              icon="🔍"
              title="Type What You Think"
              desc="Enter verbs, adjectives, concepts—our AI finds perfect semantic matches instantly."
            />
            <FeatureCard 
              step="STEP 2"
              icon="📊"
              title="Get Word Grid Instantly"
              desc="Beautiful 3×4 grid appears. Every word chosen for maximum creative impact."
            />
            <FeatureCard 
              step="STEP 3"
              icon="✍️"
              title="Find Your Perfect Match"
              desc="Click any word to copy. Effortlessly bridge the gap between thought and expression."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Choose Your Word Power Level</h2>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`font-bold ${!isAnnual ? 'text-black' : 'text-black/40'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-black rounded-full relative p-1 transition-all"
            >
              <div className={`w-6 h-6 bg-[#FF4000] rounded-full transition-all ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <span className={`font-bold ${isAnnual ? 'text-black' : 'text-black/40'}`}>Annual (Save 40%)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={i} plan={plan} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-[#FFFEEC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">Everything You Need to Know</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border-none">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-[#FF4000]/5 transition-all"
                >
                  <span className="text-xl font-bold">{item.question}</span>
                  <span className="text-2xl font-black text-[#FF4000]">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`px-8 transition-all duration-300 ease-in-out ${openFaq === i ? 'pb-8 opacity-100 max-h-96' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg font-medium text-black/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={siteIcon} alt="LexiGrid" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-black tracking-tighter">LEXIGRID</span>
            </div>
            <p className="text-white/60 font-medium">The world's most focused semantic engine for professional writers and creative spirits.</p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-6">PRODUCT</h4>
            <ul className="space-y-4 font-bold text-white/60">
              <li><a href="#demo" className="hover:text-[#FF4000]">Web Widget</a></li>
              <li><a href="#" className="hover:text-[#FF4000]">Chrome Extension</a></li>
              <li><a href="#" className="hover:text-[#FF4000]">iOS App</a></li>
              <li><a href="#" className="hover:text-[#FF4000]">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-6">RESOURCES</h4>
            <ul className="space-y-4 font-bold text-white/60">
              <li><a href="#" className="hover:text-[#FF4000]">Vocabulary Blog</a></li>
              <li><a href="#" className="hover:text-[#FF4000]">Writer's Hub</a></li>
              <li><a href="#" className="hover:text-[#FF4000]">Community</a></li>
              <li><a href="#" className="hover:text-[#FF4000]">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-6">STAY UPDATED</h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/10 px-4 py-2 rounded-lg outline-none focus:ring-2 ring-[#FF4000] w-full" />
              <button className="bg-[#FF4000] px-4 py-2 rounded-lg font-bold">Go</button>
            </form>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-bold">
          <p>© 2024 LexiGrid. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
