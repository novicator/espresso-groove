"use client";

import { useState } from "react";

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Menu */}
      <div className={`absolute right-0 top-0 bottom-0 w-72 bg-[#faf8f5] shadow-xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button onClick={onClose} className="text-[#5c3d2e] mb-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="space-y-5">
            <a href="#about" onClick={onClose} className="block text-lg font-medium text-[#2c1810] hover:text-[#d4723c] transition">About</a>
            <a href="#menu" onClick={onClose} className="block text-lg font-medium text-[#2c1810] hover:text-[#d4723c] transition">Menu</a>
            <a href="#vinyl" onClick={onClose} className="block text-lg font-medium text-[#2c1810] hover:text-[#d4723c] transition">Vinyl</a>
            <a href="#location" onClick={onClose} className="block text-lg font-medium text-[#2c1810] hover:text-[#d4723c] transition">Location</a>
            <a href="#contact" onClick={onClose} className="block text-lg font-medium text-[#2c1810] hover:text-[#d4723c] transition">Contact</a>
          </nav>
          <div className="mt-8 pt-8 border-t border-[#e8e2dc]">
            <a href="#menu" onClick={onClose} className="block w-full bg-[#d4723c] text-white text-center px-6 py-3 rounded-xl font-semibold">
              View Menu
            </a>
          </div>
          <div className="mt-8 space-y-3 text-sm text-[#6b5344]">
            <p className="font-medium text-[#2c1810]">Coming Soon</p>
            <p>3540 Belle Terre Blvd. • Unit C</p>
            <p>Myrtle Beach, SC 29579</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoursOpen, setHoursOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] overflow-hidden font-[family-name:var(--font-inter)]">
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#e8e2dc] z-40">
        <div className="px-5 py-4 flex justify-between items-center">
          {/* Left Side - Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#2c1810]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/images/logo.png" alt="Espresso Groove" className="h-10 w-auto" />
            </a>
          </div>
          
          {/* Desktop Nav - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[#5c3d2e] hover:text-[#d4723c] font-medium transition">About</a>
            <a href="#menu" className="text-[#5c3d2e] hover:text-[#d4723c] font-medium transition">Menu</a>
            <a href="#vinyl" className="text-[#5c3d2e] hover:text-[#d4723c] font-medium transition">Vinyl</a>
            <a href="#location" className="text-[#5c3d2e] hover:text-[#d4723c] font-medium transition">Location</a>
          </div>
          
          {/* Right Side - View Menu */}
          <a href="#menu" className="hidden min-[360px]:block bg-[#d4723c] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#c4632c] transition shadow-sm">
            View Menu
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-8 relative min-h-[720px]">
        
        {/* Hero Headline */}
        <h1 className="mt-6 text-[36px] font-[family-name:var(--font-playfair)] font-semibold text-[#2c1810] leading-[1.1] tracking-tight">
          Where Coffee<br />
          Meets Culture
        </h1>
        
        {/* CTA Button */}
        <div className="mt-5 max-w-[160px]">
          <a href="#menu" className="inline-flex items-center justify-center gap-2 bg-[#d4723c] text-white px-3 py-2.5 rounded-lg font-semibold text-xs shadow-lg shadow-[#d4723c]/20 hover:bg-[#c4632c] transition-all">
            View Menu
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          {/* Social Proof */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-[#faf8f5] object-cover" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-[#faf8f5] object-cover" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-[#faf8f5] object-cover" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-amber-500 text-sm">★★★★★</span>
              <span className="text-[#6b5344] text-xs">5.0</span>
            </div>
          </div>
        </div>
        
        {/* Address & Hours */}
        <div className="absolute top-[410px] left-[180px] space-y-4">
          {/* Address */}
          <a 
            href="https://maps.google.com/?q=3540+Belle+Terre+Blvd+Unit+C+Myrtle+Beach+SC+29579" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:opacity-80 transition"
          >
            <svg className="w-4 h-4 text-[#d4723c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="text-[#2c1810] font-medium text-sm">3540 Belle Terre Blvd. • Unit C</p>
              <p className="text-[#6b5344] text-sm">Myrtle Beach, SC 29579</p>
            </div>
          </a>
          
          {/* Hours */}
          <div className="flex items-start gap-2 relative">
            <svg className="w-4 h-4 text-[#d4723c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-[#2c1810] text-sm">
                <span className="text-emerald-500 font-semibold">Open</span> · <span className="text-[#d4723c] font-semibold">Coming Soon</span>
              </p>
              <button 
                onClick={() => setHoursOpen(!hoursOpen)}
                className="text-[#2d9a9a] text-sm hover:text-[#258080] transition flex items-center gap-1 mt-1"
              >
                {hoursOpen ? "− Hide Hours" : "+ View All Hours"}
              </button>
              {/* Hours Dropdown */}
              {hoursOpen && (
                <div className="absolute left-0 top-full mt-2 bg-[#f5f0eb] rounded-lg px-4 py-3 text-sm w-48 z-20">
                  <div className="space-y-1.5 text-[#6b5344]">
                    <div className="flex justify-between"><span>Mon</span><span className="text-[#2c1810] font-medium">7am – 7pm</span></div>
                    <div className="flex justify-between"><span>Tue</span><span className="text-[#2c1810] font-medium">7am – 7pm</span></div>
                    <div className="flex justify-between"><span>Wed</span><span className="text-[#2c1810] font-medium">7am – 7pm</span></div>
                    <div className="flex justify-between"><span>Thu</span><span className="text-[#2c1810] font-medium">7am – 7pm</span></div>
                    <div className="flex justify-between"><span>Fri</span><span className="text-[#2c1810] font-medium">7am – 7pm</span></div>
                    <div className="flex justify-between"><span>Sat</span><span className="text-[#2c1810] font-medium">8am – 5pm</span></div>
                    <div className="flex justify-between"><span>Sun</span><span className="text-[#2c1810] font-medium">8am – 5pm</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Image: Cup + Vinyl Steam - LOCKED */}
        <div className="absolute left-2 top-[330px]">
          <img 
            src="/images/hero.png" 
            alt="Coffee cup with vinyl steam" 
            className="w-36 mt-8 -ml-0"
          />
          
          {/* Music Notes Animation */}
          <div className="absolute top-[70px] left-[110px] pointer-events-none overflow-visible text-[#5c3d2e]">
            <span className="absolute float-note" style={{animationDelay: '0s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '0.4s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '0.8s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '1.2s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '1.6s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '2s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '2.4s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '2.8s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '3.2s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '3.6s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '4s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '4.4s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '4.8s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '5.2s'}}>♫</span>
            <span className="absolute float-note" style={{animationDelay: '5.6s'}}>♪</span>
            <span className="absolute float-note" style={{animationDelay: '6s'}}>♫</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-4 py-5 bg-gradient-to-r from-[#2c1810] via-[#3d2a20] to-[#2c1810] -mt-40">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="py-2">
            <p className="text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#d4723c]">50+</p>
            <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">Vinyl</p>
          </div>
          <div className="border-x border-[#4d3a30] py-2">
            <p className="text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#d4723c]">12</p>
            <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">Blends</p>
          </div>
          <div className="py-2">
            <p className="text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#d4723c]">∞</p>
            <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">Vibes</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-[#faf8f5] scroll-mt-20">
        <span className="text-[#d4723c] text-xs font-bold tracking-[0.2em] uppercase">Our Story</span>
        <h2 className="mt-3 text-3xl font-[family-name:var(--font-playfair)] font-semibold text-[#2c1810] leading-tight">
          More Than Just<br />a Coffee Shop
        </h2>
        <div className="mt-6 space-y-4 text-[#6b5344] leading-relaxed">
          <p>
            Espresso Groove was born from a simple idea: create a space where the ritual of coffee meets the soul of music.
          </p>
          <p>
            We believe that great espresso and great vinyl share something in common — they're both meant to be savored, not rushed.
          </p>
          <p>
            Our space is designed for those who want to slow down. Pull up a chair, flip through the crates, and let the aroma of fresh espresso fill the air while your favorite record spins.
          </p>
        </div>
        
        {/* Values */}
        <div className="mt-10 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#d4723c] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">☕</span>
            </div>
            <div>
              <h3 className="text-[#2c1810] font-semibold">Locally Roasted</h3>
              <p className="text-[#6b5344] text-sm mt-1">Single-origin beans from local roasters who share our passion for quality.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#2d9a9a] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🎵</span>
            </div>
            <div>
              <h3 className="text-[#2c1810] font-semibold">Hand-Picked Vinyl</h3>
              <p className="text-[#6b5344] text-sm mt-1">Every record in our collection is curated with intention — no filler, just soul.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🤝</span>
            </div>
            <div>
              <h3 className="text-[#2c1810] font-semibold">Community First</h3>
              <p className="text-[#6b5344] text-sm mt-1">A gathering place for artists, musicians, and anyone who loves good conversation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="vinyl" className="px-6 py-16 bg-[#2c1810] scroll-mt-20">
        <span className="text-[#d4723c] text-xs font-bold tracking-[0.2em] uppercase">The Experience</span>
        <h2 className="mt-3 text-3xl font-[family-name:var(--font-playfair)] font-semibold text-white leading-tight">
          Bold Coffee.<br />Curated Vinyl.<br />Underground Culture.
        </h2>
        
        <div className="mt-10 space-y-6">
          {/* Feature Card 1 */}
          <div className="bg-[#3d2a20] rounded-2xl p-6 border border-[#4d3a30]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4723c] to-[#c4632c] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold text-white">The Coffee</h3>
            </div>
            <p className="text-[#a89080] leading-relaxed">
              From classic espresso shots to signature lattes with house-made syrups. Every drink is crafted with precision and passion.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#d4723c]">✓</span> Single-origin beans
              </li>
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#d4723c]">✓</span> Locally roasted fresh
              </li>
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#d4723c]">✓</span> Oat, almond & coconut milk
              </li>
            </ul>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-[#3d2a20] rounded-2xl p-6 border border-[#4d3a30]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2d9a9a] to-[#258080] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-white">The Vinyl</h3>
            </div>
            <p className="text-[#a89080] leading-relaxed">
              Browse our hand-picked collection spanning jazz, soul, indie, hip-hop, and underground gems. Listen before you buy.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#2d9a9a]">✓</span> 50+ curated records
              </li>
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#2d9a9a]">✓</span> Listening stations
              </li>
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#2d9a9a]">✓</span> New arrivals weekly
              </li>
            </ul>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-[#3d2a20] rounded-2xl p-6 border border-[#4d3a30]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227] to-[#b8911d] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white">The Culture</h3>
            </div>
            <p className="text-[#a89080] leading-relaxed">
              More than a cafe — we're a community hub. Live acoustic sets, local art on the walls, and events that bring people together.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#c9a227]">✓</span> Live music nights
              </li>
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#c9a227]">✓</span> Local artist features
              </li>
              <li className="flex items-center gap-2 text-[#c9a880] text-sm">
                <span className="text-[#c9a227]">✓</span> Community events
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-6 py-16 bg-[#faf8f5] scroll-mt-20">
        <span className="text-[#d4723c] text-xs font-bold tracking-[0.2em] uppercase">The Menu</span>
        <h2 className="mt-3 text-3xl font-[family-name:var(--font-playfair)] font-semibold text-[#2c1810] leading-tight">
          Crafted With Care
        </h2>
        <p className="mt-3 text-[#6b5344]">
          Every drink tells a story. Here's a taste of what's coming.
        </p>
        
        {/* Espresso Bar */}
        <div className="mt-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e2dc]">
          <div className="bg-[#2c1810] px-5 py-3">
            <h3 className="text-white font-semibold">Espresso Bar</h3>
          </div>
          <div className="p-5 space-y-5">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">The Classic Espresso</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">Double shot, bold & smooth</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$3.50</span>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Groove Cortado</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">Equal parts espresso & steamed milk</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$4.50</span>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Vinyl Latte</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">Oat milk, vanilla bean, espresso</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$5.50</span>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Cold Brew on Tap</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">16hr slow steep, served over ice</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$4.50</span>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Underground Mocha</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">Dark chocolate, espresso, steamed milk</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$5.50</span>
            </div>
          </div>
        </div>
        
        {/* Fresh Pastries */}
        <div className="mt-5 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e2dc]">
          <div className="bg-[#2c1810] px-5 py-3">
            <h3 className="text-white font-semibold">Fresh Pastries</h3>
          </div>
          <div className="p-5 space-y-5">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Butter Croissant</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">Baked fresh daily</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$4.00</span>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Blueberry Muffin</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">House recipe, streusel top</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$3.50</span>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[#2c1810] font-medium">Chocolate Chip Cookie</p>
                <p className="text-[#8a7a6c] text-sm mt-0.5">Warm & gooey, made in-house</p>
              </div>
              <span className="text-[#d4723c] font-bold text-lg">$2.50</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 bg-[#d4723c] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#d4723c]/20 hover:bg-[#c4632c] transition-all">
            View Full Menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16 bg-[#2d9a9a]">
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-white text-2xl font-[family-name:var(--font-playfair)] italic leading-relaxed">
            "Finally, a place in Myrtle Beach that gets it. Can't wait for opening day."
          </p>
          <p className="mt-6 text-white/70 font-medium">— Local Music Lover</p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="px-6 py-16 bg-[#faf8f5] scroll-mt-20">
        <span className="text-[#d4723c] text-xs font-bold tracking-[0.2em] uppercase">Find Us</span>
        <h2 className="mt-3 text-3xl font-[family-name:var(--font-playfair)] font-semibold text-[#2c1810] leading-tight">
          Visit Espresso Groove
        </h2>
        
        <div className="mt-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e2dc]">
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-[#e8e2dc] to-[#d4cec6] h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#d4723c] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[#6b5344] font-medium">Map Coming Soon</p>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-[#2c1810] font-semibold text-xl">3540 Belle Terre Blvd. • Unit C</p>
            <p className="text-[#2c1810] font-semibold text-xl">Myrtle Beach, SC 29579</p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-[#6b5344]">
                <svg className="w-5 h-5 text-[#d4723c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Sun: 7am - 7pm (Coming Soon)</span>
              </div>
              <div className="flex items-center gap-3 text-[#6b5344]">
                <svg className="w-5 h-5 text-[#d4723c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@espressogroove.com</span>
              </div>
            </div>
            
            <a 
              href="https://www.espressogroove.com" 
              className="mt-5 inline-flex items-center gap-2 text-[#2d9a9a] font-semibold hover:underline"
            >
              www.espressogroove.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-16 bg-[#2c1810] scroll-mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-white leading-tight">
            Ready to Groove?
          </h2>
          <p className="mt-4 text-[#a89080] max-w-[280px] mx-auto">
            Follow us for updates on our grand opening and exclusive first-look invites.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#" className="w-12 h-12 bg-[#3d2a20] rounded-full flex items-center justify-center text-white hover:bg-[#d4723c] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#3d2a20] rounded-full flex items-center justify-center text-white hover:bg-[#d4723c] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#3d2a20] rounded-full flex items-center justify-center text-white hover:bg-[#d4723c] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#1a110d]">
        <div className="text-center">
          <img 
            src="/images/logo.png" 
            alt="Espresso Groove" 
            className="w-28 mx-auto mb-5 opacity-70"
          />
          <p className="text-[#6b5344] text-sm mb-2">
            Bold Coffee • Curated Vinyl • Underground Culture
          </p>
          <p className="text-[#4d3a30] text-xs">
            © 2026 Espresso Groove. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes floatNote {
          0% { 
            transform: translateX(0) translateY(0) scale(1.2); 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            transform: translateX(calc(100vw - 80px)) translateY(-280px) scale(2); 
            opacity: 0; 
          }
        }
        @keyframes wobble {
          0%, 100% { margin-top: 0; }
          50% { margin-top: 20px; }
        }
        .float-note {
          animation: floatNote 4.8s linear infinite, wobble 1.2s ease-in-out infinite;
          font-size: 22px;
        }
        .float-note:nth-child(odd) {
          animation: floatNote 4.8s linear infinite, wobble 1.2s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
}
