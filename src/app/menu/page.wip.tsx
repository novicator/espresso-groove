"use client";

import { useState, Suspense } from "react";
import Link from "next/link";

const coffeeItems = [
  { name: "HOUSE BLEND", desc: "Rich, smooth, everyday classic", price: "$3.50" },
  { name: "ESPRESSO", desc: "Bold and concentrated", price: "$2.75" },
  { name: "CAPPUCCINO", desc: "Espresso with steamed milk foam", price: "$4.50" },
  { name: "VINYL LATTE", desc: "Our signature — hints of vanilla & caramel", price: "$5.75" },
  { name: "COLD BREW", desc: "Slow-steeped for 24 hours", price: "$4.25" },
  { name: "MOCHA GROOVE", desc: "Espresso meets rich chocolate", price: "$5.50" },
  { name: "AMERICANO", desc: "Espresso with hot water", price: "$3.25" },
];

const teaItems = [
  { name: "CHAI LATTE", desc: "Spiced chai with steamed milk", price: "$5.00" },
  { name: "GREEN TEA", desc: "Classic organic green tea", price: "$3.00" },
  { name: "EARL GREY", desc: "Bergamot-infused black tea", price: "$3.25" },
  { name: "HERBAL BLEND", desc: "Caffeine-free chamomile & lavender", price: "$3.50" },
];

const energyItems = [
  { name: "BASS DROP", desc: "Citrus blast with a caffeine kick", price: "$4.50" },
  { name: "VINYL RUSH", desc: "Berry mix with B12 & taurine", price: "$4.75" },
  { name: "GROOVE FUEL", desc: "Tropical mango with green tea extract", price: "$4.50" },
  { name: "STATIC SHOCK", desc: "Electric lemonade with ginseng", price: "$5.00" },
];

type FilterType = "All" | "Coffee" | "Tea" | "Energy";

function MenuContent() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  return (
    <>
      <style jsx global>{`
        .noisy {
          position: relative;
        }
        .noisy::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.8;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        .menu-card {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>

      <div
        className="min-h-screen bg-repeat-y xl:bg-no-repeat xl:bg-cover xl:bg-center xl:bg-fixed relative"
        style={{ backgroundImage: `url('/images/background.png')` }}
      >
        {/* Dark overlay for desktop readability */}
        <div className="absolute inset-0 pointer-events-none xl:bg-[#1a1310]/40" />

        <div className="relative z-10">
          {/* Header */}
          <header className="pt-6 pb-4 px-5 xl:px-16 xl:pt-8 xl:pb-4 flex items-center justify-between relative z-20">
            <Link
              href="/"
              className="flex items-center gap-2 translate-y-[10px] scale-[1.1] xl:scale-100 text-[#e8c88c] xl:hover:text-[#e05620] xl:transition-colors"
            >
              <svg className="w-7 h-7 xl:w-12 xl:h-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span
                className="font-[family-name:var(--font-bebas-neue)] text-2xl xl:text-5xl tracking-wide scale-[1.2] xl:scale-100 ml-2"
                style={{ textShadow: '0 0 8px rgba(0,0,0,1)' }}
              >Back</span>
            </Link>

            <div className="w-16" /> {/* Spacer */}
          </header>

          {/* Page Title */}
          <div className="text-center mt-2 mb-6 xl:mt-[-20px] xl:mb-[20px] xl:ml-[-60px] xl:translate-y-[-30px]">
            <div className="flex items-center justify-center gap-3 xl:gap-5">
              <img src="/images/mug.png" alt="" className="translate-y-[15px] translate-x-[5px] w-18 scale-[1.2] md:w-20 xl:w-28 xl:scale-[1.38] xl:translate-y-[10px] xl:mr-5 pointer-events-none" style={{ filter: 'drop-shadow(0px 0px 10px rgba(255,150,50,0.5))' }} />
              <h1
                className="text-[44px] md:text-6xl xl:text-8xl font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-tight translate-x-[5px] xl:translate-x-0"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
              >
                The Menu
              </h1>
            </div>
            <p
              className="-mt-3 translate-y-[-3px] text-[28px] md:text-4xl xl:text-5xl font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] tracking-[0.2em] uppercase ml-20 xl:ml-34 translate-x-[5px] xl:translate-x-0"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
            >
              Drip • Drop • Vibe
            </p>
          </div>

          {/* Filter Buttons (mobile only) */}
          <div className="flex gap-2 px-5 mb-6 justify-center xl:hidden">
            {(["All", "Coffee", "Tea", "Energy"] as FilterType[]).map((filter) => {
              const colors: Record<FilterType, string> = {
                All: 'bg-[#e8c88c] text-[#1a1310] noisy',
                Coffee: 'bg-[#e05620] text-[#e8c88c] noisy',
                Tea: 'bg-[#2a7d7d] text-[#e8c88c] noisy',
                Energy: 'bg-[#6b4c8c] text-[#e8c88c] noisy',
              };
              const inactiveColors: Record<FilterType, string> = {
                All: 'bg-[#e8c88c]/40 text-[#e8c88c] border-2 border-[#e8c88c]/60',
                Coffee: 'bg-[#e05620]/50 text-[#e8c88c] border-2 border-[#e05620]/70',
                Tea: 'bg-[#2a7d7d]/50 text-[#e8c88c] border-2 border-[#2a7d7d]/70',
                Energy: 'bg-[#6b4c8c]/50 text-[#e8c88c] border-2 border-[#6b4c8c]/70',
              };
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex-shrink-0 px-5 py-2 xl:px-8 xl:py-3 rounded-full text-base xl:text-xl font-[family-name:var(--font-bebas-neue)] tracking-[0.07em] xl:tracking-[0.1em] transition-all xl:hover:scale-105 xl:cursor-pointer ${
                    activeFilter === filter
                      ? colors[filter] + ' font-bold'
                      : inactiveColors[filter]
                  }`}
                >
                  {filter === 'Energy' ? 'Energy Drinks' : filter}
                </button>
              );
            })}
          </div>

          {/* === MOBILE: Featured + Sections (unchanged) === */}
          <div className="xl:hidden">
            {/* Featured Item */}
            <div className="px-5 mb-4 md:max-w-3xl md:mx-auto">
              <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/20 rounded-xl overflow-hidden">
                <div className="bg-[#2a7d7d] noisy px-3 py-2">
                  <p className="text-[16px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] tracking-[0.07em] uppercase text-center"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    ★ Featured Drink ★
                  </p>
                </div>
                <div className="p-4 flex gap-3">
                  <div className="w-12 h-12 bg-[#e05620]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/images/menu_cup.svg" className="w-6 h-6 opacity-70" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] tracking-wide"
                        style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>
                        VINYL LATTE
                      </h3>
                      <span className="text-[22px] font-[family-name:var(--font-bebas-neue)] text-[#e05620]"
                        style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>
                        $5.75
                      </span>
                    </div>
                    <p className="text-[12px] text-[#e8c88c]/60 font-[family-name:var(--font-libre-baskerville)] italic leading-snug">
                      Our signature - hints of vanilla & caramel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Sections */}
            <div className="px-5 pb-12 md:max-w-3xl md:mx-auto space-y-4">
              {/* Coffee Section */}
              {(activeFilter === "All" || activeFilter === "Coffee") && (
                <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/10 rounded-2xl overflow-hidden">
                  <div className="bg-[#e05620] noisy px-4 py-2">
                    <p className="text-[18px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em]"
                      style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                      <img src="/images/menu_cup.svg" className="w-6 h-6 inline-block mr-2 ml-2 -mt-1" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} /> Coffee
                    </p>
                  </div>
                  {coffeeItems.map((item, index) => (
                    <div key={index} className={`px-4 py-3 flex gap-5 ${index < coffeeItems.length - 1 ? 'border-b border-[#e8c88c]/5' : ''}`}>
                      <div className="w-10 h-10 bg-[#e05620]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src="/images/menu_cup.svg" className="w-5 h-5 opacity-70" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] leading-tight tracking-wide"
                            style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>{item.name}</h3>
                          <span className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#e05620] whitespace-nowrap"
                            style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>{item.price}</span>
                        </div>
                        <p className="text-[12px] text-[#e8c88c]/50 font-[family-name:var(--font-inter)] leading-snug mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tea Section */}
              {(activeFilter === "All" || activeFilter === "Tea") && (
                <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/10 rounded-2xl overflow-hidden">
                  <div className="bg-[#2a7d7d] noisy px-4 py-2">
                    <p className="text-[18px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em]"
                      style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                      🍵 <span className="ml-2">Tea</span>
                    </p>
                  </div>
                  {teaItems.map((item, index) => (
                    <div key={index} className={`px-4 py-3 flex gap-5 ${index < teaItems.length - 1 ? 'border-b border-[#e8c88c]/5' : ''}`}>
                      <div className="w-10 h-10 bg-[#2a7d7d]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src="/images/menu_cup.svg" className="w-5 h-5 opacity-70" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] leading-tight tracking-wide"
                            style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>{item.name}</h3>
                          <span className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#2a7d7d] whitespace-nowrap"
                            style={{ textShadow: '0 0 8px rgba(42,125,125,0.4)' }}>{item.price}</span>
                        </div>
                        <p className="text-[12px] text-[#e8c88c]/50 font-[family-name:var(--font-inter)] leading-snug mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Energy Drinks Section */}
              {(activeFilter === "All" || activeFilter === "Energy") && (
                <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/10 rounded-2xl overflow-hidden">
                  <div className="bg-[#6b4c8c] noisy px-4 py-2">
                    <p className="text-[18px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em]"
                      style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                      ⚡ Energy Drinks
                    </p>
                  </div>
                  {energyItems.map((item, index) => (
                    <div key={index} className={`px-4 py-3 flex gap-5 ${index < energyItems.length - 1 ? 'border-b border-[#e8c88c]/5' : ''}`}>
                      <div className="w-10 h-10 bg-[#6b4c8c]/30 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">⚡</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-[18px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] leading-tight tracking-wide"
                            style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>{item.name}</h3>
                          <span className="text-[20px] font-[family-name:var(--font-bebas-neue)] text-[#6b4c8c] whitespace-nowrap"
                            style={{ textShadow: '0 0 8px rgba(107,76,140,0.4)' }}>{item.price}</span>
                        </div>
                        <p className="text-[12px] text-[#e8c88c]/50 font-[family-name:var(--font-inter)] leading-snug mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* === DESKTOP: Two-column layout === */}
          <div className="hidden xl:flex xl:mt-[30px] xl:gap-8 xl:px-16 xl:pb-20 xl:max-w-[1400px] xl:mx-auto">
            {/* LEFT: Featured Drink box */}
            <div className="w-[420px] flex-shrink-0 mt-[40px]">
              <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/20 rounded-2xl overflow-hidden min-h-[500px]">
                {/* Placeholder — style this however you want */}
                <div className="bg-[#2a7d7d] noisy px-5 py-3">
                  <p className="text-[22px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] tracking-[0.07em] uppercase text-center"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    ★ Featured Drink ★
                  </p>
                </div>
                <div className="p-6 flex flex-col items-center justify-center flex-1">
                  {/* Product image will go here */}
                  <div className="w-full h-[300px] bg-[#e8c88c]/10 rounded-xl flex items-center justify-center border border-dashed border-[#e8c88c]/30">
                    <p className="text-[#e8c88c]/40 font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide">Product Image Here</p>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <h3 className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] tracking-[0.08em]"
                      style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>
                      VINYL LATTE
                    </h3>
                    <span className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c]/40">—</span>
                    <span className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e05620]"
                      style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>
                      $5.75
                    </span>
                  </div>
                  <p className="text-[25px] text-[#e8c88c]/60 font-[family-name:var(--font-libre-baskerville)] italic text-center mt-1">
                    Our signature — hints of vanilla & caramel
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Menu sections stacked */}
            <div className="flex-1 space-y-6 mt-[40px] relative">
              {/* Desktop Filter Buttons — positioned in the gap above */}
              <div className="absolute -top-[75px] right-[-10] flex gap-3">
                {(["All", "Coffee", "Tea", "Energy"] as FilterType[]).map((filter) => {
                  const colors: Record<FilterType, string> = {
                    All: 'bg-[#e8c88c] text-[#1a1310] noisy',
                    Coffee: 'bg-[#e05620] text-[#e8c88c] noisy',
                    Tea: 'bg-[#2a7d7d] text-[#e8c88c] noisy',
                    Energy: 'bg-[#6b4c8c] text-[#e8c88c] noisy',
                  };
                  const inactiveColors: Record<FilterType, string> = {
                    All: 'bg-[#e8c88c]/40 text-[#e8c88c] border-2 border-[#e8c88c]/60',
                    Coffee: 'bg-[#e05620]/50 text-[#e8c88c] border-2 border-[#e05620]/70',
                    Tea: 'bg-[#2a7d7d]/50 text-[#e8c88c] border-2 border-[#2a7d7d]/70',
                    Energy: 'bg-[#6b4c8c]/50 text-[#e8c88c] border-2 border-[#6b4c8c]/70',
                  };
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-7 py-2.5 rounded-full text-[24px] font-[family-name:var(--font-bebas-neue)] tracking-[0.07em] transition-all hover:scale-105 cursor-pointer ${
                        activeFilter === filter
                          ? colors[filter] + ' font-bold'
                          : inactiveColors[filter]
                      }`}
                    >
                      {filter === 'Energy' ? 'Energy Drinks' : filter}
                    </button>
                  );
                })}
              </div>
              {/* Coffee Section */}
              {(activeFilter === "All" || activeFilter === "Coffee") && (
              <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/10 rounded-2xl overflow-hidden">
                <div className="bg-[#e05620] noisy px-6 py-3">
                  <p className="text-[24px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em]"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    <img src="/images/menu_cup.svg" className="w-7 h-7 inline-block mr-3 ml-2 -mt-1" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} /> Coffee
                  </p>
                </div>
                {coffeeItems.map((item, index) => (
                  <div key={index} className={`px-6 py-4 flex gap-5 hover:bg-[#e8c88c]/5 transition-colors ${index < coffeeItems.length - 1 ? 'border-b border-[#e8c88c]/5' : ''}`}>
                    <div className="w-16 h-16 mt-2 bg-[#e05620]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/images/menu_cup.svg" className="w-9 h-9 opacity-70" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] leading-tight tracking-wide"
                          style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>{item.name}</h3>
                        <span className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e05620] whitespace-nowrap"
                          style={{ textShadow: '0 0 8px rgba(224,86,32,0.4)' }}>{item.price}</span>
                      </div>
                      <p className="text-[25px] text-[#e8c88c]/50 font-[family-name:var(--font-inter)] leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              )}

              {/* Tea Section */}
              {(activeFilter === "All" || activeFilter === "Tea") && (
              <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/10 rounded-2xl overflow-hidden">
                <div className="bg-[#2a7d7d] noisy px-6 py-3">
                  <p className="text-[24px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em]"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    🍵 <span className="ml-2">Tea</span>
                  </p>
                </div>
                {teaItems.map((item, index) => (
                  <div key={index} className={`px-6 py-4 flex gap-5 hover:bg-[#e8c88c]/5 transition-colors ${index < teaItems.length - 1 ? 'border-b border-[#e8c88c]/5' : ''}`}>
                    <div className="w-16 h-16 mt-2 bg-[#2a7d7d]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/images/menu_cup.svg" className="w-9 h-9 opacity-70" style={{filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))'}} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] leading-tight tracking-wide"
                          style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>{item.name}</h3>
                        <span className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#2a7d7d] whitespace-nowrap"
                          style={{ textShadow: '0 0 8px rgba(42,125,125,0.4)' }}>{item.price}</span>
                      </div>
                      <p className="text-[25px] text-[#e8c88c]/50 font-[family-name:var(--font-inter)] leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              )}

              {/* Energy Drinks Section */}
              {(activeFilter === "All" || activeFilter === "Energy") && (
              <div className="menu-card bg-[#1a1310]/70 border border-[#e8c88c]/10 rounded-2xl overflow-hidden">
                <div className="bg-[#6b4c8c] noisy px-6 py-3">
                  <p className="text-[24px] font-[family-name:var(--font-libre-baskerville)] font-bold text-[#e8c88c] uppercase tracking-[0.07em]"
                    style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)' }}>
                    ⚡ Energy Drinks
                  </p>
                </div>
                {energyItems.map((item, index) => (
                  <div key={index} className={`px-6 py-4 flex gap-5 hover:bg-[#e8c88c]/5 transition-colors ${index < energyItems.length - 1 ? 'border-b border-[#e8c88c]/5' : ''}`}>
                    <div className="w-16 h-16 mt-2 bg-[#6b4c8c]/30 noisy rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#e8c88c] leading-tight tracking-wide"
                          style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>{item.name}</h3>
                        <span className="text-[40px] font-[family-name:var(--font-bebas-neue)] text-[#6b4c8c] whitespace-nowrap"
                          style={{ textShadow: '0 0 8px rgba(107,76,140,0.4)' }}>{item.price}</span>
                      </div>
                      <p className="text-[25px] text-[#e8c88c]/50 font-[family-name:var(--font-inter)] leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1a1310] flex items-center justify-center">
        <p className="text-[#e8c88c]/50 font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}
