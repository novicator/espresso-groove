"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

type FilterType = "All" | "Coffee" | "Tea" | "Energy";

// All vw values converted from px based on 393px width
// Formula: px ÷ 393 × 100 = vw

const coffeeItems = [
  { name: "HOUSE BLEND", desc: "Rich, smooth, everyday classic", price: "$3.50" },
  { name: "ESPRESSO", desc: "Bold and concentrated", price: "$2.75" },
  { name: "CAPPUCCINO", desc: "Espresso with steamed milk foam", price: "$4.50" },
  { name: "AMERICANO", desc: "Espresso with hot water, smooth finish", price: "$3.25" },
  { name: "FLAT WHITE", desc: "Velvety microfoam over double espresso", price: "$4.75" },
];

const teaItems = [
  { name: "CHAI LATTE", desc: "Spiced chai with steamed milk", price: "$5.00" },
  { name: "GREEN TEA", desc: "Classic organic green tea", price: "$3.00" },
  { name: "EARL GREY", desc: "Bergamot-infused black tea", price: "$3.25" },
  { name: "MATCHA LATTE", desc: "Ceremonial grade matcha with oat milk", price: "$5.50" },
  { name: "JASMINE PEARL", desc: "Delicate hand-rolled jasmine green tea", price: "$3.75" },
];

const energyItems = [
  { name: "BASS DROP", desc: "Citrus blast with a caffeine kick", price: "$4.50" },
  { name: "VINYL RUSH", desc: "Berry mix with B12 & taurine", price: "$4.75" },
  { name: "GROOVE FUEL", desc: "Tropical mango with green tea extract", price: "$4.50" },
  { name: "NEON PULSE", desc: "Watermelon lime with ginseng boost", price: "$4.75" },
  { name: "STATIC SHOCK", desc: "Passion fruit with guarana & electrolytes", price: "$5.00" },
];

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  // Count visible items to determine layout
  const visibleCount =
    (activeFilter === "All" || activeFilter === "Coffee" ? coffeeItems.length : 0) +
    (activeFilter === "All" || activeFilter === "Tea" ? teaItems.length : 0) +
    (activeFilter === "All" || activeFilter === "Energy" ? energyItems.length : 0);

  const fewItems = visibleCount < 4;

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
      `}</style>

    <div className={`relative overflow-hidden ${fewItems ? 'min-h-screen' : ''}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {activeFilter === "All" ? (
          <>
            {/* Panel 1 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')" }}
            />
            {/* Panel 3 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", transform: "scaleY(1)", marginTop: '-65vw' }}
            />
            {/* Panel 4 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 5 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", transform: "scaleY(1)" }}
            />
            {/* Panel 6 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vibe_background_2.png')", transform: "scaleY(-1)" }}
            />
          </>
        ) : (
          <>
            {/* Panel 1 */}
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background_v2.png')", transform: "scaleY(-1)" }}
            />
            {/* Panel 2 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/vibe_background.png')",
                marginTop: '-50vw',
                transform: 'scaleY(1)'
              }}
            />
            {/* Panel 2 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/vibe_background.png')",
                transform: 'scaleY(-1)',

              }}
            />
            {/* Panel 3 - Footer background */}
            <div
              className="h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/vibe_background.png')",
                transform: 'scaleY(1)',

              }}
            />
            
          </>
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header - Back Button */}
        {/* pt-6=24px=6.1vw, pb-4=16px=4.1vw, px-5=20px=5.1vw */}
        <header className="flex items-center justify-between" style={{ paddingTop: '6.1vw', paddingBottom: '4.1vw', paddingLeft: '5.1vw', paddingRight: '5.1vw' }}>
          <Link
            href="/"
            className="flex items-center text-white active:scale-125 duration-150 transition-all"
            style={{ gap: '1.5vw', transform: 'translateY(2.5vw) scale(1.1)' }}
          >
            {/* w-7=28px=7.1vw, h-7=28px=7.1vw */}
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '7.1vw', height: '7.1vw' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {/* text-2xl=24px=6.1vw, ml-2=8px=2vw */}
            <span
              className="font-[family-name:var(--font-bebas-neue)]"
              style={{ fontSize: '6.1vw', letterSpacing: '0.05em', marginLeft: '2vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
            >Back</span>
          </Link>
          {/* w-16=64px=16.3vw */}
          <div style={{ width: '16.3vw' }} />
        </header>

        {/* Page Title */}
        {/* mt-2=8px=2vw, mb-6=24px=6.1vw */}
        <div className="text-center" style={{ marginTop: '2vw', marginBottom: '6.1vw' }}>
          {/* gap-3=12px=3.1vw */}
          <div className="flex items-center justify-center" style={{ gap: '3.1vw' }}>
            {/* w-18=72px=18.3vw, translateY(15px)=3.8vw, translateX(5px)=1.3vw, scale(1.2) kept */}
            <img
              src="/images/mug.svg"
              alt=""
              className="pointer-events-none"
              style={{
                width: '18.3vw',
                transform: 'translateY(3.8vw) translateX(1.3vw) scale(1.2)',
                filter: 'drop-shadow(0px 0px 10px rgba(255,150,50,0.5))',
              }}
            />
            {/* text-[44px]=11.2vw, translateX(5px)=1.3vw */}
            <h1
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase"
              style={{
                fontSize: '10.7vw',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                paddingLeft: '1.2vw',
              }}
            >
              The Menu
            </h1>
          </div>
          {/* text-[28px]=7.1vw, -mt-3=12px=3.1vw, translateY(-3px)=0.8vw, ml-20=80px=20.4vw, translateX(5px)=1.3vw */}
          <p
            className="font-[family-name:var(--font-bebas-neue)] text-white uppercase"
            style={{
              fontSize: '6.7vw',
              fontWeight: 900,
              letterSpacing: '0.2em',
              marginTop: '-3.1vw',
              paddingLeft: '5vw',
              marginLeft: '20.4vw',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Drip • Drop • Vibe
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center" style={{ gap: '1vw', paddingLeft: '2.1vw', paddingRight: '3.1vw', marginBottom: '6.1vw' }}>
          {(["All", "Coffee", "Tea", "Energy"] as FilterType[]).map((filter) => {
            const buttonStyles: Record<FilterType, { bg: string; border: string }> = {
              All: { bg: 'bg-white', border: '2px solid #b0b0b0' },
              Coffee: { bg: 'bg-[#f06830]', border: '2px solid #8a3010' },
              Tea: { bg: 'bg-[#2a7d7d]', border: '2px solid #1a4f4f' },
              Energy: { bg: 'bg-[#6b4c8c]', border: '2px solid #3d2a52' },
            };
            const s = buttonStyles[filter];
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full noisy font-[family-name:var(--font-libre-baskerville)] uppercase transition-all cursor-pointer flex items-center justify-center active:scale-125 duration-150 ${s.bg} ${filter === 'All' ? 'text-[#1a1310]' : 'text-white'}`}
                style={{
                  paddingLeft: '3.5vw',
                  paddingRight: '3.5vw',
                  paddingTop: '3.5vw',
                  paddingBottom: '3.5vw',
                  fontSize: '3vw',
                  letterSpacing: '0.0em',
                  border: s.border,
                  fontWeight: 900,
                  textShadow: filter === 'All' ? 'none' : '2px 2px 8px rgba(0,0,0,0.9)',
                }}
              >
                {filter === 'Energy' ? 'Energy Drinks' : filter}
              </button>
            );
          })}
        </div>

        {/* Featured Sips Section - only on "All" */}
        {activeFilter === "All" && (
        <div
          className="rounded-xl"
          style={{ marginInline: '4vw', padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
        >
        <div
          className="rounded-lg overflow-hidden bg-[#2d1f1a]"
        >
          {/* Title */}
          <div
            className="text-center"
            style={{ paddingBlock: '3vw' }}
          >
            <span
              className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
              style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
            >
              Featured Sips
            </span>
            <div className="mx-auto" style={{ height: '0.4vw', width: '60%', marginTop: '2vw', marginBottom: '2vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />
            <div>
              <span
                className="font-[family-name:var(--font-libre-baskerville)] text-white uppercase font-bold"
                style={{ fontSize: '5vw', letterSpacing: '0.15em' }}
              >
                Now Spinning - Jazz
              </span>
            </div>
          </div>

          {/* Category Labels */}
          <div className="flex">
            <div
              className="flex-1 bg-[#f06830] noisy text-center flex items-center justify-center"
              style={{ height: '12vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                style={{
                  fontSize: '3.6vw',
                  letterSpacing: '0.07em',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                }}
              >
                Coffee
              </span>
            </div>
            <div
              className="flex-1 bg-[#2a7d7d] noisy text-center flex items-center justify-center"
              style={{ height: '12vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                style={{
                  fontSize: '3.6vw',
                  letterSpacing: '0.07em',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                }}
              >
                Tea
              </span>
            </div>
            <div
              className="flex-1 bg-[#6b4c8c] noisy text-center flex items-center justify-center"
              style={{ height: '12vw' }}
            >
              <span
                className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                style={{
                  fontSize: '3.1vw',
                  letterSpacing: '0.07em',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,1)',
                }}
              >
                Energy Drinks
              </span>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="flex" style={{ padding: '3vw', gap: '2vw' }}>
            {/* Coffee Card */}
            <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                style={{ fontSize: '4.5vw' }}
              >
                Blue Note Brew
              </span>
              <div
                className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                style={{ width: '18vw', height: '18vw' }}
              >
                <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
              </div>
              <span
                className="font-[family-name:var(--font-bebas-neue)] text-white"
                style={{ fontSize: '6.5vw', letterSpacing: '0.07em', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
              >
                $5.75
              </span>
            </div>

            {/* Tea Card */}
            <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                style={{ fontSize: '4.5vw' }}
              >
                Coltrane Chai
              </span>
              <div
                className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                style={{ width: '18vw', height: '18vw' }}
              >
                <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
              </div>
              <span
                className="font-[family-name:var(--font-bebas-neue)] text-white"
                style={{ fontSize: '6.5vw', letterSpacing: '0.07em', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
              >
                $4.50
              </span>
            </div>

            {/* Energy Card */}
            <div className="flex-1 flex flex-col items-center" style={{ gap: '2vw' }}>
              <span
                className="text-white whitespace-nowrap font-[family-name:var(--font-bebas-neue)] tracking-wide"
                style={{ fontSize: '4.5vw' }}
              >
                Bebop Blast
              </span>
              <div
                className="bg-[#d4d4d4] rounded-lg flex items-center justify-center shrink-0"
                style={{ width: '18vw', height: '18vw' }}
              >
                <span className="text-[#555555]" style={{ fontSize: '2.5vw' }}>IMG</span>
              </div>
              <span
                className="font-[family-name:var(--font-bebas-neue)] text-white"
                style={{ fontSize: '6.5vw', letterSpacing: '0.07em', textShadow: '0 0 8px rgba(224,86,32,0.4)' }}
              >
                $4.75
              </span>
            </div>
          </div>

        </div>
        </div>
        )}

        {/* Menu Sections - All attached in one card */}
        <div style={{ paddingInline: '4vw', paddingBottom: '8vw', marginTop: '4vw' }}>
          <div
            className="rounded-xl"
            style={{ padding: '0.8vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }}
          >
          <div className="rounded-lg overflow-hidden bg-[#2d1f1a]">

            {/* Coffee Section */}
            {(activeFilter === "All" || activeFilter === "Coffee") && (
            <>
              <div className="bg-[#f06830] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  Coffee
                </p>
              </div>
              {coffeeItems.map((item, index) => (
                <div key={`coffee-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="bg-[#f06830]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '10vw', height: '10vw' }}>
                      <img src="/images/menu_cup.svg?v=3" style={{ width: '5vw', height: '5vw', opacity: 0.7, filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '4.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                        <span className="font-[family-name:var(--font-bebas-neue)] text-white whitespace-nowrap"
                          style={{ fontSize: '5.1vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.price}</span>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}



            {/* Tea Section */}
            {(activeFilter === "All" || activeFilter === "Tea") && (
            <>
              <div className="bg-[#2a7d7d] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  🍵 <span style={{ marginLeft: '2vw' }}>Tea</span>
                </p>
              </div>
              {teaItems.map((item, index) => (
                <div key={`tea-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="bg-[#2a7d7d]/20 noisy rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '10vw', height: '10vw' }}>
                      <img src="/images/menu_cup.svg?v=3" style={{ width: '5vw', height: '5vw', opacity: 0.7, filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '4.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                        <span className="font-[family-name:var(--font-bebas-neue)] text-white whitespace-nowrap"
                          style={{ fontSize: '5.1vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.price}</span>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}



            {/* Energy Drinks Section */}
            {(activeFilter === "All" || activeFilter === "Energy") && (
            <>
              <div className="bg-[#6b4c8c] noisy" style={{ padding: '2.5vw 4vw' }}>
                <p
                  className="font-[family-name:var(--font-libre-baskerville)] font-bold text-white uppercase"
                  style={{ fontSize: '4.6vw', letterSpacing: '0.07em', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                >
                  ⚡ Energy Drinks
                </p>
              </div>
              {energyItems.map((item, index) => (
                <div key={`energy-${index}`}>
                  {index > 0 && <div style={{ height: '0.3vw', background: 'linear-gradient(135deg, #ff6b2b, #33cccc, #9b59d0)' }} />}
                  <div className="flex" style={{ padding: '3vw 4vw', gap: '3vw' }}>
                    <div className="bg-[#6b4c8c]/30 noisy rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: '10vw', height: '10vw' }}>
                      <span style={{ fontSize: '4.5vw' }}>⚡</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between" style={{ gap: '2vw' }}>
                        <h3 className="font-[family-name:var(--font-bebas-neue)] text-white leading-tight tracking-wide"
                          style={{ fontSize: '4.6vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.name}</h3>
                        <span className="font-[family-name:var(--font-bebas-neue)] text-white whitespace-nowrap"
                          style={{ fontSize: '5.1vw', textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{item.price}</span>
                      </div>
                      <p className="text-white/50 font-[family-name:var(--font-inter)] leading-snug" style={{ fontSize: '3vw', marginTop: '0.5vw' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}

          </div>
          </div>
        </div>

        <Footer style={{ marginTop: '-10vw' }} />

      </div>
    </div>
    </>
  );
}
